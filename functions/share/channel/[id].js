export async function onRequest(context) {
  const { request, params } = context;
  const incoming = String(params?.id || "").trim();

  const url = new URL(request.url);
  const origin = `${url.protocol}//${url.host}`;

  const nip19 = tryDecodeNip19(incoming);
  let pubkeyHex = incoming;
  if (nip19?.type === "npub") {
    pubkeyHex = nip19.data;
  } else if (nip19?.type === "nprofile") {
    pubkeyHex = nip19.data.pubkey;
  } else if (nip19?.type === "note" || nip19?.type === "nevent") {
    return new Response(buildHtml({
      title: "NosTube video",
      description: "Use /share/… to share videos.",
      image: `${origin}/favicon.svg`,
      url: `${origin}/share/channel/${encodeURIComponent(incoming)}`,
      redirectTo: `${origin}/share/${encodeURIComponent(incoming)}`,
    }), {
      status: 400,
      headers: htmlHeaders({ cache: "no-store" }),
    });
  }

  if (!/^[0-9a-f]{64}$/i.test(pubkeyHex)) {
    return new Response(buildHtml({
      title: "NosTube channel",
      description: "Invalid channel id.",
      image: `${origin}/favicon.svg`,
      url: `${origin}/share/channel/${encodeURIComponent(incoming)}`,
      redirectTo: `${origin}/#home`,
    }), {
      status: 400,
      headers: htmlHeaders({ cache: "no-store" }),
    });
  }

  const shareUrl = `${origin}/share/channel/${encodeURIComponent(incoming)}`;
  const appUrl = `${origin}/#channel/${encodeURIComponent(pubkeyHex)}`;

  const RELAYS = [
    "wss://relay.damus.io",
    "wss://nos.lol",
    "wss://relay.snort.social",
    "wss://nostr.wine",
  ];

  let profile = null;
  try {
    const profileEvent = await fetchFirstEventFromRelays({
      relays: RELAYS,
      filter: { kinds: [0], authors: [pubkeyHex], limit: 1 },
      timeoutMs: 3500,
    });
    if (profileEvent?.content) profile = JSON.parse(profileEvent.content);
  } catch {}

  const name = (profile?.name || profile?.display_name || "Nostr creator").trim();
  const about = String(profile?.about || "").trim();
  const picture = typeof profile?.picture === "string" ? profile.picture.trim() : "";

  const title = name || "NosTube channel";
  const description = about || "View channel on NosTube";
  const image = picture && /^https?:\/\//i.test(picture) ? picture : `${origin}/favicon.svg`;

  return new Response(buildHtml({
    title,
    description,
    image,
    url: shareUrl,
    redirectTo: appUrl,
  }), {
    status: 200,
    headers: htmlHeaders({ cache: "public, max-age=300" }),
  });
}

function htmlHeaders({ cache }) {
  const headers = new Headers();
  headers.set("content-type", "text/html; charset=UTF-8");
  if (cache) headers.set("cache-control", cache);
  return headers;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildHtml({ title, description, image, url, redirectTo }) {
  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml(description);
  const safeImage = escapeHtml(image);
  const safeUrl = escapeHtml(url);
  const safeRedirect = escapeHtml(redirectTo);

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${safeTitle}</title>
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="canonical" href="${safeUrl}" />

  <meta property="og:site_name" content="NosTube" />
  <meta property="og:type" content="profile" />
  <meta property="og:title" content="${safeTitle}" />
  <meta property="og:description" content="${safeDesc}" />
  <meta property="og:image" content="${safeImage}" />
  <meta property="og:url" content="${safeUrl}" />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="${safeTitle}" />
  <meta name="twitter:description" content="${safeDesc}" />
  <meta name="twitter:image" content="${safeImage}" />
</head>
<body>
  <noscript>
    <p><a href="${safeRedirect}">Open channel</a></p>
  </noscript>
  <script>
    window.location.replace(${JSON.stringify(redirectTo)});
  </script>
</body>
</html>`;
}

function bytesToHex(bytes) {
  if (!bytes) return "";
  try {
    return Array.from(bytes)
      .map((b) => Number(b).toString(16).padStart(2, "0"))
      .join("");
  } catch {
    return "";
  }
}

function parseTLV(data) {
  const result = {};
  let i = 0;
  const bytes = data instanceof Uint8Array ? data : new Uint8Array(data || []);
  while (i < bytes.length) {
    const t = bytes[i];
    const l = bytes[i + 1];
    if (!l || i + 2 + l > bytes.length) throw new Error(`malformed TLV ${t}`);
    const v = bytes.slice(i + 2, i + 2 + l);
    if (!result[t]) result[t] = [];
    result[t].push(v);
    i += 2 + l;
  }
  return result;
}

const BECH32_CHARSET = "qpzry9x8gf2tvdw0s3jn54khce6mua7l";
const BECH32_REV = (() => {
  const m = new Map();
  for (let i = 0; i < BECH32_CHARSET.length; i += 1) m.set(BECH32_CHARSET[i], i);
  return m;
})();

function bech32Polymod(values) {
  const GENERATORS = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];
  let chk = 1;
  for (const v of values) {
    const top = chk >>> 25;
    chk = ((chk & 0x1ffffff) << 5) ^ v;
    for (let i = 0; i < 5; i += 1) {
      if ((top >>> i) & 1) chk ^= GENERATORS[i];
    }
  }
  return chk;
}

function bech32HrpExpand(hrp) {
  const out = [];
  for (let i = 0; i < hrp.length; i += 1) out.push(hrp.charCodeAt(i) >>> 5);
  out.push(0);
  for (let i = 0; i < hrp.length; i += 1) out.push(hrp.charCodeAt(i) & 31);
  return out;
}

function bech32VerifyChecksum(hrp, words) {
  return bech32Polymod(bech32HrpExpand(hrp).concat(words)) === 1;
}

function bech32Decode(str) {
  const s = String(str || "").trim();
  if (!s) throw new Error("empty");
  const lowered = s.toLowerCase();
  if (s !== lowered && s !== s.toUpperCase()) throw new Error("mixed case");
  const sep = lowered.lastIndexOf("1");
  if (sep <= 0) throw new Error("missing separator");
  const hrp = lowered.slice(0, sep);
  const data = lowered.slice(sep + 1);
  if (data.length < 6) throw new Error("too short");
  const words = [];
  for (const ch of data) {
    const v = BECH32_REV.get(ch);
    if (v === undefined) throw new Error("invalid bech32 char");
    words.push(v);
  }
  if (!bech32VerifyChecksum(hrp, words)) throw new Error("invalid checksum");
  return { prefix: hrp, words: words.slice(0, -6) };
}

function convertBits(data, fromBits, toBits, pad) {
  let acc = 0;
  let bits = 0;
  const ret = [];
  const maxv = (1 << toBits) - 1;
  for (const value of data) {
    if (value < 0 || value >> fromBits !== 0) return null;
    acc = (acc << fromBits) | value;
    bits += fromBits;
    while (bits >= toBits) {
      bits -= toBits;
      ret.push((acc >> bits) & maxv);
    }
  }
  if (pad) {
    if (bits) ret.push((acc << (toBits - bits)) & maxv);
  } else if (bits >= fromBits || ((acc << (toBits - bits)) & maxv)) {
    return null;
  }
  return ret;
}

function nip19Decode(nip19) {
  const { prefix, words } = bech32Decode(nip19);
  const bytesArr = convertBits(words, 5, 8, false);
  if (!bytesArr) throw new Error("invalid data");
  const bytes = Uint8Array.from(bytesArr);

  if (prefix === "note" || prefix === "npub" || prefix === "nsec") {
    return { type: prefix, data: bytesToHex(bytes) };
  }
  if (prefix === "nevent") {
    const tlv = parseTLV(bytes);
    if (!tlv[0]?.[0] || tlv[0][0].length !== 32) throw new Error("missing TLV0 for nevent");
    return { type: "nevent", data: { id: bytesToHex(tlv[0][0]) } };
  }
  if (prefix === "nprofile") {
    const tlv = parseTLV(bytes);
    if (!tlv[0]?.[0] || tlv[0][0].length !== 32) throw new Error("missing TLV0 for nprofile");
    return { type: "nprofile", data: { pubkey: bytesToHex(tlv[0][0]) } };
  }
  throw new Error(`unsupported nip19 prefix ${prefix}`);
}

function tryDecodeNip19(input) {
  const raw = String(input || "").trim();
  if (!/^(note|nevent|npub|nprofile)1[0-9a-z]+$/i.test(raw)) return null;
  try {
    return nip19Decode(raw);
  } catch {
    return null;
  }
}

async function fetchFirstEventFromRelays({ relays, filter, timeoutMs }) {
  const results = await Promise.allSettled(
    (relays || []).map((relay) => requestOneRelay({ relay, filter, timeoutMs }))
  );
  for (const r of results) {
    if (r.status === "fulfilled" && r.value) return r.value;
  }
  return null;
}

function requestOneRelay({ relay, filter, timeoutMs }) {
  return new Promise((resolve) => {
    let done = false;
    const subId = `nostube-share-${Math.random().toString(36).slice(2, 10)}`;
    const ws = new WebSocket(relay);

    const finish = (value) => {
      if (done) return;
      done = true;
      try {
        ws.close();
      } catch {}
      resolve(value || null);
    };

    const timeout = setTimeout(() => finish(null), Math.max(500, Number(timeoutMs) || 3500));

    ws.addEventListener("open", () => {
      try {
        ws.send(JSON.stringify(["REQ", subId, filter]));
      } catch {
        clearTimeout(timeout);
        finish(null);
      }
    });

    ws.addEventListener("message", (msg) => {
      try {
        const data = JSON.parse(String(msg.data || ""));
        if (!Array.isArray(data) || data.length < 2) return;
        if (data[0] === "EVENT" && data[1] === subId && data[2]) {
          clearTimeout(timeout);
          try {
            ws.send(JSON.stringify(["CLOSE", subId]));
          } catch {}
          finish(data[2]);
        }
        if (data[0] === "EOSE" && data[1] === subId) {
          clearTimeout(timeout);
          finish(null);
        }
      } catch {
        // ignore
      }
    });

    ws.addEventListener("error", () => {
      clearTimeout(timeout);
      finish(null);
    });

    ws.addEventListener("close", () => {
      clearTimeout(timeout);
      finish(null);
    });
  });
}
