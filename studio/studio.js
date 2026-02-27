const studioAuthBtn = document.getElementById("studio-auth");
const studioAuthLabel = document.getElementById("studio-auth-label");
const studioAuthImage = document.getElementById("studio-auth-image");
const studioStatus = document.getElementById("studio-status");

const studioNavLinks = Array.from(document.querySelectorAll("[data-studio-nav]"));
const studioPages = Array.from(document.querySelectorAll("[data-studio-page]"));

const studioContentTabVideos = document.getElementById("studio-content-tab-videos");
const studioContentTabShorts = document.getElementById("studio-content-tab-shorts");
const studioContentVideos = document.getElementById("studio-content-videos");
const studioContentShorts = document.getElementById("studio-content-shorts");
const studioContentVideosList = document.getElementById("studio-content-videos-list");
const studioContentShortsList = document.getElementById("studio-content-shorts-list");
const studioContentVideosEmpty = document.getElementById("studio-content-videos-empty");
const studioContentShortsEmpty = document.getElementById("studio-content-shorts-empty");

const studioTitle = document.getElementById("studio-title");
const studioUrl = document.getElementById("studio-url");
const studioMime = document.getElementById("studio-mime");
const studioThumb = document.getElementById("studio-thumb");
const studioSummary = document.getElementById("studio-summary");
const studioKind = document.getElementById("studio-kind");
const studioPublish = document.getElementById("studio-publish");

const studioEditable = document.getElementById("studio-editable");
const studioIdentifier = document.getElementById("studio-identifier");
const studioEditCoord = document.getElementById("studio-edit-coord");
const studioLoadBtn = document.getElementById("studio-load");

const studioAdvanced = document.getElementById("studio-advanced");
const studioAdvancedPanel = document.getElementById("studio-advanced-panel");
const studioImeta = document.getElementById("studio-imeta");
const studioDuration = document.getElementById("studio-duration");

const studioEventInspector = document.getElementById("studio-event-inspector");
const studioEventPreview = document.getElementById("studio-event-preview");

const studioTagsList = document.getElementById("studio-tags-list");
const studioTagsInput = document.getElementById("studio-tags-input");

const studioCw = document.getElementById("studio-cw");
const studioCwPanel = document.getElementById("studio-cw-panel");
const studioCwReasons = document.getElementById("studio-cw-reasons");
const studioCwCustomList = document.getElementById("studio-cw-custom-list");
const studioCwCustomInput = document.getElementById("studio-cw-custom-input");

const studioProfileName = document.getElementById("studio-profile-name");
const studioProfileAbout = document.getElementById("studio-profile-about");
const studioProfilePicture = document.getElementById("studio-profile-picture");
const studioProfileSave = document.getElementById("studio-profile-save");

const authModal = document.getElementById("studio-auth-modal");
const authExtBtn = document.getElementById("studio-auth-ext");
const authForm = document.getElementById("studio-auth-form");
const authNsecInput = document.getElementById("studio-auth-nsec");
const authPersist = document.getElementById("studio-auth-persist");
const authNsecBtn = document.getElementById("studio-auth-nsec-btn");
const authSignupBtn = document.getElementById("studio-auth-signup");
const authGenerated = document.getElementById("studio-auth-generated");
const authGeneratedNpub = document.getElementById("studio-auth-generated-npub");
const authGeneratedNsec = document.getElementById("studio-auth-generated-nsec");
const authSignoutBtn = document.getElementById("studio-auth-signout");

const toastEl = document.getElementById("toast");

const RELAYS = [
  "wss://relay.damus.io",
  "wss://nos.lol",
  "wss://relay.snort.social",
  "wss://nostr.wine",
];

const AUTH_STORAGE_KEY = "nostube-auth";
const SESSION_SECRET_KEY = "nostube-nsec";
const PERSIST_SECRET_KEY = "nostube-nsec-persist";

const authState = {
  mode: "none",
  pubkey: "",
};

const profilesCache = new Map();

let studioLoadedPublishedAt = "";
let studioUploadTags = [];
let studioUploadCustomCw = [];

let studioContentLoadedForPubkey = "";
let studioContentTab = "videos";

if (authForm) {
  authForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}

function parseAddressableCoord(raw) {
  const value = String(raw || "").trim();
  const parts = value.split(":");
  if (parts.length < 3) return null;
  const kind = Number(parts[0]);
  const pubkey = String(parts[1] || "").trim();
  const identifier = parts.slice(2).join(":");
  if (!(kind === 34235 || kind === 34236)) return null;
  if (!/^[0-9a-f]{64}$/i.test(pubkey)) return null;
  if (!identifier) return null;
  return { kind, pubkey, identifier, coord: `${kind}:${pubkey}:${identifier}` };
}

function makeRandomIdentifier(prefix) {
  const safePrefix = String(prefix || "video").trim().toLowerCase().replace(/\s+/g, "-");
  const rand = Math.random().toString(36).slice(2, 10);
  return `${safePrefix}-${rand}`;
}

async function fetchAddressableVideoEvent(addr) {
  if (!addr) return null;
  const found = [];
  await Promise.all(
    RELAYS.map((relay) =>
      requestEvents(
        relay,
        {
          kinds: [addr.kind],
          authors: [addr.pubkey],
          "#d": [addr.identifier],
          limit: 20,
        },
        (event) => {
          if (event?.id) found.push(event);
        }
      )
    )
  );
  if (!found.length) return null;
  found.sort((a, b) => Number(b.created_at || 0) - Number(a.created_at || 0));
  return found[0] || null;
}

function getTagValue(tags, key) {
  const tag = (tags || []).find((entry) => entry && entry[0] === key);
  return tag ? String(tag[1] || "") : "";
}

function getTagValues(tags, key) {
  return (tags || [])
    .filter((t) => t && t[0] === key && String(t[1] || "").trim())
    .map((t) => String(t[1] || "").trim());
}

function parseStudioVideoEvent(event) {
  const tags = event?.tags || [];
  const title = getTagValue(tags, "title") || "Untitled";
  const thumb = getTagValue(tags, "thumb") || getTagValue(tags, "image") || "";
  const publishedAt = Number(getTagValue(tags, "published_at") || event?.created_at || 0);
  const urlTag = coerceUrlTag(tags);
  const d = getTagValue(tags, "d");
  const isAddressable = (event?.kind === 34235 || event?.kind === 34236) && Boolean(d);
  const id = isAddressable ? `${event.kind}:${event.pubkey}:${d}` : String(event?.id || "");
  return {
    id,
    title,
    thumb,
    publishedAt,
    kind: Number(event?.kind || 0),
    url: urlTag.url || "",
  };
}

function formatStudioTime(ts) {
  const sec = Number(ts || 0);
  if (!sec) return "";
  try {
    const d = new Date(sec * 1000);
    return d.toLocaleString();
  } catch {
    return "";
  }
}

function setStudioContentTab(next) {
  studioContentTab = next === "shorts" ? "shorts" : "videos";
  if (studioContentTabVideos) studioContentTabVideos.classList.toggle("is-active", studioContentTab === "videos");
  if (studioContentTabShorts) studioContentTabShorts.classList.toggle("is-active", studioContentTab === "shorts");
  if (studioContentVideos) studioContentVideos.hidden = studioContentTab !== "videos";
  if (studioContentShorts) studioContentShorts.hidden = studioContentTab !== "shorts";
}

function renderStudioContentList(container, emptyEl, items) {
  if (!container) return;
  container.innerHTML = "";
  if (!items.length) {
    if (emptyEl) {
      emptyEl.textContent = "No uploads yet.";
      emptyEl.hidden = false;
    }
    return;
  }
  if (emptyEl) emptyEl.hidden = true;
  items.forEach((item) => {
    const link = document.createElement("a");
    link.className = "studio-item";
    link.href = `../#watch/${encodeURIComponent(item.id)}`;

    const thumb = document.createElement("div");
    thumb.className = "studio-item-thumb";
    if (item.thumb) thumb.style.backgroundImage = `url(${item.thumb})`;

    const body = document.createElement("div");
    const title = document.createElement("div");
    title.className = "studio-item-title";
    title.textContent = item.title;
    const meta = document.createElement("div");
    meta.className = "studio-item-meta";
    meta.textContent = formatStudioTime(item.publishedAt);
    body.appendChild(title);
    body.appendChild(meta);

    link.appendChild(thumb);
    link.appendChild(body);
    container.appendChild(link);
  });
}

async function fetchMyStudioUploads(pubkey) {
  const clean = String(pubkey || "").trim();
  if (!clean) return { videos: [], shorts: [] };
  const found = [];
  const filter = {
    authors: [clean],
    kinds: [21, 22, 34235, 34236],
    limit: 200,
  };
  await Promise.all(
    RELAYS.map((relay) =>
      requestEvents(relay, filter, (event) => {
        if (event?.id) found.push(event);
      })
    )
  );

  const latestById = new Map();
  found.forEach((evt) => {
    const parsed = parseStudioVideoEvent(evt);
    if (!parsed.id) return;
    const prev = latestById.get(parsed.id);
    if (!prev || Number(parsed.publishedAt || 0) > Number(prev.publishedAt || 0)) {
      latestById.set(parsed.id, parsed);
    }
  });

  const items = Array.from(latestById.values());
  const videos = items.filter((it) => it.kind === 21 || it.kind === 34235);
  const shorts = items.filter((it) => it.kind === 22 || it.kind === 34236);
  videos.sort((a, b) => Number(b.publishedAt || 0) - Number(a.publishedAt || 0));
  shorts.sort((a, b) => Number(b.publishedAt || 0) - Number(a.publishedAt || 0));
  return { videos, shorts };
}

async function ensureStudioContentLoaded() {
  if (!authState.pubkey) return;
  if (studioContentLoadedForPubkey === authState.pubkey) return;
  studioContentLoadedForPubkey = authState.pubkey;
  try {
    if (studioContentVideosEmpty) {
      studioContentVideosEmpty.textContent = "Loading videos…";
      studioContentVideosEmpty.hidden = false;
    }
    if (studioContentShortsEmpty) {
      studioContentShortsEmpty.textContent = "Loading shorts…";
      studioContentShortsEmpty.hidden = false;
    }
    const { videos, shorts } = await fetchMyStudioUploads(authState.pubkey);
    renderStudioContentList(studioContentVideosList, studioContentVideosEmpty, videos);
    renderStudioContentList(studioContentShortsList, studioContentShortsEmpty, shorts);
  } catch {
    if (studioContentVideosEmpty) {
      studioContentVideosEmpty.textContent = "Unable to load videos.";
      studioContentVideosEmpty.hidden = false;
    }
    if (studioContentShortsEmpty) {
      studioContentShortsEmpty.textContent = "Unable to load shorts.";
      studioContentShortsEmpty.hidden = false;
    }
  }
}

function coerceUrlTag(tags) {
  const entries = (tags || []).filter((t) => t && (t[0] === "url" || t[0] === "u" || t[0] === "video"));
  if (!entries.length) return { url: "", mime: "" };
  const first = entries.find((t) => String(t[1] || "").trim()) || entries[0];
  return { url: String(first?.[1] || ""), mime: String(first?.[2] || "") };
}

function getImetaValues(tags) {
  const imetaTags = (tags || []).filter((t) => t && t[0] === "imeta");
  if (!imetaTags.length) return { url: "", mime: "", image: "", duration: "" };
  const first = imetaTags[0];
  const parts = first.slice(1).map((p) => String(p || ""));
  const pick = (re) => {
    const hit = parts.find((p) => re.test(p));
    if (!hit) return "";
    const m = hit.match(re);
    return m ? String(m[1] || "") : "";
  };
  return {
    url: pick(/^url\s+(.+)$/i),
    mime: pick(/^m\s+(.+)$/i),
    image: pick(/^image\s+(.+)$/i),
    duration: pick(/^duration\s+(.+)$/i),
  };
}

function syncAdvancedUi() {
  if (!studioAdvancedPanel) return;
  const wantsAdvanced = Boolean(studioAdvanced?.checked);
  studioAdvancedPanel.hidden = !wantsAdvanced;
}

function syncContentWarningUi() {
  if (!studioCwPanel) return;
  const wants = Boolean(studioCw?.checked);
  studioCwPanel.hidden = !wants;
}

function normalizeCwReason(raw) {
  const clean = String(raw || "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
  if (!clean) return "";
  if (clean.length > 80) return clean.slice(0, 80);
  return clean;
}

function getSelectedPresetCwReasons() {
  if (!studioCwReasons) return [];
  const inputs = Array.from(studioCwReasons.querySelectorAll("input[type=checkbox]"));
  return inputs
    .filter((el) => el.checked)
    .map((el) => normalizeCwReason(el.value))
    .filter(Boolean);
}

function setSelectedPresetCwReasons(reasons) {
  if (!studioCwReasons) return;
  const set = new Set((reasons || []).map(normalizeCwReason).filter(Boolean));
  const inputs = Array.from(studioCwReasons.querySelectorAll("input[type=checkbox]"));
  inputs.forEach((el) => {
    el.checked = set.has(normalizeCwReason(el.value));
  });
}

function setStudioUploadCustomCw(next) {
  const uniq = Array.from(new Set((next || []).map(normalizeCwReason).filter(Boolean))).slice(0, 20);
  studioUploadCustomCw = uniq;
  renderStudioUploadCustomCw();
  updateStudioUploadEventInspector();
}

function renderStudioUploadCustomCw() {
  if (!studioCwCustomList) return;
  studioCwCustomList.innerHTML = "";
  studioUploadCustomCw.forEach((reason) => {
    const chip = document.createElement("span");
    chip.className = "studio-chip";

    const text = document.createElement("span");
    text.textContent = reason;
    chip.appendChild(text);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("aria-label", `Remove ${reason}`);
    btn.innerHTML = "&times;";
    btn.addEventListener("mousedown", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const next = (studioUploadCustomCw || []).filter((r) => r !== reason);
      setStudioUploadCustomCw(next);
    });
    chip.appendChild(btn);

    studioCwCustomList.appendChild(chip);
  });
}

function tryAddStudioUploadCustomCw(raw) {
  const token = normalizeCwReason(raw);
  if (!token) return false;
  if (studioUploadCustomCw.includes(token)) return false;
  setStudioUploadCustomCw(studioUploadCustomCw.concat([token]));
  return true;
}

function bindStudioUploadContentWarningUi() {
  if (studioCwReasons) {
    studioCwReasons.addEventListener("change", () => {
      updateStudioUploadEventInspector();
    });
  }

  if (studioCwCustomInput) {
    const commit = () => {
      const value = String(studioCwCustomInput.value || "");
      const parts = value.split(/[\n,]+/g).map((p) => p.trim()).filter(Boolean);
      let added = false;
      parts.forEach((p) => {
        if (tryAddStudioUploadCustomCw(p)) added = true;
      });
      if (added) studioCwCustomInput.value = "";
      updateStudioUploadEventInspector();
    };

    studioCwCustomInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === ",") {
        event.preventDefault();
        commit();
      }
      if (event.key === "Backspace" && !String(studioCwCustomInput.value || "").length && studioUploadCustomCw.length) {
        setStudioUploadCustomCw(studioUploadCustomCw.slice(0, -1));
      }
    });

    studioCwCustomInput.addEventListener("blur", () => {
      commit();
    });
  }
}

function getStudioUploadContentWarningReasons() {
  const preset = getSelectedPresetCwReasons();
  const custom = (studioUploadCustomCw || []).map(normalizeCwReason).filter(Boolean);
  return Array.from(new Set(preset.concat(custom))).slice(0, 20);
}

function parseContentWarningValuesFromTags(tags) {
  const values = [];
  (tags || []).forEach((t) => {
    if (!t) return;
    const key = t[0];
    if (!(key === "content-warning" || key === "content_warning" || key === "cw")) return;
    const raw = String(t[1] || "").trim();
    if (!raw) return;
    raw
      .split(",")
      .map((part) => normalizeCwReason(part))
      .filter(Boolean)
      .forEach((v) => values.push(v));
  });
  return Array.from(new Set(values));
}

function normalizeTagToken(raw) {
  const clean = String(raw || "")
    .trim()
    .replace(/^#/, "")
    .toLowerCase();
  if (!clean) return "";
  if (!/^[a-z0-9_\-]{1,64}$/.test(clean)) return "";
  return clean;
}

function setStudioUploadTags(next) {
  const uniq = Array.from(new Set((next || []).map(normalizeTagToken).filter(Boolean))).slice(0, 20);
  studioUploadTags = uniq;
  renderStudioUploadTags();
  updateStudioUploadEventInspector();
}

function renderStudioUploadTags() {
  if (!studioTagsList) return;
  studioTagsList.innerHTML = "";
  studioUploadTags.forEach((tag) => {
    const chip = document.createElement("span");
    chip.className = "studio-chip";

    const text = document.createElement("span");
    text.textContent = `#${tag}`;
    chip.appendChild(text);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("aria-label", `Remove ${tag}`);
    btn.innerHTML = "&times;";
    btn.addEventListener("mousedown", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const next = (studioUploadTags || []).filter((t) => t !== tag);
      setStudioUploadTags(next);
    });
    chip.appendChild(btn);

    studioTagsList.appendChild(chip);
  });
}

function tryAddStudioUploadTag(raw) {
  const token = normalizeTagToken(raw);
  if (!token) return false;
  if (studioUploadTags.includes(token)) return false;
  setStudioUploadTags(studioUploadTags.concat([token]));
  return true;
}

function bindStudioUploadTagsUi() {
  if (!studioTagsInput) return;
  const commit = () => {
    const value = String(studioTagsInput.value || "");
    const parts = value.split(/[\s,]+/g).map((p) => p.trim()).filter(Boolean);
    let added = false;
    parts.forEach((p) => {
      if (tryAddStudioUploadTag(p)) added = true;
    });
    if (added) studioTagsInput.value = "";
    updateStudioUploadEventInspector();
  };

  studioTagsInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      commit();
    }
    if (event.key === "Backspace" && !String(studioTagsInput.value || "").length && studioUploadTags.length) {
      setStudioUploadTags(studioUploadTags.slice(0, -1));
    }
  });

  studioTagsInput.addEventListener("blur", () => {
    commit();
  });
}

function buildStudioUploadDraftUnsignedEvent() {
  const baseKind = Number(studioKind?.value || 21);
  const wantsEditable = Boolean(studioEditable?.checked);
  const kind = wantsEditable ? (baseKind === 22 ? 34236 : 34235) : baseKind;

  const title = String(studioTitle?.value || "").trim();
  const url = String(studioUrl?.value || "").trim();
  const mime = String(studioMime?.value || "").trim();
  const thumb = String(studioThumb?.value || "").trim();
  const summary = String(studioSummary?.value || "").trim();

  const tags = [];
  if (title) tags.push(["title", title]);

  const existingAddr = wantsEditable ? parseAddressableCoord(studioEditCoord?.value) : null;
  const publishedAt = existingAddr && studioLoadedPublishedAt
    ? studioLoadedPublishedAt
    : String(Math.floor(Date.now() / 1000));
  tags.push(["published_at", publishedAt]);

  if (url) tags.push(["url", url, mime].filter(Boolean));
  if (thumb) tags.push(["thumb", thumb]);
  if (summary) tags.push(["summary", summary]);

  (studioUploadTags || []).forEach((t) => {
    tags.push(["t", t]);
  });

  const wantsCw = Boolean(studioCw?.checked);
  if (wantsCw) {
    const reasons = getStudioUploadContentWarningReasons();
    if (!reasons.length) {
      tags.push(["content-warning"]);
    } else {
      tags.push(["content-warning", reasons.join(", ")]);
    }
  }

  const wantsAdvanced = Boolean(studioAdvanced?.checked);
  const wantsImeta = wantsAdvanced && Boolean(studioImeta?.checked);
  if (wantsImeta && url) {
    const imeta = [];
    imeta.push(`url ${url}`);
    if (mime) imeta.push(`m ${mime}`);
    if (thumb) imeta.push(`image ${thumb}`);
    const duration = String(studioDuration?.value || "").trim();
    if (duration) imeta.push(`duration ${duration}`);
    tags.push(["imeta", ...imeta]);
  }

  if (wantsEditable) {
    let identifier = String(studioIdentifier?.value || "").trim();
    if (existingAddr) identifier = existingAddr.identifier;
    if (identifier) tags.push(["d", identifier]);
  }

  return buildUnsignedEvent(kind, summary || title, tags);
}

function updateStudioUploadEventInspector() {
  if (!studioEventPreview) return;
  try {
    if (!authState.pubkey) {
      studioEventPreview.textContent = "Sign in to preview the full event.";
      return;
    }

    const unsigned = buildStudioUploadDraftUnsignedEvent();
    studioEventPreview.textContent = JSON.stringify(unsigned, null, 2);
  } catch (error) {
    studioEventPreview.textContent = String(error?.message || error || "Unable to build event");
  }
}

function bindStudioUploadInspectorLiveUpdates() {
  const nodes = [
    studioTitle,
    studioUrl,
    studioMime,
    studioThumb,
    studioSummary,
    studioKind,
    studioEditable,
    studioIdentifier,
    studioEditCoord,
    studioCw,
    studioAdvanced,
    studioImeta,
    studioDuration,
  ].filter(Boolean);

  nodes.forEach((el) => {
    const type = String(el.type || "").toLowerCase();
    const eventName = type === "checkbox" || el.tagName === "SELECT" ? "change" : "input";
    el.addEventListener(eventName, () => {
      updateStudioUploadEventInspector();
    });
  });
}

bindStudioUploadInspectorLiveUpdates();
bindStudioUploadTagsUi();
bindStudioUploadContentWarningUi();
syncContentWarningUi();
updateStudioUploadEventInspector();

function showToast(message) {
  if (!toastEl) return;
  toastEl.textContent = String(message || "");
  toastEl.classList.add("active");
  window.clearTimeout(showToast._t);
  showToast._t = window.setTimeout(() => {
    toastEl.classList.remove("active");
  }, 2400);
}

function openModal(modal) {
  if (!modal) return;
  modal.hidden = false;
  document.body.classList.add("has-modal");
}

function closeModal(modal) {
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove("has-modal");
}

function wireModal(modal) {
  if (!modal) return;
  modal.addEventListener("click", (event) => {
    const closeTarget = event.target.closest("[data-modal-close]");
    if (closeTarget) {
      event.preventDefault();
      closeModal(modal);
    }
  });
}

wireModal(authModal);

function getNostrTools() {
  return window.NostrTools || window.nostrTools || null;
}

function initialsFromName(name) {
  if (!name) return "NT";
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((part) => part[0].toUpperCase()).join("");
}

function hydrateAvatar(avatar, profile) {
  if (!avatar || !profile) return;
  const img = avatar.querySelector(".avatar-img");
  const initials = avatar.querySelector(".channel-initials");
  if (initials) initials.textContent = initialsFromName(profile.name);
  if (!img) {
    avatar.classList.remove("has-image");
    return;
  }
  const picture = String(profile.picture || "").trim();
  if (!picture) {
    avatar.classList.remove("has-image");
    img.classList.remove("is-loaded");
    img.removeAttribute("src");
    return;
  }
  avatar.classList.add("has-image");
  img.classList.remove("is-loaded");
  img.src = picture;
  img.addEventListener("load", () => img.classList.add("is-loaded"), { once: true });
}

function bytesToHex(bytes) {
  if (!bytes) return "";
  if (typeof bytes === "string") {
    const clean = bytes.trim().toLowerCase();
    return /^[0-9a-f]{64}$/i.test(clean) ? clean : "";
  }
  try {
    return Array.from(bytes)
      .map((b) => Number(b).toString(16).padStart(2, "0"))
      .join("");
  } catch {
    return "";
  }
}

function hexToBytes(hex) {
  const clean = String(hex || "").trim().toLowerCase();
  if (!/^[0-9a-f]{64}$/i.test(clean)) return null;
  const out = new Uint8Array(32);
  for (let i = 0; i < 32; i += 1) {
    out[i] = parseInt(clean.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
}

function decodeNsecToHex(nsec) {
  const tools = getNostrTools();
  if (!tools?.nip19?.decode) throw new Error("nostr-tools not available");
  const raw = String(nsec || "").trim();
  if (!/^nsec1[0-9a-z]+$/i.test(raw)) throw new Error("Invalid nsec");
  const decoded = tools.nip19.decode(raw);
  if (!decoded || decoded.type !== "nsec") throw new Error("Invalid nsec");
  const hex = bytesToHex(decoded.data);
  if (!hex || !/^[0-9a-f]{64}$/i.test(hex)) throw new Error("Invalid nsec payload");
  return hex;
}

function getSecretKeyHex() {
  const value =
    window.sessionStorage.getItem(SESSION_SECRET_KEY) ||
    window.localStorage.getItem(PERSIST_SECRET_KEY) ||
    "";
  return value && /^[0-9a-f]{64}$/i.test(value) ? value : "";
}

function setSecretKeyHex(hex) {
  if (!hex) {
    window.sessionStorage.removeItem(SESSION_SECRET_KEY);
    return;
  }
  window.sessionStorage.setItem(SESSION_SECRET_KEY, hex);
}

function setPersistedSecretKeyHex(hex) {
  if (!hex) {
    window.localStorage.removeItem(PERSIST_SECRET_KEY);
    return;
  }
  window.localStorage.setItem(PERSIST_SECRET_KEY, hex);
}

function persistAuth() {
  const payload = {
    mode: authState.mode,
    pubkey: authState.pubkey,
  };
  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(payload));
}

function clearAuth() {
  authState.mode = "none";
  authState.pubkey = "";
  setSecretKeyHex("");
  setPersistedSecretKeyHex("");
  window.localStorage.removeItem(AUTH_STORAGE_KEY);
  updateUi();
}

async function setSignedIn(pubkey, mode) {
  authState.mode = mode;
  authState.pubkey = pubkey;
  persistAuth();
  updateUi();
}

async function restoreAuth() {
  const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    if (data?.mode === "extension") {
      if (window.nostr?.getPublicKey) {
        const pk = await window.nostr.getPublicKey();
        await setSignedIn(pk, "extension");
      }
      return;
    }
    if (data?.mode === "nsec") {
      const sk = getSecretKeyHex();
      if (!sk) return;
      const tools = getNostrTools();
      if (!tools?.getPublicKey) return;
      const skBytes = hexToBytes(sk);
      if (!skBytes) return;
      const pk = tools.getPublicKey(skBytes);
      await setSignedIn(pk, "nsec");
    }
  } catch {
    // ignore
  }
}

function requestEvents(relayUrl, filter, onEvent) {
  return new Promise((resolve) => {
    let isDone = false;
    const socket = new WebSocket(relayUrl);
    const subId = `nostube-studio-${Math.random().toString(36).slice(2, 10)}`;
    const timeout = setTimeout(() => {
      if (!isDone) {
        isDone = true;
        socket.close();
        resolve();
      }
    }, 5000);

    socket.addEventListener("open", () => {
      socket.send(JSON.stringify(["REQ", subId, filter]));
    });

    socket.addEventListener("message", (event) => {
      try {
        const message = JSON.parse(event.data);
        if (message[0] === "EVENT" && message[1] === subId) {
          onEvent(message[2]);
        }
        if (message[0] === "EOSE" && message[1] === subId) {
          if (!isDone) {
            isDone = true;
            clearTimeout(timeout);
            socket.close();
            resolve();
          }
        }
      } catch {
        // ignore
      }
    });

    socket.addEventListener("error", () => {
      if (!isDone) {
        isDone = true;
        clearTimeout(timeout);
        socket.close();
        resolve();
      }
    });
  });
}

async function fetchProfiles(pubkeys) {
  const clean = (pubkeys || []).filter(Boolean).slice(0, 80);
  if (!clean.length) return new Map();
  const profiles = new Map();
  const filter = { kinds: [0], authors: clean, limit: 80 };
  const found = [];
  await Promise.all(
    RELAYS.map((relay) =>
      requestEvents(relay, filter, (event) => {
        found.push(event);
      })
    )
  );
  found
    .sort((a, b) => b.created_at - a.created_at)
    .forEach((event) => {
      if (profiles.has(event.pubkey)) return;
      try {
        const data = JSON.parse(event.content || "{}");
        profiles.set(event.pubkey, {
          name: data.display_name || data.name || event.pubkey,
          picture: data.picture || "",
          about: data.about || "",
          nip05: data.nip05 || "",
        });
      } catch {
        profiles.set(event.pubkey, {
          name: event.pubkey,
          picture: "",
          about: "",
          nip05: "",
        });
      }
    });
  return profiles;
}

async function ensureProfiles(pubkeys) {
  const missing = (pubkeys || []).filter((k) => k && !profilesCache.has(k));
  if (!missing.length) return;
  const fetched = await fetchProfiles(missing);
  fetched.forEach((value, key) => profilesCache.set(key, value));
  updateUi();
}

function updateUi() {
  const signedIn = Boolean(authState.pubkey);
  if (studioAuthLabel) {
    studioAuthLabel.textContent = signedIn
      ? initialsFromName(profilesCache.get(authState.pubkey)?.name || "")
      : "Sign in";
  }
  if (studioAuthBtn) {
    studioAuthBtn.dataset.auth = signedIn ? "signed-in" : "signed-out";
    studioAuthBtn.setAttribute("aria-label", signedIn ? "Your profile" : "Sign in");
    if (!signedIn) {
      studioAuthBtn.classList.remove("has-image");
      if (studioAuthImage) {
        studioAuthImage.classList.remove("is-loaded");
        studioAuthImage.removeAttribute("src");
      }
    } else {
      hydrateAvatar(studioAuthBtn, profilesCache.get(authState.pubkey));
    }
  }
  if (authSignoutBtn) authSignoutBtn.hidden = !signedIn;
  if (studioPublish) studioPublish.disabled = !signedIn;
  if (studioStatus) studioStatus.textContent = signedIn ? "Ready to publish." : "Sign in to publish.";
  updateStudioUploadEventInspector();
}

function setActiveStudioPage(key) {
  const safe = key || "dashboard";
  studioPages.forEach((page) => {
    page.hidden = page.dataset.studioPage !== safe;
  });
  studioNavLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.studioNav === safe);
  });
}

function getStudioRoute() {
  const raw = window.location.hash.replace(/^#/, "");
  return raw || "dashboard";
}

function handleStudioRoute() {
  const route = getStudioRoute();
  setActiveStudioPage(route);
  if (route === "content") {
    if (!authState.pubkey) {
      openModal(authModal);
      setActiveStudioPage("dashboard");
      return;
    }
    ensureStudioContentLoaded();
  }
  if (route === "customization") {
    if (!authState.pubkey) {
      openModal(authModal);
      setActiveStudioPage("dashboard");
      return;
    }
    ensureProfiles([authState.pubkey])
      .then(() => {
        const profile = profilesCache.get(authState.pubkey) || {};
        if (studioProfileName) studioProfileName.value = profile.name || "";
        if (studioProfileAbout) studioProfileAbout.value = profile.about || "";
        if (studioProfilePicture) studioProfilePicture.value = profile.picture || "";
      })
      .catch(() => {});
  }
}

async function publishEventToRelay(relayUrl, event) {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket(relayUrl);
    const timeout = setTimeout(() => {
      socket.close();
      reject(new Error("Relay timeout"));
    }, 5000);
    socket.addEventListener("open", () => {
      socket.send(JSON.stringify(["EVENT", event]));
    });
    socket.addEventListener("message", (msg) => {
      try {
        const data = JSON.parse(msg.data);
        if (data[0] === "OK" && data[1] === event.id) {
          clearTimeout(timeout);
          socket.close();
          if (data[2]) resolve(true);
          else reject(new Error(data[3] || "Relay rejected event"));
        }
      } catch {
        // ignore
      }
    });
    socket.addEventListener("error", () => {
      clearTimeout(timeout);
      socket.close();
      reject(new Error("Relay error"));
    });
  });
}

async function publishEvent(event) {
  const results = await Promise.allSettled(RELAYS.map((relay) => publishEventToRelay(relay, event)));
  const ok = results.some((r) => r.status === "fulfilled");
  if (!ok) {
    const reason = results.find((r) => r.status === "rejected")?.reason?.message || "Failed to publish";
    throw new Error(reason);
  }
  return true;
}

function buildUnsignedEvent(kind, content, tags) {
  return {
    kind,
    content: String(content || ""),
    tags: Array.isArray(tags) ? tags : [],
    created_at: Math.floor(Date.now() / 1000),
    pubkey: authState.pubkey,
  };
}

async function signEvent(unsignedEvent) {
  const tools = getNostrTools();
  if (!tools) throw new Error("nostr-tools not loaded");

  if (authState.mode === "extension") {
    if (!window.nostr?.signEvent) throw new Error("Nostr extension not available");
    return await window.nostr.signEvent(unsignedEvent);
  }

  const sk = getSecretKeyHex();
  if (!sk) throw new Error("Missing secret key");
  const skBytes = hexToBytes(sk);
  if (!skBytes) throw new Error("Invalid secret key");

  if (typeof tools.finalizeEvent === "function") {
    return tools.finalizeEvent(unsignedEvent, skBytes);
  }
  if (typeof tools.getEventHash === "function" && typeof tools.getSignature === "function") {
    const evt = { ...unsignedEvent };
    evt.id = tools.getEventHash(evt);
    evt.sig = tools.getSignature(evt, skBytes);
    return evt;
  }
  if (typeof tools.getEventHash === "function" && typeof tools.signEvent === "function") {
    const evt = { ...unsignedEvent };
    evt.id = tools.getEventHash(evt);
    evt.sig = tools.signEvent(evt, skBytes);
    return evt;
  }
  throw new Error("Signing not supported by nostr-tools bundle");
}

async function publishProfileMetadata(nextProfile) {
  const content = JSON.stringify(nextProfile || {});
  const unsigned = buildUnsignedEvent(0, content, []);
  const signed = await signEvent(unsigned);
  await publishEvent(signed);
  profilesCache.set(authState.pubkey, nextProfile);
  updateUi();
}

function getTagArray(key, value, extra) {
  const tag = [key, value];
  if (extra) tag.push(extra);
  return tag;
}

if (studioAuthBtn) {
  studioAuthBtn.addEventListener("click", () => {
    if (authGenerated) authGenerated.hidden = true;
    if (authPersist) {
      authPersist.checked = Boolean(window.localStorage.getItem(PERSIST_SECRET_KEY));
      authPersist.disabled = authState.mode === "extension";
    }
    openModal(authModal);
  });
}

if (authExtBtn) {
  authExtBtn.addEventListener("click", async () => {
    try {
      if (!window.nostr?.getPublicKey) {
        showToast("No Nostr extension found");
        return;
      }
      const pubkey = await window.nostr.getPublicKey();
      await setSignedIn(pubkey, "extension");
      showToast("Signed in with extension");
      closeModal(authModal);
      handleStudioRoute();
    } catch (error) {
      showToast(error?.message || "Unable to sign in");
    }
  });
}

if (authNsecBtn) {
  authNsecBtn.addEventListener("click", async () => {
    try {
      const tools = getNostrTools();
      if (!tools?.getPublicKey) throw new Error("nostr-tools not loaded");
      const nsec = String(authNsecInput?.value || "").trim();
      const hex = decodeNsecToHex(nsec);
      setSecretKeyHex(hex);
      if (authPersist?.checked) setPersistedSecretKeyHex(hex);
      else setPersistedSecretKeyHex("");

      const skBytes = hexToBytes(hex);
      if (!skBytes) throw new Error("Invalid secret key");
      const pubkey = tools.getPublicKey(skBytes);
      await setSignedIn(pubkey, "nsec");
      if (authNsecInput) authNsecInput.value = "";
      showToast(authPersist?.checked ? "Signed in" : "Signed in (session only)");
      closeModal(authModal);
      handleStudioRoute();
    } catch (error) {
      showToast(error?.message || "Invalid nsec");
    }
  });
}

if (authSignupBtn) {
  authSignupBtn.addEventListener("click", async () => {
    try {
      const tools = getNostrTools();
      if (!tools?.generateSecretKey || !tools?.getPublicKey) {
        throw new Error("nostr-tools missing keygen");
      }
      const skBytes = tools.generateSecretKey();
      const skHex = bytesToHex(skBytes);
      const pubkey = tools.getPublicKey(skBytes);
      const npub = tools.nip19?.npubEncode ? tools.nip19.npubEncode(pubkey) : "";
      const nsec = tools.nip19?.nsecEncode ? tools.nip19.nsecEncode(skBytes) : "";

      if (authGeneratedNpub) authGeneratedNpub.value = npub || pubkey;
      if (authGeneratedNsec) authGeneratedNsec.value = nsec || skHex;
      if (authGenerated) authGenerated.hidden = false;

      setSecretKeyHex(skHex);
      if (authPersist?.checked) setPersistedSecretKeyHex(skHex);
      else setPersistedSecretKeyHex("");

      await setSignedIn(pubkey, "nsec");
      showToast(authPersist?.checked ? "New keys generated" : "New keys generated (session only)");
      closeModal(authModal);
      handleStudioRoute();
    } catch (error) {
      showToast(error?.message || "Unable to generate keys");
    }
  });
}

if (authSignoutBtn) {
  authSignoutBtn.addEventListener("click", () => {
    clearAuth();
    showToast("Signed out");
  });
}

if (studioContentTabVideos) {
  studioContentTabVideos.addEventListener("click", () => {
    setStudioContentTab("videos");
  });
}

if (studioContentTabShorts) {
  studioContentTabShorts.addEventListener("click", () => {
    setStudioContentTab("shorts");
  });
}

setStudioContentTab("videos");

if (studioPublish) {
  studioPublish.addEventListener("click", async () => {
    try {
      if (!authState.pubkey) {
        showToast("Sign in to publish");
        openModal(authModal);
        return;
      }
      const baseKind = Number(studioKind?.value || 21);
      const wantsEditable = Boolean(studioEditable?.checked);
      const kind = wantsEditable ? (baseKind === 22 ? 34236 : 34235) : baseKind;
      const title = String(studioTitle?.value || "").trim();
      const url = String(studioUrl?.value || "").trim();
      if (!title || !url) {
        showToast("Title and URL are required");
        return;
      }
      const tags = [];
      tags.push(["title", title]);
      const existingAddr = wantsEditable ? parseAddressableCoord(studioEditCoord?.value) : null;
      const publishedAt = existingAddr && studioLoadedPublishedAt
        ? studioLoadedPublishedAt
        : String(Math.floor(Date.now() / 1000));
      tags.push(["published_at", publishedAt]);
      const mime = String(studioMime?.value || "").trim();
      tags.push(["url", url, mime].filter(Boolean));
      const thumb = String(studioThumb?.value || "").trim();
      if (thumb) tags.push(["thumb", thumb]);
      const summary = String(studioSummary?.value || "").trim();
      if (summary) tags.push(["summary", summary]);

      (studioUploadTags || []).forEach((t) => {
        tags.push(["t", t]);
      });

      const wantsCw = Boolean(studioCw?.checked);
      if (wantsCw) {
        const reasons = getStudioUploadContentWarningReasons();
        if (!reasons.length) {
          tags.push(["content-warning"]);
        } else {
          tags.push(["content-warning", reasons.join(", ")]);
        }
      }

      const wantsAdvanced = Boolean(studioAdvanced?.checked);
      const wantsImeta = wantsAdvanced && Boolean(studioImeta?.checked);
      if (wantsImeta) {
        const imeta = [];
        imeta.push(`url ${url}`);
        if (mime) imeta.push(`m ${mime}`);
        if (thumb) imeta.push(`image ${thumb}`);
        const duration = String(studioDuration?.value || "").trim();
        if (duration) imeta.push(`duration ${duration}`);
        tags.push(["imeta", ...imeta]);
      }

      if (wantsEditable) {
        let identifier = String(studioIdentifier?.value || "").trim();
        if (existingAddr) {
          if (existingAddr.pubkey !== authState.pubkey) {
            showToast("You can only edit your own addressable videos");
            return;
          }
          identifier = existingAddr.identifier;
        }
        if (!identifier) {
          identifier = makeRandomIdentifier(baseKind === 22 ? "short" : "video");
        }
        tags.push(["d", identifier]);
      }

      const unsigned = buildUnsignedEvent(kind, summary || title, tags);
      updateStudioUploadEventInspector();
      const signed = await signEvent(unsigned);
      await publishEvent(signed);
      showToast("Published");
    } catch (error) {
      showToast(error?.message || "Publish failed");
    }
  });
}

if (studioLoadBtn) {
  studioLoadBtn.addEventListener("click", async () => {
    try {
      if (!authState.pubkey) {
        showToast("Sign in to edit");
        openModal(authModal);
        return;
      }
      const addr = parseAddressableCoord(studioEditCoord?.value);
      if (!addr) {
        showToast("Paste a valid 34235/34236 coordinate");
        return;
      }
      if (addr.pubkey !== authState.pubkey) {
        showToast("You can only edit your own addressable videos");
        return;
      }

      if (studioStatus) studioStatus.textContent = "Loading…";
      const event = await fetchAddressableVideoEvent(addr);
      if (!event) {
        if (studioStatus) studioStatus.textContent = "Ready.";
        showToast("No event found for that coordinate");
        return;
      }

      studioLoadedPublishedAt = getTagValue(event.tags, "published_at") || "";

      const baseKind = addr.kind === 34236 ? 22 : 21;
      if (studioEditable) studioEditable.checked = true;
      if (studioKind) studioKind.value = String(baseKind);
      if (studioIdentifier) studioIdentifier.value = addr.identifier;
      if (studioTitle) studioTitle.value = getTagValue(event.tags, "title") || "";
      const urlTag = coerceUrlTag(event.tags);
      if (studioUrl) studioUrl.value = urlTag.url || "";
      if (studioMime) studioMime.value = urlTag.mime || "";
      if (studioThumb) studioThumb.value = getTagValue(event.tags, "thumb") || getTagValue(event.tags, "image") || "";
      if (studioSummary) studioSummary.value = getTagValue(event.tags, "summary") || "";

      const existingTags = (event.tags || [])
        .filter((t) => t && t[0] === "t" && String(t[1] || "").trim())
        .map((t) => String(t[1] || "").trim());
      setStudioUploadTags(existingTags);
      if (studioTagsInput) studioTagsInput.value = "";

      const hasCwTag = (event.tags || []).some((t) => t && (t[0] === "content-warning" || t[0] === "content_warning" || t[0] === "cw"));
      const cwValues = parseContentWarningValuesFromTags(event.tags);
      if (studioCw) studioCw.checked = hasCwTag;
      syncContentWarningUi();
      setSelectedPresetCwReasons(cwValues);
      const presetSet = new Set(getSelectedPresetCwReasons());
      const remaining = cwValues.filter((v) => !presetSet.has(v));
      setStudioUploadCustomCw(remaining);
      if (studioCwCustomInput) studioCwCustomInput.value = "";

      const imeta = getImetaValues(event.tags);
      const hasImeta = Boolean(imeta.url || imeta.mime || imeta.image || imeta.duration);
      if (studioAdvanced) studioAdvanced.checked = hasImeta;
      syncAdvancedUi();
      if (studioImeta) studioImeta.checked = hasImeta;
      if (studioDuration) studioDuration.value = imeta.duration || "";

      if (studioStatus) studioStatus.textContent = "Loaded. Make changes and publish.";
      updateStudioUploadEventInspector();
      showToast("Loaded");
    } catch (error) {
      if (studioStatus) studioStatus.textContent = "Ready.";
      showToast(error?.message || "Load failed");
    }
  });
}

function bindStudioUploadInspectorLiveUpdates() {
  const nodes = [
    studioTitle,
    studioUrl,
    studioMime,
    studioThumb,
    studioSummary,
    studioKind,
    studioEditable,
    studioIdentifier,
    studioEditCoord,
    studioAdvanced,
    studioImeta,
    studioDuration,
  ].filter(Boolean);

  nodes.forEach((el) => {
    const type = String(el.type || "").toLowerCase();
    const eventName = type === "checkbox" || el.tagName === "SELECT" ? "change" : "input";
    el.addEventListener(eventName, () => {
      updateStudioUploadEventInspector();
    });
  });
}

if (studioProfileSave) {
  studioProfileSave.addEventListener("click", async () => {
    try {
      if (!authState.pubkey) {
        showToast("Sign in to edit your channel");
        openModal(authModal);
        return;
      }
      const existing = profilesCache.get(authState.pubkey) || {};
      const name = String(studioProfileName?.value || "").trim();
      const about = String(studioProfileAbout?.value || "").trim();
      const picture = String(studioProfilePicture?.value || "").trim();
      const nextProfile = {
        ...existing,
        name,
        about,
        picture,
      };
      await publishProfileMetadata(nextProfile);
      showToast("Channel updated");
    } catch (error) {
      showToast(error?.message || "Update failed");
    }
  });
}

window.addEventListener("hashchange", handleStudioRoute);
if (studioAdvanced) {
  studioAdvanced.addEventListener("change", () => {
    syncAdvancedUi();
    updateStudioUploadEventInspector();
  });
}

if (studioCw) {
  studioCw.addEventListener("change", () => {
    syncContentWarningUi();
    updateStudioUploadEventInspector();
  });
}
restoreAuth()
  .then(async () => {
    if (authState.pubkey) {
      await ensureProfiles([authState.pubkey]);
    }
  })
  .then(() => {
    updateUi();
    handleStudioRoute();
  })
  .catch(() => {
    updateUi();
    handleStudioRoute();
  });
updateUi();
handleStudioRoute();
