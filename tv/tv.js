const playerScreen = document.getElementById("player-screen");
const searchInput = document.getElementById("search-input");
const railButtons = Array.from(document.querySelectorAll(".rail-item"));
const searchFocusables = Array.from(document.querySelectorAll("#tv-page-search .focusable"));
const playerFocusables = Array.from(document.querySelectorAll("#player-screen .focusable"));
const recommendedRow = document.getElementById("tv-row-recommended");
const newRow = document.getElementById("tv-row-new");
const recommendedEmpty = document.getElementById("tv-recommended-empty");
const newEmpty = document.getElementById("tv-new-empty");
const cardTemplate = document.getElementById("tv-card-template");
const upnextRow = document.getElementById("player-upnext-row");
const upnextTrack = document.getElementById("player-upnext-track");
const moreSection = document.getElementById("player-more-section");
const moreTitle = document.getElementById("player-more-title");
const moreRow = document.getElementById("player-more-row");
const upnextTemplate = document.getElementById("tv-upnext-template");
const tvVideo = document.getElementById("tv-video");
const playerProgressInner = document.getElementById("player-progress-inner");
const playerTimeCurrent = document.getElementById("player-time-current");
const playerTimeTotal = document.getElementById("player-time-total");
const playerToggle = playerScreen?.querySelector('[data-player-action="toggle"]') || null;
const playerToggleIcon = playerToggle?.querySelector(".material-symbols-rounded") || null;
const playerToggleLabel = playerToggle?.querySelector(".hud-label") || null;
const playerChannelButton = playerScreen?.querySelector(".player-channel-btn") || null;
const playerChannelAvatar = playerChannelButton?.querySelector(".player-channel-avatar") || null;
const playerChannelName = playerChannelButton?.querySelector(".player-channel-name") || null;
const channelHero = document.querySelector("#tv-page-channel .channel-hero");
const channelAvatar = document.getElementById("channel-avatar");
const channelAvatarImg = channelAvatar?.querySelector(".channel-avatar-img") || null;
const channelAvatarText = channelAvatar?.querySelector(".channel-avatar-text") || null;
const channelTitle = document.getElementById("channel-title");
const channelMeta = document.getElementById("channel-meta");
const channelRow = document.getElementById("tv-row-channel");
const channelEmpty = document.getElementById("tv-channel-empty");
const tvBackdrop = document.querySelector(".tv-backdrop");
const tvKeyboard = document.getElementById("tv-keyboard");

const focusState = {
  zone: "content",
  row: 0,
  col: 0,
  railIndex: 0,
};
const lastContentFocus = { row: 0, col: 0 };
let tvVideos = [];
let currentPlayerPubkey = "";

const rowMap = new Map();
const searchRowMap = new Map();
const tvPages = Array.from(document.querySelectorAll(".tv-page"));
const tvSectionLabel = document.querySelector(".tv-section-label");
let currentPage = "home";
const playerRowMap = new Map();

const lastColByRowKey = new Map();

function getRowMemoryKey(zone, row) {
  const pageKey = zone === "content" ? currentPage : zone;
  return `${pageKey}:${row}`;
}

function isSearchKeyboardRow(row) {
  const items = searchRowMap.get(row) || [];
  return items.some((el) => el && el.closest && el.closest("#tv-keyboard"));
}

const RELAYS = [
  "wss://relay.damus.io",
  "wss://nos.lol",
  "wss://relay.snort.social",
  "wss://nostr.wine",
  "wss://relay.nostr.band",
];

const FEED_LIMIT = 8;
const MAX_EVENT_AGE_DAYS = 60;
const DEBUG_NOSTR = true;

let tvHls = null;

function initialsFromName(name) {
  const safe = String(name || "").trim();
  if (!safe) return "N";
  const parts = safe.split(/\s+/).slice(0, 2);
  return parts.map((part) => part[0]?.toUpperCase() || "").join("") || "N";
}

function normalizeThumbUrl(url) {
  if (!url) return "";
  if (url.startsWith("http://")) {
    return `https://${url.slice(7)}`;
  }
  return url;
}

function isLikelyImageThumb(url, mime) {
  if (!url) return false;
  if (mime && /^image\//i.test(mime)) return true;
  const lower = url.toLowerCase();
  if (lower.startsWith("data:image/")) return true;
  const clean = lower.split("#")[0].split("?")[0];
  return (
    clean.endsWith(".jpg") ||
    clean.endsWith(".jpeg") ||
    clean.endsWith(".png") ||
    clean.endsWith(".gif") ||
    clean.endsWith(".webp") ||
    clean.endsWith(".avif") ||
    clean.endsWith(".bmp") ||
    clean.endsWith(".svg") ||
    clean.endsWith(".ico")
  );
}

function hashSeedToIndex(seed, modulo) {
  const text = String(seed || "");
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  }
  return modulo > 0 ? hash % modulo : 0;
}

function applyThumbVariant(thumbEl, seed) {
  if (!thumbEl) return;
  thumbEl.classList.remove(
    "alt",
    "alt-2",
    "alt-3",
    "alt-4",
    "alt-5",
    "alt-6",
    "alt-7",
    "alt-8",
    "alt-9",
    "alt-10",
    "alt-11",
    "alt-12",
    "alt-13",
    "alt-14"
  );
  const variants = [
    "alt",
    "alt-2",
    "alt-3",
    "alt-4",
    "alt-5",
    "alt-6",
    "alt-7",
    "alt-8",
    "alt-9",
    "alt-10",
    "alt-11",
    "alt-12",
    "alt-13",
    "alt-14",
  ];
  const idx = hashSeedToIndex(seed, variants.length);
  const cls = variants[idx];
  if (cls) thumbEl.classList.add(cls);
}

function setTileThumb(thumbEl, imgEl, url, mime, seed) {
  if (!thumbEl) return;
  const normalized = normalizeThumbUrl(url);
  const safeUrl = isLikelyImageThumb(normalized, mime) ? normalized : "";
  if (safeUrl) {
    thumbEl.style.backgroundImage = `url('${safeUrl}')`;
  } else {
    thumbEl.style.backgroundImage = "";
    applyThumbVariant(thumbEl, seed || normalized);
  }
  if (!imgEl) return;
  imgEl.classList.remove("is-loaded");
  if (safeUrl) {
    imgEl.onload = () => {
      imgEl.classList.add("is-loaded");
    };
    imgEl.onerror = () => {
      imgEl.classList.remove("is-loaded");
    };
    imgEl.src = safeUrl;
  } else {
    imgEl.removeAttribute("src");
  }
}

function normalizeVideoUrl(url) {
  if (!url) return "";
  if (url.startsWith("ipfs://")) {
    return `https://ipfs.io/ipfs/${url.replace("ipfs://", "")}`;
  }
  return url;
}

function buildRowMap(map, items) {
  map.clear();
  items.forEach((el) => {
    const row = Number(el.dataset.focusRow || 0);
    const col = Number(el.dataset.focusCol || 0);
    if (!map.has(row)) {
      map.set(row, []);
    }
    map.get(row)[col] = el;
  });
}

function buildRowMapByOrder(map, items) {
  map.clear();
  items.forEach((el) => {
    const row = Number(el.dataset.focusRow || 0);
    if (!map.has(row)) {
      map.set(row, []);
    }
    const rowItems = map.get(row);
    const col = rowItems.length;
    el.dataset.focusCol = String(col);
    rowItems.push(el);
  });
}

function refreshContentFocusables() {
  const activePage = document.querySelector(".tv-page.is-active") || document.getElementById("tv-page-home");
  const contentFocusables = activePage
    ? Array.from(activePage.querySelectorAll(".focusable"))
    : [];
  buildRowMapByOrder(rowMap, contentFocusables);
}

function refreshSearchFocusables() {
  const searchFocusables = Array.from(
    document.querySelectorAll("#tv-page-search .focusable")
  );
  buildRowMap(searchRowMap, searchFocusables);
}

function updateRailActivePage(page) {
  const active = page || currentPage;
  railButtons.forEach((btn) => {
    btn.classList.toggle("is-active-page", btn.dataset.page === active);
  });
}

function setActivePage(page, options) {
  const opts = options && typeof options === "object" ? options : {};
  const nextPage = page || "home";
  currentPage = nextPage;
  updateRailActivePage(nextPage);
  if (nextPage !== "channel") {
    document.body.classList.remove("is-channel-banner");
    document.body.style.removeProperty("--channel-banner");
    if (tvBackdrop) tvBackdrop.style.backgroundImage = "";
  }
  tvPages.forEach((node) => {
    node.classList.toggle("is-active", node.dataset.page === nextPage);
  });
  if (tvSectionLabel) {
    const labels = {
      home: "Home",
      search: "Search",
      shorts: "Shorts",
      subs: "Subscriptions",
      library: "Library",
      settings: "Settings",
      profile: "Profile",
      channel: "Channel",
    };
    tvSectionLabel.textContent = labels[nextPage] || "NosTube";
  }
  refreshContentFocusables();
  refreshSearchFocusables();
  if (opts.fromRail) {
    focusState.zone = "rail";
  } else {
    focusState.zone = nextPage === "search" ? "search" : "content";
  }
  if (!opts.preserveFocus) {
    focusState.row = 0;
    focusState.col = 0;
  } else {
    const map = getMapForZone();
    const row = map.get(focusState.row) || [];
    if (!row.length) {
      focusState.row = 0;
      focusState.col = 0;
    } else {
      focusState.col = Math.max(0, Math.min(focusState.col, row.length - 1));
    }
  }
  if (focusState.zone === "rail") {
    focusRail();
  } else {
    focusContent();
  }
  if (opts.updateHistory !== false) {
    const replace = opts.push !== true;
    setTvRoute(nextPage, "", replace);
  }
}

function refreshPlayerFocusables() {
  const playerFocusables = Array.from(document.querySelectorAll("#player-screen .focusable")).filter(
    (el) => !el.closest("[hidden]")
  );
  buildRowMap(playerRowMap, playerFocusables);
}

buildRowMap(searchRowMap, searchFocusables);
buildRowMap(playerRowMap, playerFocusables);

function clearFocus() {
  document.querySelectorAll(".is-focused").forEach((el) => {
    el.classList.remove("is-focused");
  });
}

function getRailIndexForPage(page) {
  const targetPage = page || currentPage;
  const idx = railButtons.findIndex((btn) => btn.dataset.page === targetPage);
  return idx >= 0 ? idx : 0;
}

function focusRail() {
  clearFocus();
  document.body.classList.add("is-rail-active");
  const rail = railButtons[focusState.railIndex];
  if (rail) {
    rail.classList.add("is-focused");
  }
}

function getMapForZone() {
  if (focusState.zone === "search") {
    return searchRowMap;
  }
  if (focusState.zone === "player") {
    return playerRowMap;
  }
  return rowMap;
}

function getMaxRow(map) {
  const keys = Array.from(map.keys());
  return keys.length ? Math.max(...keys) : 0;
}

function getNextNonEmptyRow(map, startRow, direction) {
  const maxRow = getMaxRow(map);
  const step = direction >= 0 ? 1 : -1;
  let next = Math.max(0, Math.min(maxRow, startRow + step));
  while (next >= 0 && next <= maxRow) {
    const items = map.get(next) || [];
    if (items.length > 0) return next;
    next += step;
  }
  return startRow;
}

function getSearchKeyboardTarget(row, col) {
  const rowItems = searchRowMap.get(row) || [];
  const desiredCol = Number(col) || 0;
  const match = rowItems.find(
    (el) => el && el.closest && el.closest("#tv-keyboard") && Number(el.dataset.focusCol) === desiredCol
  );
  if (match) return match;
  return rowItems.find((el) => el && el.closest && el.closest("#tv-keyboard")) || null;
}

function getSearchKeyboardKey(row, col) {
  if (!tvKeyboard) return null;
  return tvKeyboard.querySelector(
    `.key[data-focus-row="${String(row)}"][data-focus-col="${String(col)}"]`
  );
}

function applySearchKey(key) {
  if (!searchInput) return;
  const value = String(key || "");
  if (!value) return;
  if (value === "SPACE") {
    searchInput.value += " ";
    return;
  }
  if (value === "DEL") {
    searchInput.value = searchInput.value.slice(0, -1);
    return;
  }
  if (value === "CLEAR") {
    searchInput.value = "";
    return;
  }
  if (value === "DONE") {
    closeSearch();
    return;
  }
  searchInput.value += value.toLowerCase();
}

function focusContent() {
  clearFocus();
  document.body.classList.toggle("is-rail-active", focusState.zone === "rail");
  const activeMap = getMapForZone();
  const row = activeMap.get(focusState.row) || [];
  const target = row[focusState.col];
  if (target) {
    target.classList.add("is-focused");
    if (focusState.zone === "search" && target.closest && target.closest("#tv-keyboard")) {
      focusState.row = Number(target.dataset.focusRow || focusState.row || 0);
      focusState.col = Number(target.dataset.focusCol || focusState.col || 0);
    }
    if (focusState.zone === "player") {
      const scrollRow = target.closest(".player-upnext-row, .row-track");
      if (scrollRow) {
        const rowRect = scrollRow.getBoundingClientRect();
        const rect = target.getBoundingClientRect();
        const delta = rect.left - rowRect.left - (rowRect.width / 2 - rect.width / 2);
        if (Math.abs(delta) > 1) {
          scrollRow.scrollTo({ left: scrollRow.scrollLeft + delta, behavior: "smooth" });
        }
      }
    } else {
      target.scrollIntoView({ block: "center", inline: "center" });
    }
  }
  updatePlayerRowState();
  if (focusState.zone === "player") {
    requestAnimationFrame(() => updatePlayerRowState());
  }
}

function openSearch() {
  if (focusState.zone === "content") {
    lastContentFocus.row = focusState.row;
    lastContentFocus.col = focusState.col;
  }
  if (playerScreen?.classList.contains("active")) {
    closePlayer();
  }
  document.body.classList.remove("is-player-active");
  setActivePage("search");
}

function syncSearchFocusFromDom() {
  if (currentPage !== "search") return;
  const focused = document.querySelector("#tv-page-search .is-focused");
  if (!focused || !focused.closest) return;
  if (!focused.closest("#tv-keyboard")) return;
  focusState.zone = "search";
  focusState.row = Number(focused.dataset.focusRow || focusState.row || 0);
  focusState.col = Number(focused.dataset.focusCol || focusState.col || 0);
}

tvKeyboard?.addEventListener("click", (event) => {
  const keyBtn = event.target && event.target.closest ? event.target.closest(".key") : null;
  if (!keyBtn || !tvKeyboard.contains(keyBtn)) return;
  event.preventDefault();
  event.stopPropagation();
  focusState.zone = "search";
  focusState.row = Number(keyBtn.dataset.focusRow || 0);
  focusState.col = Number(keyBtn.dataset.focusCol || 0);
  focusContent();
  applySearchKey(keyBtn.dataset.key);
});

function closeSearch() {
  setActivePage("home");
  focusState.zone = "content";
  focusState.row = lastContentFocus.row;
  focusState.col = lastContentFocus.col;
  focusContent();
}

function openPlayer(target) {
  if (focusState.zone === "content") {
    lastContentFocus.row = focusState.row;
    lastContentFocus.col = focusState.col;
  }
  document.body.classList.add("is-player-active");
  if (currentPage === "search") {
    setActivePage("home");
  }
  const playerTitle = playerScreen.querySelector(".player-title");
  const playerMeta = playerScreen.querySelector(".player-meta");
  if (target) {
    playerTitle.textContent = target.dataset.title || "Now playing";
    playerMeta.textContent = target.dataset.channel || "NosTube";
    currentPlayerPubkey = target.dataset.pubkey || "";
    if (playerChannelName) {
      playerChannelName.textContent = target.dataset.channelName || "NosTube";
    }
    if (playerChannelAvatar) {
      playerChannelAvatar.textContent = initialsFromName(target.dataset.channelName || "N");
    }
    if (tvVideo) {
      const url = normalizeVideoUrl(target.dataset.url || "");
      const mime = target.dataset.mime || "";
      loadTvVideo(url, mime);
      updateTimeline();
      tvVideo.play().catch(() => {});
    }
  }
  playerScreen.classList.add("active");
  playerScreen.setAttribute("aria-hidden", "false");
  focusState.zone = "player";
  focusState.row = 1;
  focusState.col = 0;
  renderUpnext(target?.dataset?.id || "");
  refreshPlayerFocusables();
  resetPlayerScrollState();
  updateTvPlayState();
  updatePlayerRowState();
  focusContent();
  requestAnimationFrame(() => updatePlayerRowState());
}

function openPlayerFromVideo(video) {
  if (!video) return;
  document.body.classList.add("is-player-active");
  if (currentPage === "search") {
    setActivePage("home");
  }
  const playerTitle = playerScreen.querySelector(".player-title");
  const playerMeta = playerScreen.querySelector(".player-meta");
  playerTitle.textContent = video.title || "Now playing";
  playerMeta.textContent = `${video.channel || "NosTube"} · ${timeAgo(video.published)}`;
  currentPlayerPubkey = video.pubkey || "";
  if (playerChannelName) playerChannelName.textContent = video.channel || "NosTube";
  if (playerChannelAvatar) playerChannelAvatar.textContent = initialsFromName(video.channel || "N");
  if (tvVideo) {
    const url = normalizeVideoUrl(video.url || "");
    const mime = video.mime || "";
    loadTvVideo(url, mime);
    updateTimeline();
    tvVideo.play().catch(() => {});
  }
  playerScreen.classList.add("active");
  playerScreen.setAttribute("aria-hidden", "false");
  focusState.zone = "player";
  focusState.row = 1;
  focusState.col = 0;
  renderUpnext(video.id || "");
  refreshPlayerFocusables();
  resetPlayerScrollState();
  updateTvPlayState();
  updatePlayerRowState();
  focusContent();
  requestAnimationFrame(() => updatePlayerRowState());
}

function resetPlayerScrollState() {
  if (!playerScreen) return;
  playerScreen
    .querySelectorAll(".player-upnext-row, .player-upnext-track")
    .forEach((node) => {
      node.scrollLeft = 0;
    });
}

function closePlayer() {
  playerScreen.classList.remove("active");
  playerScreen.classList.remove("player-row-hud", "player-row-lower", "player-row-deep");
  playerScreen.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-player-active");
  currentPlayerPubkey = "";
  Array.from(lastColByRowKey.keys()).forEach((key) => {
    if (key.startsWith("player:")) {
      lastColByRowKey.delete(key);
    }
  });
  resetPlayerScrollState();
  focusState.zone = "content";
  focusState.row = lastContentFocus.row;
  focusState.col = lastContentFocus.col;
  teardownTvPlayer();
  focusContent();
}

function getTvRoute() {
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw) return { page: "home" };
  const [path, query] = raw.split("?");
  const [page, id] = path.split("/");
  const params = new URLSearchParams(query || "");
  return {
    page: page || "home",
    id: id || params.get("id") || params.get("v") || "",
  };
}

function setTvRoute(page, id, replace) {
  const targetPage = page || "home";
  const hash = targetPage === "player" ? `#player/${id || ""}` : `#${targetPage}`;
  if (replace) {
    history.replaceState({ page: targetPage, id }, "", hash);
  } else {
    history.pushState({ page: targetPage, id }, "", hash);
  }
}

function handleTvRoute() {
  const route = getTvRoute();
  if (route.page === "player") {
    const video = tvVideos.find((item) => item.id === route.id);
    if (video) {
      openPlayerFromVideo(video);
    } else {
      closePlayer();
    }
    return;
  }
  if (route.page === "channel" && route.id) {
    closePlayer();
    renderChannel(route.id);
    setActivePage("channel", { updateHistory: false, preserveFocus: true });
    return;
  }
  closePlayer();
  const page = route.page || "home";
  setActivePage(page, { updateHistory: false, replace: true, preserveFocus: true });
}

function formatTime(seconds) {
  if (!seconds || Number.isNaN(seconds)) {
    return "0:00";
  }
  const total = Math.max(0, Math.floor(seconds));
  const mins = Math.floor(total / 60);
  const secs = total % 60;
  return `${mins}:${String(secs).padStart(2, "0")}`;
}

function updateTimeline() {
  if (!tvVideo) return;
  if (playerTimeCurrent) {
    playerTimeCurrent.textContent = formatTime(tvVideo.currentTime);
  }
  if (playerTimeTotal) {
    playerTimeTotal.textContent = formatTime(tvVideo.duration);
  }
  if (playerProgressInner && tvVideo.duration) {
    const pct = Math.min(100, (tvVideo.currentTime / tvVideo.duration) * 100);
    playerProgressInner.style.width = `${pct}%`;
  }
}

function updateTvPlayState() {
  if (!tvVideo || !playerToggle) return;
  const isPlaying = !tvVideo.paused && !tvVideo.ended;
  if (playerToggleIcon) {
    playerToggleIcon.textContent = isPlaying ? "pause" : "play_arrow";
  }
  if (playerToggleLabel) {
    playerToggleLabel.textContent = isPlaying ? "Pause" : "Play";
  }
}

function updatePlayerRowState() {
  if (!playerScreen) return;
  if (focusState.zone !== "player") {
    playerScreen.classList.remove("player-row-hud", "player-row-lower", "player-row-deep");
    return;
  }
  playerScreen.classList.remove("player-row-hud", "player-row-lower", "player-row-deep");

  const sections = Array.from(playerScreen.querySelectorAll(".player-upnext-section")).filter(
    (node) => !node.hasAttribute("hidden")
  );

  const focusedEl = playerScreen.querySelector(".is-focused");
  const focusedSection = focusedEl ? focusedEl.closest(".player-upnext-section") : null;
  const focusedIndex = focusedSection ? sections.indexOf(focusedSection) : -1;

  if (focusedIndex >= 0) {
    playerScreen.classList.add("player-row-lower");
  } else {
    playerScreen.classList.add("player-row-hud");
  }

  sections.forEach((node) => node.classList.remove("is-active", "is-peek", "is-prev"));
  if (!sections.length) return;

  if (focusedIndex < 0) {
    sections[0]?.classList.add("is-active");
    return;
  }

  sections.forEach((node, index) => {
    if (index < focusedIndex) {
      node.classList.add("is-prev");
      return;
    }
    if (index === focusedIndex) {
      node.classList.add("is-active");
      return;
    }
    if (index === focusedIndex + 1) {
      node.classList.add("is-peek");
    }
  });
}

function openPlayerWithHistory(target) {
  if (!target) return;
  const current = getTvRoute();
  const id = target.dataset.id || "";
  if (current.page === "player") {
    setTvRoute("player", id, true);
  } else {
    setTvRoute("player", id, false);
  }
  openPlayer(target);
}

function openChannel(pubkey) {
  if (!pubkey) return;
  const current = getTvRoute();
  const replace = current.page === "player";
  if (playerScreen?.classList.contains("active")) {
    closePlayer();
  }
  setTvRoute("channel", pubkey, replace);
  renderChannel(pubkey);
  setActivePage("channel", { updateHistory: false });
  refreshContentFocusables();
  focusContent();
}

function renderChannel(pubkey) {
  if (!channelRow || !channelEmpty) return;
  const videos = tvVideos.filter((video) => video.pubkey === pubkey);
  channelRow.innerHTML = "";
  if (!videos.length) {
    channelEmpty.hidden = false;
    return;
  }
  channelEmpty.hidden = true;
  const profileName = videos[0]?.channel || "Channel";
  if (channelTitle) channelTitle.textContent = profileName;
  if (channelMeta) channelMeta.textContent = pubkey.slice(0, 12);
  const initials = initialsFromName(profileName);
  if (channelAvatarText) channelAvatarText.textContent = initials;
  if (channelAvatarImg) {
    const pictureUrl = normalizeThumbUrl(videos[0]?.channelPicture || "");
    if (isLikelyImageThumb(pictureUrl)) {
      channelAvatarImg.src = pictureUrl;
      channelAvatar?.classList.add("has-image");
    } else {
      channelAvatarImg.removeAttribute("src");
      channelAvatar?.classList.remove("has-image");
    }
  } else if (channelAvatar) {
    channelAvatar.textContent = initials;
  }
  if (channelHero) {
    const bannerUrl = videos[0]?.channelBanner || "";
    const normalized = normalizeThumbUrl(bannerUrl);
    if (isLikelyImageThumb(normalized)) {
      document.body.classList.add("is-channel-banner");
      document.body.style.setProperty("--channel-banner", `url('${normalized}')`);
    } else {
      document.body.classList.remove("is-channel-banner");
      document.body.style.removeProperty("--channel-banner");
    }
  }
  videos.slice(0, 12).forEach((video, index) => {
    const clone = cardTemplate.content.cloneNode(true);
    const card = clone.querySelector(".tile");
    const thumb = clone.querySelector(".tile-thumb");
    const img = clone.querySelector(".tile-img");
    const title = clone.querySelector(".tile-title");
    const channel = clone.querySelector(".tile-channel");
    card.dataset.focusRow = 0;
    card.dataset.focusCol = index;
    card.dataset.title = video.title;
    card.dataset.channel = `${video.channel} · ${timeAgo(video.published)}`;
    card.dataset.channelName = video.channel || profileName;
    card.dataset.url = video.url || "";
    card.dataset.mime = video.mime || "";
    card.dataset.id = video.id;
    card.dataset.pubkey = video.pubkey || "";
    title.textContent = video.title;
    channel.textContent = video.channel;
    setTileThumb(thumb, img, video.thumb, video.thumbMime, video.id);
    channelRow.appendChild(clone);
  });
  refreshContentFocusables();
}

function teardownTvPlayer() {
  if (tvHls) {
    tvHls.destroy();
    tvHls = null;
  }
  if (tvVideo) {
    tvVideo.pause();
    tvVideo.removeAttribute("src");
    tvVideo.load();
  }
}

function guessMimeType(url, fallbackMime) {
  if (fallbackMime) return fallbackMime;
  const lower = url.toLowerCase();
  if (lower.endsWith(".m3u8")) return "application/vnd.apple.mpegurl";
  if (lower.endsWith(".mpd")) return "application/dash+xml";
  if (lower.endsWith(".webm")) return "video/webm";
  if (lower.endsWith(".ogv") || lower.endsWith(".ogg")) return "video/ogg";
  if (lower.endsWith(".mp4")) return "video/mp4";
  if (lower.endsWith(".mov")) return "video/quicktime";
  return "";
}

function setVideoSource(video, url, mime) {
  if (!video) return;
  video.querySelectorAll("source").forEach((source) => source.remove());
  const source = document.createElement("source");
  source.src = url;
  if (mime) {
    source.type = mime;
  }
  video.appendChild(source);
}

function loadTvVideo(url, mimeHint) {
  if (!tvVideo) return;
  teardownTvPlayer();
  if (!url) return;
  const mime = guessMimeType(url, mimeHint);
  const isHls = mime === "application/vnd.apple.mpegurl";
  if (isHls && tvVideo.canPlayType(mime)) {
    tvVideo.src = url;
    tvVideo.load();
    return;
  }
  if (isHls && window.Hls && window.Hls.isSupported()) {
    tvHls = new window.Hls({ enableWorker: true, lowLatencyMode: true });
    tvHls.loadSource(url);
    tvHls.attachMedia(tvVideo);
    return;
  }
  setVideoSource(tvVideo, url, mime);
  tvVideo.load();
}

function handleKeyPress(event) {
  const { key } = event;

  if (currentPage === "search" && focusState.zone === "content") {
    focusState.zone = "search";
    const focused = document.querySelector("#tv-page-search .is-focused");
    if (focused) {
      focusState.row = Number(focused.dataset.focusRow || 0);
      focusState.col = Number(focused.dataset.focusCol || 0);
    }
  }

  if (
    [
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Enter",
      "Escape",
      "Backspace",
    ].includes(key)
  ) {
    event.preventDefault();
    event.stopPropagation();
  }

  if (focusState.zone === "search") {
    if (key === "Escape") {
      closeSearch();
      return;
    }
    if (key === "Enter") {
      syncSearchFocusFromDom();
      const direct = getSearchKeyboardKey(focusState.row, focusState.col);
      if (direct && direct.dataset && direct.dataset.key) {
        applySearchKey(direct.dataset.key);
        return;
      }
      const row = searchRowMap.get(focusState.row) || [];
      const target = row[focusState.col];
      if (target && target.dataset && target.dataset.key) applySearchKey(target.dataset.key);
      return;
    }
  }

  if (focusState.zone === "player") {
    if (key === "Escape" || key === "Backspace") {
      closePlayer();
      return;
    }
  }

  if (key === "ArrowLeft") {
    if (focusState.zone === "rail") {
      focusState.zone = "content";
      focusContent();
      return;
    }

    if (["content", "search", "player"].includes(focusState.zone)) {
      if (focusState.zone === "search" && focusState.col === 0) {
        focusState.zone = "rail";
        focusState.railIndex = getRailIndexForPage(currentPage);
        focusRail();
        return;
      }
      if (focusState.col > 0) {
        focusState.col -= 1;
      } else if (focusState.zone === "content") {
        focusState.zone = "rail";
        focusState.railIndex = getRailIndexForPage(currentPage);
        focusRail();
        return;
      }
      focusContent();
      return;
    }
  }

  if (key === "ArrowRight") {
    if (focusState.zone === "rail") {
      focusState.zone = "content";
      focusContent();
      return;
    }

    if (["content", "search", "player"].includes(focusState.zone)) {
      const row = getMapForZone().get(focusState.row) || [];
      if (focusState.col < row.length - 1) {
        focusState.col += 1;
      }
      focusContent();
      return;
    }
  }

  if (key === "ArrowUp") {
    if (focusState.zone === "rail") {
      focusState.railIndex = Math.max(0, focusState.railIndex - 1);
      focusRail();
      const page = railButtons[focusState.railIndex]?.dataset?.page;
      if (page) setActivePage(page, { fromRail: true });
      return;
    }

    if (["content", "search", "player"].includes(focusState.zone)) {
      const map = getMapForZone();
      if (focusState.zone === "search") {
        const focused = document.querySelector("#tv-page-search .is-focused");
        if (focused && focused.closest && focused.closest("#tv-keyboard")) {
          const currentRow = Number(focused.dataset.focusRow || focusState.row || 0);
          const currentCol = Number(focused.dataset.focusCol || focusState.col || 0);
          const nextRow = currentRow - 1;
          const nextEl = getSearchKeyboardKey(nextRow, currentCol);
          if (nextEl) {
            focusState.row = nextRow;
            focusState.col = currentCol;
            focusContent();
            return;
          }
        }
      }
      const prevRow = focusState.row;
      lastColByRowKey.set(getRowMemoryKey(focusState.zone, prevRow), focusState.col);
      focusState.row = getNextNonEmptyRow(map, focusState.row, -1);
      const rowItems = map.get(focusState.row) || [];
      const isSearchKbMove =
        focusState.zone === "search" &&
        isSearchKeyboardRow(prevRow) &&
        isSearchKeyboardRow(focusState.row);
      if (isSearchKbMove) {
        focusState.col = Math.max(0, Math.min(focusState.col, rowItems.length - 1));
      } else {
        const storedCol = lastColByRowKey.get(getRowMemoryKey(focusState.zone, focusState.row));
        const nextCol = Number.isFinite(storedCol) ? storedCol : 0;
        focusState.col = Math.max(0, Math.min(nextCol, rowItems.length - 1));
      }
      focusContent();
      return;
    }
  }

  if (key === "ArrowDown") {
    if (focusState.zone === "rail") {
      focusState.railIndex = Math.min(railButtons.length - 1, focusState.railIndex + 1);
      focusRail();
      const page = railButtons[focusState.railIndex]?.dataset?.page;
      if (page) setActivePage(page, { fromRail: true });
      return;
    }

    if (["content", "search", "player"].includes(focusState.zone)) {
      const map = getMapForZone();
      if (focusState.zone === "search") {
        const focused = document.querySelector("#tv-page-search .is-focused");
        if (focused && focused.closest && focused.closest("#tv-keyboard")) {
          const currentRow = Number(focused.dataset.focusRow || focusState.row || 0);
          const currentCol = Number(focused.dataset.focusCol || focusState.col || 0);
          const nextRow = currentRow + 1;
          const nextEl = getSearchKeyboardKey(nextRow, currentCol);
          if (nextEl) {
            focusState.row = nextRow;
            focusState.col = currentCol;
            focusContent();
            return;
          }
        }
      }
      const prevRow = focusState.row;
      lastColByRowKey.set(getRowMemoryKey(focusState.zone, prevRow), focusState.col);
      focusState.row = getNextNonEmptyRow(map, focusState.row, 1);
      const rowItems = map.get(focusState.row) || [];
      const isSearchKbMove =
        focusState.zone === "search" &&
        isSearchKeyboardRow(prevRow) &&
        isSearchKeyboardRow(focusState.row);
      if (isSearchKbMove) {
        focusState.col = Math.max(0, Math.min(focusState.col, rowItems.length - 1));
      } else {
        const storedCol = lastColByRowKey.get(getRowMemoryKey(focusState.zone, focusState.row));
        const nextCol = Number.isFinite(storedCol) ? storedCol : 0;
        focusState.col = Math.max(0, Math.min(nextCol, rowItems.length - 1));
      }
      focusContent();
      return;
    }
  }

  if (key === "Enter") {
    if (focusState.zone === "rail") {
      const selected = railButtons[focusState.railIndex];
      const page = selected?.dataset?.page;
      if (page) setActivePage(page);
      return;
    }

    if (focusState.zone === "player") {
      const row = playerRowMap.get(focusState.row) || [];
      const target = row[focusState.col];
      if (target) {
        const action = target.dataset.playerAction;
        if (action === "back") {
          history.back();
        }
        if (action === "toggle" && tvVideo) {
          if (tvVideo.paused || tvVideo.ended) {
            tvVideo.play().catch(() => {});
          } else {
            tvVideo.pause();
          }
        }
        if (action === "restart" && tvVideo) {
          tvVideo.currentTime = 0;
        }
        if (action === "forward" && tvVideo) {
          tvVideo.currentTime += 10;
        }
        if (action === "channel") {
          openChannel(currentPlayerPubkey);
        }
        if (!action && target.classList.contains("tile")) {
          openPlayerWithHistory(target);
        }
      }
      return;
    }

    if (focusState.zone === "content") {
      const row = rowMap.get(focusState.row) || [];
      const target = row[focusState.col];
      openPlayerWithHistory(target);
      return;
    }
  }

  if (key.toLowerCase() === "s") {
    openSearch();
  }
}

railButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    focusState.zone = "rail";
    focusState.railIndex = index;
    focusRail();
    const page = btn.dataset.page;
    if (page === "search") {
      openSearch();
    } else if (page) {
      setActivePage(page);
    }
  });
});

function getTagValue(tags, key) {
  const tag = tags.find((entry) => entry[0] === key);
  return tag ? tag[1] : "";
}

function getTagWithMime(tags, keys) {
  for (const key of keys) {
    const tag = tags.find((entry) => entry[0] === key && entry[1]);
    if (tag) {
      return { url: tag[1], mime: tag[2] && tag[2].includes("/") ? tag[2] : "" };
    }
  }
  return { url: "", mime: "" };
}

function getImetaUrl(tags) {
  const imetaTags = tags.filter((entry) => entry[0] === "imeta");
  for (const tag of imetaTags) {
    for (const part of tag.slice(1)) {
      const match = part.match(/url\s+([^\s]+)/i);
      if (match) {
        return match[1];
      }
    }
  }
  return "";
}

function getImetaImage(tags) {
  const imetaTags = tags.filter((entry) => entry[0] === "imeta");
  for (const tag of imetaTags) {
    let url = "";
    let mime = "";
    for (const part of tag.slice(1)) {
      const urlMatch = part.match(/url\s+([^\s]+)/i);
      if (urlMatch && !url) url = urlMatch[1];
      const mimeMatch = part.match(/(?:m|type)\s+([^\s]+)/i);
      if (mimeMatch && !mime) mime = mimeMatch[1];
    }
    if (url && isLikelyImageThumb(url, mime)) {
      return { url, mime };
    }
  }
  return { url: "", mime: "" };
}

function getImetaMime(tags) {
  const imetaTags = tags.filter((entry) => entry[0] === "imeta");
  for (const tag of imetaTags) {
    for (const part of tag.slice(1)) {
      const match = part.match(/(?:m|type)\s+([^\s]+)/i);
      if (match) {
        return match[1];
      }
    }
  }
  return "";
}

function extractUrlFromContent(content, regex) {
  if (!content) return "";
  const match = content.match(regex);
  return match ? match[1] : "";
}

function extractUrlFromJson(content) {
  if (!content) return { url: "", mime: "" };
  const trimmed = content.trim();
  if (!trimmed.startsWith("{")) return { url: "", mime: "" };
  try {
    const data = JSON.parse(trimmed);
    const url = data.url || data.video || data.file || "";
    const mime = data.mime || data.m || "";
    return { url, mime };
  } catch (error) {
    return { url: "", mime: "" };
  }
}

const HTTP_URL_RE = new RegExp("(https?:\\/\\/[^\\s]+)", "i");
const IPFS_URL_RE = new RegExp("(ipfs:\\/\\/[^\\s]+)", "i");

function timeAgo(timestamp) {
  const now = Date.now() / 1000;
  const diff = Math.max(0, now - timestamp);
  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(diff / 3600);
  const days = Math.floor(diff / 86400);
  if (minutes < 60) return `${minutes || 1} min ago`;
  if (hours < 24) return `${hours} hours ago`;
  if (days < 7) return `${days} days ago`;
  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks} weeks ago`;
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function parseVideoEvent(event) {
  const tags = event.tags || [];
  const rUrl = tags.find(
    (entry) => entry[0] === "r" && /^(https?:|ipfs:)/i.test(entry[1] || "")
  )?.[1];
  const tagUrl = getTagWithMime(tags, ["url", "video", "file", "u"]);
  const tagThumb = getTagWithMime(tags, ["thumb", "image", "poster"]);
  const imetaImage = getImetaImage(tags);
  const title = getTagValue(tags, "title") || event.content?.split("\n")[0] || "Untitled";
  const thumb = tagThumb.url || getTagValue(tags, "thumb") || getTagValue(tags, "image") || imetaImage.url;
  const thumbMime = tagThumb.mime || imetaImage.mime;
  const published = Number(getTagValue(tags, "published_at")) || event.created_at;
  const jsonUrl = extractUrlFromJson(event.content || "");
  const url = normalizeVideoUrl(
    tagUrl.url ||
      jsonUrl.url ||
      getImetaUrl(tags) ||
      rUrl ||
      extractUrlFromContent(event.content, HTTP_URL_RE) ||
      extractUrlFromContent(event.content, IPFS_URL_RE) ||
      ""
  );
  const mime =
    tagUrl.mime ||
    jsonUrl.mime ||
    getTagValue(tags, "m") ||
    getTagValue(tags, "mime") ||
    getImetaMime(tags) ||
    "";
  return {
    id: event.id,
    pubkey: event.pubkey,
    title,
    thumb,
    thumbMime,
    published,
    url,
    mime,
  };
}

function logEventDebug(event, extracted) {
  if (!DEBUG_NOSTR) return;
  const hasUrl = Boolean(extracted.url);
  if (!hasUrl) {
    const payload = {
      id: event.id,
      kind: event.kind,
      pubkey: event.pubkey,
      created_at: event.created_at,
      tags: event.tags,
      content: event.content,
      extracted,
    };
    console.group("[NosTube TV] Missing video URL");
    console.log(payload);
    console.log("RAW_EVENT_JSON", JSON.stringify(event));
    console.groupEnd();
  } else {
    console.info("[NosTube TV] Video URL", {
      id: event.id,
      kind: event.kind,
      pubkey: event.pubkey,
      url: extracted.url,
      mime: extracted.mime,
    });
  }
}

function requestEvents(relayUrl, filter, onEvent) {
  return new Promise((resolve) => {
    let isDone = false;
    const socket = new WebSocket(relayUrl);
    const subId = `nostube-tv-${Math.random().toString(36).slice(2, 10)}`;
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

async function fetchNostrEvents(kinds, limit) {
  const since = Math.floor(Date.now() / 1000) - MAX_EVENT_AGE_DAYS * 86400;
  const filter = { kinds, limit, since };
  const events = new Map();
  await Promise.all(
    RELAYS.map((relay) =>
      requestEvents(relay, filter, (event) => {
        if (!events.has(event.id)) {
          events.set(event.id, event);
        }
      })
    )
  );
  return Array.from(events.values()).sort((a, b) => b.created_at - a.created_at);
}

async function fetchProfiles(pubkeys) {
  if (!pubkeys.length) return new Map();
  const profiles = new Map();
  const filter = { kinds: [0], authors: pubkeys.slice(0, 80), limit: 80 };
  await Promise.all(
    RELAYS.map((relay) =>
      requestEvents(relay, filter, (event) => {
        if (profiles.has(event.pubkey)) return;
        try {
          const data = JSON.parse(event.content || "{}");
          const banner =
            data.banner ||
            data.header ||
            data.cover ||
            data.background ||
            data.bg ||
            "";
          const picture = data.picture || data.image || data.avatar || "";
          profiles.set(event.pubkey, {
            name: data.display_name || data.name || event.pubkey.slice(0, 8),
            banner: isLikelyImageThumb(banner) ? normalizeThumbUrl(banner) : "",
            picture: isLikelyImageThumb(picture) ? normalizeThumbUrl(picture) : "",
          });
        } catch (error) {
          profiles.set(event.pubkey, { name: event.pubkey.slice(0, 8), banner: "", picture: "" });
        }
      })
    )
  );
  return profiles;
}

function renderRow(container, emptyState, events, profiles, rowIndex) {
  if (!container || !cardTemplate) return;
  container.innerHTML = "";
  if (!events.length) {
    if (emptyState) {
      emptyState.hidden = false;
      emptyState.textContent = "No videos found on relays.";
    }
    return;
  }
  if (emptyState) emptyState.hidden = true;
  events.forEach((event, index) => {
    const video = parseVideoEvent(event);
    logEventDebug(event, video);
    const clone = cardTemplate.content.cloneNode(true);
    const card = clone.querySelector(".tile");
    const thumb = clone.querySelector(".tile-thumb");
    const img = clone.querySelector(".tile-img");
    const title = clone.querySelector(".tile-title");
    const channel = clone.querySelector(".tile-channel");

    card.dataset.focusRow = rowIndex;
    card.dataset.focusCol = index;
    card.dataset.title = video.title;
    card.dataset.channel = `${profiles.get(video.pubkey)?.name || "Nostr creator"} · ${timeAgo(
      video.published
    )}`;
    card.dataset.channelName = profiles.get(video.pubkey)?.name || "Nostr creator";
    card.dataset.url = video.url || "";
    card.dataset.mime = video.mime || "";
    card.dataset.id = video.id;
    card.dataset.pubkey = video.pubkey || "";

    title.textContent = video.title;
    channel.textContent = profiles.get(video.pubkey)?.name || "Nostr creator";

    setTileThumb(thumb, img, video.thumb, video.thumbMime, video.id);

    container.appendChild(clone);
  });
}

function renderUpnext(activeId) {
  if (!upnextRow || !upnextTemplate) return;
  upnextRow.innerHTML = "";
  if (moreRow) moreRow.innerHTML = "";
  if (moreSection) moreSection.hidden = true;
  tvVideos
    .filter((video) => video.id && video.id !== activeId)
    .slice(0, 8)
    .forEach((video, index) => {
      const clone = upnextTemplate.content.cloneNode(true);
      const card = clone.querySelector(".tile");
      const thumb = clone.querySelector(".tile-thumb");
      const img = clone.querySelector(".tile-img");
      const title = clone.querySelector(".tile-title");
      const channel = clone.querySelector(".tile-channel");
      card.dataset.focusRow = 2;
      card.dataset.focusCol = index;
      card.dataset.title = video.title;
      card.dataset.channel = `${video.channel} · ${timeAgo(video.published)}`;
      card.dataset.channelName = video.channel || "Nostr creator";
      card.dataset.url = video.url;
      card.dataset.mime = video.mime || "";
      card.dataset.id = video.id;
      card.dataset.pubkey = video.pubkey || "";
      title.textContent = video.title;
      channel.textContent = video.channel;
      setTileThumb(thumb, img, video.thumb, video.thumbMime, video.id);
      upnextRow.appendChild(clone);
    });

  if (moreRow && moreSection && currentPlayerPubkey) {
    const moreVideos = tvVideos.filter(
      (video) => video.id && video.id !== activeId && video.pubkey === currentPlayerPubkey
    );
    if (moreVideos.length > 0) {
      moreSection.hidden = false;
      if (moreTitle && playerChannelName) {
        moreTitle.textContent = `More by ${playerChannelName.textContent || "this channel"}`;
      } else if (moreTitle) {
        moreTitle.textContent = "More";
      }
      moreVideos.slice(0, 12).forEach((video, index) => {
        const clone = upnextTemplate.content.cloneNode(true);
        const card = clone.querySelector(".tile");
        const thumb = clone.querySelector(".tile-thumb");
        const img = clone.querySelector(".tile-img");
        const title = clone.querySelector(".tile-title");
        const channel = clone.querySelector(".tile-channel");
        card.dataset.focusRow = 3;
        card.dataset.focusCol = index;
        card.dataset.title = video.title;
        card.dataset.channel = `${video.channel} · ${timeAgo(video.published)}`;
        card.dataset.channelName = video.channel || "Nostr creator";
        card.dataset.url = video.url;
        card.dataset.mime = video.mime || "";
        card.dataset.id = video.id;
        card.dataset.pubkey = video.pubkey || "";
        title.textContent = video.title;
        channel.textContent = video.channel;
        setTileThumb(thumb, img, video.thumb, video.thumbMime, video.id);
        moreRow.appendChild(clone);
      });
    }
  }
}

async function initTvFeed() {
  try {
    const videos = await fetchNostrEvents([21], FEED_LIMIT * 2);
    const profiles = await fetchProfiles([...new Set(videos.map((event) => event.pubkey))]);
    const mappedVideos = videos.map((event) => {
      const parsed = parseVideoEvent(event);
      const profile = profiles.get(parsed.pubkey);
      return {
        ...parsed,
        channel: profile?.name || "Nostr creator",
        channelBanner: profile?.banner || "",
        channelPicture: profile?.picture || "",
      };
    });
    tvVideos = mappedVideos;
    renderRow(recommendedRow, recommendedEmpty, videos.slice(0, FEED_LIMIT), profiles, 0);
    renderRow(newRow, newEmpty, videos.slice(FEED_LIMIT, FEED_LIMIT * 2), profiles, 1);
    refreshContentFocusables();
    focusContent();
  } catch (error) {
    if (recommendedEmpty) {
      recommendedEmpty.hidden = false;
      recommendedEmpty.textContent = "Unable to load videos right now.";
    }
    if (newEmpty) {
      newEmpty.hidden = false;
      newEmpty.textContent = "Unable to load videos right now.";
    }
  }
}

recommendedRow?.addEventListener("click", (event) => {
  const card = event.target.closest(".tile");
  if (card) {
    openPlayerWithHistory(card);
  }
});

newRow?.addEventListener("click", (event) => {
  const card = event.target.closest(".tile");
  if (card) {
    openPlayerWithHistory(card);
  }
});

upnextRow?.addEventListener("click", (event) => {
  const card = event.target.closest(".tile");
  if (card) {
    openPlayerWithHistory(card);
  }
});

moreRow?.addEventListener("click", (event) => {
  const card = event.target.closest(".tile");
  if (card) {
    openPlayerWithHistory(card);
  }
});

initTvFeed();
refreshContentFocusables();
setActivePage("home");
document.addEventListener("keydown", handleKeyPress);
window.addEventListener("popstate", handleTvRoute);
handleTvRoute();

if (tvVideo) {
  tvVideo.addEventListener("timeupdate", updateTimeline);
  tvVideo.addEventListener("loadedmetadata", updateTimeline);
  tvVideo.addEventListener("ended", updateTimeline);
  tvVideo.addEventListener("play", updateTvPlayState);
  tvVideo.addEventListener("pause", updateTvPlayState);
  tvVideo.addEventListener("ended", updateTvPlayState);
  tvVideo.addEventListener("error", () => {
    const meta = playerScreen?.querySelector(".player-meta");
    if (meta) {
      meta.textContent = "This video format is not supported.";
    }
  });
}
