export async function onRequest(context) {
  const { request, params } = context;
  const id = String(params?.id || "").trim();

  const url = new URL(request.url);
  const origin = `${url.protocol}//${url.host}`;
  const shareUrl = `${origin}/share/${encodeURIComponent(id)}`;
  const appUrl = `${origin}/#watch/${encodeURIComponent(id)}`;

  if (!/^[0-9a-f]{64}$/i.test(id)) {
    return new Response(buildHtml({
      title: "NosTube",
      description: "Watch on NosTube",
      image: `${origin}/favicon.svg`,
      url: shareUrl,
      redirectTo: appUrl,
      publisher: "",
    }), {
      status: 400,
      headers: htmlHeaders({ cache: "no-store" }),
    });
  }

  const RELAYS = [
    "wss://relay.damus.io",
    "wss://nos.lol",
    "wss://relay.snort.social",
    "wss://nostr.wine",
  ];

  const videoEvent = await fetchFirstEventFromRelays({
    relays: RELAYS,
    filter: { ids: [id], limit: 1 },
    timeoutMs: 3500,
  });

  if (!videoEvent) {
    return new Response(buildHtml({
      title: "NosTube video",
      description: "Open on NosTube",
      image: `${origin}/favicon.svg`,
      url: shareUrl,
      redirectTo: appUrl,
      publisher: "",
    }), {
      status: 404,
      headers: htmlHeaders({ cache: "no-store" }),
    });
  }

  const parsedVideo = parseVideoEvent(videoEvent);

  let publisher = "Nostr creator";
  try {
    const profileEvent = await fetchFirstEventFromRelays({
      relays: RELAYS,
      filter: { kinds: [0], authors: [videoEvent.pubkey], limit: 1 },
      timeoutMs: 3500,
    });
    if (profileEvent?.content) {
      const profile = JSON.parse(profileEvent.content);
      if (profile?.name) publisher = String(profile.name);
      else if (profile?.display_name) publisher = String(profile.display_name);
    }
  } catch {}

  const title = parsedVideo.title || "NosTube video";
  const description = parsedVideo.summary || "Watch on NosTube";
  const image = parsedVideo.thumb && /^https?:\/\//i.test(parsedVideo.thumb)
    ? parsedVideo.thumb
    : `${origin}/favicon.svg`;

  return new Response(buildHtml({
    title,
    description,
    image,
    url: shareUrl,
    redirectTo: appUrl,
    publisher,
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

function buildHtml({ title, description, image, url, redirectTo, publisher }) {
  const fullTitle = publisher ? `${title} — ${publisher}` : title;
  const safeTitle = escapeHtml(fullTitle);
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
  <meta property="og:type" content="video.other" />
  <meta property="og:title" content="${safeTitle}" />
  <meta property="og:description" content="${safeDesc}" />
  <meta property="og:image" content="${safeImage}" />
  <meta property="og:url" content="${safeUrl}" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${safeTitle}" />
  <meta name="twitter:description" content="${safeDesc}" />
  <meta name="twitter:image" content="${safeImage}" />
</head>
<body>
  <noscript>
    <p><a href="${safeRedirect}">Open video</a></p>
  </noscript>
  <script>
    window.location.replace(${JSON.stringify(redirectTo)});
  </script>
</body>
</html>`;
}

function getTagValue(tags, key) {
  const entry = (tags || []).find((t) => t && t[0] === key);
  return entry && entry.length > 1 ? String(entry[1] || "") : "";
}

function extractUrlFromJson(content) {
  try {
    const data = JSON.parse(content || "{}");
    const url = typeof data?.url === "string" ? data.url : "";
    const mime = typeof data?.mime === "string" ? data.mime : "";
    return { url, mime };
  } catch {
    return { url: "", mime: "" };
  }
}

function extractUrlFromContent(content, regex) {
  const match = String(content || "").match(regex);
  return match ? String(match[0] || "") : "";
}

const HTTP_URL_RE = /https?:\/\/[^\s"'<>]+/i;
const IPFS_URL_RE = /ipfs:\/\/[^\s"'<>]+/i;

function normalizeVideoUrl(raw) {
  const value = String(raw || "").trim();
  if (!value) return "";
  return value;
}

function getImetaUrl(tags) {
  const imeta = (tags || []).find((t) => t && t[0] === "imeta");
  if (!imeta) return "";
  const parts = imeta.slice(1).map((s) => String(s || ""));
  const urlPart = parts.find((p) => /^url\s+/i.test(p));
  if (!urlPart) return "";
  return urlPart.replace(/^url\s+/i, "").trim();
}

function getTagWithMime(tags, keys) {
  for (const key of keys) {
    const entry = (tags || []).find((t) => t && t[0] === key);
    if (!entry || entry.length < 2) continue;
    const url = String(entry[1] || "");
    const mime = entry.length > 2 ? String(entry[2] || "") : "";
    if (url) return { url, mime };
  }
  return { url: "", mime: "" };
}

function parseVideoEvent(event) {
  const tags = event.tags || [];
  const content = event.content || "";
  const rUrl = tags.find((entry) => entry[0] === "r" && /^(https?:|ipfs:)/i.test(entry[1] || ""))?.[1];
  const tagUrl = getTagWithMime(tags, ["url", "video", "file", "u"]);
  const title = getTagValue(tags, "title") || String(event.content || "").split("\n")[0] || "Untitled";
  const summary = getTagValue(tags, "summary") || "";
  const thumb = getTagValue(tags, "thumb") || getTagValue(tags, "image") || getImetaUrl(tags);
  const jsonUrl = extractUrlFromJson(content);
  const url = normalizeVideoUrl(
    tagUrl.url ||
      jsonUrl.url ||
      getImetaUrl(tags) ||
      rUrl ||
      extractUrlFromContent(content, HTTP_URL_RE) ||
      extractUrlFromContent(content, IPFS_URL_RE) ||
      ""
  );
  return {
    id: event.id,
    pubkey: event.pubkey,
    title,
    summary,
    thumb,
    url,
  };
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
