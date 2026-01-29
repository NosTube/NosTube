const studioAuthBtn = document.getElementById("studio-auth");
const studioAuthLabel = document.getElementById("studio-auth-label");
const studioAuthImage = document.getElementById("studio-auth-image");
const studioStatus = document.getElementById("studio-status");

const studioNavLinks = Array.from(document.querySelectorAll("[data-studio-nav]"));
const studioPages = Array.from(document.querySelectorAll("[data-studio-page]"));

const studioTitle = document.getElementById("studio-title");
const studioUrl = document.getElementById("studio-url");
const studioMime = document.getElementById("studio-mime");
const studioThumb = document.getElementById("studio-thumb");
const studioSummary = document.getElementById("studio-summary");
const studioKind = document.getElementById("studio-kind");
const studioPublish = document.getElementById("studio-publish");

const studioProfileName = document.getElementById("studio-profile-name");
const studioProfileAbout = document.getElementById("studio-profile-about");
const studioProfilePicture = document.getElementById("studio-profile-picture");
const studioProfileSave = document.getElementById("studio-profile-save");

const authModal = document.getElementById("studio-auth-modal");
const authExtBtn = document.getElementById("studio-auth-ext");
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

if (studioPublish) {
  studioPublish.addEventListener("click", async () => {
    try {
      if (!authState.pubkey) {
        showToast("Sign in to publish");
        openModal(authModal);
        return;
      }
      const kind = Number(studioKind?.value || 21);
      const title = String(studioTitle?.value || "").trim();
      const url = String(studioUrl?.value || "").trim();
      if (!title || !url) {
        showToast("Title and URL are required");
        return;
      }
      const tags = [];
      tags.push(["title", title]);
      tags.push(["published_at", String(Math.floor(Date.now() / 1000))]);
      const mime = String(studioMime?.value || "").trim();
      tags.push(["url", url, mime].filter(Boolean));
      const thumb = String(studioThumb?.value || "").trim();
      if (thumb) tags.push(["thumb", thumb]);
      const summary = String(studioSummary?.value || "").trim();
      if (summary) tags.push(["summary", summary]);

      const unsigned = buildUnsignedEvent(kind, summary || title, tags);
      const signed = await signEvent(unsigned);
      await publishEvent(signed);
      showToast("Published");
    } catch (error) {
      showToast(error?.message || "Publish failed");
    }
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
