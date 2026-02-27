const menuToggle = document.getElementById("menu-toggle");
const mobileSearch = document.getElementById("mobile-search");
const searchOverlay = document.getElementById("search-overlay");
const searchClose = document.getElementById("search-close");
const brandLink = document.querySelector("a.brand");
const appShell = document.querySelector(".app-shell");
const appBody = document.querySelector(".app-body");
const topbar = document.querySelector(".topbar");
const mobileNav = document.querySelector(".mobile-nav");
const recommendedFeed = document.getElementById("feed-recommended");
const latestFeed = document.getElementById("feed-latest");
const shortsGrid = document.getElementById("shorts-grid");
const recommendedEmpty = document.getElementById("feed-recommended-empty");
const latestEmpty = document.getElementById("feed-latest-empty");
const shortsEmpty = document.getElementById("shorts-empty");
const videoTemplate = document.getElementById("video-card-template");
const shortTemplate = document.getElementById("short-card-template");
const pageHome = document.getElementById("page-home");
const pageShorts = document.getElementById("page-shorts");
const pageSubs = document.getElementById("page-subs");
const pageLibrary = document.getElementById("page-library");
const pageHistory = document.getElementById("page-history");
const pageWatchlater = document.getElementById("page-watchlater");
const pageLiked = document.getElementById("page-liked");
const pageSearch = document.getElementById("page-search");
const pageSettings = document.getElementById("page-settings");
const pageWatch = document.getElementById("page-watch");
const pageChannel = document.getElementById("page-channel");
const sidebarNavLinks = Array.from(document.querySelectorAll(".sidebar a.sidebar-link[data-nav]"));
const mobileNavLinks = Array.from(document.querySelectorAll(".mobile-nav .mobile-link"));
const watchPlayer = document.getElementById("watch-player");
const watchVideo = document.getElementById("watch-video");
const watchPoster = document.getElementById("watch-poster");
const watchStatus = document.getElementById("watch-status");
const watchControls = watchPlayer ? watchPlayer.querySelector(".watch-controls") : null;
const watchControlsProgress = watchPlayer ? watchPlayer.querySelector(".watch-controls-progress") : null;
const watchControlsActions = watchPlayer ? watchPlayer.querySelector(".watch-controls-actions") : null;
const watchMinimize = document.getElementById("watch-minimize");
const watchControlsTitle = document.getElementById("watch-controls-title");
const watchToggle = document.getElementById("watch-toggle");
const watchToggleIcon = document.getElementById("watch-toggle-icon");
const watchProgress = document.getElementById("watch-progress");
const watchTimeCurrent = document.getElementById("watch-time-current");
const watchTimeTotal = document.getElementById("watch-time-total");
const watchMute = document.getElementById("watch-mute");
const watchMuteIcon = document.getElementById("watch-mute-icon");
const watchVolume = document.getElementById("watch-volume");
const watchFullscreen = document.getElementById("watch-fullscreen");
const watchFullscreenIcon = watchFullscreen
  ? watchFullscreen.querySelector(".material-symbols-rounded")
  : null;
const watchTitle = document.getElementById("watch-title");
const watchStats = document.getElementById("watch-stats");
const watchDesc = document.getElementById("watch-desc");
const watchChannelName = document.getElementById("watch-channel-name");
const watchChannelMeta = document.getElementById("watch-channel-meta");
const watchCommentsTitle = document.querySelector(".watch-comments-title");
const watchChannelInitials = document.getElementById("watch-channel-initials");
const watchChannelImage = document.getElementById("watch-channel-image");
const watchChannelAvatar = watchChannelImage ? watchChannelImage.closest(".channel-avatar") : null;
const watchList = document.getElementById("watch-list");
const watchItemTemplate = document.getElementById("watch-item-template");
const watchMinimizeBtn = document.getElementById("watch-minimize");
const miniPlayer = document.getElementById("mini-player");
const miniPlayerVideo = document.getElementById("mini-player-video");
const miniPlayerTitle = document.getElementById("mini-player-title");
const miniPlayerExpand = document.getElementById("mini-player-expand");
const miniPlayerClose = document.getElementById("mini-player-close");
const channelBackBtn = document.getElementById("channel-back");
const channelMoreAnchor = document.getElementById("channel-more-anchor");
const channelMoreBtn = document.getElementById("channel-more");
const channelMenu = document.getElementById("channel-menu");
const channelMenuShare = document.getElementById("channel-menu-share");
const channelMenuAbout = document.getElementById("channel-menu-about");
const channelMenuReport = document.getElementById("channel-menu-report");
const channelMenuHelp = document.getElementById("channel-menu-help");
const searchMoreAnchor = document.getElementById("search-more-anchor");
const searchMoreBtn = document.getElementById("search-more");
const searchMenu = document.getElementById("search-menu");
const searchMenuFilters = document.getElementById("search-menu-filters");
const searchMenuHelp = document.getElementById("search-menu-help");
const channelBanner = document.getElementById("channel-banner");
const channelBannerImage = document.getElementById("channel-banner-image");
const channelAvatar = document.getElementById("channel-avatar");
const channelInitials = document.getElementById("channel-initials");
const channelImage = document.getElementById("channel-image");
const channelTitle = document.getElementById("channel-title");
const channelMeta = document.getElementById("channel-meta");
const channelFeed = document.getElementById("feed-channel");
const channelEmpty = document.getElementById("feed-channel-empty");
const channelTabs = document.getElementById("channel-tabs");
const channelTabVideos = document.getElementById("channel-tab-videos");
const channelTabShorts = document.getElementById("channel-tab-shorts");
const channelTabLive = document.getElementById("channel-tab-live");
const channelTabAbout = document.getElementById("channel-tab-about");
const channelPanelVideos = document.getElementById("channel-panel-videos");
const channelPanelShorts = document.getElementById("channel-panel-shorts");
const channelPanelLive = document.getElementById("channel-panel-live");
const channelPanelAbout = document.getElementById("channel-panel-about");
const channelShortsGrid = document.getElementById("channel-shorts-grid");
const channelShortsEmpty = document.getElementById("channel-shorts-empty");
const channelLiveEmpty = document.getElementById("channel-live-empty");
const channelLiveFeed = document.getElementById("feed-channel-live");
const channelAbout = document.getElementById("channel-about");
const channelAboutEmpty = document.getElementById("channel-about-empty");
const userAvatar = document.getElementById("user-avatar");
const userAvatarLabel = document.getElementById("user-avatar-label");
const createBtn = document.getElementById("create-btn");
const createMenu = document.getElementById("create-menu");
const userMenu = document.getElementById("user-menu");
const menuUpload = document.getElementById("menu-upload");
const menuLive = document.getElementById("menu-live");
const menuYourChannel = document.getElementById("menu-your-channel");
const menuSettings = document.getElementById("menu-settings");
const menuSignout = document.getElementById("menu-signout");
const authModal = document.getElementById("auth-modal");
const authModalTitle = document.getElementById("auth-modal-title");
const authPages = document.getElementById("auth-pages");
const authPersistSignup = document.getElementById("auth-persist-signup");
const publishModal = document.getElementById("publish-modal");
const authExtBtn = document.getElementById("auth-ext");
const authNsecForm = document.getElementById("auth-nsec-form");
const authNsecInput = document.getElementById("auth-nsec");
const authNsecBtn = document.getElementById("auth-nsec-btn");
const authSignupBtn = document.getElementById("auth-signup");
const authPersist = document.getElementById("auth-persist");
const authGenerated = document.getElementById("auth-generated");
const authGeneratedNpub = document.getElementById("auth-generated-npub");
const authGeneratedNsec = document.getElementById("auth-generated-nsec");
const authCopyNpub = document.getElementById("auth-copy-npub");
const authCopyNsec = document.getElementById("auth-copy-nsec");
const authSetup = document.getElementById("auth-setup");
const authProfileName = document.getElementById("auth-profile-name");
const authProfileAbout = document.getElementById("auth-profile-about");
const authProfilePicture = document.getElementById("auth-profile-picture");
const authFinishBtn = document.getElementById("auth-finish");
const publishTitle = document.getElementById("publish-title");
const publishUrl = document.getElementById("publish-url");
const publishMime = document.getElementById("publish-mime");
const publishThumb = document.getElementById("publish-thumb");
const publishSummary = document.getElementById("publish-summary");
const publishKind = document.getElementById("publish-kind");
const publishSend = document.getElementById("publish-send");
const watchLikeBtn = document.getElementById("watch-like");
const watchDislikeBtn = document.getElementById("watch-dislike");
const watchSubscribeBtn = document.getElementById("watch-subscribe");
const watchSaveBtn = document.getElementById("watch-save");
const watchCommentInput = document.getElementById("watch-comment-input");
const watchCommentSend = document.getElementById("watch-comment-send");
const watchCommentsNote = document.getElementById("watch-comments-note");
const watchCommentsList = document.getElementById("watch-comments-list");
const watchCommentsEmpty = document.getElementById("watch-comments-empty");

if (watchCommentInput) bindAutoResizeTextarea(watchCommentInput, 180);
const sidebarSubsList = document.getElementById("sidebar-subs-list");
const sidebarSubsEmpty = document.getElementById("sidebar-subs-empty");
const toastEl = document.getElementById("toast");
const libraryHistoryFeed = document.getElementById("feed-library-history");
const libraryHistoryEmpty = document.getElementById("feed-library-history-empty");
const channelSubscribeBtn = document.getElementById("channel-subscribe");
const channelEditBtn = document.getElementById("channel-edit");
const watchShareAnchor = document.getElementById("watch-share-anchor");
const watchShareBtn = document.getElementById("watch-share");
const watchShareMenu = document.getElementById("watch-share-menu");
const watchShareLink = document.getElementById("watch-share-link");
const watchShareNative = document.getElementById("watch-share-native");
const watchShareEmbed = document.getElementById("watch-share-embed");
const playerSettingsAnchor = document.getElementById("player-settings-anchor");
const playerSettingsBtn = document.getElementById("player-settings-btn");
const playerSettingsMenu = document.getElementById("player-settings-menu");
const watchEventBtn = document.getElementById("watch-event");
const watchEventPanel = document.getElementById("watch-event-panel");
const watchEventClose = document.getElementById("watch-event-close");
const watchEventRelays = document.getElementById("watch-event-relays");
const watchEventRaw = document.getElementById("watch-event-raw");
const channelEventBtn = document.getElementById("channel-event");
const channelEventPanel = document.getElementById("channel-event-panel");
const channelEventClose = document.getElementById("channel-event-close");
const channelEventRelays = document.getElementById("channel-event-relays");
const channelEventRaw = document.getElementById("channel-event-raw");
const libraryAvatar = document.getElementById("library-avatar");
const libraryInitials = document.getElementById("library-initials");
const libraryImage = document.getElementById("library-image");
const libraryTitle = document.getElementById("library-title");
const libraryMeta = document.getElementById("library-meta");
const libraryMetaText = document.getElementById("library-meta-text");
const libraryMetaSep = document.getElementById("library-meta-sep");
const libraryViewChannel = document.getElementById("library-view-channel");

const searchBackBtn = document.getElementById("search-back");
const searchTitle = document.getElementById("search-title");
const searchMeta = document.getElementById("search-meta");
const searchFeed = document.getElementById("feed-search");
const searchEmpty = document.getElementById("feed-search-empty");
const topbarTitle = document.getElementById("topbar-title");
const topbarSettings = document.getElementById("topbar-settings");

const settingsTitle = document.getElementById("settings-title");
const settingsContent = document.getElementById("settings-content");
const settingsBreadcrumbs = document.getElementById("settings-breadcrumbs");

const subsFeed = document.getElementById("feed-subs");
const subsEmpty = document.getElementById("feed-subs-empty");
const historyList = document.getElementById("feed-history");
const historyEmpty = document.getElementById("feed-history-empty");
const watchlaterList = document.getElementById("feed-watchlater");
const watchlaterEmpty = document.getElementById("feed-watchlater-empty");
const likedList = document.getElementById("feed-liked");
const likedEmpty = document.getElementById("feed-liked-empty");
let watchHls = null;
const videoStore = new Map();
const channelProfileFetchState = new Map();
let isScrubbingProgress = false;
let lastVolume = 1;
let lastWatchedVideoId = "";
let lastNonWatchHash = "#home";
let lastNonSearchHash = "#home";
let searchEntryHash = "#home";
let searchEntryMainNavKey = "home";
let lastSettingsHash = "#settings";
let miniLastHash = "#home";
let channelEntryHash = "#home";
let forceMyChannelOwnedByLibraryOnce = false;
let isMini = false;
let touchStartY = null;
let touchStartTime = 0;
let touchLastY = null;
let touchTracking = null;
let resumeWatchOnRoute = false;
let dockDragRaf = 0;
let dockDragDy = 0;
let dockDragPendingDy = 0;
let dockDragPendingAlphaDy = 0;
const scrollPositions = new Map();
let scrollRestorePending = null;
let dragStartBottomOffset = 0;
let watchVideoDocked = false;
let underlayDragPage = null;
let watchTransitionUnderlay = null;
let topbarUnderlayOverridePage = null;
let watchTransitionTimer = 0;
let watchTransitionListener = null;
let dockHoldTimer = 0;
let dockHoldListener = null;
let suppressMiniOnLeaveWatchOnce = false;
let miniResumeTime = 0;
let miniWasPlaying = false;
let miniResumeVideoId = "";
let suppressWatchAutoplayOnce = false;
let pendingMiniAfterFullscreenExit = false;
let watchLoadedVideoId = "";
let watchLastLoadUrl = "";
let watchLastLoadMime = "";
let watchLastIsHls = false;
let watchCommentsPollTimer = 0;
let watchCommentsPollKey = "";
let watchCommentsCacheKey = "";
let watchCommentsCacheById = new Map();
let watchRenderedCommentIds = new Set();
let watchRenderedCommentMaxCreatedAt = 0;
let watchCommentsLoadToken = 0;
let watchHlsRetryAt = 0;
let watchHlsRetryCount = 0;
let watchAutoplayWanted = false;
let watchAutoplayRetryTimer = 0;
let watchAutoplayRetryAttempts = 0;
let watchUserLikeEventId = "";
let watchUserLikeRelayHint = "";
let watchUserDislikeEventId = "";
let watchUserDislikeRelayHint = "";

 function parseAddressableCoord(coord) {
   const raw = String(coord || "");
   const parts = raw.split(":");
   if (parts.length < 3) return null;
   const kind = Number(parts[0]);
   const pubkey = String(parts[1] || "");
   const d = parts.slice(2).join(":");
   if (!Number.isFinite(kind) || !pubkey || !d) return null;
   return { kind, pubkey, d };
 }

function insertWatchCommentNodeNewestFirst(node) {
  try {
    if (!watchCommentsList || !node) return;
    const ts = Number(node?.dataset?.commentCreatedAt || 0);
    const children = Array.from(watchCommentsList.children || []);
    for (const child of children) {
      const cts = Number(child?.dataset?.commentCreatedAt || 0);
      if (ts && cts && ts > cts) {
        watchCommentsList.insertBefore(node, child);
        return;
      }
    }
    watchCommentsList.appendChild(node);
  } catch {
    try {
      watchCommentsList.appendChild(node);
    } catch {}
  }
}

 function getNip22ReplyParentId(ev) {
   try {
     const tags = Array.isArray(ev?.tags) ? ev.tags : [];
     const isReplyMarker = (t) => {
       const a = String(t?.[3] || "").toLowerCase();
       const b = String(t?.[4] || "").toLowerCase();
       return a === "reply" || b === "reply";
     };
     const reply = tags.find(
       (t) => Array.isArray(t) && (t[0] === "e" || t[0] === "E") && t[1] && isReplyMarker(t)
     );

      if (reply && reply[1]) return String(reply[1]);

      const eTags = tags.filter((t) => Array.isArray(t) && (t[0] === "e" || t[0] === "E") && t[1]);
      if (eTags.length === 1) return String(eTags[0][1]);
      if (eTags.length >= 2) return String(eTags[eTags.length - 1][1]);
    } catch {}
    return "";
  }

function maybeAutoPlayWatchVideo() {
  try {
    if (!watchVideo) return;
    if (!watchAutoplayWanted) return;
    if (!watchVideo.paused && !watchVideo.ended) return;
    watchVideo.play().catch(() => {});
  } catch {}
}

function stopWatchAutoplayRetryLoop() {
  if (!watchAutoplayRetryTimer) return;
  try {
    window.clearInterval(watchAutoplayRetryTimer);
  } catch {}
  watchAutoplayRetryTimer = 0;
  watchAutoplayRetryAttempts = 0;
}

function startWatchAutoplayRetryLoop() {
  if (!watchAutoplayWanted) return;
  if (!watchVideo) return;
  if (watchAutoplayRetryTimer) return;
  watchAutoplayRetryAttempts = 0;
  watchAutoplayRetryTimer = window.setInterval(() => {
    try {
      if (!watchAutoplayWanted) {
        stopWatchAutoplayRetryLoop();
        return;
      }
      if (!watchVideo) {
        stopWatchAutoplayRetryLoop();
        return;
      }
      if (!watchVideo.paused && !watchVideo.ended) {
        stopWatchAutoplayRetryLoop();
        return;
      }
      watchAutoplayRetryAttempts += 1;
      maybeAutoPlayWatchVideo();
      if (watchAutoplayRetryAttempts >= 12) {
        stopWatchAutoplayRetryLoop();
      }
    } catch {
      stopWatchAutoplayRetryLoop();
    }
  }, 700);
}

function setCommentReactionChip(btn, iconName, count) {
  if (!btn) return;
  const n = Number(count || 0);
  const icon = btn.querySelector(".material-symbols-rounded") || null;
  btn.textContent = n > 0 ? String(n) : "";
  if (icon) {
    icon.textContent = iconName;
    btn.prepend(icon);
  }
}

function decodeNprofileToPubkeySafe(value) {
  try {
    const raw = String(value || "").trim();
    if (!/^nprofile1[0-9a-z]+$/i.test(raw)) return "";
    const tools = getNostrTools();
    if (!tools?.nip19?.decode) return "";
    const decoded = tools.nip19.decode(raw);
    if (!decoded || decoded.type !== "nprofile") return "";
    const pk = String(decoded.data?.pubkey || "");
    return pk && /^[0-9a-f]{64}$/i.test(pk) ? pk : "";
  } catch {
    return "";
  }
}

function autoResizeTextarea(el, maxHeight) {
  if (!el) return;
  try {
    const maxH = Number(maxHeight || 0);
    el.style.height = "auto";
    const next = el.scrollHeight || 0;
    if (maxH > 0 && next > maxH) {
      el.style.height = `${maxH}px`;
      el.style.overflowY = "auto";
    } else {
      el.style.height = `${next}px`;
      el.style.overflowY = "hidden";
    }
  } catch {}
}

function bindAutoResizeTextarea(el, maxHeight) {
  if (!el) return;
  try {
    const onInput = () => autoResizeTextarea(el, maxHeight);
    el.addEventListener("input", onInput);
    requestAnimationFrame(() => autoResizeTextarea(el, maxHeight));
  } catch {}
}

let simFullscreenRotateWanted = false;
let mainNavHasHomeBase = false;
let homeResetInProgress = false;
let homeResetGuardTimer = 0;
let pendingMainAfterHomeReset = "";
let watchControlsHideTimer = 0;
let watchControlsLastShownAt = 0;
let watchControlsPinned = false;
let watchControlsIgnoreActivityUntil = 0;
let watchControlsLastTapToggleAt = 0;
let watchEventInspectToken = 0;

const ANDROID_MODE_KEY = "nostube-android-mode";
let isAndroidModeCached = null;

const ALLOW_RESTRICTED_CONTENT_KEY = "nostube-allow-restricted-content";

function initAndroidModeFlagFromUrl() {
  try {
    const url = new URL(window.location.href);
    const flag = url.searchParams.get("nt_android");
    if (flag && String(flag) !== "0") {
      window.localStorage.setItem(ANDROID_MODE_KEY, "1");
      isAndroidModeCached = true;
      return;
    }
  } catch {}
  try {
    isAndroidModeCached = window.localStorage.getItem(ANDROID_MODE_KEY) === "1";
  } catch {
    isAndroidModeCached = false;
  }
}

function setChannelTab(key) {
  const next = key === "shorts" || key === "about" || key === "live" ? key : "videos";
  currentChannelTabKey = next;
  if (channelTabVideos) channelTabVideos.classList.toggle("is-active", next === "videos");
  if (channelTabShorts) channelTabShorts.classList.toggle("is-active", next === "shorts");
  if (channelTabLive) channelTabLive.classList.toggle("is-active", next === "live");
  if (channelTabAbout) channelTabAbout.classList.toggle("is-active", next === "about");
  if (channelPanelVideos) channelPanelVideos.hidden = next !== "videos";
  if (channelPanelShorts) channelPanelShorts.hidden = next !== "shorts";
  if (channelPanelLive) channelPanelLive.hidden = next !== "live";
  if (channelPanelAbout) channelPanelAbout.hidden = next !== "about";

  if (next === "live" && currentChannelPubkey) {
    const token = channelRenderToken;
    try {
      renderChannelLive(currentChannelPubkey);
    } catch {}
    Promise.resolve()
      .then(() => ensureChannelLiveEventsLoaded(currentChannelPubkey, token))
      .then(() => {
        if (token !== channelRenderToken) return;
        try {
          renderChannelLive(currentChannelPubkey);
        } catch {}
      })
      .catch(() => {});
  }

  if (next === "about" && currentChannelPubkey) {
    const token = channelRenderToken;
    const pk = String(currentChannelPubkey || "");
    if (!pk) return;
    const existing = channelProfileFetchState.get(pk) || { inFlight: null, hasFetched: false };
    if (!existing.inFlight && !profilesCache.has(pk)) {
      let resolveDone = null;
      const inFlight = new Promise((resolve) => {
        resolveDone = resolve;
      });
      channelProfileFetchState.set(pk, { ...existing, inFlight });
      ensureProfiles([pk])
        .catch(() => {})
        .finally(() => {
          const st = channelProfileFetchState.get(pk) || {};
          channelProfileFetchState.set(pk, { ...st, inFlight: null, hasFetched: true });
          try {
            resolveDone?.();
          } catch {}
          if (token !== channelRenderToken) return;
          try {
            renderChannelHeader(pk, token);
          } catch {}
          try {
            renderChannelPanelsFromStore(pk);
          } catch {}
        });
    }
  }
}

function renderChannelShorts(pubkey) {
  if (!channelShortsGrid || !channelShortsEmpty) return;
  const targetPubkey = String(pubkey || "");
  const st = channelFetchState.get(targetPubkey) || {};
  const isLoading = Boolean(st.inFlight);
  const hasFetched = Boolean(st.hasFetched);
  const shorts = Array.from(videoStore.values()).filter(
    (video) => video.pubkey === targetPubkey && (video.kind === 22 || video.kind === 34236)
  );
  const allowRestricted = isRestrictedContentAllowed();
  const visible = shorts.filter((video) => !(video.restricted && !allowRestricted));
  channelShortsGrid.innerHTML = "";
  if (!visible.length) {
    channelShortsEmpty.textContent = isLoading || !hasFetched
      ? "Loading shorts…"
      : shorts.length && !allowRestricted
        ? "Shorts hidden by safety settings."
        : "No shorts for this channel yet.";
    channelShortsEmpty.hidden = false;
    return;
  }
  channelShortsEmpty.hidden = true;
  visible
    .sort((a, b) => Number(b.published || 0) - Number(a.published || 0))
    .forEach((video) => {
      const clone = shortTemplate.content.cloneNode(true);
      const card = clone.querySelector(".short-card");
      const thumb = clone.querySelector(".short-thumb");
      const title = clone.querySelector(".short-title");
      const meta = clone.querySelector(".short-meta");

      title.textContent = video.title;
      meta.textContent = video.channel || "Nostr creator";
      setCardThumb(thumb, video.thumb, video.id);
      card.dataset.videoId = video.id;
      card.dataset.videoTitle = video.title;
      card.dataset.videoChannel = video.channel || "Nostr creator";
      card.dataset.videoTime = timeAgo(video.published);
      card.dataset.videoSummary = video.summary || "";
      card.dataset.videoThumb = video.thumb || "";
      card.dataset.videoUrl = video.url || "";
      card.dataset.videoMime = video.mime || "";
      card.dataset.videoPicture = video.picture || "";
      card.dataset.videoNip05 = video.nip05 || "";
      card.dataset.videoPubkey = video.pubkey || "";
      channelShortsGrid.appendChild(clone);
    });
}

let watchCommentReactionsById = new Map();

async function loadWatchCommentReactions(commentEvents, relays) {
  const comments = Array.isArray(commentEvents) ? commentEvents : [];
  const ids = comments.map((ev) => String(ev?.id || "")).filter(Boolean);
  if (!ids.length) {
    watchCommentReactionsById = new Map();
    return;
  }

  const collected = new Map();
  await Promise.all(
    (relays || []).map((relay) =>
      requestEvents(relay, { kinds: [7], "#e": ids, limit: 800 }, (ev) => {
        if (!ev?.id) return;
        if (!collected.has(ev.id)) collected.set(ev.id, { ev, relay });
      })
    )
  );

  const byTarget = new Map();
  for (const { ev, relay } of collected.values()) {
    const target = (ev.tags || []).filter((t) => Array.isArray(t) && t[0] === "e" && t[1]).slice(-1)[0]?.[1];
    const targetId = String(target || "");
    if (!targetId) continue;
    const content = String(ev.content || "").trim();
    const author = String(ev.pubkey || "");
    if (!author) continue;

    if (!byTarget.has(targetId)) {
      byTarget.set(targetId, {
        likesByPubkey: new Set(),
        dislikesByPubkey: new Set(),
        likedByMe: false,
        dislikedByMe: false,
        userLikeEventId: "",
        userLikeRelayHint: "",
        userDislikeEventId: "",
        userDislikeRelayHint: "",
      });
    }
    const entry = byTarget.get(targetId);
    if (content === "-" && entry) {
      entry.dislikesByPubkey.add(author);
    } else if (content === "+" || content === "") {
      entry.likesByPubkey.add(author);
    }

    if (authState.pubkey && author === authState.pubkey && entry) {
      if (content === "-" && !entry.userDislikeEventId) {
        entry.dislikedByMe = true;
        entry.userDislikeEventId = String(ev.id || "");
        entry.userDislikeRelayHint = String(relay || "");
      }
      if ((content === "+" || content === "") && !entry.userLikeEventId) {
        entry.likedByMe = true;
        entry.userLikeEventId = String(ev.id || "");
        entry.userLikeRelayHint = String(relay || "");
      }
    }
  }

  const next = new Map();
  ids.forEach((id) => {
    const entry = byTarget.get(id);
    if (!entry) {
      next.set(id, { likes: 0, dislikes: 0, likedByMe: false, dislikedByMe: false });
      return;
    }
    next.set(id, {
      likes: entry.likesByPubkey.size,
      dislikes: entry.dislikesByPubkey.size,
      likedByMe: Boolean(entry.likedByMe),
      dislikedByMe: Boolean(entry.dislikedByMe),
      userLikeEventId: entry.userLikeEventId,
      userLikeRelayHint: entry.userLikeRelayHint,
      userDislikeEventId: entry.userDislikeEventId,
      userDislikeRelayHint: entry.userDislikeRelayHint,
    });
  });
  watchCommentReactionsById = next;
}

function buildUnsignedVideoCommentReply1111(video, parentCommentEvent, text) {
  const content = String(text || "").trim();
  if (!content) return null;
  if (!video?.id) return null;
  const relayHint = getPreferredRelayHint();
  const rootKind = String(video.kind || "");
  const rootPubkey = String(video.pubkey || "");
  const tags = [];

  // Root scope
  if (video.address) {
    tags.push(["A", video.address, relayHint]);
  } else {
    tags.push(["E", video.id, relayHint, rootPubkey]);
  }
  tags.push(["K", rootKind]);
  if (rootPubkey) tags.push(["P", rootPubkey, relayHint]);

  // Parent chain: include root + reply markers (NIP-10-style), so threading is reliable.
  if (video.address) {
    tags.push(["a", video.address, relayHint, "root"]);
    const rootId = String(video?.nostrEventRaw?.id || "");
    if (rootId) tags.push(["e", rootId, relayHint, rootPubkey, "root"]);
    tags.push(["k", rootKind]);
    if (rootPubkey) tags.push(["p", rootPubkey, relayHint]);
  } else {
    tags.push(["e", video.id, relayHint, rootPubkey, "root"]);
    tags.push(["k", rootKind]);
    if (rootPubkey) tags.push(["p", rootPubkey, relayHint]);
  }

  // Parent scope: reply to the parent comment
  const parentId = String(parentCommentEvent?.id || "");
  const parentPubkey = String(parentCommentEvent?.pubkey || "");
  const parentKind = String(parentCommentEvent?.kind || "");
  if (!parentId) return null;
  tags.push(["e", parentId, relayHint, parentPubkey, "reply"]);
  if (parentKind) tags.push(["k", parentKind]);
  if (parentPubkey) tags.push(["p", parentPubkey, relayHint]);

  return buildUnsignedEvent(1111, content, tags);
}

function renderChannelLive(pubkey) {
  if (!channelLiveFeed || !channelLiveEmpty) return;
  const targetPubkey = String(pubkey || "");
  const allowRestricted = isRestrictedContentAllowed();
  const st = channelLiveFetchState.get(targetPubkey) || {};
  const isLoading = Boolean(st.inFlight);
  const hasFetched = Boolean(st.hasFetched);

  const liveVideoItems = Array.from(videoStore.values()).filter((video) => {
    if (video.pubkey !== targetPubkey) return false;
    if (!(video.kind === 21 || video.kind === 34235)) return false;
    if (!(video.nostrEventRaw?.tags || []).some((tag) => tag && tag[0] === "live")) return false;
    if (video.restricted && !allowRestricted) return false;
    return true;
  });

  const liveEvents = Array.isArray(channelLiveEventStore.get(targetPubkey))
    ? channelLiveEventStore.get(targetPubkey)
    : [];

  channelLiveFeed.innerHTML = "";
  if (!liveVideoItems.length && !liveEvents.length) {
    channelLiveEmpty.textContent = isLoading || !hasFetched
      ? "Loading live streams…"
      : "No live streams for this channel yet.";
    channelLiveEmpty.hidden = false;
    return;
  }
  channelLiveEmpty.hidden = true;

  liveEvents
    .slice()
    .sort((a, b) => Number(b.published || 0) - Number(a.published || 0))
    .forEach((live) => {
      const clone = videoTemplate.content.cloneNode(true);
      const card = clone.querySelector(".video-card");
      const thumb = clone.querySelector(".thumbnail");
      const duration = clone.querySelector(".duration");
      const title = clone.querySelector(".video-title");
      const channel = clone.querySelector(".video-channel");
      const time = clone.querySelector(".video-time");
      const livePill = clone.querySelector(".live-pill");
      const avatar = clone.querySelector(".channel-avatar");
      const verified = clone.querySelector(".verified");

      title.textContent = live.title;
      channel.textContent = "Live";
      time.textContent = live.starts ? timeAgo(live.starts) : timeAgo(live.published);
      duration.hidden = true;
      if (livePill) {
        livePill.hidden = false;
        const status = String(live.status || "").toLowerCase();
        const isEnded = status === "ended";
        livePill.textContent = isEnded ? "ENDED" : "LIVE";
        livePill.classList.toggle("is-ended", isEnded);
      }
      if (verified) verified.hidden = true;

      setCardThumb(thumb, live.image, live.id);
      try {
        hydrateAvatar(avatar, profilesCache.get(targetPubkey) || { name: "Live", picture: "" });
      } catch {}

      card.dataset.videoId = live.address || live.id;
      card.dataset.videoTitle = live.title;
      card.dataset.videoChannel = "Live";
      card.dataset.videoTime = live.starts ? timeAgo(live.starts) : timeAgo(live.published);
      card.dataset.videoSummary = live.summary || "";
      card.dataset.videoThumb = live.image || "";
      card.dataset.videoUrl = pickLive30311Url({
        status: live.status,
        streaming: live.streaming,
        recording: live.recording,
      });
      card.dataset.videoMime = "";
      card.dataset.videoPicture = (profilesCache.get(targetPubkey) || {}).picture || "";
      card.dataset.videoNip05 = (profilesCache.get(targetPubkey) || {}).nip05 || "";
      card.dataset.videoPubkey = targetPubkey;

      // If this stream was published by a service account but hosted by this channel,
      // keep navigation targeting the current channel.
      try {
        if (live?.pubkey && String(live.pubkey) !== String(targetPubkey)) {
          card.dataset.videoPubkey = targetPubkey;
        }
      } catch {}

      channelLiveFeed.appendChild(clone);
    });

  liveVideoItems
    .slice()
    .sort((a, b) => Number(b.published || 0) - Number(a.published || 0))
    .forEach((video) => {
      const clone = videoTemplate.content.cloneNode(true);
      const card = clone.querySelector(".video-card");
      const thumb = clone.querySelector(".thumbnail");
      const duration = clone.querySelector(".duration");
      const title = clone.querySelector(".video-title");
      const channel = clone.querySelector(".video-channel");
      const time = clone.querySelector(".video-time");
      const live = clone.querySelector(".live-pill");
      const avatar = clone.querySelector(".channel-avatar");
      const verified = clone.querySelector(".verified");

      title.textContent = video.title;
      channel.textContent = video.channel || "Nostr creator";
      time.textContent = timeAgo(video.published);
      duration.textContent = video.duration || "";
      duration.hidden = true;
      live.hidden = false;
      if (verified) verified.hidden = true;

      setCardThumb(thumb, video.thumb, video.id);
      try {
        hydrateAvatar(avatar, { name: video.channel, picture: video.picture });
      } catch {}

      card.dataset.videoId = video.id;
      card.dataset.videoTitle = video.title;
      card.dataset.videoChannel = video.channel || "Nostr creator";
      card.dataset.videoTime = timeAgo(video.published);
      card.dataset.videoSummary = video.summary || "";
      card.dataset.videoThumb = video.thumb || "";
      card.dataset.videoUrl = video.url || "";
      card.dataset.videoMime = video.mime || "";
      card.dataset.videoPicture = video.picture || "";
      card.dataset.videoNip05 = video.nip05 || "";
      card.dataset.videoPubkey = video.pubkey || "";

      channelLiveFeed.appendChild(clone);
    });
}

async function ensureChannelVideosLoaded(pubkey, token) {
  const targetPubkey = String(pubkey || "");
  if (!targetPubkey) return;
  const now = Date.now();
  const existingState = channelFetchState.get(targetPubkey) || { inFlight: null, lastFetchAt: 0 };
  if (existingState.inFlight) return existingState.inFlight;
  if (existingState.lastFetchAt && now - existingState.lastFetchAt < 30_000) {
    if (!existingState.hasFetched) {
      channelFetchState.set(targetPubkey, { ...existingState, hasFetched: true });
    }
    return;
  }

  let resolveDone = null;
  const inFlight = new Promise((resolve) => {
    resolveDone = resolve;
  });
  channelFetchState.set(targetPubkey, { ...existingState, inFlight });

  let fetchedCount = 0;
  try {
    const events = await fetchNostrEventsForAuthors(
      [21, 22, 34235, 34236],
      [targetPubkey],
      FEED_LIMIT * 4
    );
    if (token !== channelRenderToken) return;
    fetchedCount = Array.isArray(events) ? events.length : 0;
    if (!events.length) return;
    await ensureProfiles([targetPubkey]);
    const profile = profilesCache.get(targetPubkey) || null;
    events.forEach((ev) => {
      try {
        const parsed = parseVideoEvent(ev);
        const existed = videoStore.has(parsed.id);
        storeVideo(
          {
            ...parsed,
            nostrEventRaw: ev,
            nostrRelays: [],
          },
          profile
        );
        if (!existed) {
          const st = channelFetchState.get(targetPubkey) || {};
          channelFetchState.set(targetPubkey, { ...st, hasNew: true });
        }
      } catch {}
    });
  } catch {}
  finally {
    const st = channelFetchState.get(targetPubkey) || {};
    channelFetchState.set(targetPubkey, {
      ...st,
      inFlight: null,
      hasFetched: true,
      lastFetchAt: fetchedCount ? now : 0,
    });
    try {
      resolveDone?.();
    } catch {}
  }
}

function renderChannelPanelsFromStore(pubkey) {
  if (!channelFeed || !channelEmpty) return;
  const targetPubkey = String(pubkey || "");
  if (!targetPubkey) return;

  const st = channelFetchState.get(targetPubkey) || {};
  const isLoading = Boolean(st.inFlight);
  const hasFetched = Boolean(st.hasFetched);

  channelFeed.innerHTML = "";
  const { visible } = computeChannelFlags(targetPubkey);
  const visibleVideos = visible.filter((video) => video.kind === 21 || video.kind === 34235);

  applyChannelTabVisibility(targetPubkey);
  setChannelTab(currentChannelTabKey || "videos");

  if (!visibleVideos.length) {
    channelEmpty.textContent = isLoading || !hasFetched
      ? "Loading videos…"
      : "No videos for this channel yet.";
    channelEmpty.hidden = false;
  } else {
    channelEmpty.hidden = true;
    visibleVideos.forEach((video) => {
      const clone = videoTemplate.content.cloneNode(true);
      const card = clone.querySelector(".video-card");
      const thumb = clone.querySelector(".thumbnail");
      const duration = clone.querySelector(".duration");
      const title = clone.querySelector(".video-title");
      const channel = clone.querySelector(".video-channel");
      const time = clone.querySelector(".video-time");
      const avatar = clone.querySelector(".channel-avatar");
      const avatarImg = clone.querySelector(".avatar-img");
      const avatarInitials = clone.querySelector(".channel-initials");
      const verified = clone.querySelector(".verified");
      const live = clone.querySelector(".live-pill");

      title.textContent = video.title;
      channel.textContent = video.channel || "Nostr creator";
      time.textContent = timeAgo(video.published);
      duration.textContent = video.duration || "";
      duration.hidden = !video.duration;
      live.hidden = true;

      if (verified) verified.hidden = true;
      try {
        hydrateAvatar(avatar, {
          name: video.channel,
          picture: video.picture,
        });
      } catch {}
      setCardThumb(thumb, video.thumb, video.id);

      card.dataset.videoId = video.id;
      card.dataset.videoTitle = video.title;
      card.dataset.videoChannel = video.channel || "Nostr creator";
      card.dataset.videoTime = timeAgo(video.published);
      card.dataset.videoSummary = video.summary || "";
      card.dataset.videoThumb = video.thumb || "";
      card.dataset.videoUrl = video.url || "";
      card.dataset.videoMime = video.mime || "";
      card.dataset.videoPicture = video.picture || "";
      card.dataset.videoNip05 = video.nip05 || "";
      card.dataset.videoPubkey = video.pubkey || "";

      channelFeed.appendChild(clone);
    });
  }

  renderChannelShorts(targetPubkey);
  renderChannelLive(targetPubkey);
  updateChannelActions(targetPubkey);
}

function computeChannelFlags(pubkey) {
  const targetPubkey = String(pubkey || "");
  const all = Array.from(videoStore.values()).filter((video) => video.pubkey === targetPubkey);
  const hasShortsAll = all.some((video) => video.kind === 22 || video.kind === 34236);
  const allowRestricted = isRestrictedContentAllowed();
  const visible = all.filter((video) => !(video.restricted && !allowRestricted));
  const hasShortsVisible = visible.some((video) => video.kind === 22 || video.kind === 34236);
  return { all, visible, hasShortsAll, hasShortsVisible };
}

function applyChannelTabVisibility(pubkey) {
  const aboutText = String((profilesCache.get(String(pubkey || "")) || {}).about || "").trim();
  if (channelAboutEmpty) {
    const st = channelProfileFetchState.get(String(pubkey || "")) || {};
    const isLoading = Boolean(st.inFlight);
    const hasFetched = Boolean(st.hasFetched);
    channelAboutEmpty.textContent = isLoading || !hasFetched ? "Loading…" : "No about info yet.";
    channelAboutEmpty.hidden = Boolean(aboutText);
  }
  if (channelLiveEmpty) channelLiveEmpty.textContent = "No live streams for this channel yet.";
  if (channelTabs) channelTabs.hidden = false;
}

function getTagValueFromEvent(event, key) {
  try {
    const tags = event?.tags || [];
    const tag = tags.find((t) => t && t[0] === key);
    return tag ? String(tag[1] || "") : "";
  } catch {
    return "";
  }
}

function parseLiveEvent30311(event) {
  const title = getTagValueFromEvent(event, "title") || getTagValueFromEvent(event, "name") || "Live stream";
  const summary = getTagValueFromEvent(event, "summary") || getTagValueFromEvent(event, "description") || "";
  const image = getTagValueFromEvent(event, "image") || getTagValueFromEvent(event, "thumb") || "";
  const streaming = getTagValueFromEvent(event, "streaming") || getTagValueFromEvent(event, "url") || "";
  const recording = getTagValueFromEvent(event, "recording") || "";
  const alt = getTagValueFromEvent(event, "alt") || "";
  const status = getTagValueFromEvent(event, "status") || "";
  const identifier = getTagValueFromEvent(event, "d") || "";
  const starts = Number(getTagValueFromEvent(event, "starts") || 0);
  const ends = Number(getTagValueFromEvent(event, "ends") || 0);
  const published = Number(event?.created_at || 0);
  const pubkey = String(event?.pubkey || "");
  const address = identifier ? `30311:${pubkey}:${identifier}` : "";
  return {
    id: String(event?.id || ""),
    pubkey,
    title,
    summary,
    image,
    streaming,
    recording,
    alt,
    status,
    identifier,
    address,
    starts,
    ends,
    published,
    nostrEventRaw: event,
  };
}

function getFirstHttpUrlFromText(text) {
  const value = String(text || "");
  const match = value.match(/https?:\/\/\S+/i);
  return match ? String(match[0] || "").trim() : "";
}

function isPlayableMediaUrl(url) {
  const value = String(url || "").trim();
  if (!value) return false;
  const lower = value.toLowerCase();
  if (!/^(https?:|ipfs:)/i.test(lower)) return false;
  if (lower.includes(".m3u8")) return true;
  if (lower.includes(".mpd")) return true;
  if (lower.endsWith(".mp4")) return true;
  if (lower.endsWith(".webm")) return true;
  if (lower.endsWith(".mov")) return true;
  if (lower.endsWith(".m4v")) return true;
  if (lower.endsWith(".mkv")) return true;
  return false;
}

function pickLive30311Url({ status = "", streaming = "", recording = "" } = {}) {
  const st = String(status || "").toLowerCase();
  const streamUrl = String(streaming || "").trim();
  const recUrl = String(recording || "").trim();
  if (st === "ended") {
    if (isPlayableMediaUrl(recUrl)) return recUrl;
    if (isPlayableMediaUrl(streamUrl)) return streamUrl;
    return "";
  }
  if (isPlayableMediaUrl(streamUrl)) return streamUrl;
  if (isPlayableMediaUrl(recUrl)) return recUrl;
  return "";
}

function isDisplayableLive30311FromTags(
  { status = "", streaming = "", recording = "", alt = "" } = {},
  { allowExternal = true } = {}
) {
  const playable = pickLive30311Url({ status, streaming, recording });
  if (playable) return true;
  if (!allowExternal) return false;
  const altUrl = getFirstHttpUrlFromText(alt);
  return Boolean(altUrl);
}

async function ensureChannelLiveEventsLoaded(pubkey, token) {
  const targetPubkey = String(pubkey || "");
  if (!targetPubkey) return;
  const now = Date.now();
  const existing = channelLiveFetchState.get(targetPubkey) || { inFlight: null, lastFetchAt: 0, hasFetched: false };
  if (existing.inFlight) return existing.inFlight;
  const hasFetched = Boolean(existing.hasFetched);
  if (hasFetched && existing.lastFetchAt && now - existing.lastFetchAt < 30_000) return;
  let resolveDone = null;
  const inFlight = new Promise((resolve) => {
    resolveDone = resolve;
  });
  channelLiveFetchState.set(targetPubkey, { ...existing, inFlight });

  let fetchedCount = 0;
  try {
    const events = await fetchNostrEventsForAuthors([30311], [targetPubkey], 50);
    if (token !== channelRenderToken) return;
    fetchedCount = Array.isArray(events) ? events.length : 0;

    // Also include streams where this channel is listed as a host.
    const hosted = new Map();
    try {
      const hostCollected = new Map();
      const hostFilter = { kinds: [30311], "#p": [targetPubkey], limit: 100 };
      await Promise.all(
        getReadRelays().map((relay) =>
          requestEvents(relay, hostFilter, (ev) => {
            if (ev?.id && !hostCollected.has(ev.id)) hostCollected.set(ev.id, ev);
          })
        )
      );
      for (const ev of hostCollected.values()) {
        try {
          const tmp = { kind: 30311, nostrEventRaw: ev };
          const hostPk = getLiveHostPubkeyFrom30311(tmp);
          if (!hostPk || hostPk !== targetPubkey) continue;
          hosted.set(String(ev.id), ev);
        } catch {}
      }
    } catch {}

    const latestByKey = new Map();
    (events || []).concat(Array.from(hosted.values())).forEach((ev) => {
      try {
        const live = parseLiveEvent30311(ev);
        if (!live) return;
        if (!isDisplayableLive30311FromTags({
          status: live.status,
          streaming: live.streaming,
          recording: live.recording,
          alt: live.alt,
        })) {
          return;
        }

        const d = String(live.identifier || "").trim();
        const key = d ? `${live.pubkey}:${d}` : String(live.id);
        const existingLive = latestByKey.get(key);
        if (!existingLive || Number(live.published || 0) > Number(existingLive.published || 0)) {
          latestByKey.set(key, live);
        }
      } catch {}
    });

    channelLiveEventStore.set(targetPubkey, Array.from(latestByKey.values()));
    const st = channelLiveFetchState.get(targetPubkey) || {};
    channelLiveFetchState.set(targetPubkey, { ...st, hasNew: true });
  } catch {}
  finally {
    const st = channelLiveFetchState.get(targetPubkey) || {};
    channelLiveFetchState.set(targetPubkey, {
      ...st,
      inFlight: null,
      hasFetched: true,
      lastFetchAt: fetchedCount ? now : 0,
    });
    try {
      resolveDone?.();
    } catch {}
  }
}

function isRestrictedContentAllowed() {
  try {
   return window.localStorage.getItem(ALLOW_RESTRICTED_CONTENT_KEY) === "1";
  } catch {
   return false;
  }
 }

async function ensureWatchEventInspectorData(video) {
  if (!video?.id) return null;
  if (video.nostrEventRaw && Array.isArray(video.nostrRelays) && video.nostrRelays.length) return video;

  const token = ++watchEventInspectToken;
  const route = getRoute();
  const queryRelays = parseRelayHints(route?.params);
  const relays = mergeRelays(getReadRelays(), [], queryRelays);

  let first = null;
  const hits = [];
  const addr = video.address ? parseAddressableVideoCoord(video.address) : parseAddressableVideoCoord(video.id);
  if (addr) {
    await Promise.all(
      relays.map((relay) =>
        requestEvents(
          relay,
          {
            kinds: [addr.kind],
            authors: [addr.pubkey],
            "#d": [addr.identifier],
            limit: 20,
          },
          (ev) => {
            if (!ev?.id) return;
            if (!first || Number(ev.created_at || 0) > Number(first.created_at || 0)) {
              first = ev;
            }
            hits.push(relay);
          }
        )
      )
    );
  } else {
    await Promise.all(
      relays.map((relay) =>
        requestEvents(relay, { ids: [video.id], limit: 1 }, (ev) => {
          if (!ev?.id) return;
          if (!first) first = ev;
          hits.push(relay);
        })
      )
    );
  }

  if (token !== watchEventInspectToken) return null;
  if (!first) return video;

  const profile = profilesCache.get(first.pubkey) || profilesCache.get(video.pubkey) || null;
  storeVideo(
    {
      ...video,
      nostrEventRaw: first,
      nostrRelays: Array.from(new Set(hits)),
    },
    profile
  );
  return videoStore.get(video.id) || null;
}

const playerSettingsState = {
  stack: [],
  fallbackQualityMode: "auto",
};

function getCurrentPlaybackRate() {
  try {
    return Number(watchVideo?.playbackRate || 1) || 1;
  } catch {
    return 1;
  }
}

function setPlaybackRate(rate) {
  const next = Number(rate) || 1;
  try {
    if (watchVideo) watchVideo.playbackRate = next;
  } catch {}
}

function getCaptionTracks() {
  try {
    const tracks = watchVideo?.textTracks;
    if (!tracks) return [];
    return Array.from(tracks);
  } catch {
    return [];
  }
}

function setCaptionTrackMode(idx) {
  const tracks = getCaptionTracks();
  tracks.forEach((t, i) => {
    try {
      t.mode = i === idx ? "showing" : "disabled";
    } catch {}
  });
}

function getSelectedCaptionIndex() {
  const tracks = getCaptionTracks();
  if (!tracks || !tracks.length) return -1;
  return tracks.findIndex((t) => String(t.mode || "").toLowerCase() === "showing");
}

function formatHlsLevelLabel(level) {
  try {
    const h = Number(level?.height || 0) || 0;
    if (h) return `${h}p`;
    const w = Number(level?.width || 0) || 0;
    if (w && level?.height) return `${w}x${Number(level.height)}`;
    const br = Number(level?.bitrate || 0) || 0;
    if (br) return `${Math.round(br / 1000)} kbps`;
    return "Unknown";
  } catch {
    return "Unknown";
  }
}

function getVideoElementQualityLabel() {
  try {
    const h = Number(watchVideo?.videoHeight || 0) || 0;
    if (h) return `${h}p`;
    const w = Number(watchVideo?.videoWidth || 0) || 0;
    if (w && watchVideo?.videoHeight) return `${w}x${Number(watchVideo.videoHeight)}`;
    return "";
  } catch {
    return "";
  }
}

function getAutoQualityLabel() {
  try {
    // Prefer the real decoded video size when available. This avoids showing a
    // guessed/next level that isn't actually playing yet.
    const v = getVideoElementQualityLabel();
    if (v) return v;
    if (!watchHls || !Array.isArray(watchHls.levels) || !watchHls.levels.length) return "";
    const candidates = [watchHls.autoLevel, watchHls.loadLevel, watchHls.nextLevel, watchHls.startLevel].map((v) => Number(v));
    const idx = candidates.find((v) => Number.isFinite(v) && v >= 0 && v < watchHls.levels.length);
    if (idx == null) return "";
    return formatHlsLevelLabel(watchHls.levels[idx]);
  } catch {
    return "";
  }
}

function getQualityOptions() {
  if (!watchHls || !Array.isArray(watchHls.levels) || !watchHls.levels.length) return null;
  return watchHls.levels
    .map((l, i) => ({
      index: i,
      height: Number(l?.height || 0) || 0,
      label: formatHlsLevelLabel(l),
    }))
    .sort((a, b) => (b.height || 0) - (a.height || 0));
}

function getSelectedQualityLabel() {
  try {
    const videoFallback = getVideoElementQualityLabel();
    if (!watchHls) {
      if (playerSettingsState.fallbackQualityMode === "manual" && videoFallback) return videoFallback;
      return videoFallback ? `Auto (${videoFallback})` : "Auto";
    }

    // Some sources may create an Hls instance but not expose any levels.
    if (!Array.isArray(watchHls.levels) || !watchHls.levels.length) {
      if (playerSettingsState.fallbackQualityMode === "manual" && videoFallback) return videoFallback;
      return videoFallback ? `Auto (${videoFallback})` : "Auto";
    }

    const lvl = Number(watchHls.currentLevel);
    if (lvl === -1) {
      const auto = getAutoQualityLabel();
      return auto ? `Auto (${auto})` : "Auto";
    }
    const level = watchHls.levels?.[lvl];
    return level ? formatHlsLevelLabel(level) : "Manual";
  } catch {
    return "Auto";
  }
}

function makePlayerSettingsMenuItem(label, icon, rightLabel, onClick, selected) {
  const btn = document.createElement("button");
  btn.className = "menu-item";
  btn.type = "button";

  if (icon) {
    const ic = document.createElement("span");
    ic.className = "material-symbols-rounded";
    ic.textContent = icon;
    btn.appendChild(ic);
  }

  const text = document.createElement("span");
  text.textContent = label;
  btn.appendChild(text);

  const needsRight = Boolean(rightLabel) || Boolean(selected);
  if (needsRight) {
    const spacer = document.createElement("span");
    spacer.style.flex = "1";
    btn.appendChild(spacer);
  }

  if (rightLabel) {
    const right = document.createElement("span");
    right.textContent = rightLabel;
    right.style.color = "var(--yt-muted)";
    btn.appendChild(right);
  }

  if (selected) {
    const chk = document.createElement("span");
    chk.className = "material-symbols-rounded";
    chk.textContent = "check";
    btn.appendChild(chk);
  }

  btn.addEventListener("click", (event) => {
    try {
      event.stopPropagation();
    } catch {}
    try {
      onClick?.();
    } catch {}
  });
  return btn;
}

function renderPlayerSettingsMenu() {
  if (!playerSettingsMenu) return;
  const stack = playerSettingsState.stack;
  const view = stack.length ? stack[stack.length - 1] : "root";
  playerSettingsMenu.innerHTML = "";

  const pushView = (next) => {
    stack.push(next);
    renderPlayerSettingsMenu();
    try {
      positionMenu(playerSettingsMenu);
    } catch {}
  };

  const popView = () => {
    stack.pop();
    renderPlayerSettingsMenu();
    try {
      positionMenu(playerSettingsMenu);
    } catch {}
  };

  const addHeader = (title) => {
    const header = document.createElement("button");
    header.className = "menu-item";
    header.type = "button";
    const ic = document.createElement("span");
    ic.className = "material-symbols-rounded";
    ic.textContent = "arrow_back";
    header.appendChild(ic);
    const t = document.createElement("span");
    t.textContent = title;
    header.appendChild(t);
    header.addEventListener("click", () => popView());
    playerSettingsMenu.appendChild(header);
    const sep = document.createElement("div");
    sep.className = "menu-sep";
    playerSettingsMenu.appendChild(sep);
  };

  if (view === "root") {
    const qLabel = getSelectedQualityLabel();
    playerSettingsMenu.appendChild(
      makePlayerSettingsMenuItem("Quality", "high_quality", qLabel, () => pushView("quality"), false)
    );
    playerSettingsMenu.appendChild(
      makePlayerSettingsMenuItem("Speed", "speed", `${getCurrentPlaybackRate()}x`, () => pushView("speed"), false)
    );
    const capIdx = getSelectedCaptionIndex();
    const caps = getCaptionTracks();
    const capLabel = capIdx >= 0 ? caps[capIdx]?.label || "On" : "Off";
    playerSettingsMenu.appendChild(
      makePlayerSettingsMenuItem("Captions", "subtitles", capLabel, () => pushView("captions"), false)
    );
    return;
  }

  if (view === "quality") {
    addHeader("Quality");
    const opts = getQualityOptions();
    if (!opts) {
      const v = getVideoElementQualityLabel();
      const isManual = playerSettingsState.fallbackQualityMode === "manual";
      if (v) {
        playerSettingsMenu.appendChild(
          makePlayerSettingsMenuItem(
            v,
            "high_quality",
            "",
            () => {
              playerSettingsState.fallbackQualityMode = "manual";
              renderPlayerSettingsMenu();
            },
            isManual
          )
        );
      }
      playerSettingsMenu.appendChild(
        makePlayerSettingsMenuItem(
          "Auto",
          "high_quality",
          "",
          () => {
            playerSettingsState.fallbackQualityMode = "auto";
            renderPlayerSettingsMenu();
          },
          !isManual
        )
      );
      return;
    }
    const current = Number(watchHls?.currentLevel ?? -1);
    for (const o of opts) {
      const label = o.label;
      playerSettingsMenu.appendChild(
        makePlayerSettingsMenuItem(
          label,
          "high_quality",
          "",
          () => {
            setQualityLevel(o.index);
            renderPlayerSettingsMenu();
          },
          current === o.index
        )
      );
    }
    playerSettingsMenu.appendChild(
      makePlayerSettingsMenuItem(
        "Auto",
        "high_quality",
        "",
        () => {
          setQualityLevel(-1);
          renderPlayerSettingsMenu();
        },
        current === -1
      )
    );
    return;
  }

  if (view === "speed") {
    addHeader("Speed");
    const speeds = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
    const current = getCurrentPlaybackRate();
    speeds.forEach((s) => {
      playerSettingsMenu.appendChild(
        makePlayerSettingsMenuItem(
          `${s}x`,
          "speed",
          "",
          () => {
            setPlaybackRate(s);
            renderPlayerSettingsMenu();
          },
          Math.abs(current - s) < 0.001
        )
      );
    });
    return;
  }

  if (view === "captions") {
    addHeader("Captions");
    const tracks = getCaptionTracks();
    const selected = getSelectedCaptionIndex();
    playerSettingsMenu.appendChild(
      makePlayerSettingsMenuItem(
        "Off",
        "subtitles",
        "",
        () => {
          setCaptionTrackMode(-1);
          renderPlayerSettingsMenu();
        },
        selected === -1
      )
    );
    tracks.forEach((t, i) => {
      const label = t.label || t.language || `Track ${i + 1}`;
      playerSettingsMenu.appendChild(
        makePlayerSettingsMenuItem(
          label,
          "subtitles",
          "",
          () => {
            setCaptionTrackMode(i);
            renderPlayerSettingsMenu();
          },
          selected === i
        )
      );
    });
    if (!tracks.length) {
      playerSettingsMenu.appendChild(makePlayerSettingsMenuItem("No captions available", "subtitles", "", () => {}, false));
    }
  }
}

if (playerSettingsBtn) {
  playerSettingsBtn.addEventListener("click", () => {
    if (!playerSettingsMenu) return;
    if (!playerSettingsMenu.hidden) {
      closeMenu(playerSettingsMenu);
      return;
    }
    try {
      playerSettingsState.stack = [];
      renderPlayerSettingsMenu();
    } catch {}

    if (!isMobileUi()) {
      try {
        playerSettingsMenu.classList.add("is-up");
      } catch {}
    }
    openMenu(playerSettingsMenu);
    positionMenu(playerSettingsMenu);
  });
}

window.addEventListener("resize", () => {
  try {
    resetMenuPresentation(playerSettingsMenu);
    positionMenu(playerSettingsMenu);
  } catch {}
});

function renderSettingsPage(route) {
  if (!settingsContent) return;
  const section = String(route?.id || "");
  if (settingsTitle) {
    settingsTitle.textContent = section ? "Settings" : "Settings";
  }
  const sectionTitle = (key) => {
    const k = String(key || "").toLowerCase();
    if (k === "account") return "Account";
    if (k === "appearance") return "Appearance";
    if (k === "playback") return "Playback";
    if (k === "relays") return "Relays";
    if (k === "content") return "Restricted Mode";
    if (k === "privacy") return "Privacy";
    if (k === "about") return "About";
    return "Settings";
  };

  const updateBreadcrumbs = () => {
    if (!settingsBreadcrumbs) return;
    const desktop = !isMobileUi();
    const isRoot = !section;
    if (!desktop) {
      settingsBreadcrumbs.hidden = true;
      settingsBreadcrumbs.innerHTML = "";
      return;
    }
    if (isRoot) {
      settingsBreadcrumbs.hidden = true;
      settingsBreadcrumbs.innerHTML = "";
      return;
    }

    const current = sectionTitle(section);
    settingsBreadcrumbs.hidden = false;
    settingsBreadcrumbs.innerHTML = `
      <button class="settings-crumb" type="button" data-settings-crumb="root">Settings</button>
      <span class="material-symbols-rounded settings-crumb-sep" aria-hidden="true">chevron_right</span>
      <span class="settings-crumb-current">${escapeHtml(current)}</span>
    `;
    const rootBtn = settingsBreadcrumbs.querySelector('[data-settings-crumb="root"]');
    if (rootBtn) {
      rootBtn.addEventListener("click", () => {
        // Match the mobile topbar back button: go back one step in browser history.
        // Fallback to the Settings root when there is no back entry.
        if (getCurrentAppIndex() > 0) {
          try {
            history.back();
            return;
          } catch {}
        }
        navToDeep("#settings");
      });
    }
  };

  const escapeHtml = (value) => {
    const s = String(value || "");
    return s.replace(/[&<>"']/g, (c) => {
      if (c === "&") return "&amp;";
      if (c === "<") return "&lt;";
      if (c === ">") return "&gt;";
      if (c === '"') return "&quot;";
      return "&#39;";
    });
  };

  if (!section) {
    updateBreadcrumbs();
    settingsContent.innerHTML = `
      <div class="settings-group" role="group" aria-label="Account">
        <div class="settings-group-title">Account</div>
        <button class="settings-item" type="button" data-settings-section="account">
          <span class="material-symbols-rounded settings-item-icon" aria-hidden="true">person</span>
          <span class="settings-item-label">Account</span>
        </button>
      </div>

      <div class="settings-group" role="group" aria-label="Preferences">
        <div class="settings-group-title">Preferences</div>
        <button class="settings-item" type="button" data-settings-section="appearance">
          <span class="material-symbols-rounded settings-item-icon" aria-hidden="true">palette</span>
          <span class="settings-item-label">Appearance</span>
        </button>
        <button class="settings-item" type="button" data-settings-section="playback">
          <span class="material-symbols-rounded settings-item-icon" aria-hidden="true">play_circle</span>
          <span class="settings-item-label">Playback</span>
        </button>
        <button class="settings-item" type="button" data-settings-section="relays">
          <span class="material-symbols-rounded settings-item-icon" aria-hidden="true">dns</span>
          <span class="settings-item-label">Relays</span>
        </button>
      </div>

      <div class="settings-group" role="group" aria-label="Content">
        <div class="settings-group-title">Content</div>
        <button class="settings-item" type="button" data-settings-section="content">
          <span class="material-symbols-rounded settings-item-icon" aria-hidden="true">visibility_off</span>
          <span class="settings-item-label">Restricted Mode</span>
        </button>
      </div>

      <div class="settings-group" role="group" aria-label="Privacy">
        <div class="settings-group-title">Privacy</div>
        <button class="settings-item" type="button" data-settings-section="privacy">
          <span class="material-symbols-rounded settings-item-icon" aria-hidden="true">shield</span>
          <span class="settings-item-label">Privacy</span>
        </button>
      </div>

      <div class="settings-group" role="group" aria-label="About">
        <div class="settings-group-title">About</div>
        <button class="settings-item" type="button" data-settings-section="about">
          <span class="material-symbols-rounded settings-item-icon" aria-hidden="true">info</span>
          <span class="settings-item-label">About</span>
        </button>
      </div>
    `;
    settingsContent.querySelectorAll("[data-settings-section]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.getAttribute("data-settings-section") || "";
        if (!key) return;
        navToDeep(`#settings/${key}`);
      });
    });
    return;
  }

  const title = sectionTitle(section);
  if (settingsTitle) settingsTitle.textContent = title;
  updateBreadcrumbs();
  if (section === "account") {
    settingsContent.innerHTML = `
      <div class="settings-section">
        <div class="settings-section-title">${escapeHtml(title)}</div>
        <div class="settings-section-sub">Manage your identity, sign-in, and profile details.</div>

        <div class="settings-group" role="group" aria-label="Identity">
          <div class="settings-group-title">Identity</div>
          <div class="settings-row">
            <div class="settings-row-main">
              <div class="settings-row-title">Public key</div>
              <div class="settings-row-desc">View/copy your Nostr pubkey.</div>
            </div>
            <button class="settings-row-action" type="button" disabled>Copy</button>
          </div>
          <div class="settings-row">
            <div class="settings-row-main">
              <div class="settings-row-title">Profile</div>
              <div class="settings-row-desc">Name, picture, and about.</div>
            </div>
            <button class="settings-row-action" type="button" disabled>Edit</button>
          </div>
        </div>

        <div class="settings-group" role="group" aria-label="Security">
          <div class="settings-group-title">Security</div>
          <label class="settings-row settings-toggle">
            <div class="settings-row-main">
              <div class="settings-row-title">Require confirmation before publishing</div>
              <div class="settings-row-desc">Adds an extra step before sending events.</div>
            </div>
            <input type="checkbox" disabled />
            <span class="settings-switch" aria-hidden="true"></span>
          </label>
        </div>
      </div>
    `;
    return;
  }

  if (section === "appearance") {
    settingsContent.innerHTML = `
      <div class="settings-section">
        <div class="settings-section-title">${escapeHtml(title)}</div>
        <div class="settings-section-sub">Customize how NosTube looks and feels.</div>

        <div class="settings-group" role="group" aria-label="Theme">
          <div class="settings-group-title">Theme</div>
          <div class="settings-row">
            <div class="settings-row-main">
              <div class="settings-row-title">Color scheme</div>
              <div class="settings-row-desc">Light / Dark / System</div>
            </div>
            <select class="settings-select" data-theme-select>
              <option value="system">System</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <label class="settings-row settings-toggle">
            <div class="settings-row-main">
              <div class="settings-row-title">Reduce motion</div>
              <div class="settings-row-desc">Minimize animations and transitions.</div>
            </div>
            <input type="checkbox" disabled />
            <span class="settings-switch" aria-hidden="true"></span>
          </label>
        </div>

        <div class="settings-group" role="group" aria-label="Player">
          <div class="settings-group-title">Player</div>
          <label class="settings-row settings-toggle">
            <div class="settings-row-main">
              <div class="settings-row-title">Always show video title in fullscreen</div>
              <div class="settings-row-desc">Matches native-style fullscreen UI.</div>
            </div>
            <input type="checkbox" disabled checked />
            <span class="settings-switch" aria-hidden="true"></span>
          </label>
        </div>
      </div>
    `;

    const sel = settingsContent.querySelector("[data-theme-select]");
    if (sel) {
      try {
        sel.value = getThemeSetting();
      } catch {}
      sel.addEventListener("change", () => {
        try {
          setThemeSetting(sel.value);
        } catch {}
      });
    }
    return;
  }

  if (section === "playback") {
    settingsContent.innerHTML = `
      <div class="settings-section">
        <div class="settings-section-title">${escapeHtml(title)}</div>
        <div class="settings-section-sub">Control default playback behavior.</div>

        <div class="settings-group" role="group" aria-label="Defaults">
          <div class="settings-group-title">Defaults</div>
          <label class="settings-row settings-toggle">
            <div class="settings-row-main">
              <div class="settings-row-title">Autoplay next</div>
              <div class="settings-row-desc">Automatically start the next video.</div>
            </div>
            <input type="checkbox" disabled />
            <span class="settings-switch" aria-hidden="true"></span>
          </label>
          <label class="settings-row settings-toggle">
            <div class="settings-row-main">
              <div class="settings-row-title">Remember volume</div>
              <div class="settings-row-desc">Keep your volume between sessions.</div>
            </div>
            <input type="checkbox" disabled checked />
            <span class="settings-switch" aria-hidden="true"></span>
          </label>
        </div>

        <div class="settings-group" role="group" aria-label="Quality">
          <div class="settings-group-title">Quality</div>
          <div class="settings-row">
            <div class="settings-row-main">
              <div class="settings-row-title">Default quality</div>
              <div class="settings-row-desc">Auto / 1080p / 720p</div>
            </div>
            <select class="settings-select" disabled>
              <option>Auto</option>
              <option>1080p</option>
              <option>720p</option>
            </select>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (section === "relays") {
    const settings = getRelaySettings();
    const relays = settings.relays;
    const rows = relays
      .map((r, idx) => {
        const url = escapeHtml(r.url);
        const readChecked = r.read ? "checked" : "";
        const writeChecked = r.write ? "checked" : "";
        const canRemove = relays.length > 1;
        return `
          <div class="settings-row" data-relay-row data-relay-idx="${idx}">
            <div class="settings-row-main">
              <div class="settings-row-title" style="word-break: break-word;">${url}</div>
              <div class="settings-row-desc">Choose how NosTube uses this relay.</div>
            </div>
            <div style="display:flex; gap: 10px; align-items:center;">
              <label style="display:flex; gap:6px; align-items:center; font-size:12px; color: var(--yt-muted);">
                <input type="checkbox" data-relay-read ${readChecked} />
                Read
              </label>
              <label style="display:flex; gap:6px; align-items:center; font-size:12px; color: var(--yt-muted);">
                <input type="checkbox" data-relay-write ${writeChecked} />
                Write
              </label>
              <button class="text-btn" type="button" data-relay-remove ${canRemove ? "" : "disabled"}>Remove</button>
            </div>
          </div>
        `;
      })
      .join("\n");

    settingsContent.innerHTML = `
      <div class="settings-section">
        <div class="settings-section-title">${escapeHtml(title)}</div>
        <div class="settings-section-sub">Manage which Nostr relays NosTube reads from and writes to.</div>

        <div class="settings-group" role="group" aria-label="Relays">
          <div class="settings-group-title">Relays</div>
          ${rows || ""}
        </div>

        <div class="settings-group" role="group" aria-label="Add relay">
          <div class="settings-group-title">Add relay</div>
          <div class="settings-row">
            <div class="settings-row-main">
              <div class="settings-row-title">Relay URL</div>
              <div class="settings-row-desc">Must start with ws:// or wss://</div>
            </div>
            <input class="settings-select" style="width: min(360px, 100%);" type="text" placeholder="wss://relay.example" data-relay-add-input />
          </div>
          <div class="settings-row">
            <div class="settings-row-main"></div>
            <div style="display:flex; gap: 10px; align-items:center;">
              <button class="primary-btn" type="button" data-relay-add>Add</button>
              <button class="secondary-btn" type="button" data-relay-reset>Reset to defaults</button>
            </div>
          </div>
          <div class="settings-row" style="padding-top: 0;">
            <div class="settings-row-main">
              <div class="settings-row-desc" style="color: var(--yt-muted);">Tip: if you disable all Read relays, NosTube will fall back to defaults.</div>
            </div>
          </div>
        </div>
      </div>
    `;

    const applyAndRerender = () => {
      initNostrFeed();
      renderLocalPages();
      const route = getRoute();
      if (route.page === "channel" && route.id) showChannel(route.id);
      if (route.page === "watch" && route.id) {
        const v = videoStore.get(route.id);
        if (v) showWatchForVideo(v);
      }
    };

    settingsContent.querySelectorAll("[data-relay-row]").forEach((row) => {
      const idx = Number(row.getAttribute("data-relay-idx"));
      if (!Number.isFinite(idx) || idx < 0) return;
      const readEl = row.querySelector("[data-relay-read]");
      const writeEl = row.querySelector("[data-relay-write]");
      const removeBtn = row.querySelector("[data-relay-remove]");

      const onChange = () => {
        const next = getRelaySettings();
        const entry = next.relays[idx];
        if (!entry) return;
        entry.read = Boolean(readEl && readEl.checked);
        entry.write = Boolean(writeEl && writeEl.checked);
        setRelaySettings(next);
        applyAndRerender();
      };

      if (readEl) readEl.addEventListener("change", onChange);
      if (writeEl) writeEl.addEventListener("change", onChange);
      if (removeBtn) {
        removeBtn.addEventListener("click", () => {
          const next = getRelaySettings();
          if (next.relays.length <= 1) return;
          next.relays.splice(idx, 1);
          setRelaySettings(next);
          renderSettingsPage({ page: "settings", id: "relays" });
          applyAndRerender();
        });
      }
    });

    const addInput = settingsContent.querySelector("[data-relay-add-input]");
    const addBtn = settingsContent.querySelector("[data-relay-add]");
    if (addBtn) {
      addBtn.addEventListener("click", () => {
        const raw = String(addInput?.value || "").trim();
        const norm = normalizeRelayUrl(raw);
        if (!norm) {
          showToast("Invalid relay URL");
          return;
        }
        const next = getRelaySettings();
        if (next.relays.some((r) => String(r.url) === norm)) {
          showToast("Relay already added");
          return;
        }
        next.relays.push({ url: norm, read: true, write: true });
        setRelaySettings(next);
        if (addInput) addInput.value = "";
        renderSettingsPage({ page: "settings", id: "relays" });
        applyAndRerender();
      });
    }

    const resetBtn = settingsContent.querySelector("[data-relay-reset]");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        setRelaySettings(getDefaultRelaySettings());
        renderSettingsPage({ page: "settings", id: "relays" });
        applyAndRerender();
      });
    }
    return;
  }

  if (section === "content") {
    settingsContent.innerHTML = `
      <div class="settings-section">
        <div class="settings-section-title">${escapeHtml(title)}</div>
        <div class="settings-section-sub">Hide potentially mature content across NosTube.</div>

        <div class="settings-group" role="group" aria-label="Restricted Mode">
          <div class="settings-group-title">Restricted Mode</div>
          <label class="settings-row settings-toggle">
            <div class="settings-row-main">
              <div class="settings-row-title">Restricted Mode</div>
              <div class="settings-row-desc">When on, restricted content won’t appear anywhere.</div>
            </div>
            <input type="checkbox" data-restricted-mode-toggle />
            <span class="settings-switch" aria-hidden="true"></span>
          </label>
        </div>
      </div>
    `;

    const toggle = settingsContent.querySelector("[data-restricted-mode-toggle]");
    if (toggle) {
      try {
        toggle.checked = !isRestrictedContentAllowed();
      } catch {
        toggle.checked = true;
      }

      toggle.addEventListener("change", () => {
        const enabled = Boolean(toggle.checked);
        try {
          if (enabled) window.localStorage.removeItem(ALLOW_RESTRICTED_CONTENT_KEY);
          else window.localStorage.setItem(ALLOW_RESTRICTED_CONTENT_KEY, "1");
        } catch {}

        try {
          initNostrFeed();
        } catch {}
        try {
          renderLocalPages();
        } catch {}
        try {
          const route = getRoute();
          if (route.page === "channel" && route.id) showChannel(route.id);
        } catch {}
        try {
          const route = getRoute();
          if (route.page === "watch" && route.id) {
            const v = videoStore.get(route.id);
            if (v) showWatchForVideo(v);
          }
        } catch {}
      });
    }
    return;
  }

  if (section === "privacy") {
    settingsContent.innerHTML = `
      <div class="settings-section">
        <div class="settings-section-title">${escapeHtml(title)}</div>
        <div class="settings-section-sub">Control what’s stored locally and what’s shared.</div>

        <div class="settings-group" role="group" aria-label="Local data">
          <div class="settings-group-title">Local data</div>
          <div class="settings-row">
            <div class="settings-row-main">
              <div class="settings-row-title">Clear watch history</div>
              <div class="settings-row-desc">Removes local watch history from this device.</div>
            </div>
            <button class="settings-row-action" type="button" disabled>Clear</button>
          </div>
          <div class="settings-row">
            <div class="settings-row-main">
              <div class="settings-row-title">Clear saved videos</div>
              <div class="settings-row-desc">Removes Watch later and likes stored locally.</div>
            </div>
            <button class="settings-row-action" type="button" disabled>Clear</button>
          </div>
        </div>

        <div class="settings-group" role="group" aria-label="Sharing">
          <div class="settings-group-title">Sharing</div>
          <label class="settings-row settings-toggle">
            <div class="settings-row-main">
              <div class="settings-row-title">Send diagnostics</div>
              <div class="settings-row-desc">Help improve reliability by sharing anonymous info.</div>
            </div>
            <input type="checkbox" disabled />
            <span class="settings-switch" aria-hidden="true"></span>
          </label>
        </div>
      </div>
    `;
    return;
  }

  if (section === "about") {
    settingsContent.innerHTML = `
      <div class="settings-section">
        <div class="settings-section-title">${escapeHtml(title)}</div>
        <div class="settings-section-sub">App details, credits, and links.</div>

        <div class="settings-group" role="group" aria-label="App">
          <div class="settings-group-title">App</div>
          <div class="settings-row">
            <div class="settings-row-main">
              <div class="settings-row-title">Version</div>
              <div class="settings-row-desc">Preview build</div>
            </div>
            <div class="settings-row-value">1.0</div>
          </div>
          <div class="settings-row">
            <div class="settings-row-main">
              <div class="settings-row-title">Source</div>
              <div class="settings-row-desc">View project repository.</div>
            </div>
            <button class="settings-row-action" type="button" disabled>Open</button>
          </div>
        </div>
      </div>
    `;
    return;
  }

  settingsContent.innerHTML = `
    <div class="settings-section">
      <div class="settings-section-title">${escapeHtml(title)}</div>
      <div class="settings-section-sub">Coming soon.</div>
    </div>
  `;
}

function isFullscreenRoute(route) {
  return String(route?.page || "") === "fullscreen";
}

function getWatchIdForRoute(route) {
  if (!route) return "";
  if (route.page === "watch" || route.page === "fullscreen") return String(route.id || "");
  return "";
}

function enterAndroidFullscreenRoute(shouldRotate) {
  if (!isAndroidMode()) {
    enterSimFullscreen(shouldRotate);
    return;
  }
  const route = getRoute();
  const id = getWatchIdForRoute(route) || String(lastWatchedVideoId || "");
  if (!id) {
    enterSimFullscreen(shouldRotate);
    return;
  }
  simFullscreenRotateWanted = Boolean(shouldRotate);
  enterSimFullscreen(shouldRotate);
  if (!isFullscreenRoute(route)) {
    try {
      navPush(`#fullscreen/${id}`);
    } catch {}
  }
}

function exitAndroidFullscreenRoute() {
  if (!isAndroidMode()) {
    exitSimFullscreen();
    return;
  }
  const route = getRoute();
  simFullscreenRotateWanted = false;
  exitSimFullscreen();
  if (isFullscreenRoute(route)) {
    const idx = getCurrentAppIndex();
    if (idx > 0) {
      try {
        history.back();
        return;
      } catch {}
    }
    const id = getWatchIdForRoute(route) || String(lastWatchedVideoId || "");
    if (id) {
      try {
        navReplace(`#watch/${id}`);
      } catch {}
    }
  }
}

function isAndroidMode() {
  if (isAndroidModeCached == null) initAndroidModeFlagFromUrl();
  return Boolean(isAndroidModeCached);
}

function isSimFullscreen() {
  return document.body.classList.contains("is-sim-fullscreen");
}

function getCurrentVideoAspect() {
  const w = Number.isFinite(watchVideo?.videoWidth) ? watchVideo.videoWidth : 0;
  const h = Number.isFinite(watchVideo?.videoHeight) ? watchVideo.videoHeight : 0;
  if (w > 0 && h > 0) return w / h;
  return 0;
}

function parseZapReceiptDetails(ev) {
  try {
    const tags = Array.isArray(ev?.tags) ? ev.tags : [];
    const raw = String(getTagValue(tags, "description") || "").trim();
    if (!raw) return { senderPubkey: "", message: "" };
    const data = JSON.parse(raw);
    const senderPubkey = String(data?.pubkey || "").trim();
    const message = String(data?.content || "").trim();
    return {
      senderPubkey: /^[0-9a-f]{64}$/i.test(senderPubkey) ? senderPubkey : "",
      message,
    };
  } catch {
    return { senderPubkey: "", message: "" };
  }
}

function setAndroidUrlParamState(next) {
  if (!isAndroidMode()) return;
  try {
    const url = new URL(window.location.href);
    const params = url.searchParams;

    if (next?.fullscreen) params.set("nt_fs", "1");
    else params.delete("nt_fs");

    if (next?.rotate) params.set("nt_rot", "1");
    else params.delete("nt_rot");

    url.search = params.toString() ? `?${params.toString()}` : "";
    history.replaceState(history.state || {}, "", url.toString());
  } catch {}
}

function clearAndroidFullscreenParams() {
  if (!isAndroidMode()) return;
  setAndroidUrlParamState({ fullscreen: false, rotate: false });
}

function emitAndroidUiScheme(message) {
  if (!isAndroidMode()) return;
  const value = String(message || "").trim();
  if (!value) return;
  if (emitAndroidUiScheme._last === value) return;
  emitAndroidUiScheme._last = value;
  try {
    const payload = `nostube://${value}`;
    // Kodular's Web Viewer "Web View String Change" event only fires when
    // JavaScript calls AppInventor.setWebViewString(...).
    if (window.AppInventor && typeof window.AppInventor.setWebViewString === "function") {
      window.AppInventor.setWebViewString(payload);
      return;
    }

    // Fallback: attempt a custom-scheme navigation.
    window.location.href = payload;
  } catch {}
}

function syncAndroidFullscreenForRoute(route) {
  if (!isAndroidMode()) return;
  const isFs = String(route?.page || "") === "fullscreen";
  if (isFs) {
    document.body.classList.add("is-sim-fullscreen");
    setAndroidUrlParamState({ fullscreen: true, rotate: Boolean(simFullscreenRotateWanted) });
    if (watchFullscreenIcon) watchFullscreenIcon.textContent = "fullscreen_exit";
  } else {
    document.body.classList.remove("is-sim-fullscreen");
    simFullscreenRotateWanted = false;
    clearAndroidFullscreenParams();
    if (watchFullscreenIcon) watchFullscreenIcon.textContent = "fullscreen";
  }
}

function enterSimFullscreen(shouldRotate) {
  document.body.classList.add("is-sim-fullscreen");
  if (watchFullscreenIcon) watchFullscreenIcon.textContent = "fullscreen_exit";
}

function exitSimFullscreen() {
  document.body.classList.remove("is-sim-fullscreen");
  if (watchFullscreenIcon) watchFullscreenIcon.textContent = "fullscreen";
}

async function maybeLockLandscapeForFullscreen(shouldRotate) {
  if (!shouldRotate) return;
  try {
    if (screen?.orientation?.lock) {
      await screen.orientation.lock("landscape");
    }
  } catch {}
}

function unlockOrientation() {
  try {
    screen?.orientation?.unlock?.();
  } catch {}
}

function shouldRotateForCurrentVideo() {
  if (!isMobileUi()) return false;
  const aspect = getCurrentVideoAspect();
  return aspect > 1;
}

async function ensureNotFullscreenForMini() {
  if (isSimFullscreen()) {
    exitSimFullscreen();
    return;
  }
  if (!document.fullscreenElement) return;

  try {
    document.exitFullscreen?.();
  } catch {}

  await new Promise((resolve) => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      try {
        document.removeEventListener("fullscreenchange", onChange);
      } catch {}
      resolve();
    };
    const onChange = () => {
      if (!document.fullscreenElement) finish();
    };
    try {
      document.addEventListener("fullscreenchange", onChange);
    } catch {
      finish();
      return;
    }
    window.setTimeout(finish, 500);
  });
}

if (menuSettings) {
  menuSettings.addEventListener("click", () => {
    closeAllMenus();
    navigateFromWatchTo("#settings");
  });
}

async function requestMiniPlayer() {
  if (isMini) return;
  await ensureNotFullscreenForMini();
  enterMiniPlayer();
}

function requestMiniPlayerGesture() {
  if (isMini) return;
  if (isSimFullscreen()) {
    exitAndroidFullscreenRoute();
    enterMiniPlayer();
    return;
  }
  if (document.fullscreenElement) {
    pendingMiniAfterFullscreenExit = true;
    window.setTimeout(() => {
      if (!pendingMiniAfterFullscreenExit) return;
      if (!document.fullscreenElement) return;
      pendingMiniAfterFullscreenExit = false;
    }, 700);
    try {
      document.exitFullscreen?.();
      return;
    } catch {}
  }
  enterMiniPlayer();
}

const APP_SESSION_ID_KEY = "nostube-app-session-id";
let appSessionId = "";

function getOrCreateAppSessionId() {
  if (appSessionId) return appSessionId;
  try {
    const existing = window.sessionStorage.getItem(APP_SESSION_ID_KEY);
    if (existing) {
      appSessionId = existing;
      return appSessionId;
    }
  } catch {}
  const next = `ns-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  appSessionId = next;
  try {
    window.sessionStorage.setItem(APP_SESSION_ID_KEY, next);
  } catch {}
  return appSessionId;
}

function getAppIndexFromState(state) {
  const sid = getOrCreateAppSessionId();
  if (!state || state.nostubeSessionId !== sid) return 0;
  const n = Number(state.appIndex);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

function getCurrentAppIndex() {
  return getAppIndexFromState(history.state || null);
}

function ensureSessionStateForCurrentEntry() {
  const sid = getOrCreateAppSessionId();
  const current = history.state || {};
  if (current.nostubeSessionId === sid && typeof current.appIndex === "number") return;
  const next = {
    ...current,
    nostubeSessionId: sid,
    appIndex: getAppIndexFromState(current),
  };
  try {
    history.replaceState(next, "", window.location.hash || "#home");
  } catch {}
}

function navReplace(nextHash) {
  const target = String(nextHash || "") || "#home";
  try {
    const sid = getOrCreateAppSessionId();
    const current = history.state || {};
    const next = {
      ...current,
      nostubeSessionId: sid,
      appIndex: getAppIndexFromState(current),
    };
    history.replaceState(next, "", target);
  } catch {
    window.location.hash = target;
    return;
  }
  try {
    handleRoute();
  } catch {}
}

function navToDeep(nextHash) {
  const target = String(nextHash || "") || "#home";
  const route = getRoute();
  if (route.page === "watch" && !isMini) {
    navigateFromWatchTo(target);
    return;
  }
  navPush(target);
}

function navPush(nextHash) {
  const target = String(nextHash || "") || "#home";
  try {
    const sid = getOrCreateAppSessionId();
    const current = history.state || {};
    const next = {
      ...current,
      nostubeSessionId: sid,
      appIndex: getAppIndexFromState(current) + 1,
    };
    history.pushState(next, "", target);
  } catch {
    window.location.hash = target;
    return;
  }
  try {
    handleRoute();
  } catch {}
}

function navResetToHome({ thenPush = "" } = {}) {
  const target = "#home";
  const idx = getCurrentAppIndex();
  if (idx > 0) {
    homeResetInProgress = true;
    pendingMainAfterHomeReset = String(thenPush || "") || "";
    try {
      history.go(-idx);
      return;
    } catch {}
    homeResetInProgress = false;
    pendingMainAfterHomeReset = "";
  }
  navReplace(target);
  mainNavHasHomeBase = true;
  if (thenPush) {
    try {
      navPush(thenPush);
    } catch {}
  }
}

function navToMain(key) {
  const k = String(key || "");
  const map = {
    home: "#home",
    shorts: "#shorts",
    subs: "#subs",
    library: "#library",
  };
  const target = map[k] || "#home";
  const currentHash = window.location.hash || "#home";
  if (target === currentHash) return;

  // First main-tab interaction in this tab/session establishes our in-app root.
  // If we started on a deep URL (e.g. #watch/...), we must replace that *root*
  // entry with #home (not merely replace the current entry), so Back from Home
  // exits the app instead of returning to the initial deep URL.
  if (!mainNavHasHomeBase) {
    mainNavHasHomeBase = true;
    if (target === "#home") {
      navResetToHome();
    } else {
      navResetToHome({ thenPush: target });
    }
    return;
  }

  if (target === "#home") {
    const route = getRoute();
    if (route.page === "watch" && !isMini) {
      navigateFromWatchTo(target);
      mainNavHasHomeBase = true;
      return;
    }
    navResetToHome();
    mainNavHasHomeBase = true;
    return;
  }

  const isMainHash = (hash) =>
    hash === "#home" || hash === "#shorts" || hash === "#subs" || hash === "#library";
  const currentIsMain = isMainHash(currentHash);
  if (currentHash === "#home") {
    mainNavHasHomeBase = true;
  }

  const route = getRoute();

  if (route.page && !currentIsMain && mainNavHasHomeBase) {
    navResetToHome({ thenPush: target });
    return;
  }

  if (currentHash === "#home") {
    navPush(target);
    mainNavHasHomeBase = true;
    return;
  }

  if (currentIsMain && mainNavHasHomeBase) {
    navReplace(target);
    return;
  }

  // Default: treat main tabs as replacing current view once we have a home base.
  // If we somehow do not yet have a home base, navResetToHome will establish it.
  navResetToHome({ thenPush: target });
}

const STORAGE_HISTORY = "nostube-history";
const STORAGE_WATCHLATER = "nostube-watchlater";
const STORAGE_LIKED = "nostube-liked";
const STORAGE_DISLIKED = "nostube-disliked";
let channelRenderToken = 0;
let currentChannelPubkey = "";
let currentChannelTabKey = "videos";

const channelFetchState = new Map();
const channelLiveFetchState = new Map();
const channelLiveEventStore = new Map();

const AUTH_STORAGE_KEY = "nostube-auth";
const SESSION_SECRET_KEY = "nostube-nsec";
const PERSIST_SECRET_KEY = "nostube-nsec-persist";

const authState = {
  mode: "none",
  pubkey: "",
  npub: "",
  hasSecret: false,
};

let contacts = new Set();
let contactsEvent = null;
let profilesCache = new Map();

let lastOverlayFocus = null;
let lastSearchRenderQuery = null;
const searchResultsCache = new Map();

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-collapsed");
  });
}

function setShellInert(inert) {
  if (!appShell) return;
  try {
    if (inert) {
      appShell.setAttribute("aria-hidden", "true");
      if ("inert" in appShell) appShell.inert = true;
    } else {
      appShell.removeAttribute("aria-hidden");
      if ("inert" in appShell) appShell.inert = false;
    }
  } catch {}
}

function setBackgroundInert(inert) {
  const targets = [topbar, appBody, mobileNav, miniPlayer].filter(Boolean);
  targets.forEach((el) => {
    try {
      if (inert) {
        el.setAttribute("aria-hidden", "true");
        if ("inert" in el) el.inert = true;
      } else {
        el.removeAttribute("aria-hidden");
        if ("inert" in el) el.inert = false;
      }
    } catch {}
  });
}

function openSearchOverlay() {
  if (!searchOverlay) return;
  lastOverlayFocus = document.activeElement;
  document.body.classList.add("is-search-overlay-open");
  setBackgroundInert(true);
  searchOverlay.classList.add("active");
  try {
    const input = searchOverlay.querySelector('input[type="search"]');
    input?.focus();
  } catch {}
}

function closeSearchOverlay({ restoreFocus = true } = {}) {
  if (!searchOverlay) return;
  searchOverlay.classList.remove("active");
  document.body.classList.remove("is-search-overlay-open");
  setBackgroundInert(false);
  if (restoreFocus && lastOverlayFocus && lastOverlayFocus.focus) {
    try {
      lastOverlayFocus.focus();
    } catch {}
  }
  lastOverlayFocus = null;
}

function focusTopbarSearchInput() {
  const form = document.getElementById("search-form");
  const input = form?.querySelector('input[type="search"]') || null;
  if (!input) return;
  try {
    input.focus();
    input.select?.();
  } catch {}
}

function setTopbarSearchValue(value) {
  const form = document.getElementById("search-form");
  const input = form?.querySelector('input[type="search"]') || null;
  if (!input) return;
  input.value = String(value || "");
  const clearBtn = form?.querySelector(".search-clear") || null;
  if (clearBtn) {
    clearBtn.hidden = !input.value;
  }
}

function decodeUriComponentSafe(value) {
  try {
    return decodeURIComponent(String(value || ""));
  } catch {
    return String(value || "");
  }
}

if (searchBackBtn) {
  searchBackBtn.hidden = true;
}

function syncTopbarMode() {
  const mobile = isMobileUi();
  const route = getRoute();
  let useChannel = false;
  let useSearch = false;
  let useDeep = false;
  let useLibrary = false;

  const getSettingsSectionTitleForHash = (hash) => {
    const raw = String(hash || "").replace(/^#/, "");
    const [path] = raw.split("?");
    const [page, id] = path.split("/");
    if (page !== "settings") return "";
    const k = String(id || "").toLowerCase();
    if (!k) return "Settings";
    if (k === "account") return "Account";
    if (k === "appearance") return "Appearance";
    if (k === "playback") return "Playback";
    if (k === "relays") return "Relays";
    if (k === "privacy") return "Privacy";
    if (k === "about") return "About";
    return "Settings";
  };

  if (mobile && route.page === "channel") {
    useChannel = true;
  }

  if (mobile && route.page === "search") {
    useSearch = true;
  }

  if (mobile && route.page === "library") {
    useLibrary = true;
  }

  if (mobile && (route.page === "watch" || route.page === "fullscreen")) {
    if (underlayDragPage === pageChannel) useChannel = true;
    if (watchTransitionUnderlay === pageChannel) useChannel = true;
    if (topbarUnderlayOverridePage === pageChannel) useChannel = true;

    if (underlayDragPage === pageSearch) useSearch = true;
    if (watchTransitionUnderlay === pageSearch) useSearch = true;
    if (topbarUnderlayOverridePage === pageSearch) useSearch = true;

    if (underlayDragPage === pageHistory) useDeep = true;
    if (watchTransitionUnderlay === pageHistory) useDeep = true;
    if (topbarUnderlayOverridePage === pageHistory) useDeep = true;

    if (underlayDragPage === pageWatchlater) useDeep = true;
    if (watchTransitionUnderlay === pageWatchlater) useDeep = true;
    if (topbarUnderlayOverridePage === pageWatchlater) useDeep = true;

    if (underlayDragPage === pageLiked) useDeep = true;
    if (watchTransitionUnderlay === pageLiked) useDeep = true;
    if (topbarUnderlayOverridePage === pageLiked) useDeep = true;

    if (underlayDragPage === pageSettings) useDeep = true;
    if (watchTransitionUnderlay === pageSettings) useDeep = true;
    if (topbarUnderlayOverridePage === pageSettings) useDeep = true;

    if (underlayDragPage === pageLibrary) useLibrary = true;
    if (watchTransitionUnderlay === pageLibrary) useLibrary = true;
    if (topbarUnderlayOverridePage === pageLibrary) useLibrary = true;
  }

  if (
    mobile &&
    (route.page === "history" || route.page === "watchlater" || route.page === "liked" || route.page === "settings")
  ) {
    useDeep = true;
  }

  document.body.classList.toggle("is-channel-topbar", Boolean(useChannel));
  document.body.classList.toggle("is-search-topbar", Boolean(useSearch));
  document.body.classList.toggle("is-deep-topbar", Boolean(useDeep));
  document.body.classList.toggle("is-library-topbar", Boolean(useLibrary));

  const showBack = Boolean(useChannel || useSearch || useDeep);
  const showChannelControls = Boolean(useChannel);
  if (channelBackBtn) channelBackBtn.hidden = !showBack;
  if (channelMoreAnchor) channelMoreAnchor.hidden = !showChannelControls;
  if (!showChannelControls) {
    closeMenu(channelMenu);
  }

  if (topbarTitle) {
    if (useDeep || useLibrary) {
      let title = "";
      if (route.page === "history") title = "History";
      if (route.page === "watchlater") title = "Watch later";
      if (route.page === "liked") title = "Liked videos";
      if (route.page === "settings") title = getSettingsSectionTitleForHash(window.location.hash || "#settings") || "Settings";
      if (route.page === "library") title = "Library";
      if (!title) {
        if (underlayDragPage === pageHistory) title = "History";
        if (underlayDragPage === pageWatchlater) title = "Watch later";
        if (underlayDragPage === pageLiked) title = "Liked videos";
        if (underlayDragPage === pageSettings) {
          title = getSettingsSectionTitleForHash(lastSettingsHash) || "Settings";
        }
        if (underlayDragPage === pageLibrary) title = "Library";

        if (watchTransitionUnderlay === pageSettings) {
          title = getSettingsSectionTitleForHash(lastSettingsHash) || "Settings";
        }
        if (watchTransitionUnderlay === pageLibrary) title = "Library";

        if (topbarUnderlayOverridePage === pageSettings) {
          title = getSettingsSectionTitleForHash(lastSettingsHash) || "Settings";
        }
        if (topbarUnderlayOverridePage === pageLibrary) title = "Library";
      }
      topbarTitle.textContent = title || "";
      topbarTitle.hidden = false;
    } else {
      topbarTitle.hidden = true;
      topbarTitle.textContent = "";
    }
  }
}

if (mobileNavLinks.length) {
  const navKeys = ["home", "shorts", "create", "subs", "library"];
  mobileNavLinks.forEach((btn, idx) => {
    if (!btn.dataset.nav) {
      btn.dataset.nav = navKeys[idx] || "";
    }
  });
  mobileNavLinks.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.nav || "";
      if (key === "create") {
        if (createBtn) {
          createBtn.click();
        }
        return;
      }
      navToMain(key);
    });
  });
}

if (sidebarNavLinks.length) {
  sidebarNavLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const key = link.dataset.nav || "home";
      if (key === "home" || key === "shorts" || key === "subs" || key === "library") {
        navToMain(key);
        return;
      }
      navToDeep(`#${key}`);
    });
  });
}

if (brandLink) {
  brandLink.addEventListener("click", (event) => {
    event.preventDefault();
    navToMain("home");
  });
}

let pointerTracking = false;
let pointerSource = "";
let pointerId = null;

function handleDockRelease(dy, dt, direction) {
  touchStartY = null;
  touchLastY = null;
  touchStartTime = 0;
  touchTracking = null;

  const dist = Math.max(260, Math.round((window.innerHeight || 0) * 0.45));
  const progress = Math.max(0, Math.min(1, Math.abs(dy) / dist));
  if (dt > 1200) {
    clearDockDrag();
    return;
  }
  if (direction === "down" && dy > 0) {
    if (progress >= 0.5) {
      if (dockDragRaf) {
        try {
          window.cancelAnimationFrame(dockDragRaf);
        } catch {}
        dockDragRaf = 0;
      }
      dockDragPendingDy = 0;
      dockDragPendingAlphaDy = 0;
      dockDragDy = 0;
      try {
        document.body.style.setProperty("--dock-dy", "0px");
      } catch {}
      document.body.classList.remove("is-docking");

      startDockHold({ keepUnderlay: true });
      requestMiniPlayerGesture();
    } else {
      clearDockDrag();
    }
    return;
  }
  if (direction === "up" && dy < 0) {
    if (progress >= 0.5) {
      startDockHold();
      exitMiniPlayer();
    } else {
      clearDockDrag();
    }
    return;
  }
  clearDockDrag();
}

function clearDockHold() {
  if (dockHoldTimer) {
    try {
      clearTimeout(dockHoldTimer);
    } catch {}
    dockHoldTimer = 0;
  }
  if (dockHoldListener && pageWatch) {
    try {
      pageWatch.removeEventListener("transitionend", dockHoldListener);
    } catch {}
    dockHoldListener = null;
  }
  document.body.classList.remove("is-dock-hold");
}

function snapMiniPlayerTransitionOnce() {
  if (!isMobileUi()) return;
  if (!miniPlayer) return;
  try {
    miniPlayer.style.transition = "none";
  } catch {}
  try {
    void miniPlayer.offsetHeight;
  } catch {}
  requestAnimationFrame(() => {
    try {
      miniPlayer.style.transition = "";
    } catch {}
  });
}

function handleDockPointerStart(event, source) {
  if (!event) return;
  if (event.pointerType === "touch") return;
  if (event.target?.closest?.("button, a, input, textarea, select, label")) return;
  if (event.target?.closest?.(".watch-controls, .watch-control-btn, .watch-controls-progress")) return;
  if (event.button != null && event.button !== 0) return;
  const y = event.clientY;
  if (!Number.isFinite(y)) return;
  pointerTracking = true;
  pointerSource = source;
  pointerId = event.pointerId ?? null;
  try {
    event.currentTarget?.setPointerCapture?.(event.pointerId);
  } catch {}
  touchStartY = y;
  touchLastY = y;
  touchStartTime = Date.now();
  dragStartBottomOffset = 0;
  if (source === "mini" && isMini && miniPlayer) {
    const rect = miniPlayer.getBoundingClientRect();
    dragStartBottomOffset = Math.max(0, (window.innerHeight || 0) - rect.top);
  }
}

function handleDockPointerMove(event) {
  if (!pointerTracking) return;
  if (pointerId != null && event.pointerId != null && event.pointerId !== pointerId) return;
  const y = event.clientY;
  if (!Number.isFinite(y) || touchStartY == null) return;
  const dy = y - touchStartY;
  const lastDy = y - (touchLastY ?? y);
  touchLastY = y;

  if (!touchTracking) {
    if (Math.abs(dy) > 6) {
      touchTracking = dy > 0 ? "down" : "up";
    }
  }

  if (pointerSource === "watch" && !isMini && touchTracking === "down" && dy > 0 && Math.abs(lastDy) > 0) {
    event.preventDefault();
    setDockDragDy(dy);
  }

  if (pointerSource === "mini" && isMini && touchTracking === "up" && dy < 0 && Math.abs(lastDy) > 0) {
    event.preventDefault();
    setDockDragDy(dy - dragStartBottomOffset, dy);
  }
}

function handleDockPointerEnd(event, direction) {
  if (!pointerTracking) return;
  pointerTracking = false;
  pointerSource = "";
  pointerId = null;
  if (touchStartY == null) return;
  const y = event?.clientY;
  if (!Number.isFinite(y)) {
    touchStartY = null;
    touchLastY = null;
    touchStartTime = 0;
    touchTracking = null;
    clearDockDrag();
    return;
  }
  const dy = y - touchStartY;
  const dt = Date.now() - (touchStartTime || 0);
  handleDockRelease(dy, dt, direction);
}

function setWatchLikeUi() {
  if (!watchLikeBtn) return;
  const video = getCurrentWatchVideo();
  if (!video?.id) {
    watchLikeBtn.disabled = true;
    return;
  }
  watchLikeBtn.disabled = false;
  watchLikeBtn.classList.toggle("is-active", hasInIdList(STORAGE_LIKED, video.id));
}

function setWatchDislikeUi() {
  if (!watchDislikeBtn) return;
  const video = getCurrentWatchVideo();
  if (!video?.id) {
    watchDislikeBtn.disabled = true;
    return;
  }
  watchDislikeBtn.disabled = false;
  watchDislikeBtn.classList.toggle("is-active", hasInIdList(STORAGE_DISLIKED, video.id));
}

async function ensureWatchReactionState(video) {
  if (!watchLikeBtn && !watchDislikeBtn) return;
  if (!authState.pubkey) {
    watchUserLikeEventId = "";
    watchUserLikeRelayHint = "";
    watchUserDislikeEventId = "";
    watchUserDislikeRelayHint = "";
    setWatchLikeUi();
    setWatchDislikeUi();
    return;
  }
  if (!video?.id) return;
  try {
    const relays = mergeRelays(getReadRelays(), parseRelayHints(getRoute()?.params));
    const filter = video.address
      ? { kinds: [7], authors: [authState.pubkey], "#a": [video.address], limit: 50 }
      : { kinds: [7], authors: [authState.pubkey], "#e": [video.id], limit: 50 };

    let liked = false;
    let disliked = false;
    let likeId = "";
    let likeRelayHint = "";
    let dislikeId = "";
    let dislikeRelayHint = "";

    await Promise.all(
      relays.map((relay) =>
        requestEvents(relay, filter, (ev) => {
          if (!ev?.id) return;
          const c = String(ev.content || "").trim();
          if (c === "+" || c === "") {
            liked = true;
            likeId = likeId || String(ev.id || "");
            likeRelayHint = likeRelayHint || String(relay || "");
          } else if (c === "-") {
            disliked = true;
            dislikeId = dislikeId || String(ev.id || "");
            dislikeRelayHint = dislikeRelayHint || String(relay || "");
          }
        })
      )
    );

    if (liked && !hasInIdList(STORAGE_LIKED, video.id)) addToIdList(STORAGE_LIKED, video.id, 500);
    if (!liked && hasInIdList(STORAGE_LIKED, video.id)) removeFromIdList(STORAGE_LIKED, video.id);

    if (disliked && !hasInIdList(STORAGE_DISLIKED, video.id)) addToIdList(STORAGE_DISLIKED, video.id, 500);
    if (!disliked && hasInIdList(STORAGE_DISLIKED, video.id)) removeFromIdList(STORAGE_DISLIKED, video.id);

    watchUserLikeEventId = likeId;
    watchUserLikeRelayHint = likeRelayHint;
    watchUserDislikeEventId = dislikeId;
    watchUserDislikeRelayHint = dislikeRelayHint;
    setWatchLikeUi();
    setWatchDislikeUi();
  } catch {
    setWatchLikeUi();
    setWatchDislikeUi();
  }
}

async function deleteWatchReaction(kind7EventId, relayHint) {
  const id = String(kind7EventId || "");
  if (!id) return false;
  const hint = String(relayHint || getPreferredRelayHint() || "");
  const delTags = [["e", id, hint], ["k", "7"]];
  const unsigned = buildUnsignedEvent(5, "", delTags);
  const signed = await signEvent(unsigned);
  await publishEvent(signed);
  return true;
}

function getPreferredRelayHint() {
  try {
    const relays = getReadRelays();
    if (Array.isArray(relays) && relays.length) return String(relays[0] || "");
  } catch {}
  return "";
}

function buildUnsignedVideoComment1111(video, text) {
  const content = String(text || "").trim();
  if (!content) return null;
  const relayHint = getPreferredRelayHint();
  const rootKind = String(video.kind || "");
  const rootPubkey = String(video.pubkey || "");
  const tags = [];

  if (video.address) {
    // Root scope
    tags.push(["A", video.address, relayHint]);
    tags.push(["K", rootKind]);
    if (rootPubkey) tags.push(["P", rootPubkey, relayHint]);

    // Parent (top-level comment, so parent is root)
    tags.push(["a", video.address, relayHint]);
    const rootId = String(video?.nostrEventRaw?.id || "");
    if (rootId) tags.push(["e", rootId, relayHint, rootPubkey]);
    tags.push(["k", rootKind]);
    if (rootPubkey) tags.push(["p", rootPubkey, relayHint]);
  } else {
    // Root scope
    tags.push(["E", video.id, relayHint, rootPubkey]);
    tags.push(["K", rootKind]);
    if (rootPubkey) tags.push(["P", rootPubkey, relayHint]);

    // Parent (top-level comment, so parent is root)
    tags.push(["e", video.id, relayHint, rootPubkey]);
    tags.push(["k", rootKind]);
    if (rootPubkey) tags.push(["p", rootPubkey, relayHint]);
  }

  return buildUnsignedEvent(1111, content, tags);
}

let watchListFetchInFlight = null;
async function ensureWatchListHasCandidates(activeId) {
  if (!activeId) return;
  const existingCandidates = Array.from(videoStore.values()).filter((video) => video.id && video.id !== activeId);
  if (existingCandidates.length) return;
  if (watchListFetchInFlight) return watchListFetchInFlight;

  watchListFetchInFlight = Promise.resolve()
    .then(async () => {
      const events = await fetchNostrEvents([21, 34235, 34236], FEED_LIMIT * 2);
      const pubkeys = [...new Set((events || []).map((e) => e.pubkey).filter(Boolean))];
      if (pubkeys.length) {
        try {
          await ensureProfiles(pubkeys);
        } catch {}
      }
      (events || []).forEach((ev) => {
        try {
          const v = parseVideoEvent(ev);
          const profile = profilesCache.get(ev.pubkey) || null;
          storeVideo({ ...v, nostrEventRaw: ev, nostrRelays: [] }, profile);
        } catch {}
      });
    })
    .catch(() => {})
    .finally(() => {
      watchListFetchInFlight = null;
    });

  return watchListFetchInFlight;
}

function setWatchSaveUi() {
  if (!watchSaveBtn) return;
  const route = getRoute();
  const video = route.page === "watch" ? videoStore.get(route.id) : null;
  if (!video?.id) {
    watchSaveBtn.disabled = true;
    return;
  }
  watchSaveBtn.disabled = !authState.pubkey;
  watchSaveBtn.classList.toggle("is-active", hasInIdList(STORAGE_WATCHLATER, video.id));
}

function getCurrentWatchVideo() {
  const route = getRoute();
  if (route.page !== "watch" && route.page !== "fullscreen") return null;
  return videoStore.get(route.id) || videoStore.get(watchLoadedVideoId) || null;
}

async function fetchNostrEventsForAuthors(kinds, authors, limit) {
  const normalizedKinds = Array.isArray(kinds) ? kinds.filter((k) => Number.isFinite(Number(k))) : [];
  const omitSince = normalizedKinds.includes(30311);
  const since = omitSince ? 0 : Math.floor(Date.now() / 1000) - MAX_EVENT_AGE_DAYS * 86400;
  const filter = {
    kinds: normalizedKinds,
    authors: (authors || []).filter(Boolean).slice(0, 80),
    limit,
  };
  if (!omitSince) {
    filter.since = since;
  }
  if (!filter.authors.length) return [];
  const events = new Map();
  await Promise.all(
    getReadRelays().map((relay) =>
      requestEvents(relay, filter, (event) => {
        if (!events.has(event.id)) events.set(event.id, event);
      })
    )
  );
  const sorted = Array.from(events.values()).sort((a, b) => b.created_at - a.created_at);
  return dedupeVideoEventsByKey(sorted);
}

async function renderSubscriptionsPage() {
  if (!subsFeed || !subsEmpty) return;
  if (!authState.pubkey) {
    gateSignedOut(subsFeed, subsEmpty, {
      title: "Don't miss new videos",
      subtitle: "Sign in to see updates from channels you subscribe to.",
    });
    return;
  }

  const followed = Array.from(contacts.values()).slice(0, 80);
  if (!followed.length) {
    subsFeed.innerHTML = "";
    subsEmpty.textContent = "No subscriptions yet.";
    subsEmpty.hidden = false;
    return;
  }

  subsEmpty.textContent = "Loading subscription videos…";
  subsEmpty.hidden = false;
  try {
    await ensureProfiles(followed);
    const events = await fetchNostrEventsForAuthors([21], followed, FEED_LIMIT * 3);
    const profiles = new Map();
    followed.forEach((k) => profiles.set(k, profilesCache.get(k)));
    renderVideos(subsFeed, subsEmpty, events.slice(0, FEED_LIMIT * 2), profiles);
  } catch {
    subsFeed.innerHTML = "";
    subsEmpty.textContent = "Unable to load subscriptions right now.";
    subsEmpty.hidden = false;
  }
}

function exitMiniPlayerAndStop() {
  isMini = false;
  document.body.classList.remove("is-mini");
  setDockDragDy(0);
  if (watchVideoDocked && watchVideo && watchPlayer && watchVideo.parentElement !== watchPlayer) {
    try {
      if (watchPoster) {
        watchPlayer.insertBefore(watchVideo, watchPoster);
      } else {
        watchPlayer.appendChild(watchVideo);
      }
    } catch {}
    watchVideoDocked = false;
  }
  setMiniVisible(false);
  stopWatchPlayback();
  lastWatchedVideoId = "";
  try {
    scrollRestorePending = {
      hash: window.location.hash || "#home",
      y: scrollPositions.get(window.location.hash || "#home") || 0,
    };
  } catch {}
  handleRoute();
}

function undockWatchVideoFromMini() {
  if (!watchVideoDocked || !watchVideo || !watchPlayer) return;
  if (watchVideo.parentElement === watchPlayer) {
    watchVideoDocked = false;
    return;
  }
  try {
    if (watchPoster) {
      watchPlayer.insertBefore(watchVideo, watchPoster);
    } else {
      watchPlayer.appendChild(watchVideo);
    }
  } catch {}
  watchVideoDocked = false;
}

function renderLocalPages() {
  const signedIn = Boolean(authState.pubkey);
  if (pageLibrary?.classList.contains("is-active")) {
    setLibraryHeaderLoading(authState.pubkey);
    renderLibraryHeader(authState.pubkey);
    if (signedIn) {
      ensureProfiles([authState.pubkey])
        .then(() => renderLibraryHeader(authState.pubkey))
        .catch(() => {});
    }
    if (!signedIn) {
      gateSignedOut(libraryHistoryFeed, libraryHistoryEmpty, {
        title: "Your library",
        subtitle: "Sign in to see your history and playlists.",
      });
    } else {
      renderLocalList(libraryHistoryFeed, libraryHistoryEmpty, readIdList(STORAGE_HISTORY), {
        empty: "You haven't watched anything yet.",
        max: 10,
      });
    }
  }
  if (pageHistory?.classList.contains("is-active")) {
    if (!signedIn) {
      gateSignedOut(historyList, historyEmpty, {
        title: "Keep track of what you watch",
        subtitle: "Sign in to see your watch history.",
      });
    } else {
      renderLocalList(historyList, historyEmpty, readIdList(STORAGE_HISTORY), {
        empty: "You haven't watched anything yet.",
      });
    }
  }

  if (pageWatchlater?.classList.contains("is-active")) {
    if (!signedIn) {
      gateSignedOut(watchlaterList, watchlaterEmpty, {
        title: "Watch later",
        subtitle: "Sign in to save videos to watch later.",
      });
    } else {
      renderLocalList(watchlaterList, watchlaterEmpty, readIdList(STORAGE_WATCHLATER), {
        empty: "No videos saved for later.",
      });
    }
  }

  if (pageLiked?.classList.contains("is-active")) {
    if (!signedIn) {
      gateSignedOut(likedList, likedEmpty, {
        title: "Liked videos",
        subtitle: "Sign in to see videos you've liked.",
      });
    } else {
      renderLocalList(likedList, likedEmpty, readIdList(STORAGE_LIKED), {
        empty: "No liked videos yet.",
      });
    }
  }
}

function readIdList(key) {
  try {
    const raw = window.localStorage.getItem(key);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list.filter(Boolean) : [];
  } catch {
    return [];
  }
}

function writeIdList(key, list) {
  try {
    window.localStorage.setItem(key, JSON.stringify(Array.isArray(list) ? list : []));
  } catch {
    // ignore
  }
}

function addToIdList(key, id, max = 200) {
  const clean = String(id || "");
  if (!clean) return;
  const list = readIdList(key);
  const next = [clean, ...list.filter((x) => x !== clean)].slice(0, max);
  writeIdList(key, next);
}

function removeFromIdList(key, id) {
  const clean = String(id || "");
  if (!clean) return;
  const list = readIdList(key);
  writeIdList(
    key,
    list.filter((x) => x !== clean)
  );
}

function hasInIdList(key, id) {
  const clean = String(id || "");
  if (!clean) return false;
  return readIdList(key).includes(clean);
}

function gateSignedOut(container, emptyEl, options) {
  if (!container) return;
  const title = options?.title || "Sign in";
  const subtitle = options?.subtitle || "Sign in to continue.";
  if (emptyEl) {
    emptyEl.hidden = false;
    emptyEl.innerHTML = `
      <div class="gate">
        <div class="gate-icon">
          <span class="material-symbols-rounded">subscriptions</span>
        </div>
        <div class="gate-title">${title}</div>
        <div class="gate-sub">${subtitle}</div>
        <button class="secondary-btn gate-btn" type="button" data-auth-open>Sign in</button>
      </div>
    `;
  }
  container.innerHTML = "";
}

function renderLocalList(container, emptyEl, ids, options) {
  if (!container || !videoTemplate) return;
  container.innerHTML = "";
  const max = Number.isFinite(Number(options?.max)) ? Number(options.max) : 200;
  const items = (ids || [])
    .map((id) => videoStore.get(id))
    .filter(Boolean)
    .slice(0, max)
    .sort((a, b) => (b.published || 0) - (a.published || 0));
  const visibleItems = items.filter((video) => !(video.restricted && !isRestrictedContentAllowed()));
  if (!visibleItems.length) {
    if (emptyEl) {
      emptyEl.textContent = options?.empty || "Nothing here yet.";
      emptyEl.hidden = false;
    }
    return;
  }
  if (emptyEl) emptyEl.hidden = true;
  visibleItems.forEach((video) => {
    const clone = videoTemplate.content.cloneNode(true);
    const card = clone.querySelector(".video-card");
    const thumb = clone.querySelector(".thumbnail");
    const duration = clone.querySelector(".duration");
    const title = clone.querySelector(".video-title");
    const channel = clone.querySelector(".video-channel");
    const time = clone.querySelector(".video-time");
    const avatar = clone.querySelector(".channel-avatar");
    const verified = clone.querySelector(".verified");

    let displayPk = String(video.pubkey || "");
    let displayName = String(video.channel || "");
    let displayPicture = String(video.picture || "");
    let displayNip05 = String(video.nip05 || "");
    try {
      const hostPk = String(video.liveHostPubkey || "").trim();
      if (hostPk) {
        displayPk = hostPk;
        const hostProfile = profilesCache.get(hostPk) || null;
        if (hostProfile) {
          displayName = String(hostProfile?.name || "").trim() || shortenKey(hostPk);
          displayPicture = String(hostProfile?.picture || "");
          displayNip05 = String(hostProfile?.nip05 || "");
        } else {
          displayName = shortenKey(hostPk);
          displayPicture = "";
          displayNip05 = "";
        }
      }
    } catch {}

    title.textContent = video.title;
    channel.textContent = displayName || video.channel;
    time.textContent = timeAgo(video.published);
    duration.textContent = video.duration || "0:00";
    if (!video.durationSeconds) {
      duration.hidden = true;
    }
    setCardThumb(thumb, video.thumb, video.id);
    hydrateAvatar(avatar, {
      name: displayName || video.channel,
      picture: displayPicture || "",
    });
    if (!displayNip05) {
      verified.hidden = true;
    }
    card.dataset.videoId = video.id;
    card.dataset.videoTitle = video.title;
    card.dataset.videoChannel = video.channel;
    card.dataset.videoTime = timeAgo(video.published);
    card.dataset.videoSummary = video.summary || "";
    card.dataset.videoThumb = video.thumb || "";
    card.dataset.videoUrl = video.url || "";
    card.dataset.videoMime = video.mime || "";
    card.dataset.videoPicture = displayPicture || "";
    card.dataset.videoNip05 = displayNip05 || "";
    card.dataset.videoPubkey = displayPk || "";
    container.appendChild(clone);
  });
}

if (authCopyNpub && authGeneratedNpub) {
  authCopyNpub.addEventListener("click", async () => {
    try {
      await copyText(authGeneratedNpub.value);
      showToast("Copied npub");
    } catch {
      showToast("Copy failed");
    }
  });
}

if (watchEventBtn) {
  watchEventBtn.addEventListener("click", async () => {
    const video = getCurrentWatchVideo();
    if (!video) return;

    try {
      setWatchEventInspectorOpen(true);
      if (watchEventRelays) watchEventRelays.textContent = "Loading…";
      if (watchEventRaw) watchEventRaw.textContent = "Loading…";
    } catch {}

    let hydrated = video;
    try {
      hydrated = (await ensureWatchEventInspectorData(video)) || video;
    } catch {}
    try {
      populateWatchEventInspector(hydrated);
    } catch {}

    if (!hydrated?.nostrEventRaw) {
      try {
        if (watchEventRaw) watchEventRaw.textContent = "Unable to load raw event.";
      } catch {}
    }
  });
}

if (watchEventClose) {
  watchEventClose.addEventListener("click", () => {
    setWatchEventInspectorOpen(false);
  });
}

function setChannelEventInspectorOpen(open) {
  if (!channelEventPanel) return;
  channelEventPanel.hidden = !open;
}

async function fetchChannelProfileEvent(pubkey) {
  const target = String(pubkey || "").trim();
  if (!target) return null;
  const collected = new Map();
  const filter = { kinds: [0], authors: [target], limit: 1 };
  await Promise.all(
    getReadRelays().map((relay) =>
      requestEvents(relay, filter, (event) => {
        if (!event?.id) return;
        if (!collected.has(event.id)) collected.set(event.id, { event, relays: new Set([relay]) });
        else {
          try {
            collected.get(event.id)?.relays?.add?.(relay);
          } catch {}
        }
      })
    )
  );
  const first = Array.from(collected.values())[0] || null;
  return first;
}

function populateChannelEventInspector(data) {
  if (!channelEventRelays || !channelEventRaw) return;
  channelEventRelays.innerHTML = "";
  const relays = Array.isArray(data?.relays)
    ? data.relays
    : Array.from(data?.relays || []).filter(Boolean);
  if (relays.length) {
    relays.forEach((relay) => {
      const url = String(relay || "").trim();
      if (!url) return;
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = url;
      channelEventRelays.appendChild(a);
      channelEventRelays.appendChild(document.createTextNode("\n"));
    });
  } else {
    channelEventRelays.textContent = "No relay info.";
  }

  const raw = data?.event;
  if (raw && typeof raw === "object") {
    try {
      channelEventRaw.textContent = JSON.stringify(raw, null, 2);
    } catch {
      channelEventRaw.textContent = String(raw);
    }
  } else {
    channelEventRaw.textContent = "No raw event.";
  }
}

if (channelEventBtn) {
  channelEventBtn.addEventListener("click", async () => {
    const route = getRoute();
    const pk = String(route?.id || "").trim();
    if (!pk) return;

    try {
      setChannelEventInspectorOpen(true);
      if (channelEventRelays) channelEventRelays.textContent = "Loading…";
      if (channelEventRaw) channelEventRaw.textContent = "Loading…";
    } catch {}

    let data = null;
    try {
      data = await fetchChannelProfileEvent(pk);
    } catch {}
    try {
      populateChannelEventInspector(data);
    } catch {}

    if (!data?.event) {
      try {
        if (channelEventRaw) channelEventRaw.textContent = "Unable to load raw event.";
      } catch {}
    }
  });
}

if (channelEventClose) {
  channelEventClose.addEventListener("click", () => {
    setChannelEventInspectorOpen(false);
  });
}

if (authCopyNsec && authGeneratedNsec) {
  authCopyNsec.addEventListener("click", async () => {
    try {
      await copyText(authGeneratedNsec.value);
      showToast("Copied nsec");
    } catch {
      showToast("Copy failed");
    }
  });
}

if (mobileSearch) {
  mobileSearch.addEventListener("click", () => {
    const currentHash = window.location.hash || "#home";
    if (!/^#search\b/i.test(currentHash)) {
      const entryHash = /^#(watch|fullscreen)\b/i.test(currentHash)
        ? miniLastHash || lastNonWatchHash || "#home"
        : currentHash;
      lastNonSearchHash = entryHash || lastNonSearchHash || "#home";
      searchEntryHash = lastNonSearchHash;
      searchEntryMainNavKey = lineageMainNavKeyFromHash(searchEntryHash);
    }
    navigateFromWatchTo("#search/");
    requestAnimationFrame(() => focusTopbarSearchInput());
  });
}

if (topbarSettings) {
  topbarSettings.addEventListener("click", () => {
    closeAllMenus();
    navigateFromWatchTo("#settings");
  });
}

if (searchClose && searchOverlay) {
  searchClose.addEventListener("click", () => {
    closeSearchOverlay();
  });
}

function extractSearchQuery() {
  if (!searchOverlay) return "";
  const input = searchOverlay.querySelector('input[type="search"]');
  return String(input?.value || "").trim();
}

function setSearchQuery(value) {
  if (!searchOverlay) return;
  const input = searchOverlay.querySelector('input[type="search"]');
  if (input) input.value = String(value || "");
}

function getSearchOverlaySuggestions() {
  if (!searchOverlay) return null;
  return searchOverlay.querySelector(".search-suggestions");
}

function normalizeSearchQuery(raw) {
  return String(raw || "").trim();
}

function queryLooksLikeVideoId(query) {
  const q = String(query || "").trim();
  if (!q) return false;
  if (/^[0-9a-f]{64}$/i.test(q)) return true;
  if (/^[0-9a-f]{8,63}$/i.test(q)) return true;
  if (/^(note|nevent)1[0-9a-z]+$/i.test(q)) return true;
  return false;
}

function normalizeHashTag(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const tag = raw.startsWith("#") ? raw.slice(1) : raw;
  return tag.trim();
}

function normalizeSearchText(raw) {
  const value = String(raw || "").toLowerCase();
  try {
    return value
      .replace(/#/g, " ")
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .trim()
      .replace(/\s+/g, " ");
  } catch {
    return value
      .replace(/#/g, " ")
      .replace(/[^a-z0-9]+/gi, " ")
      .trim()
      .replace(/\s+/g, " ");
  }
}

function extractSearchWords(query) {
  const normalized = normalizeSearchText(query);
  if (!normalized) return [];
  return normalized.split(" ").map((w) => w.trim()).filter(Boolean);
}

function stringifyEventTags(tags) {
  try {
    return (tags || [])
      .filter((entry) => Array.isArray(entry) && entry.length)
      .map((entry) => entry.slice(0, 12).join(" "))
      .join(" \n");
  } catch {
    return "";
  }
}

function stringifyProfileForSearch(profile) {
  if (!profile) return "";
  const name = String(profile.name || "");
  const nip05 = String(profile.nip05 || "");
  const about = String(profile.about || "");
  const displayName = String(profile.display_name || "");
  const username = String(profile.username || "");
  return `${name}\n${displayName}\n${username}\n${nip05}\n${about}`;
}

function matchesQueryLocally(event, video, profile, query) {
  const q = normalizeSearchText(query);
  if (!q) return true;
  const words = extractSearchWords(q);

  const title = String(video?.title || "");
  const summary = String(video?.summary || "");
  const content = String(event?.content || "");
  const tags = stringifyEventTags(event?.tags);
  const profileText = stringifyProfileForSearch(profile);
  const pubkey = String(event?.pubkey || video?.pubkey || "");

  const hay = normalizeSearchText(`${title}\n${summary}\n${content}\n${tags}\n${profileText}\n${pubkey}`);
  return words.every((w) => hay.includes(w));
}

async function searchNostrVideos(query, { limit = 80 } = {}) {
  const q = normalizeSearchQuery(query);
  if (!q) return [];

  const since = Math.floor(Date.now() / 1000) - MAX_EVENT_AGE_DAYS * 86400;

  const isTagOnly = /^#\S+$/.test(q);
  const tag = isTagOnly ? normalizeHashTag(q) : "";

  const kinds = [21, 22, 34235, 34236, 30311];
  const relays = getReadRelays();

  const candidates = new Map();
  const addCandidate = (event) => {
    if (!event?.id) return;
    if (!candidates.has(event.id)) candidates.set(event.id, event);
  };

  const fallbackLimit = Math.max(240, limit * 6);
  const fallbackFilter = { kinds, limit: fallbackLimit };
  if (!kinds.includes(30311)) {
    fallbackFilter.since = since;
  }

  // Always fetch a recent window and filter locally so results are consistent
  // across relays with/without NIP-50 search support.
  const tasks = [];
  tasks.push(
    ...relays.map((relay) =>
      requestEvents(relay, fallbackFilter, (event) => {
        addCandidate(event);
      })
    )
  );

  // If this looks like a pure hashtag search, also do a #t filter which many relays support.
  if (tag) {
    const tagFilter = { kinds, limit: Math.max(120, limit * 3), "#t": [tag] };
    if (!kinds.includes(30311)) {
      tagFilter.since = since;
    }
    tasks.push(
      ...relays.map((relay) =>
        requestEvents(relay, tagFilter, (event) => {
          addCandidate(event);
        })
      )
    );
  } else {
    // Opportunistic NIP-50 search. If a relay supports it, great; if not, the fallback window still works.
    const searchFilter = { kinds, limit: Math.max(120, limit * 3), search: q };
    if (!kinds.includes(30311)) {
      searchFilter.since = since;
    }
    tasks.push(
      ...relays.map((relay) =>
        requestEvents(relay, searchFilter, (event) => {
          addCandidate(event);
        })
      )
    );
  }

  await Promise.all(tasks);
  const candidateEvents = Array.from(candidates.values()).sort((a, b) => b.created_at - a.created_at);

  const pubkeys = [...new Set(candidateEvents.map((e) => e.pubkey).filter(Boolean))];
  const profiles = await fetchProfiles(pubkeys);
  profiles.forEach((value, key) => profilesCache.set(key, value));

  const matched = candidateEvents.filter((event) => {
    const video = parseVideoEvent(event);
    const profile = profiles.get(event.pubkey) || profilesCache.get(event.pubkey) || null;
    if (event?.kind === 30311) {
      return (
        isDisplayableLive30311FromTags({
          status: video.liveStatus,
          streaming: video.liveStreaming,
          recording: video.liveRecording,
          alt: video.liveAlt,
        }) &&
        matchesQueryLocally(event, video, profile, q)
      );
    }
    return matchesQueryLocally(event, video, profile, q);
  });

  // Keep only the latest version for addressable events.
  return dedupeVideoEventsByKey(matched).slice(0, limit);
}

function setSearchPageHeader(query) {
  if (searchTitle) searchTitle.textContent = query ? `Search: ${query}` : "Search";
  if (searchMeta) searchMeta.textContent = "Results from connected relays";
}

async function renderSearchPage(query) {
  if (!searchFeed || !searchEmpty) return;
  const q = normalizeSearchQuery(query);

  if (q && lastSearchRenderQuery === q && searchFeed.childElementCount) {
    setSearchPageHeader(q);
    searchEmpty.hidden = true;
    return;
  }
  lastSearchRenderQuery = q || null;

  setSearchPageHeader(q);
  if (!q) {
    searchFeed.innerHTML = "";
    searchEmpty.textContent = "Type something to search.";
    searchEmpty.hidden = false;
    return;
  }

  const cached = searchResultsCache.get(q) || null;
  if (cached && Array.isArray(cached.events) && cached.events.length) {
    searchEmpty.hidden = true;
    renderVideos(
      searchFeed,
      searchEmpty,
      cached.events.slice().sort((a, b) => b.created_at - a.created_at),
      cached.profiles || new Map()
    );
    return;
  }

  searchFeed.innerHTML = "";
  searchEmpty.textContent = "Searching relays…";
  searchEmpty.hidden = false;

  if (queryLooksLikeVideoId(q)) {
    const target = `#watch/${encodeURIComponent(q)}`;
    const route = getRoute();
    if (route.page === "watch" && !isMini) {
      navigateFromWatchTo(target);
    } else {
      navToDeep(target);
    }
    return;
  }

  let events = [];
  try {
    events = await searchNostrVideos(q, { limit: 80 });
  } catch {
    events = [];
  }

  if (!events.length) {
    searchFeed.innerHTML = "";
    searchEmpty.textContent = "No results found on connected relays.";
    searchEmpty.hidden = false;
    return;
  }

  const pubkeys = [...new Set(events.map((e) => e.pubkey).filter(Boolean))];
  await ensureProfiles(pubkeys);
  const profiles = new Map();
  pubkeys.forEach((key) => profiles.set(key, profilesCache.get(key)));
  searchEmpty.hidden = true;
  renderVideos(searchFeed, searchEmpty, events.sort((a, b) => b.created_at - a.created_at), profiles);

  try {
    searchResultsCache.set(q, { events: events.slice(), profiles });
  } catch {}
}

function navigateToSearch(query) {
  const q = normalizeSearchQuery(query);
  const currentRoute = getRoute();
  if (currentRoute.page !== "search") {
    const currentHash = window.location.hash || "#home";
    const entryHash = /^#(watch|fullscreen)\b/i.test(currentHash)
      ? miniLastHash || lastNonWatchHash || "#home"
      : currentHash;
    lastNonSearchHash = entryHash || lastNonSearchHash || "#home";
    searchEntryHash = lastNonSearchHash;
    searchEntryMainNavKey = lineageMainNavKeyFromHash(searchEntryHash);
  }
  const target = `#search/${encodeURIComponent(q)}`;

  // Route through our navigation helpers so history.state stays consistent.
  if (currentRoute.page === "watch" && !isMini) {
    navigateFromWatchTo(target);
    return;
  }
  navToDeep(target);
}

function performSearch(rawQuery) {
  const q = normalizeSearchQuery(rawQuery);
  navigateToSearch(q);
}

if (searchOverlay) {
  const overlayInput = searchOverlay.querySelector('input[type="search"]');
  const overlayBtn = searchOverlay.querySelector('button[aria-label="Search"]');
  const suggestionEls = Array.from(searchOverlay.querySelectorAll(".suggestion"));
  const suggestions = getSearchOverlaySuggestions();

  const run = () => performSearch(extractSearchQuery());

  if (overlayBtn) {
    overlayBtn.addEventListener("click", (event) => {
      event.preventDefault();
      if (suggestions) suggestions.hidden = true;
      closeSearchOverlay();
      run();
    });
  }

  if (overlayInput) {
    overlayInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        if (suggestions) suggestions.hidden = true;
        closeSearchOverlay();
        run();
      }
    });
  }

  suggestionEls.forEach((el) => {
    el.addEventListener("click", () => {
      const value = String(el.textContent || "").trim();
      setSearchQuery(value);
      if (suggestions) suggestions.hidden = true;
      closeSearchOverlay();
      run();
    });
  });

  // Focus trap for accessibility
  searchOverlay.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    const focusables = Array.from(
      searchOverlay.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden"));
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;
    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
      return;
    }
    if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && searchOverlay && searchOverlay.classList.contains("active")) {
    closeSearchOverlay();
  }
});

const searchForm = document.getElementById("search-form");
if (searchForm) {
  const searchInput = searchForm.querySelector('input[type="search"]');
  const clearBtn = searchForm.querySelector(".search-clear");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      if (clearBtn) clearBtn.hidden = !String(searchInput.value || "");
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearBtn.hidden = true;
      focusTopbarSearchInput();
    });
  }

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const q = String(searchInput?.value || "").trim();
    performSearch(q);
  });
}

const DEFAULT_RELAYS = [
  "wss://relay.damus.io",
  "wss://relay.coinos.io",
  "wss://nos.lol",
  "wss://relay.snort.social",
  "wss://relay.primal.net",
  "wss://nostr.wine",
];

const RELAY_SETTINGS_KEY = "nostube-relays";
let relaySettingsCache = null;

function getDefaultRelaySettings() {
  return {
    relays: DEFAULT_RELAYS.map((url) => ({ url, read: true, write: true })),
  };
}

function coerceRelaySettings(raw) {
  const out = { relays: [] };
  const input = raw && typeof raw === "object" ? raw : {};
  const list = Array.isArray(input.relays) ? input.relays : [];
  const seen = new Set();
  for (const item of list) {
    const url = normalizeRelayUrl(item?.url);
    if (!url || seen.has(url)) continue;
    seen.add(url);
    out.relays.push({ url, read: Boolean(item?.read), write: Boolean(item?.write) });
  }
  if (!out.relays.length) return getDefaultRelaySettings();
  return out;
}

function getRelaySettings() {
  if (relaySettingsCache) return relaySettingsCache;
  try {
    const raw = window.localStorage.getItem(RELAY_SETTINGS_KEY);
    if (raw) {
      relaySettingsCache = coerceRelaySettings(JSON.parse(raw));
      return relaySettingsCache;
    }
  } catch {}
  relaySettingsCache = getDefaultRelaySettings();
  return relaySettingsCache;
}

function setRelaySettings(next) {
  relaySettingsCache = coerceRelaySettings(next);
  try {
    window.localStorage.setItem(RELAY_SETTINGS_KEY, JSON.stringify(relaySettingsCache));
  } catch {}
}

function getReadRelays() {
  const settings = getRelaySettings();
  const out = (settings.relays || []).filter((r) => r.read).map((r) => r.url);
  return out.length ? out : DEFAULT_RELAYS.slice();
}

function getWriteRelays() {
  const settings = getRelaySettings();
  const out = (settings.relays || []).filter((r) => r.write).map((r) => r.url);
  return out.length ? out : DEFAULT_RELAYS.slice();
}

const FEED_LIMIT = 64;
const SHORTS_LIMIT = 12;
const MAX_EVENT_AGE_DAYS = 365;
const DEBUG_NOSTR = false;

const THEME_KEY = "nostube-theme";
let themeSettingCached = "";
let themeEffectiveCached = "";
let themeMediaQuery = null;

function getThemeSetting() {
  if (themeSettingCached) return themeSettingCached;
  let raw = "";
  try {
    raw = String(window.localStorage.getItem(THEME_KEY) || "");
  } catch {
    raw = "";
  }
  const v = String(raw || "").toLowerCase();
  if (v === "light" || v === "dark" || v === "system") {
    themeSettingCached = v;
    return v;
  }
  themeSettingCached = "dark";
  return themeSettingCached;
}

function setThemeSetting(next) {
  const v = String(next || "").toLowerCase();
  const normalized = v === "light" || v === "dark" || v === "system" ? v : "dark";
  themeSettingCached = normalized;
  try {
    window.localStorage.setItem(THEME_KEY, normalized);
  } catch {}
  applyTheme();
}

function computeEffectiveTheme(setting) {
  const s = String(setting || "").toLowerCase();
  if (s === "light" || s === "dark") return s;
  let prefersDark = false;
  try {
    prefersDark = Boolean(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
  } catch {}
  return prefersDark ? "dark" : "light";
}

function applyTheme() {
  const setting = getThemeSetting();
  const effective = computeEffectiveTheme(setting);
  themeEffectiveCached = effective;
  try {
    if (effective === "dark") document.documentElement.dataset.theme = "dark";
    else document.documentElement.dataset.theme = "light";
  } catch {}

  try {
    emitAndroidUiScheme(`THEME:${effective.toUpperCase()}`);
  } catch {}
}

function initThemeController() {
  if (!themeMediaQuery && window.matchMedia) {
    try {
      themeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    } catch {
      themeMediaQuery = null;
    }
  }

  try {
    applyTheme();
  } catch {}

  if (themeMediaQuery && !initThemeController._wired) {
    initThemeController._wired = true;
    const onChange = () => {
      if (getThemeSetting() !== "system") return;
      const nextEffective = computeEffectiveTheme("system");
      if (nextEffective === themeEffectiveCached) return;
      applyTheme();
    };
    try {
      themeMediaQuery.addEventListener("change", onChange);
    } catch {
      try {
        themeMediaQuery.addListener(onChange);
      } catch {}
    }
  }
}

let watchLoadToken = 0;

function showToast(message) {
  if (!toastEl) return;
  toastEl.textContent = String(message || "");
  toastEl.classList.add("active");
  window.clearTimeout(showToast._t);
  showToast._t = window.setTimeout(() => {
    toastEl.classList.remove("active");
  }, 2400);
}

async function copyText(text) {
  const value = String(text || "");
  if (!value) return false;
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return true;
  }
  const el = document.createElement("textarea");
  el.value = value;
  el.setAttribute("readonly", "true");
  el.style.position = "fixed";
  el.style.top = "-9999px";
  document.body.appendChild(el);
  el.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(el);
  return ok;
}

function getNostrTools() {
  const tools = window.NostrTools || window.nostrTools || null;
  if (!tools) return null;
  return tools;
}

function decodeNpubToPubkeySafe(value) {
  try {
    const raw = String(value || "").trim();
    if (!/^npub1[0-9a-z]+$/i.test(raw)) return "";
    const tools = getNostrTools();
    if (!tools?.nip19?.decode) return "";
    const decoded = tools.nip19.decode(raw);
    if (!decoded || decoded.type !== "npub") return "";
    return String(decoded.data || "");
  } catch {
    return "";
  }
}

function formatNpubShort(pubkey) {
  const npub = pubkeyToNpubSafe(pubkey);
  if (npub) return shortenNpub(npub);
  return shortenKey(String(pubkey || ""));
}

function parseTimestampToSeconds(raw) {
  const s = String(raw || "").trim();
  if (!s) return -1;
  const parts = s.split(":");
  if (parts.length < 2 || parts.length > 3) return -1;
  const nums = parts.map((p) => Number(p));
  if (nums.some((n) => !Number.isFinite(n) || n < 0)) return -1;
  if (parts.length === 2) {
    const [m, sec] = nums;
    if (sec >= 60) return -1;
    return m * 60 + sec;
  }
  const [h, m, sec] = nums;
  if (m >= 60 || sec >= 60) return -1;
  return h * 3600 + m * 60 + sec;
}

function extractMentionPubkeysFromText(content) {
  const text = String(content || "");
  const out = new Set();
  const re = /(nostr:)?(npub1[0-9a-z]+|nprofile1[0-9a-z]+)/gi;
  let m = null;
  while ((m = re.exec(text))) {
    const code = String(m[2] || "");
    const pk = /^nprofile1/i.test(code) ? decodeNprofileToPubkeySafe(code) : decodeNpubToPubkeySafe(code);
    if (pk) out.add(pk);
  }
  return Array.from(out.values());
}

function renderCommentRichText(container, content, opts) {
  if (!container) return;
  container.innerHTML = "";
  const text = String(content || "");
  if (!text) return;

  const duration = Number.isFinite(opts?.duration) ? Number(opts.duration) : 0;
  const profiles = opts?.profiles || null;
  const enableTimestamps = opts?.enableTimestamps !== false;

  const tokenRe = enableTimestamps
    ? /(nostr:(?:npub1|nprofile1)[0-9a-z]+|\b(?:npub1|nprofile1)[0-9a-z]+\b|\b\d{1,2}:\d{2}(?::\d{2})?\b)/gi
    : /(nostr:(?:npub1|nprofile1)[0-9a-z]+|\b(?:npub1|nprofile1)[0-9a-z]+\b)/gi;
  let last = 0;
  let match = null;
  while ((match = tokenRe.exec(text))) {
    const start = match.index;
    const end = start + match[0].length;
    if (start > last) {
      container.appendChild(document.createTextNode(text.slice(last, start)));
    }

    const token = String(match[0] || "");
    if (/^(nostr:)?(npub1|nprofile1)/i.test(token)) {
      const code = token.replace(/^nostr:/i, "");
      const pk = /^nprofile1/i.test(code) ? decodeNprofileToPubkeySafe(code) : decodeNpubToPubkeySafe(code);
      const prevChar = start > 0 ? text[start - 1] : "";
      const nextChar = end < text.length ? text[end] : "";
      const nextNextChar = end + 1 < text.length ? text[end + 1] : "";
      const prevPrevChar = start - 2 >= 0 ? text[start - 2] : "";
      const prevBad = /[0-9a-z_/-]/i.test(prevChar) || (prevChar === "." && /[0-9a-z]/i.test(prevPrevChar));
      const nextBad =
        /[0-9a-z_/-]/i.test(nextChar) ||
        (nextChar === "/") ||
        (nextChar === "." && /[0-9a-z]/i.test(nextNextChar));
      const badBoundary = prevBad || nextBad;
      if (!pk || badBoundary) {
        container.appendChild(document.createTextNode(token));
      } else {
        const link = document.createElement("a");
        link.href = `#channel/${pk}`;
        link.className = "watch-comment-link";
        const prof = profiles?.get?.(pk) || profilesCache.get(pk) || null;
        const display = String(prof?.name || "").trim();
        link.textContent = display ? `@${display}` : `@${formatNpubShort(pk)}`;
        container.appendChild(link);
      }
    } else if (enableTimestamps && /^\d/.test(token)) {
      const seconds = parseTimestampToSeconds(token);
      if (seconds >= 0 && duration > 0 && seconds <= duration) {
        const link = document.createElement("a");
        link.href = "#";
        link.className = "watch-comment-link";
        link.textContent = token;
        link.addEventListener("click", (ev) => {
          ev.preventDefault();
          if (!watchVideo) return;
          const d = Number.isFinite(watchVideo.duration) ? watchVideo.duration : 0;
          if (!d || seconds > d) return;
          try {
            watchVideo.currentTime = seconds;
            updateWatchProgress();
          } catch {}
        });
        container.appendChild(link);
      } else {
        container.appendChild(document.createTextNode(token));
      }
    } else {
      container.appendChild(document.createTextNode(token));
    }
    last = end;
  }
  if (last < text.length) {
    container.appendChild(document.createTextNode(text.slice(last)));
  }
}

function renderMentionsOnly(container, content, profiles) {
  try {
    renderCommentRichText(container, content, { duration: 0, profiles, enableTimestamps: false });
  } catch {
    if (container) container.textContent = String(content || "");
  }
}

function parseZapReceiptAmountSats(ev) {
  try {
    const tags = Array.isArray(ev?.tags) ? ev.tags : [];
    const msat = Number(getTagValue(tags, "amount")) || 0;
    if (msat > 0) return Math.floor(msat / 1000);
    const bolt11 = String(getTagValue(tags, "bolt11") || "").trim();
    if (bolt11) {
      const m = /^ln[a-z0-9]+?(\d+)([munp])?1/i.exec(bolt11);
      if (m) {
        const n = Number(m[1] || 0);
        if (!n) return 0;
        const unit = String(m[2] || "").toLowerCase();
        const satsPerBtc = 100_000_000;
        if (!unit) return Math.floor(n * satsPerBtc);
        if (unit === "m") return Math.floor(n * satsPerBtc * 1e-3);
        if (unit === "u") return Math.floor(n * satsPerBtc * 1e-6);
        if (unit === "n") return Math.floor(n * satsPerBtc * 1e-9);
        if (unit === "p") return Math.floor(n * satsPerBtc * 1e-12);
      }
    }
  } catch {}
  return 0;
}

function bytesToHex(bytes) {
  if (!bytes) return "";
  if (typeof bytes === "object" && bytes?.data) {
    return bytesToHex(bytes.data);
  }
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

function normalizeSecretKeyBytes(input) {
  if (!input) return null;
  if (input instanceof Uint8Array) {
    return input.length === 32 ? input : null;
  }
  if (typeof input === "string") {
    const hex = bytesToHex(input);
    return hex ? hexToBytes(hex) : null;
  }
  if (typeof input === "object") {
    if (input.data) return normalizeSecretKeyBytes(input.data);
    try {
      const arr = Array.from(input);
      const bytes = new Uint8Array(arr.map((n) => Number(n)));
      return bytes.length === 32 ? bytes : null;
    } catch {
      return null;
    }
  }
  return null;
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

function bech32CreateChecksum(hrp, data) {
  const values = bech32HrpExpand(hrp).concat(data).concat([0, 0, 0, 0, 0, 0]);
  const mod = bech32Polymod(values) ^ 1;
  const out = [];
  for (let p = 0; p < 6; p += 1) out.push((mod >>> (5 * (5 - p))) & 31);
  return out;
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

function bech32Encode(hrp, data) {
  const CHARSET = "qpzry9x8gf2tvdw0s3jn54khce6mua7l";
  const combined = data.concat(bech32CreateChecksum(hrp, data));
  let out = `${hrp}1`;
  for (const d of combined) out += CHARSET[d];
  return out;
}

function secretKeyBytesToNsec(skBytes) {
  const tools = getNostrTools();
  try {
    if (tools?.nip19?.nsecEncode) return tools.nip19.nsecEncode(skBytes);
  } catch {
    // fall through
  }
  const words = convertBits(Array.from(skBytes), 8, 5, true);
  if (!words) return "";
  return bech32Encode("nsec", words);
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

function pubkeyToNpub(pubkey) {
  const tools = getNostrTools();
  if (!tools?.nip19?.npubEncode) return "";
  try {
    return tools.nip19.npubEncode(pubkey);
  } catch {
    return "";
  }
}

function updateAuthUi() {
  const signedIn = Boolean(authState.pubkey);
  if (userAvatarLabel) {
    userAvatarLabel.textContent = signedIn
      ? initialsFromName(profilesCache.get(authState.pubkey)?.name || shortenKey(authState.pubkey))
      : "Sign in";
  }
  if (userAvatar) {
    userAvatar.dataset.auth = signedIn ? "signed-in" : "signed-out";
    userAvatar.setAttribute("aria-label", signedIn ? "Your profile" : "Sign in");
    const img = userAvatar.querySelector(".avatar-img");
    if (signedIn) {
      const profile = profilesCache.get(authState.pubkey);
      hydrateAvatar(userAvatar, profile);
      if (img) img.alt = profile?.name ? `${profile.name} avatar` : "";
    } else {
      userAvatar.classList.remove("has-image");
      if (img) {
        img.classList.remove("is-loaded");
        img.removeAttribute("src");
      }
    }
  }
  if (watchCommentsNote) watchCommentsNote.hidden = signedIn;
  if (watchCommentInput) watchCommentInput.disabled = !signedIn;
  if (watchCommentSend) watchCommentSend.disabled = !signedIn;
  if (createBtn) createBtn.disabled = false;
  renderSidebarSubs();
  updateSubscribeButton();
  setWatchLikeUi();
  setWatchSaveUi();
  const route = getRoute();
  if (route.page === "subs") {
    renderSubscriptionsPage();
  }
  if (route.page === "history" || route.page === "watchlater" || route.page === "liked") {
    renderLocalPages();
  }
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

if (authNsecForm && authNsecBtn) {
  authNsecForm.addEventListener("submit", (event) => {
    event.preventDefault();
    authNsecBtn.click();
  });
}

wireModal(authModal);
wireModal(publishModal);

function setAuthPage(page) {
  if (!authPages) return;
  const next = String(page || "chooser");
  const pages = Array.from(authPages.querySelectorAll(".auth-page"));
  pages.forEach((el) => {
    const isTarget = el.id === `auth-page-${next}`;
    el.hidden = !isTarget;
  });

  if (authModalTitle) {
    const titleMap = {
      chooser: "Sign in",
      extension: "Sign in",
      nsec: "Sign in",
      signup: "Create account",
    };
    authModalTitle.textContent = titleMap[next] || "Sign in";
  }

  if (next === "nsec") {
    if (authNsecInput) authNsecInput.focus();
  }
}

function openAuthModal(page) {
  if (authGenerated) authGenerated.hidden = true;
  if (authSetup) authSetup.hidden = true;
  if (authProfileName) authProfileName.value = "";
  if (authProfileAbout) authProfileAbout.value = "";
  if (authProfilePicture) authProfilePicture.value = "";
  if (authPersist) {
    authPersist.checked = Boolean(window.localStorage.getItem(PERSIST_SECRET_KEY));
    authPersist.disabled = authState.mode === "extension";
  }
  if (authPersistSignup) {
    authPersistSignup.checked = Boolean(window.localStorage.getItem(PERSIST_SECRET_KEY));
    authPersistSignup.disabled = authState.mode === "extension";
  }
  setAuthPage(page || "chooser");
  openModal(authModal);
}

function generateSecretKeyBytesFallback() {
  const bytes = new Uint8Array(32);
  if (window.crypto?.getRandomValues) {
    window.crypto.getRandomValues(bytes);
    return bytes;
  }
  for (let i = 0; i < bytes.length; i += 1) {
    bytes[i] = Math.floor(Math.random() * 256);
  }
  return bytes;
}

if (authPages) {
  authPages.addEventListener("click", (event) => {
    const go = event.target.closest("[data-auth-go]");
    if (go) {
      event.preventDefault();
      setAuthPage(go.getAttribute("data-auth-go"));
      return;
    }
    const back = event.target.closest("[data-auth-back]");
    if (back) {
      event.preventDefault();
      setAuthPage("chooser");
      return;
    }
  });
}

function openMenu(menu) {
  if (!menu) return;
  // Enforce: only one menu is open at a time.
  try {
    closeAllMenusExcept(menu);
  } catch {}

  // Desktop portal for menus that would be clipped by overflow/stacking contexts.
  if (!isMobileUi() && menu === playerSettingsMenu) {
    try {
      const portalRoot = document.fullscreenElement || document.body;
      if (!menu._portalPlaceholder) {
        const placeholder = document.createElement("span");
        placeholder.hidden = true;
        placeholder.dataset.menuPortalPlaceholder = "1";
        menu._portalPlaceholder = placeholder;
      }
      if (!menu._portalOriginalParent) {
        menu._portalOriginalParent = menu.parentNode;
      }
      const placeholder = menu._portalPlaceholder;
      if (menu.parentNode && placeholder && menu.parentNode !== portalRoot) {
        try {
          menu.parentNode.insertBefore(placeholder, menu);
        } catch {}
      }
      if (menu.parentNode !== portalRoot) {
        try {
          portalRoot.appendChild(menu);
        } catch {}
      }
    } catch {}
  }

  if (isMobileUi()) {
    const portalRoot = document.fullscreenElement || document.body;
    const hadOpen = document.body.classList.contains("is-menu-sheet-open");
    if (!openMenu._sheetBackdrop) {
      const el = document.createElement("div");
      el.className = "menu-sheet-backdrop";
      el.hidden = true;
      el.addEventListener("click", () => {
        closeAllMenus();
      });
      portalRoot.appendChild(el);
      openMenu._sheetBackdrop = el;
    }
    const backdrop = openMenu._sheetBackdrop;
    if (backdrop) {
      backdrop.hidden = false;
      try {
        portalRoot.appendChild(backdrop);
      } catch {}
    }
    document.body.classList.add("is-menu-sheet-open");
    if (!hadOpen) emitAndroidUiScheme("ACTION_SHEET:OPEN");

    // Portal the menu to the root so it can overlay everything (watch page,
    // simulated fullscreen, transformed parents, etc).
    if (!menu._sheetPortalPlaceholder) {
      const placeholder = document.createElement("span");
      placeholder.hidden = true;
      placeholder.dataset.menuPortalPlaceholder = "1";
      menu._sheetPortalPlaceholder = placeholder;
    }
    if (!menu._sheetPortalOriginalParent) {
      menu._sheetPortalOriginalParent = menu.parentNode;
    }
    const placeholder = menu._sheetPortalPlaceholder;
    if (menu.parentNode && placeholder && menu.parentNode !== portalRoot) {
      try {
        menu.parentNode.insertBefore(placeholder, menu);
      } catch {}
    }
    if (menu.parentNode !== portalRoot) {
      try {
        portalRoot.appendChild(menu);
      } catch {}
    }
    menu.classList.add("is-sheet");
  }
  menu.hidden = false;
}

function closeMenu(menu) {
  if (!menu) return;
  menu.hidden = true;
  menu.classList.remove("is-sheet");
  if (menu._portalPlaceholder && menu._portalOriginalParent) {
    try {
      menu._portalOriginalParent.insertBefore(menu, menu._portalPlaceholder);
      menu._portalPlaceholder.remove();
    } catch {}
    menu._portalOriginalParent = null;
    menu._portalPlaceholder = null;
  }
  if (menu._sheetPortalPlaceholder && menu._sheetPortalOriginalParent) {
    try {
      menu._sheetPortalOriginalParent.insertBefore(menu, menu._sheetPortalPlaceholder);
      menu._sheetPortalPlaceholder.remove();
    } catch {}
    menu._sheetPortalOriginalParent = null;
    menu._sheetPortalPlaceholder = null;
  }
  if (isMobileUi()) {
    const anyOpen = Boolean(document.querySelector(".menu:not([hidden])"));
    if (!anyOpen) {
      const backdrop = openMenu._sheetBackdrop;
      if (backdrop) backdrop.hidden = true;
      document.body.classList.remove("is-menu-sheet-open");
      emitAndroidUiScheme("ACTION_SHEET:CLOSED");
    }
  }
}

function closeAllMenus() {
  closeMenu(createMenu);
  closeMenu(userMenu);
  closeMenu(channelMenu);
  closeMenu(searchMenu);
  closeMenu(watchShareMenu);
  closeMenu(playerSettingsMenu);

  if (isMobileUi()) {
    try {
      const anyOpen = Boolean(document.querySelector(".menu:not([hidden])"));
      if (!anyOpen) {
        const backdrop = openMenu._sheetBackdrop;
        if (backdrop) backdrop.hidden = true;
        document.body.classList.remove("is-menu-sheet-open");
      }
    } catch {}
  }
}

function closeAllMenusExcept(exceptMenu) {
  if (createMenu && createMenu !== exceptMenu) closeMenu(createMenu);
  if (userMenu && userMenu !== exceptMenu) closeMenu(userMenu);
  if (channelMenu && channelMenu !== exceptMenu) closeMenu(channelMenu);
  if (searchMenu && searchMenu !== exceptMenu) closeMenu(searchMenu);
  if (watchShareMenu && watchShareMenu !== exceptMenu) closeMenu(watchShareMenu);
  if (playerSettingsMenu && playerSettingsMenu !== exceptMenu) closeMenu(playerSettingsMenu);
}

function resetMenuPresentation(menu) {
  if (!menu) return;
  menu.classList.remove("is-up");
  menu.classList.remove("is-sheet");
  menu.style.position = "";
  menu.style.left = "";
  menu.style.right = "";
  menu.style.top = "";
  menu.style.bottom = "";
  menu.style.width = "";
  menu.style.maxHeight = "";
  menu.style.overflowY = "";
  if (menu._portalPlaceholder && menu._portalOriginalParent) {
    try {
      menu._portalOriginalParent.insertBefore(menu, menu._portalPlaceholder);
      menu._portalPlaceholder.remove();
    } catch {}
    menu._portalOriginalParent = null;
    menu._portalPlaceholder = null;
  }
  if (menu._sheetPortalPlaceholder && menu._sheetPortalOriginalParent) {
    try {
      menu._sheetPortalOriginalParent.insertBefore(menu, menu._sheetPortalPlaceholder);
      menu._sheetPortalPlaceholder.remove();
    } catch {}
    menu._sheetPortalOriginalParent = null;
    menu._sheetPortalPlaceholder = null;
  }
}

function positionMenu(menu) {
  if (!menu || menu.hidden) return;
  menu.classList.remove("is-up");

  if (menu === watchShareMenu && watchShareAnchor && window.matchMedia("(max-width: 720px)").matches) {
    const padding = 12;
    const gap = 8;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const anchorRect = watchShareAnchor.getBoundingClientRect();

    menu.style.position = "fixed";
    menu.style.right = "auto";

    const maxWidth = Math.min(320, vw - padding * 2);
    menu.style.width = `${maxWidth}px`;

    const leftPreferred = anchorRect.left + anchorRect.width / 2 - maxWidth / 2;
    const left = Math.max(padding, Math.min(vw - padding - maxWidth, leftPreferred));
    menu.style.left = `${left}px`;
    menu.style.top = `${Math.min(vh - padding, anchorRect.bottom + gap)}px`;
    menu.style.bottom = "auto";

    const rect = menu.getBoundingClientRect();
    if (rect.bottom > vh - padding) {
      menu.classList.add("is-up");
      menu.style.top = "auto";
      menu.style.bottom = `${Math.max(padding, vh - anchorRect.top + gap)}px`;
    }
    return;
  }

  if (menu === watchShareMenu) {
    menu.style.position = "";
    menu.style.left = "";
    menu.style.right = "";
    menu.style.top = "";
    menu.style.bottom = "";
    menu.style.width = "";
  }

  if (menu === playerSettingsMenu) {
    if (!isMobileUi() && playerSettingsBtn) {
      const padding = 12;
      const gap = 8;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const anchorRect = playerSettingsBtn.getBoundingClientRect();

      const playerRect = watchPlayer?.getBoundingClientRect?.() || null;
      const actionsRect = watchControlsActions?.getBoundingClientRect?.() || null;
      const boundLeft = playerRect ? playerRect.left + padding : padding;
      const boundRight = playerRect ? playerRect.right - padding : vw - padding;
      const boundTop = playerRect ? playerRect.top + padding : padding;
      const boundBottom = actionsRect ? actionsRect.top - gap : (playerRect ? playerRect.bottom - padding : vh - padding);

      const maxWidth = Math.min(260, vw - padding * 2);
      menu.style.width = `${maxWidth}px`;
      menu.style.position = "fixed";
      menu.style.right = "auto";
      menu.style.top = "auto";

      const menuBottomY = anchorRect.top - gap;
      const availableAbove = Math.max(0, menuBottomY - boundTop);
      const availableBelow = Math.max(0, boundBottom - (anchorRect.bottom + gap));
      const maxHDesired = Math.min(vh - padding * 2, boundBottom - boundTop);

      // Don't let the popover grow to fill the entire space above the button,
      // otherwise it looks like it is "stuck" to the top of the player.
      const popoverCap = 420;
      const canOpenUp = availableAbove >= 140;
      const maxH = Math.max(
        120,
        Math.min(maxHDesired, Math.min(popoverCap, canOpenUp ? availableAbove : availableBelow))
      );
      menu.style.maxHeight = `${maxH}px`;
      menu.style.overflowY = "auto";

      const leftPreferred = anchorRect.right - maxWidth;
      const left = Math.max(boundLeft, Math.min(boundRight - maxWidth, leftPreferred));
      menu.style.left = `${left}px`;

      if (canOpenUp) {
        // Anchor to just above the gear button (explicit top positioning).
        menu.style.bottom = "auto";
        menu.style.top = `${boundTop}px`;
        const measured = menu.getBoundingClientRect();
        const h = measured.height;
        const maxTop = Math.max(boundTop, boundBottom - h);
        const top = Math.max(boundTop, Math.min(maxTop, menuBottomY - h));
        menu.style.top = `${top}px`;
        menu.classList.add("is-up");
      } else {
        // Not enough room above; open below and clamp to player bounds.
        const top = Math.max(boundTop, Math.min(boundBottom - 120, anchorRect.bottom + gap));
        menu.style.bottom = "auto";
        menu.style.top = `${top}px`;
        menu.classList.remove("is-up");
      }
      return;
    }

    menu.style.position = "";
    menu.style.left = "";
    menu.style.right = "";
    menu.style.top = "";
    menu.style.bottom = "";
    menu.style.width = "";
  }

  const rect = menu.getBoundingClientRect();
  const padding = 12;
  if (rect.bottom > window.innerHeight - padding) {
    menu.classList.add("is-up");
  }
}

function openMenuWithPosition(menu) {
  openMenu(menu);
  if (isMobileUi()) return;
  requestAnimationFrame(() => positionMenu(menu));
}

if (channelBackBtn) {
  channelBackBtn.addEventListener("click", () => {
    closeAllMenus();
    const idx = getCurrentAppIndex();
    if (idx > 0) {
      try {
        history.back();
        return;
      } catch {}
    }

    // If we entered a deep page via a hash navigation that did not go through our
    // history helpers, history.state may not include our appIndex.
    // Prefer the computed entry hash to mimic browser back.
    const route = getRoute();
    let target = "#home";
    if (route.page === "search") {
      target = searchEntryHash || lastNonSearchHash || "#home";
    } else if (route.page === "channel") {
      target = channelEntryHash || "#home";
    } else if (route.page === "history" || route.page === "watchlater" || route.page === "liked") {
      target = "#library";
    }

    if (!target || /^#(search|channel)\b/i.test(target)) target = "#home";
    mainNavHasHomeBase = true;
    navReplace(target);
  });
}

if (channelMoreBtn) {
  channelMoreBtn.addEventListener("click", () => {
    closeMenu(userMenu);
    closeMenu(createMenu);
    if (isMenuOpen(channelMenu)) closeMenu(channelMenu);
    else {
      closeAllMenus();
      openMenuWithPosition(channelMenu);
    }
  });
}

if (searchMoreBtn) {
  searchMoreBtn.addEventListener("pointerdown", (event) => {
    event.preventDefault();
  });
  searchMoreBtn.addEventListener("click", () => {
    closeMenu(userMenu);
    closeMenu(createMenu);
    closeMenu(channelMenu);
    if (isMenuOpen(searchMenu)) closeMenu(searchMenu);
    else {
      closeAllMenus();
      openMenuWithPosition(searchMenu);
    }
  });
}

if (searchMenuFilters) {
  searchMenuFilters.addEventListener("click", () => {
    closeMenu(searchMenu);
    showToast("Search filters coming soon");
  });
}

if (searchMenuHelp) {
  searchMenuHelp.addEventListener("click", () => {
    closeMenu(searchMenu);
    showToast("Help & feedback coming soon");
  });
}

async function copyText(text) {
  const raw = String(text || "");
  if (!raw) return;
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(raw);
    return;
  }
  const el = document.createElement("textarea");
  el.value = raw;
  el.setAttribute("readonly", "readonly");
  el.style.position = "fixed";
  el.style.top = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

if (channelMenuShare) {
  channelMenuShare.addEventListener("click", async () => {
    closeAllMenus();
    const origin = window.location.origin;
    const pubkey = currentChannelPubkey || "";
    const url = pubkey ? `${origin}/share/channel/${pubkey}` : window.location.href;
    try {
      await copyText(url);
      showToast("Link copied");
    } catch {
      showToast("Copy failed");
    }
  });
}

if (channelMenuAbout) {
  channelMenuAbout.addEventListener("click", () => {
    closeAllMenus();
    showToast("About channel (coming soon)");
  });
}

if (channelMenuReport) {
  channelMenuReport.addEventListener("click", () => {
    closeAllMenus();
    showToast("Report channel (coming soon)");
  });
}

if (channelMenuHelp) {
  channelMenuHelp.addEventListener("click", () => {
    closeAllMenus();
    showToast("Help & feedback (coming soon)");
  });
}

function isMenuOpen(menu) {
  return Boolean(menu && !menu.hidden);
}

async function publishEventToRelay(relayUrl, event) {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket(relayUrl);
    const timeout = setTimeout(() => {
      socket.close();
      reject(new Error("Relay timeout"));
    }, 10_000);
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
  const results = await Promise.allSettled(getWriteRelays().map((relay) => publishEventToRelay(relay, event)));
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
    const signed = await window.nostr.signEvent(unsignedEvent);
    return signed;
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

async function ensureProfiles(pubkeys) {
  const missing = pubkeys.filter((k) => k && !profilesCache.has(k));
  if (!missing.length) return;
  const fetched = await fetchProfiles(missing);
  fetched.forEach((value, key) => profilesCache.set(key, value));

  const stillMissing = missing.filter((k) => k && !profilesCache.has(k));
  if (!stillMissing.length) return;
  try {
    const retry = await fetchProfiles(stillMissing);
    retry.forEach((value, key) => profilesCache.set(key, value));
  } catch {}
}

function getLiveRolesFrom30311(video) {
  const roles = new Map();
  try {
    const tags = video?.nostrEventRaw?.tags || [];
    tags
      .filter((t) => Array.isArray(t) && t[0] === "p" && t[1])
      .forEach((t) => {
        const pk = String(t[1] || "");
        // NIP-53 implementations vary: role may appear at index 2 or 3.
        // Common shapes:
        //  - ["p", pubkey, relay, role]
        //  - ["p", pubkey, role]
        const roleCandidate =
          (t.length >= 4 ? t[3] : "") ||
          (t.length >= 3 ? t[2] : "") ||
          "";
        const role = String(roleCandidate || "").trim();
        if (pk && role) roles.set(pk, role);
      });
  } catch {}
  return roles;
}

function getLiveHostPubkeyFrom30311(video) {
  try {
    const tags = video?.nostrEventRaw?.tags || [];
    const host = tags
      .filter((t) => Array.isArray(t) && t[0] === "p" && t[1])
      .map((t) => {
        const pk = String(t[1] || "");
        const roleCandidate = (t.length >= 4 ? t[3] : "") || (t.length >= 3 ? t[2] : "") || "";
        const role = String(roleCandidate || "").trim().toLowerCase();
        return { pk, role };
      })
      .find((x) => x.pk && x.role === "host");
    return host?.pk ? String(host.pk) : "";
  } catch {
    return "";
  }
}

function getLiveHostProofFrom30311(video, hostPubkey) {
  try {
    const target = String(hostPubkey || "");
    if (!target) return "";
    const tags = video?.nostrEventRaw?.tags || [];
    const hostTag = tags
      .filter((t) => Array.isArray(t) && t[0] === "p" && String(t[1] || "") === target)
      .map((t) => {
        const roleCandidate = (t.length >= 4 ? t[3] : "") || (t.length >= 3 ? t[2] : "") || "";
        const role = String(roleCandidate || "").trim().toLowerCase();
        const proof = String(t?.[4] || "").trim();
        return { role, proof };
      })
      .find((x) => x.role === "host");
    const proof = String(hostTag?.proof || "").trim();
    return /^[0-9a-f]{128}$/i.test(proof) ? proof : "";
  } catch {
    return "";
  }
}

async function sha256Hex(text) {
  try {
    const msg = String(text || "");
    if (!msg) return "";
    if (!window.crypto?.subtle) return "";
    const bytes = new TextEncoder().encode(msg);
    const digest = await window.crypto.subtle.digest("SHA-256", bytes);
    const out = Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    return out;
  } catch {
    return "";
  }
}

async function verifyNip53ParticipantProof({ eventPubkey, dTag, participantPubkey, proofHex }) {
  try {
    const publisher = String(eventPubkey || "");
    const d = String(dTag || "");
    const participant = String(participantPubkey || "");
    const proof = String(proofHex || "");
    if (!publisher || !d || !participant) return false;
    if (!/^[0-9a-f]{64}$/i.test(publisher)) return false;
    if (!/^[0-9a-f]{64}$/i.test(participant)) return false;
    if (!/^[0-9a-f]{128}$/i.test(proof)) return false;

    const aTag = `30311:${publisher}:${d}`;
    const hashHex = await sha256Hex(aTag);
    if (!/^[0-9a-f]{64}$/i.test(hashHex)) return false;

    const tools = getNostrTools();
    if (!tools) return false;
    const msgBytes = hexToBytes(hashHex);

    if (typeof tools.verifySignature === "function") {
      // (sig, msgHash, pubkey)
      if (msgBytes) return Boolean(tools.verifySignature(proof, msgBytes, participant));
      return Boolean(tools.verifySignature(proof, hashHex, participant));
    }
    if (tools.schnorr && typeof tools.schnorr.verify === "function") {
      if (msgBytes) {
        try {
          if (tools.schnorr.verify(proof, msgBytes, participant)) return true;
        } catch {}
      }
      return Boolean(tools.schnorr.verify(proof, hashHex, participant));
    }
  } catch {}
  return false;
}

async function getVerifiedLiveHostPubkey(video) {
  try {
    if (!video || Number(video.kind) !== 30311) return "";
    const hostPk = getLiveHostPubkeyFrom30311(video);
    if (!hostPk) return "";
    const proof = getLiveHostProofFrom30311(video, hostPk);
    if (!proof) return "";
    const raw = video?.nostrEventRaw;
    const dTag = String(getTagValueFromEvent(raw, "d") || "").trim();
    if (!dTag) return "";
    const ok = await verifyNip53ParticipantProof({
      eventPubkey: String(raw?.pubkey || ""),
      dTag,
      participantPubkey: hostPk,
      proofHex: proof,
    });
    return ok ? hostPk : "";
  } catch {
    return "";
  }
}

async function getLiveHostVerificationState(video) {
  try {
    if (!video || Number(video.kind) !== 30311) return { pubkey: "", verified: false };
    const hostPk = getLiveHostPubkeyFrom30311(video);
    if (!hostPk) return { pubkey: "", verified: false };
    const verifiedPk = await getVerifiedLiveHostPubkey(video);
    return { pubkey: hostPk, verified: Boolean(verifiedPk && verifiedPk === hostPk) };
  } catch {
    return { pubkey: "", verified: false };
  }
}

async function fetchLive30311RolesForVideo(video, relays) {
  try {
    if (!video || video.kind !== 30311) return new Map();
    const existing = getLiveRolesFrom30311(video);
    if (existing && existing.size) return existing;
    const coord = parseAddressableCoord(video.address);
    if (!coord) return new Map();

    const collected = new Map();
    const filter = { kinds: [coord.kind], authors: [coord.pubkey], "#d": [coord.d], limit: 3 };
    await Promise.all(
      (Array.isArray(relays) ? relays : []).map((relay) =>
        requestEvents(relay, filter, (ev) => {
          if (ev?.id && !collected.has(ev.id)) collected.set(ev.id, ev);
        })
      )
    );
    const events = Array.from(collected.values());
    events.sort((a, b) => Number(b.created_at || 0) - Number(a.created_at || 0));
    const picked = events[0] || null;
    if (!picked) return new Map();
    const tmp = { ...video, nostrEventRaw: picked };
    return getLiveRolesFrom30311(tmp);
  } catch {
    return new Map();
  }
}

function getWatchCommentFetchSpec(video) {
  if (!video?.id) return null;
  if (video.kind === 30311) {
    const addr = String(video.address || video.id || "");
    if (!addr) return null;
    return { kind: 1311, filter: { kinds: [1311], "#a": [addr], limit: 200 } };
  }

  // For video comments, support both NIP-22 (kind 1111) and legacy kind 1.
  // Prefer NIP-22 for new posts, but keep reading legacy so existing comments show up.
  if (video.address) {
    return {
      kind: 1111,
      filters: [
        { kinds: [1111], "#A": [video.address], limit: 200 },
        { kinds: [1], "#a": [video.address], limit: 200 },
      ],
    };
  }
  return {
    kind: 1111,
    filters: [
      { kinds: [1111], "#E": [video.id], limit: 200 },
      { kinds: [1], "#e": [video.id], limit: 200 },
    ],
  };
}

function resetWatchRenderedCommentsState() {
  watchRenderedCommentIds = new Set();
  watchRenderedCommentMaxCreatedAt = 0;
}

function resetWatchCommentsCache(key) {
  watchCommentsCacheKey = String(key || "");
  watchCommentsCacheById = new Map();
}

function renderWatchCommentEvent(ev, profiles, rolesByPubkey, reactionInfo) {
  const wrap = document.createElement("div");
  wrap.className = "watch-comment";
  wrap.dataset.commentId = String(ev?.id || "");
  wrap.dataset.commentCreatedAt = String(ev?.created_at || 0);

  const avatar = document.createElement("a");
  avatar.className = "channel-avatar";
  avatar.href = "#";
  const initials = document.createElement("span");
  initials.className = "channel-initials";
  const img = document.createElement("img");
  img.className = "avatar-img";
  img.alt = "";
  img.loading = "lazy";
  avatar.appendChild(initials);
  avatar.appendChild(img);

  const body = document.createElement("div");
  body.className = "watch-comment-body";
  const meta = document.createElement("div");
  meta.className = "watch-comment-meta";
  const author = document.createElement("a");
  author.className = "watch-comment-author";
  author.href = "#";
  const time = document.createElement("span");
  time.className = "watch-comment-time";
  const text = document.createElement("div");
  text.className = "watch-comment-text";

  const actions = document.createElement("div");
  actions.className = "watch-comment-row-actions";
  const likeBtn = document.createElement("button");
  likeBtn.className = "watch-comment-row-action";
  likeBtn.type = "button";
  likeBtn.dataset.action = "like";
  const likeIcon = document.createElement("span");
  likeIcon.className = "material-symbols-rounded";
  likeIcon.textContent = "thumb_up";
  likeBtn.appendChild(likeIcon);
  likeBtn.appendChild(document.createTextNode("Like"));
  const dislikeBtn = document.createElement("button");
  dislikeBtn.className = "watch-comment-row-action";
  dislikeBtn.type = "button";
  dislikeBtn.dataset.action = "dislike";
  const dislikeIcon = document.createElement("span");
  dislikeIcon.className = "material-symbols-rounded";
  dislikeIcon.textContent = "thumb_down";
  dislikeBtn.appendChild(dislikeIcon);
  dislikeBtn.appendChild(document.createTextNode("Dislike"));
  const replyBtn = document.createElement("button");
  replyBtn.className = "watch-comment-row-action";
  replyBtn.type = "button";
  replyBtn.dataset.action = "reply";
  const replyIcon = document.createElement("span");
  replyIcon.className = "material-symbols-rounded";
  replyIcon.textContent = "reply";
  replyBtn.appendChild(replyIcon);
  replyBtn.appendChild(document.createTextNode("Reply"));
  actions.appendChild(likeBtn);
  actions.appendChild(dislikeBtn);
  actions.appendChild(replyBtn);

  const replyComposer = document.createElement("div");
  replyComposer.className = "watch-comment-reply";
  replyComposer.hidden = true;
  const replyInput = document.createElement("textarea");
  replyInput.className = "watch-comment-input";
  replyInput.rows = 1;
  replyInput.placeholder = "Write a reply…";
  bindAutoResizeTextarea(replyInput, 180);
  const replyActions = document.createElement("div");
  replyActions.className = "watch-comment-actions";
  const replyCancel = document.createElement("button");
  replyCancel.className = "text-btn";
  replyCancel.type = "button";
  replyCancel.textContent = "Cancel";
  const replyPost = document.createElement("button");
  replyPost.className = "watch-comment-btn";
  replyPost.type = "button";
  replyPost.textContent = "Post";
  replyActions.appendChild(replyCancel);
  replyActions.appendChild(replyPost);
  replyComposer.appendChild(replyInput);
  replyComposer.appendChild(replyActions);

  const pk = String(ev?.pubkey || "");
  const profile = profiles?.get?.(pk) || profilesCache.get(pk) || null;
  const name = profile?.name || shortenKey(pk);
  const role = rolesByPubkey?.get?.(pk) || "";
  author.textContent = role ? `${name} · ${role}` : name;
  avatar.href = pk ? `#channel/${pk}` : "#";
  author.href = pk ? `#channel/${pk}` : "#";
  const roleLower = String(role || "").toLowerCase();
  author.classList.toggle(
    "is-host",
    roleLower === "host" ||
      roleLower.includes("host") ||
      roleLower === "owner" ||
      roleLower.includes("owner") ||
      roleLower === "creator" ||
      roleLower.includes("creator") ||
      roleLower === "admin" ||
      roleLower.includes("admin")
  );
  author.classList.toggle(
    "is-mod",
    roleLower === "moderator" || roleLower === "mod" || roleLower.includes("mod")
  );
  time.textContent = ev?.created_at ? timeAgo(ev.created_at) : "";
  const duration = watchVideo && Number.isFinite(watchVideo.duration) ? Number(watchVideo.duration) : 0;
  try {
    renderCommentRichText(text, String(ev?.content || ""), { duration, profiles, enableTimestamps: true });
  } catch {
    text.textContent = String(ev?.content || "");
  }

  const likes = Number(reactionInfo?.likes || 0);
  const dislikes = Number(reactionInfo?.dislikes || 0);
  const likedByMe = Boolean(reactionInfo?.likedByMe);
  const dislikedByMe = Boolean(reactionInfo?.dislikedByMe);
  setCommentReactionChip(likeBtn, "thumb_up", likes);
  setCommentReactionChip(dislikeBtn, "thumb_down", dislikes);
  likeBtn.classList.toggle("is-active", likedByMe);
  dislikeBtn.classList.toggle("is-active", dislikedByMe);

  const commentId = String(ev?.id || "");
  const commentPubkey = String(ev?.pubkey || "");
  const commentKind = String(ev?.kind || "");

  likeBtn.addEventListener("click", async () => {
    try {
      if (!authState.pubkey) {
        showToast("Sign in to like");
        openAuthModal("chooser");
        return;
      }
      if (!commentId) return;
      const state = watchCommentReactionsById.get(commentId) || { likes: 0, dislikes: 0 };
      if (state.likedByMe) {
        if (state.userLikeEventId) {
          await deleteWatchReaction(state.userLikeEventId, state.userLikeRelayHint);
        }
        watchCommentReactionsById.set(commentId, {
          ...state,
          likedByMe: false,
          userLikeEventId: "",
          userLikeRelayHint: "",
          likes: Math.max(0, Number(state.likes || 0) - 1),
        });
        showToast("Unliked");
      } else {
        if (state.dislikedByMe && state.userDislikeEventId) {
          await deleteWatchReaction(state.userDislikeEventId, state.userDislikeRelayHint);
        }
        const hint = getPreferredRelayHint();
        const tags = [["e", commentId, hint, commentPubkey], ["p", commentPubkey, hint], ["k", commentKind]];
        const unsigned = buildUnsignedEvent(7, "+", tags);
        const signed = await signEvent(unsigned);
        await publishEvent(signed);
        watchCommentReactionsById.set(commentId, {
          ...state,
          likedByMe: true,
          dislikedByMe: false,
          userLikeEventId: String(signed?.id || ""),
          userLikeRelayHint: hint,
          userDislikeEventId: "",
          userDislikeRelayHint: "",
          likes: Number(state.likes || 0) + 1,
          dislikes: state.dislikedByMe ? Math.max(0, Number(state.dislikes || 0) - 1) : Number(state.dislikes || 0),
        });
        showToast("Liked");
      }
      const next = watchCommentReactionsById.get(commentId) || {};
      likeBtn.classList.toggle("is-active", Boolean(next.likedByMe));
      dislikeBtn.classList.toggle("is-active", Boolean(next.dislikedByMe));
      setCommentReactionChip(likeBtn, "thumb_up", next.likes);
      setCommentReactionChip(dislikeBtn, "thumb_down", next.dislikes);
    } catch (error) {
      showToast(error?.message || "Like failed");
    }
  });

  dislikeBtn.addEventListener("click", async () => {
    try {
      if (!authState.pubkey) {
        showToast("Sign in to dislike");
        openAuthModal("chooser");
        return;
      }
      if (!commentId) return;
      const state = watchCommentReactionsById.get(commentId) || { likes: 0, dislikes: 0 };
      if (state.dislikedByMe) {
        if (state.userDislikeEventId) {
          await deleteWatchReaction(state.userDislikeEventId, state.userDislikeRelayHint);
        }
        watchCommentReactionsById.set(commentId, {
          ...state,
          dislikedByMe: false,
          userDislikeEventId: "",
          userDislikeRelayHint: "",
          dislikes: Math.max(0, Number(state.dislikes || 0) - 1),
        });
        showToast("Undisliked");
      } else {
        if (state.likedByMe && state.userLikeEventId) {
          await deleteWatchReaction(state.userLikeEventId, state.userLikeRelayHint);
        }
        const hint = getPreferredRelayHint();
        const tags = [["e", commentId, hint, commentPubkey], ["p", commentPubkey, hint], ["k", commentKind]];
        const unsigned = buildUnsignedEvent(7, "-", tags);
        const signed = await signEvent(unsigned);
        await publishEvent(signed);
        watchCommentReactionsById.set(commentId, {
          ...state,
          dislikedByMe: true,
          likedByMe: false,
          userDislikeEventId: String(signed?.id || ""),
          userDislikeRelayHint: hint,
          userLikeEventId: "",
          userLikeRelayHint: "",
          dislikes: Number(state.dislikes || 0) + 1,
          likes: state.likedByMe ? Math.max(0, Number(state.likes || 0) - 1) : Number(state.likes || 0),
        });
        showToast("Disliked");
      }
      const next = watchCommentReactionsById.get(commentId) || {};
      likeBtn.classList.toggle("is-active", Boolean(next.likedByMe));
      dislikeBtn.classList.toggle("is-active", Boolean(next.dislikedByMe));
      setCommentReactionChip(likeBtn, "thumb_up", next.likes);
      setCommentReactionChip(dislikeBtn, "thumb_down", next.dislikes);
    } catch (error) {
      showToast(error?.message || "Dislike failed");
    }
  });

  replyBtn.addEventListener("click", async () => {
    if (!authState.pubkey) {
      showToast("Sign in to reply");
      openAuthModal("chooser");
      return;
    }
    replyComposer.hidden = !replyComposer.hidden;
    if (!replyComposer.hidden) {
      try {
        replyInput.focus();
      } catch {}
    }
  });

  replyCancel.addEventListener("click", () => {
    replyComposer.hidden = true;
    replyInput.value = "";
    autoResizeTextarea(replyInput, 180);
  });

  replyPost.addEventListener("click", async () => {
    try {
      if (!authState.pubkey) {
        showToast("Sign in to reply");
        openAuthModal("chooser");
        return;
      }
      const video = getCurrentWatchVideo();
      if (!video?.id) return;
      const replyText = String(replyInput.value || "").trim();
      if (!replyText) return;
      replyPost.disabled = true;
      let unsigned = null;
      if (video.kind === 30311) {
        const addr = String(video.address || video.id || "");
        if (!addr) return;
        const hint = getPreferredRelayHint();
        unsigned = buildUnsignedEvent(1311, replyText, [
          ["a", addr, "", "root"],
          ["e", commentId, hint, commentPubkey],
          ["p", commentPubkey, hint],
        ]);
      } else {
        unsigned = buildUnsignedVideoCommentReply1111(video, ev, replyText);
      }
      if (!unsigned) return;
      const signed = await signEvent(unsigned);
      await publishEvent(signed);
      showToast("Reply posted");
      replyComposer.hidden = true;
      replyInput.value = "";
      autoResizeTextarea(replyInput, 180);
      try {
        await loadWatchComments(video);
      } catch {}
    } catch (error) {
      showToast(error?.message || "Reply failed");
    } finally {
      replyPost.disabled = false;
    }
  });
  try {
    hydrateAvatar(avatar, profile || { name, picture: "" });
  } catch {
    initials.textContent = initialsFromName(name);
  }

  meta.appendChild(author);
  meta.appendChild(time);
  body.appendChild(meta);
  body.appendChild(text);
  body.appendChild(actions);
  body.appendChild(replyComposer);
  wrap.appendChild(avatar);
  wrap.appendChild(body);
  return wrap;
}

function renderWatchComments(events, profiles, rolesByPubkey, opts) {
  if (!watchCommentsList || !watchCommentsEmpty) return;
  const incremental = Boolean(opts?.incremental);
  const isLiveChat = Boolean(opts?.isLiveChat);
  if (!incremental) {
    watchCommentsList.innerHTML = "";
    resetWatchRenderedCommentsState();
  }

  if (incremental && isLiveChat) {
    const items = Array.isArray(events) ? events.slice() : [];
    const next = items
      .filter((ev) => ev?.id && !watchRenderedCommentIds.has(String(ev.id)))
      .sort((a, b) => Number(b?.created_at || 0) - Number(a?.created_at || 0));
    if (!next.length) return;
    watchCommentsEmpty.hidden = true;
    next.forEach((ev) => {
      const id = String(ev?.id || "");
      if (!id) return;
      if (Number(ev?.kind) === 9735) {
        const zapAmount = parseZapReceiptAmountSats(ev);
        const details = parseZapReceiptDetails(ev);
        const senderPk = String(details?.senderPubkey || "");
        if (!senderPk) return;
        const senderProfile = profiles?.get?.(senderPk) || profilesCache.get(senderPk) || null;
        const senderName = String(senderProfile?.name || "").trim() || formatNpubShort(senderPk);
        const base = zapAmount ? `${senderName} zapped ${zapAmount} sats` : `${senderName} zapped`;
        const msg = String(details?.message || "").trim();
        const desc = msg ? `${base}: ${msg}` : base;
        const fake = { ...ev, pubkey: senderPk, content: desc };
        const el = renderWatchCommentEvent(fake, profiles, rolesByPubkey, null);
        if (!el) return;
        try {
          el.classList.add("is-zap");
          const actions = el.querySelector(".watch-comment-row-actions");
          if (actions) actions.hidden = true;
          const reply = el.querySelector(".watch-comment-reply");
          if (reply) reply.hidden = true;
        } catch {}
        insertWatchCommentNodeNewestFirst(el);
        watchRenderedCommentIds.add(id);
      } else {
        const reactionInfo = watchCommentReactionsById.get(id) || null;
        const node = renderWatchCommentEvent(ev, profiles, rolesByPubkey, reactionInfo);
        if (!node) return;
        insertWatchCommentNodeNewestFirst(node);
        watchRenderedCommentIds.add(id);
      }
      const ts = Number(ev?.created_at || 0);
      if (ts && ts > watchRenderedCommentMaxCreatedAt) watchRenderedCommentMaxCreatedAt = ts;
    });
    return;
  }

  const items = Array.isArray(events) ? events.slice() : [];
  // Put zap receipts (9735) as non-threaded roots.
  const zaps = items.filter((ev) => Number(ev?.kind) === 9735);
  const normals = items.filter((ev) => Number(ev?.kind) !== 9735);
  const mergedItems = normals.concat(zaps);
  const byId = new Map();
  mergedItems.forEach((ev) => {
    if (ev?.id) byId.set(String(ev.id), ev);
  });

  const findParentIdInBatch = (ev) => {
    try {
      const tags = Array.isArray(ev?.tags) ? ev.tags : [];
      const candidates = tags
        .filter((t) => Array.isArray(t) && (t[0] === "e" || t[0] === "E" || t[0] === "q") && t[1])
        .map((t) => ({
          id: String(t[1] || ""),
          markerA: String(t?.[3] || "").toLowerCase(),
          markerB: String(t?.[4] || "").toLowerCase(),
        }))
        .filter((c) => c.id);

      const replyMarked = candidates.find((c) => c.markerA === "reply" || c.markerB === "reply");
      if (replyMarked && byId.has(replyMarked.id)) return replyMarked.id;

      // Otherwise choose the first candidate that points to another comment in this batch.
      const firstInBatch = candidates.find((c) => byId.has(c.id));
      if (firstInBatch) return firstInBatch.id;

      // Fall back to legacy heuristic.
      return getNip22ReplyParentId(ev);
    } catch {}
    return getNip22ReplyParentId(ev);
  };

  const childrenByParent = new Map();
  const roots = [];
  mergedItems.forEach((ev) => {
    const id = String(ev?.id || "");
    if (Number(ev?.kind) === 9735) {
      roots.push(ev);
      return;
    }
    const parentId = findParentIdInBatch(ev);
    const hasParent = parentId && byId.has(parentId);
    if (hasParent) {
      const list = childrenByParent.get(parentId) || [];
      list.push(ev);
      childrenByParent.set(parentId, list);
    } else {
      roots.push(ev);
    }
  });
  roots.sort((a, b) => Number(b.created_at || 0) - Number(a.created_at || 0));
  childrenByParent.forEach((list, key) => {
    list.sort((a, b) => Number(a.created_at || 0) - Number(b.created_at || 0));
    childrenByParent.set(key, list);
  });

  if (!items.length) {
    if (incremental) return;
    watchCommentsEmpty.textContent = "No comments yet.";
    watchCommentsEmpty.hidden = false;
    return;
  }
  watchCommentsEmpty.hidden = true;

  const renderThread = (ev, depth) => {
    const id = String(ev?.id || "");
    if (!id) return;
    if (incremental && watchRenderedCommentIds.has(id)) {
      return;
    }

    if (Number(ev?.kind) === 9735) {
      const zapAmount = parseZapReceiptAmountSats(ev);
      const details = parseZapReceiptDetails(ev);
      const senderPk = String(details?.senderPubkey || "");
      const senderProfile = senderPk ? profiles?.get?.(senderPk) || profilesCache.get(senderPk) || null : null;
      if (!senderPk) return;
      const senderName = String(senderProfile?.name || "").trim() || formatNpubShort(senderPk);
      const base = zapAmount ? `${senderName} zapped ${zapAmount} sats` : `${senderName} zapped`;
      const msg = String(details?.message || "").trim();
      const desc = msg ? `${base}: ${msg}` : base;
      const fake = {
        ...ev,
        pubkey: senderPk || String(ev?.pubkey || ""),
        content: desc,
      };
      const el = renderWatchCommentEvent(fake, profiles, rolesByPubkey, null);
      try {
        el.classList.add("is-zap");
      } catch {}
      try {
        const textEl = el.querySelector(".watch-comment-text");
        if (textEl) {
          textEl.innerHTML = "";
          const icon = document.createElement("span");
          icon.className = "material-symbols-rounded";
          icon.textContent = "bolt";
          const label = document.createElement("span");
          label.textContent = desc;
          textEl.appendChild(icon);
          textEl.appendChild(label);
        }
      } catch {}
      try {
        const actions = el.querySelector(".watch-comment-row-actions");
        if (actions) actions.hidden = true;
        const reply = el.querySelector(".watch-comment-reply");
        if (reply) reply.hidden = true;
      } catch {}
      watchCommentsList.appendChild(el);
      if (id) watchRenderedCommentIds.add(id);
      const ts = Number(ev?.created_at || 0);
      if (ts && ts > watchRenderedCommentMaxCreatedAt) watchRenderedCommentMaxCreatedAt = ts;
      return;
    }
    const reactionInfo = watchCommentReactionsById.get(id) || null;
    const node = renderWatchCommentEvent(ev, profiles, rolesByPubkey, reactionInfo);
    if (!node) return;
    node.dataset.commentDepth = String(depth || 0);
    node.classList.toggle("is-reply", depth > 0);
    if (depth > 0) {
      try {
        const cappedDepth = Math.min(5, depth);
        const indentPx = cappedDepth * 26;
        node.style.setProperty("--thread-indent", `${indentPx}px`);
        node.style.setProperty("--thread-depth", String(cappedDepth));
        node.style.paddingLeft = `var(--thread-indent)`;
      } catch {}
    }
    watchCommentsList.appendChild(node);
    const createdAt = Number(ev?.created_at || 0);
    watchRenderedCommentIds.add(id);
    if (createdAt > watchRenderedCommentMaxCreatedAt) {
      watchRenderedCommentMaxCreatedAt = createdAt;
    }
    const kids = childrenByParent.get(id) || [];
    kids.forEach((child) => renderThread(child, depth + 1));
  };

  roots.forEach((ev) => renderThread(ev, 0));
}

async function loadWatchComments(video, opts) {
  if (!watchCommentsList || !watchCommentsEmpty) return;
  const loadToken = Number(opts?.loadToken || 0);
  if (loadToken && loadToken !== watchCommentsLoadToken) return;
  const spec = getWatchCommentFetchSpec(video);
  if (!spec) {
    watchCommentsList.innerHTML = "";
    watchCommentsEmpty.textContent = "No comments yet.";
    watchCommentsEmpty.hidden = false;
    resetWatchRenderedCommentsState();
    return;
  }

  const key = `${spec.kind}:${spec.kind === 1311 ? "chat" : "comment"}:${String(video.address || video.id || "")}`;
  const currentRoute = getRoute();
  if (currentRoute.page !== "watch" && currentRoute.page !== "fullscreen") return;

  const incremental = Boolean(opts?.incremental);
  const prevKey = String(watchCommentsPollKey || "");
  // Ensure polling key is stable even if this call exits early.
  watchCommentsPollKey = key;
  const shouldReset = !incremental || key !== prevKey;

  const relays = mergeRelays(getReadRelays(), parseRelayHints(currentRoute?.params));
  const collected = new Map();
  const incrementalSince = Boolean(opts?.incremental) && watchRenderedCommentMaxCreatedAt
    ? Number(watchRenderedCommentMaxCreatedAt) + 1
    : 0;
  const baseFilters = spec.filter ? [spec.filter] : Array.isArray(spec.filters) ? spec.filters : [];
  const filters = baseFilters.map((f) => {
    const next = { ...(f || {}) };
    if (incrementalSince && !next.since) next.since = incrementalSince;
    return next;
  });
  await Promise.all(
    relays.flatMap((relay) =>
      filters.map((filter) =>
        requestEvents(relay, filter, (ev) => {
          if (ev?.id && !collected.has(ev.id)) collected.set(ev.id, ev);
        })
      )
    )
  );

  if (loadToken && loadToken !== watchCommentsLoadToken) return;

  // Inline zap receipts in live chat.
  if (spec.kind === 1311 && video?.kind === 30311) {
    try {
      const addr = String(video.address || "");
      if (addr) {
        const zapCollected = new Map();
        const zapFilter = { kinds: [9735], "#a": [addr], limit: 200 };
        await Promise.all(
          relays.map((relay) =>
            requestEvents(relay, zapFilter, (ev) => {
              if (ev?.id && !zapCollected.has(ev.id)) zapCollected.set(ev.id, ev);
            })
          )
        );
        zapCollected.forEach((ev, id) => {
          if (id && !collected.has(id)) collected.set(id, ev);
        });
      }
    } catch {}
  }

  if (loadToken && loadToken !== watchCommentsLoadToken) return;

  const fetched = Array.from(collected.values());
  const isLiveChat = spec.kind === 1311;

  if (!incremental && fetched.length === 0 && watchRenderedCommentIds.size) {
    return;
  }

  if (shouldReset) {
    watchCommentsEmpty.textContent = "Loading…";
    watchCommentsEmpty.hidden = false;
    watchCommentsList.innerHTML = "";
    resetWatchRenderedCommentsState();
    resetWatchCommentsCache(key);
  }
  if (isLiveChat) {
    if (!incremental || watchCommentsCacheKey !== key) {
      resetWatchCommentsCache(key);
    }
    fetched.forEach((ev) => {
      if (ev?.id && !watchCommentsCacheById.has(ev.id)) watchCommentsCacheById.set(ev.id, ev);
    });
  }
  const events = isLiveChat ? Array.from(watchCommentsCacheById.values()) : fetched;

  if (incremental && isLiveChat && !fetched.length) {
    try {
      const chatCount = events.filter((e) => Number(e?.kind) === 1311).length;
      if (watchCommentsTitle) watchCommentsTitle.textContent = `Live chat (${chatCount})`;
      watchCommentsEmpty.hidden = chatCount > 0;
    } catch {}
    return;
  }
  try {
    await loadWatchCommentReactions(events, relays);
  } catch {
    watchCommentReactionsById = new Map();
  }
  try {
    if (watchCommentsTitle) {
      if (isLiveChat) {
        const chatCount = events.filter((e) => Number(e?.kind) === 1311).length;
        watchCommentsTitle.textContent = `Live chat (${chatCount})`;
      } else watchCommentsTitle.textContent = `Comments (${events.length})`;
    }
  } catch {}
  const pubkeys = [...new Set(events.map((e) => e.pubkey).filter(Boolean))];
  const zapSenderPubkeys = (() => {
    try {
      const out = new Set();
      events.forEach((ev) => {
        if (Number(ev?.kind) !== 9735) return;
        const details = parseZapReceiptDetails(ev);
        const pk = String(details?.senderPubkey || "");
        if (pk) out.add(pk);
      });
      return Array.from(out.values());
    } catch {
      return [];
    }
  })();
  const mentionPubkeys = (() => {
    try {
      const out = new Set();
      events.forEach((ev) => {
        extractMentionPubkeysFromText(ev?.content || "").forEach((pk) => out.add(pk));
      });
      return Array.from(out.values());
    } catch {
      return [];
    }
  })();
  const allProfilePubkeys = [...new Set(pubkeys.concat(mentionPubkeys, zapSenderPubkeys).filter(Boolean))];
  try {
    await ensureProfiles(allProfilePubkeys);
  } catch {}
  const profiles = new Map();
  allProfilePubkeys.forEach((pk) => profiles.set(pk, profilesCache.get(pk)));
  const roles =
    video?.kind === 30311
      ? await fetchLive30311RolesForVideo(video, relays)
      : new Map();
  if (loadToken && loadToken !== watchCommentsLoadToken) return;
  renderWatchComments(events, profiles, roles, { incremental, isLiveChat });
}

async function loadWatchLikeCount(video) {
  if ((!watchLikeBtn && !watchDislikeBtn) || !video?.id) return;
  const relays = mergeRelays(getReadRelays(), parseRelayHints(getRoute()?.params));
  const filter = video.address
    ? { kinds: [7], "#a": [video.address], limit: 500 }
    : { kinds: [7], "#e": [video.id], limit: 500 };
  const collected = new Map();
  await Promise.all(
    relays.map((relay) =>
      requestEvents(relay, filter, (ev) => {
        if (!ev?.id) return;
        if (!collected.has(ev.id)) collected.set(ev.id, ev);
      })
    )
  );
  const all = Array.from(collected.values());
  const likes = all.filter((ev) => {
    const c = String(ev?.content || "").trim();
    return c === "+" || c === "";
  });
  const dislikes = all.filter((ev) => String(ev?.content || "").trim() === "-");

  const likeCount = new Set(likes.map((ev) => String(ev?.pubkey || "")).filter(Boolean)).size;
  const dislikeCount = new Set(dislikes.map((ev) => String(ev?.pubkey || "")).filter(Boolean)).size;

  if (watchLikeBtn) {
    const icon = watchLikeBtn.querySelector(".material-symbols-rounded");
    watchLikeBtn.textContent = likeCount ? `Like (${likeCount})` : "Like";
    if (icon) watchLikeBtn.prepend(icon);
  }
  if (watchDislikeBtn) {
    const icon = watchDislikeBtn.querySelector(".material-symbols-rounded");
    watchDislikeBtn.textContent = dislikeCount ? `Dislike (${dislikeCount})` : "Dislike";
    if (icon) watchDislikeBtn.prepend(icon);
  }
}

function stopWatchCommentsPolling() {
  if (!watchCommentsPollTimer) return;
  try {
    window.clearInterval(watchCommentsPollTimer);
  } catch {}
  watchCommentsPollTimer = 0;
}

function startWatchCommentsPolling(video) {
  stopWatchCommentsPolling();
  if (!video?.id) return;
  if (video.kind !== 30311) return;
  const token = watchCommentsLoadToken;
  watchCommentsPollTimer = window.setInterval(() => {
    if (token !== watchCommentsLoadToken) {
      stopWatchCommentsPolling();
      return;
    }
    const route = getRoute();
    if (route.page !== "watch" && route.page !== "fullscreen") {
      stopWatchCommentsPolling();
      return;
    }
    const current = getCurrentWatchVideo();
    if (!current?.id) return;
    const spec = getWatchCommentFetchSpec(current);
    if (!spec) return;
    const key = `${spec.kind}:${spec.kind === 1311 ? "chat" : "comment"}:${String(current.address || current.id || "")}`;
    if (watchCommentsPollKey && key !== watchCommentsPollKey) {
      watchCommentsPollKey = key;
    }
    loadWatchComments(current, { incremental: true, loadToken: token }).catch(() => {});
  }, 10_000);
}

function resetWatchCommentsUiForVideo(video) {
  try {
    stopWatchCommentsPolling();
  } catch {}
  try {
    watchCommentsPollKey = "";
    watchCommentsCacheKey = "";
    watchCommentsCacheById = new Map();
    resetWatchRenderedCommentsState();
  } catch {}
  try {
    if (watchCommentsList) watchCommentsList.innerHTML = "";
  } catch {}
  try {
    if (watchCommentsEmpty) {
      watchCommentsEmpty.textContent = "Loading…";
      watchCommentsEmpty.hidden = false;
    }
  } catch {}
  try {
    if (watchCommentsTitle) {
      const spec = getWatchCommentFetchSpec(video);
      if (spec?.kind === 1311) watchCommentsTitle.textContent = "Live chat";
      else watchCommentsTitle.textContent = "Comments";
    }
  } catch {}
}

function renderSidebarSubs() {
  if (!sidebarSubsList || !sidebarSubsEmpty) return;
  sidebarSubsList.innerHTML = "";
  const signedIn = Boolean(authState.pubkey);
  if (!signedIn) {
    sidebarSubsEmpty.textContent = "Sign in to see your subscriptions.";
    sidebarSubsEmpty.hidden = false;
    return;
  }
  const items = Array.from(contacts.values()).slice(0, 20);
  if (!items.length) {
    sidebarSubsEmpty.textContent = "No subscriptions yet.";
    sidebarSubsEmpty.hidden = false;
    return;
  }
  sidebarSubsEmpty.hidden = true;
  items.forEach((pubkey) => {
    const profile = profilesCache.get(pubkey);
    const link = document.createElement("a");
    link.className = "sidebar-link";
    link.href = `#channel/${pubkey}`;
    const dot = document.createElement("span");
    dot.className = "channel-dot";
    const label = document.createElement("span");
    label.textContent = profile?.name || shortenKey(pubkey);
    link.appendChild(dot);
    link.appendChild(label);
    sidebarSubsList.appendChild(link);
  });
}

function updateSubscribeButton() {
  if (!watchSubscribeBtn) return;
  const route = getRoute();
  const video = route.page === "watch" ? videoStore.get(route.id) : null;
  const targetPubkey = video?.pubkey || "";
  const signedIn = Boolean(authState.pubkey);
  const restricted = Boolean(video?.restricted) && !isRestrictedContentAllowed();
  if (restricted) {
    watchSubscribeBtn.disabled = true;
    watchSubscribeBtn.textContent = "Subscribe";
    return;
  }
  if (!signedIn || !targetPubkey || targetPubkey === authState.pubkey) {
    watchSubscribeBtn.disabled = !signedIn || !targetPubkey || targetPubkey === authState.pubkey;
  } else {
    watchSubscribeBtn.disabled = false;
  }
  watchSubscribeBtn.textContent = contacts.has(targetPubkey) ? "Subscribed" : "Subscribe";
}

function updateChannelActions(pubkey) {
  if (!channelSubscribeBtn || !channelEditBtn) return;
  const target = String(pubkey || "");
  if (!target) {
    channelSubscribeBtn.hidden = true;
    channelEditBtn.hidden = true;
    return;
  }
  const isSelf = Boolean(authState.pubkey && target === authState.pubkey);
  const signedIn = Boolean(authState.pubkey);

  channelEditBtn.hidden = !isSelf;
  channelSubscribeBtn.hidden = isSelf;
  if (!isSelf) {
    channelSubscribeBtn.disabled = false;
    channelSubscribeBtn.textContent = contacts.has(target) ? "Subscribed" : "Subscribe";
    if (!signedIn) {
      channelSubscribeBtn.textContent = "Subscribe";
    }
  }
}

async function toggleSubscription(targetPubkey) {
  const target = String(targetPubkey || "");
  if (!target || target === authState.pubkey) return;
  if (!authState.pubkey) {
    showToast("Sign in to subscribe");
    openAuthModal("chooser");
    return;
  }
  const next = new Set(Array.from(contacts.values()));
  if (next.has(target)) next.delete(target);
  else next.add(target);
  const tags = Array.from(next.values()).map((pk) => ["p", pk]);
  const unsigned = buildUnsignedEvent(3, contactsEvent?.content || "", tags);
  const signed = await signEvent(unsigned);
  await publishEvent(signed);
  contacts = next;
  contactsEvent = signed;
  await ensureProfiles([target]);
  renderSidebarSubs();
  updateSubscribeButton();
  updateChannelActions(target);
  showToast(next.has(target) ? "Subscribed" : "Unsubscribed");
}

async function publishProfileMetadata(nextProfile) {
  const content = JSON.stringify(nextProfile || {});
  const unsigned = buildUnsignedEvent(0, content, []);
  const signed = await signEvent(unsigned);
  await publishEvent(signed);
  profilesCache.set(authState.pubkey, nextProfile);
  updateAuthUi();
  if (currentChannelPubkey && authState.pubkey && currentChannelPubkey === authState.pubkey) {
    renderChannelHeader(currentChannelPubkey, channelRenderToken);
  }
}

function setChannelHeaderLoading(pubkey) {
  if (channelTitle) channelTitle.textContent = "Channel";
  if (channelMeta) {
    const npub = pubkeyToNpubSafe(pubkey);
    channelMeta.textContent = shortenNpub(npub) || shortenKey(pubkey) || "nostr profile";
  }
  if (channelInitials) channelInitials.textContent = initialsFromName(pubkey);
  if (channelBanner) channelBanner.hidden = true;
  if (channelBannerImage) {
    channelBannerImage.classList.remove("is-loaded");
    channelBannerImage.removeAttribute("src");
  }
  if (channelAvatar) channelAvatar.classList.remove("has-image");
  if (channelImage) {
    channelImage.classList.remove("is-loaded");
    channelImage.removeAttribute("src");
  }
}

function setLibraryHeaderLoading(pubkey) {
  if (libraryTitle) libraryTitle.textContent = "Your library";
  const text = shortenKey(pubkey) || "nostr profile";
  if (libraryMetaText) libraryMetaText.textContent = text;
  else if (libraryMeta) libraryMeta.textContent = text;
  if (libraryMetaSep) libraryMetaSep.hidden = true;
  if (libraryViewChannel) libraryViewChannel.hidden = true;
  if (libraryInitials) libraryInitials.textContent = initialsFromName(pubkey);
  if (libraryAvatar) libraryAvatar.classList.remove("has-image");
  if (libraryImage) {
    libraryImage.classList.remove("is-loaded");
    libraryImage.removeAttribute("src");
  }
}

function renderLibraryHeader(pubkey) {
  const signedIn = Boolean(pubkey);
  if (!libraryAvatar || !libraryTitle || !libraryMeta) return;

  if (!signedIn) {
    libraryTitle.textContent = "Library";
    if (libraryMetaText) libraryMetaText.textContent = "";
    else libraryMeta.textContent = "";
    if (libraryMetaSep) libraryMetaSep.hidden = true;
    if (libraryViewChannel) libraryViewChannel.hidden = true;
    if (libraryInitials) libraryInitials.textContent = "";
    libraryAvatar.classList.remove("has-image");
    if (libraryImage) {
      libraryImage.classList.remove("is-loaded");
      libraryImage.removeAttribute("src");
    }
    return;
  }

  const profile = profilesCache.get(pubkey) || {};
  const name = String(profile.name || "").trim();
  const nip05 = String(profile.nip05 || "").trim();

  libraryTitle.textContent = name || "Your library";
  const text = nip05 || shortenKey(pubkey) || "nostr profile";
  if (libraryMetaText) libraryMetaText.textContent = text;
  else libraryMeta.textContent = text;
  if (libraryMetaSep) libraryMetaSep.hidden = false;
  if (libraryViewChannel) {
    libraryViewChannel.hidden = false;
    libraryViewChannel.setAttribute("href", `#channel/${pubkey}`);
  }
  if (libraryInitials) libraryInitials.textContent = initialsFromName(name || pubkey);
  hydrateAvatar(libraryAvatar, profile);
}

if (libraryViewChannel) {
  libraryViewChannel.addEventListener("click", (event) => {
    event.preventDefault();
    const pubkey = authState.pubkey;
    if (!pubkey) return;
    navToDeep(`#channel/${pubkey}`);
  });
}

function renderChannelHeader(pubkey, token) {
  if (!pubkey) return;
  const localToken = token;
  if (localToken !== channelRenderToken) return;

  const profile = profilesCache.get(pubkey) || {};
  const name = String(profile.name || "").trim();
  const picture = String(profile.picture || "").trim();
  const nip05 = String(profile.nip05 || "").trim();
  const banner = String(profile.banner || profile.cover || "").trim();

  if (channelTitle) channelTitle.textContent = name || "Channel";
  if (channelMeta) {
    const npub = pubkeyToNpubSafe(pubkey);
    channelMeta.textContent = nip05 || shortenNpub(npub) || shortenKey(pubkey) || "nostr profile";
  }
  if (channelInitials) channelInitials.textContent = initialsFromName(name || pubkey);

  if (channelAbout) {
    try {
      renderMentionsOnly(channelAbout, String(profile.about || "").trim(), profilesCache);
    } catch {
      channelAbout.textContent = String(profile.about || "").trim();
    }
  }
  if (channelAboutEmpty) {
    channelAboutEmpty.hidden = Boolean(String(profile.about || "").trim());
  }

  if (channelBanner) {
    channelBanner.hidden = !banner;
  }

  if (channelBannerImage) {
    channelBannerImage.classList.remove("is-loaded");
    channelBannerImage.dataset.token = String(localToken);
    channelBannerImage.onload = () => {
      if (String(channelBannerImage.dataset.token || "") !== String(localToken)) return;
      channelBannerImage.classList.add("is-loaded");
    };
    channelBannerImage.onerror = () => {
      if (String(channelBannerImage.dataset.token || "") !== String(localToken)) return;
      if (channelBanner) channelBanner.hidden = true;
      try {
        channelBannerImage.removeAttribute("src");
      } catch {}
    };
    if (banner) {
      channelBannerImage.src = banner;
    } else {
      try {
        channelBannerImage.removeAttribute("src");
      } catch {}
      channelBannerImage.dataset.token = "";
    }
  }

  if (channelAvatar) {
    if (picture) channelAvatar.classList.add("has-image");
    else channelAvatar.classList.remove("has-image");
  }

  if (channelImage) {
    channelImage.classList.remove("is-loaded");
    if (picture) {
      channelImage.dataset.token = String(localToken);
      channelImage.src = picture;
      channelImage.addEventListener(
        "load",
        () => {
          if (channelImage.dataset.token !== String(channelRenderToken)) return;
          channelImage.classList.add("is-loaded");
        },
        { once: true }
      );
    } else {
      channelImage.removeAttribute("src");
    }
  }
}

async function loadContacts() {
  contacts = new Set();
  contactsEvent = null;
  if (!authState.pubkey) {
    renderSidebarSubs();
    updateSubscribeButton();
    return;
  }
  const filter = { kinds: [3], authors: [authState.pubkey], limit: 1 };
  const found = [];
  await Promise.all(
    getReadRelays().map((relay) =>
      requestEvents(relay, filter, (event) => {
        found.push(event);
      })
    )
  );
  found.sort((a, b) => b.created_at - a.created_at);
  const latest = found[0];
  if (latest) {
    contactsEvent = latest;
    (latest.tags || [])
      .filter((t) => t[0] === "p" && t[1])
      .forEach((t) => contacts.add(t[1]));
  }
  await ensureProfiles(Array.from(contacts.values()).slice(0, 60));
  renderSidebarSubs();
  updateSubscribeButton();
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
  authState.npub = "";
  authState.hasSecret = false;
  setSecretKeyHex("");
  setPersistedSecretKeyHex("");
  window.localStorage.removeItem(AUTH_STORAGE_KEY);
  contacts = new Set();
  contactsEvent = null;
  updateAuthUi();
}

async function setSignedIn(pubkey, mode, hasSecret) {
  authState.mode = mode;
  authState.pubkey = pubkey;
  authState.npub = pubkeyToNpub(pubkey) || "";
  authState.hasSecret = Boolean(hasSecret);
  persistAuth();
  await ensureProfiles([pubkey]);
  updateAuthUi();
  await loadContacts();
}

async function restoreAuth() {
  const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    if (data?.mode === "extension") {
      if (window.nostr?.getPublicKey) {
        const pk = await window.nostr.getPublicKey();
        await setSignedIn(pk, "extension", false);
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
      await setSignedIn(pk, "nsec", true);
    }
  } catch {
    // ignore
  }
}

function normalizeVideoUrl(url) {
  if (!url) return "";
  if (url.startsWith("ipfs://")) {
    return `https://ipfs.io/ipfs/${url.replace("ipfs://", "")}`;
  }
  return url;
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds <= 0) return "0:00";
  const total = Math.floor(seconds);
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const secs = total % 60;
  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }
  return `${minutes}:${String(secs).padStart(2, "0")}`;
}

function setWatchAspect(width, height) {
  if (!watchPlayer) return;
  if (Number.isFinite(width) && Number.isFinite(height) && width > 0 && height > 0) {
    watchPlayer.style.setProperty("--watch-aspect", `${width} / ${height}`);
  } else {
    watchPlayer.style.removeProperty("--watch-aspect");
  }
}

function setPlayState() {
  if (!watchVideo) return;
  const isPlaying = !watchVideo.paused && !watchVideo.ended;
  if (watchToggleIcon) {
    watchToggleIcon.textContent = isPlaying ? "pause" : "play_arrow";
  }
  if (watchPlayer) {
    watchPlayer.classList.toggle("is-playing", isPlaying);
  }
}

function setVolumeState() {
  if (!watchVideo) return;
  const volume = watchVideo.muted ? 0 : watchVideo.volume;
  if (watchMuteIcon) {
    if (volume === 0) {
      watchMuteIcon.textContent = "volume_off";
    } else if (volume < 0.5) {
      watchMuteIcon.textContent = "volume_down";
    } else {
      watchMuteIcon.textContent = "volume_up";
    }
  }
  if (watchVolume) {
    watchVolume.value = String(volume);
  }
}

function updateWatchProgress() {
  if (!watchVideo) return;
  const duration = Number.isFinite(watchVideo.duration) ? watchVideo.duration : 0;
  const current = Number.isFinite(watchVideo.currentTime) ? watchVideo.currentTime : 0;
  if (watchTimeCurrent) watchTimeCurrent.textContent = formatTime(current);
  if (watchTimeTotal) watchTimeTotal.textContent = formatTime(duration);
  if (watchProgress) {
    watchProgress.max = duration ? String(duration) : "0";
    if (!isScrubbingProgress) {
      watchProgress.value = duration ? String(current) : "0";
    }
  }

  if (watchPlayer) {
    const pct = duration ? Math.max(0, Math.min(1, current / duration)) : 0;
    let bufPct = 0;
    try {
      const b = watchVideo.buffered;
      if (b && b.length) {
        const end = b.end(b.length - 1);
        bufPct = duration ? Math.max(0, Math.min(1, end / duration)) : 0;
      }
    } catch {}
    watchPlayer.style.setProperty("--watch-progress", String(pct * 100));
    watchPlayer.style.setProperty("--watch-buffer", String(bufPct * 100));
  }
}

function togglePlay() {
  if (!watchVideo) return;
  if (watchVideo.paused || watchVideo.ended) {
    watchAutoplayWanted = true;
    startWatchAutoplayRetryLoop();
    watchVideo.play().catch(() => {});
  } else {
    watchAutoplayWanted = false;
    stopWatchAutoplayRetryLoop();
    watchVideo.pause();
  }
}

function toggleMute() {
  if (!watchVideo) return;
  if (watchVideo.muted || watchVideo.volume === 0) {
    watchVideo.muted = false;
    watchVideo.volume = lastVolume || 1;
  } else {
    lastVolume = watchVideo.volume;
    watchVideo.muted = true;
  }
  setVolumeState();
}

function toggleFullscreen() {
  if (!watchPlayer) return;
  const rotate = shouldRotateForCurrentVideo();

  if (isAndroidMode()) {
    if (isSimFullscreen()) {
      exitAndroidFullscreenRoute();
    } else {
      enterAndroidFullscreenRoute(rotate);
    }
    return;
  }

  if (document.fullscreenElement) {
    try {
      document.exitFullscreen?.();
    } catch {}
  } else {
    try {
      watchPlayer.requestFullscreen?.();
    } catch {
      return;
    }
    void maybeLockLandscapeForFullscreen(rotate);
  }
}

function setActivePage(page) {
  const pages = [
    pageHome,
    pageShorts,
    pageSubs,
    pageLibrary,
    pageHistory,
    pageWatchlater,
    pageLiked,
    pageSearch,
    pageSettings,
    pageWatch,
    pageChannel,
  ];
  const previousActive = pages.find((el) => el && el !== pageWatch && el.classList.contains("is-active")) || null;
  pages.forEach((el) => {
    if (!el) return;
    el.classList.toggle("is-active", el === page);
  });
  if (isMini && isMobileUi() && pageWatch) {
    pageWatch.classList.add("is-active");
  }
  document.body.classList.toggle("is-watch", page === pageWatch);
  document.body.classList.toggle("is-search", page === pageSearch);
  document.body.classList.toggle("is-settings", page === pageSettings);

  if (topbarUnderlayOverridePage) {
    topbarUnderlayOverridePage = null;
  }

  if (watchTransitionTimer) {
    try {
      clearTimeout(watchTransitionTimer);
    } catch {}
    watchTransitionTimer = 0;
  }

  if (watchTransitionListener && pageWatch) {
    try {
      pageWatch.removeEventListener("transitionend", watchTransitionListener);
    } catch {}
    watchTransitionListener = null;
  }

  if (watchTransitionUnderlay) {
    watchTransitionUnderlay.classList.remove("is-underlay");
    watchTransitionUnderlay = null;
  }

  if (isMobileUi() && page === pageWatch && previousActive && !isMini) {
    watchTransitionUnderlay = previousActive;
    watchTransitionUnderlay.classList.add("is-underlay");
    watchTransitionUnderlay.classList.add("is-active");

    const cleanup = () => {
      if (watchTransitionTimer) {
        try {
          clearTimeout(watchTransitionTimer);
        } catch {}
        watchTransitionTimer = 0;
      }
      if (watchTransitionListener && pageWatch) {
        try {
          pageWatch.removeEventListener("transitionend", watchTransitionListener);
        } catch {}
        watchTransitionListener = null;
      }
      if (!watchTransitionUnderlay) return;
      const currentRoute = getRoute();
      const currentPage = currentRoute.page === "watch" ? pageWatch : getPageForHash(window.location.hash || "#home");
      const target = watchTransitionUnderlay;
      watchTransitionUnderlay = null;
      target.classList.remove("is-underlay");
      if (currentPage !== target && target !== pageWatch) {
        target.classList.remove("is-active");
      }
    };

    if (pageWatch) {
      watchTransitionListener = (event) => {
        if (event?.target !== pageWatch) return;
        if (event?.propertyName && event.propertyName !== "transform") return;
        cleanup();
      };
      try {
        pageWatch.addEventListener("transitionend", watchTransitionListener);
      } catch {}
    }
    watchTransitionTimer = window.setTimeout(cleanup, 520);
  }

  syncTopbarMode();
}

function getPageForHash(hash) {
  const raw = String(hash || "").replace(/^#/, "");
  if (!raw) return pageHome;
  const [path] = raw.split("?");
  const [page] = path.split("/");
  if (page === "home") return pageHome;
  if (page === "shorts") return pageShorts;
  if (page === "subs") return pageSubs;
  if (page === "library") return pageLibrary;
  if (page === "history") return pageHistory;
  if (page === "watchlater") return pageWatchlater;
  if (page === "liked") return pageLiked;
  if (page === "search") return pageSearch;
  if (page === "settings") return pageSettings;
  if (page === "fullscreen") return pageWatch;
  if (page === "channel") return pageChannel;
  return pageHome;
}

function restoreWindowScrollForHash(hash) {
  const key = String(hash || "");
  if (!key) return;
  let y = 0;
  try {
    y = scrollPositions.get(key) || 0;
  } catch {
    y = 0;
  }
  try {
    window.scrollTo(0, y);
  } catch {}
}

function setUnderlayDragVisible(visible) {
  if (!isMobileUi()) return;
  const route = getRoute();
  const isWatchLike = route.page === "watch" || route.page === "fullscreen";
  const targetHash =
    visible && isWatchLike && !isMini
      ? lastNonWatchHash || "#home"
      : miniLastHash || lastNonWatchHash || "#home";
  const next = visible ? getPageForHash(targetHash) : null;
  const currentPage = getPageForHash(window.location.hash || "#home");
  if (underlayDragPage && underlayDragPage !== next) {
    underlayDragPage.classList.remove("is-underlay");
    if (underlayDragPage !== pageWatch && underlayDragPage !== currentPage) {
      underlayDragPage.classList.remove("is-active");
    }
  }
  underlayDragPage = next;
  if (!underlayDragPage || underlayDragPage === pageWatch) return;
  if (visible) {
    underlayDragPage.classList.add("is-underlay");
    underlayDragPage.classList.add("is-active");

    topbarUnderlayOverridePage = underlayDragPage;
    syncTopbarMode();

    requestAnimationFrame(() => restoreWindowScrollForHash(targetHash));
  } else {
    underlayDragPage.classList.remove("is-underlay");
    if (underlayDragPage !== pageWatch && underlayDragPage !== currentPage) {
      underlayDragPage.classList.remove("is-active");
    }

    if (topbarUnderlayOverridePage === underlayDragPage) {
      topbarUnderlayOverridePage = null;
      syncTopbarMode();
    }
  }
}

function startDockHold({ keepUnderlay = false } = {}) {
  if (!isMobileUi()) return;
  clearDockHold();
  document.body.classList.add("is-dock-hold");
  if (keepUnderlay) {
    setUnderlayDragVisible(true);
    const route = getRoute();
    const isWatchLike = route.page === "watch" || route.page === "fullscreen";
    const targetHash =
      isWatchLike && !isMini
        ? lastNonWatchHash || "#home"
        : miniLastHash || lastNonWatchHash || "#home";

    topbarUnderlayOverridePage = getPageForHash(targetHash);
    syncTopbarMode();
    requestAnimationFrame(() => restoreWindowScrollForHash(targetHash));
  }

  const cleanup = () => {
    clearDockHold();
    if (keepUnderlay) {
      setUnderlayDragVisible(false);
      topbarUnderlayOverridePage = null;
      syncTopbarMode();
    }
  };

  if (pageWatch) {
    dockHoldListener = (event) => {
      if (event?.target !== pageWatch) return;
      if (event?.propertyName && event.propertyName !== "transform") return;
      cleanup();
    };
    try {
      pageWatch.addEventListener("transitionend", dockHoldListener);
    } catch {}
  }
  dockHoldTimer = window.setTimeout(cleanup, 520);
}

function setActiveNav(key) {
  if (sidebarNavLinks.length) {
    sidebarNavLinks.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.nav === key);
    });
  }
  if (mobileNavLinks.length) {
    mobileNavLinks.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.nav === key);
    });
  }
}

function mainNavKeyFromHash(hash) {
  const value = String(hash || "");
  if (value === "#home") return "home";
  if (value === "#shorts") return "shorts";
  if (value === "#subs") return "subs";
  if (value === "#library") return "library";
  return "";
}

function getRouteFromHash(hash) {
  const raw = String(hash || "").replace(/^#/, "");
  if (!raw) return { page: "home" };
  const [path, query] = raw.split("?");
  const [page, id] = path.split("/");
  const params = new URLSearchParams(query || "");
  return {
    page,
    id: id || params.get("id") || params.get("v") || "",
    params,
  };
}

function lineageMainNavKeyFromHash(hash, depth = 0) {
  const direct = mainNavKeyFromHash(hash);
  if (direct) return direct;
  if (depth > 2) return "home";
  const route = getRouteFromHash(hash);

  // Mirror deep-page ownership rules.
  if (route.page === "history" || route.page === "watchlater" || route.page === "liked" || route.page === "settings") {
    return "library";
  }

  // If we entered a channel/search from another deep page, recurse once.
  if (route.page === "search") {
    return searchEntryMainNavKey || lineageMainNavKeyFromHash(searchEntryHash || lastNonSearchHash, depth + 1) || "home";
  }
  if (route.page === "channel") {
    return lineageMainNavKeyFromHash(channelEntryHash, depth + 1) || "home";
  }

  return "home";
}

function getLineageMainNavKey(route) {
  if (!route?.page) return "home";
  if (route.page === "home") return "home";
  if (route.page === "shorts") return "shorts";
  if (route.page === "subs") return "subs";
  if (route.page === "library") return "library";

  // Watch routes should keep the owning main tab of the page underneath.
  if (route.page === "watch" || route.page === "fullscreen") {
    return lineageMainNavKeyFromHash(lastNonWatchHash) || "home";
  }

  // Library deep pages should keep Library active.
  if (route.page === "history" || route.page === "watchlater" || route.page === "liked" || route.page === "settings") {
    return "library";
  }

  // Channel/search should keep the main tab you came from active (when possible).
  if (route.page === "channel") {
    if (/^#search\b/i.test(channelEntryHash)) {
      return searchEntryMainNavKey || lineageMainNavKeyFromHash(searchEntryHash || lastNonSearchHash) || "home";
    }
    return lineageMainNavKeyFromHash(channelEntryHash) || "home";
  }
  if (route.page === "search") {
    return searchEntryMainNavKey || lineageMainNavKeyFromHash(searchEntryHash || lastNonSearchHash) || "home";
  }

  return "home";
}

function getRoute() {
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw) return { page: "home" };
  const [path, query] = raw.split("?");
  const [page, id] = path.split("/");
  const params = new URLSearchParams(query || "");
  return {
    page,
    id: id || params.get("id") || params.get("v") || "",
    params,
  };
}

function normalizeRelayUrl(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (!/^wss?:\/\//i.test(raw)) return "";
  try {
    const u = new URL(raw);
    if (u.protocol !== "wss:" && u.protocol !== "ws:") return "";
    return u.toString();
  } catch {
    return "";
  }
}

function parseRelayHints(searchParams) {
  const out = [];
  if (!searchParams) return out;
  const singles = searchParams.getAll("relay");
  for (const v of singles) {
    const norm = normalizeRelayUrl(v);
    if (norm) out.push(norm);
  }
  const packed = searchParams.get("relays") || "";
  if (packed) {
    packed
      .split(/[\s,]+/)
      .map((s) => normalizeRelayUrl(s))
      .filter(Boolean)
      .forEach((r) => out.push(r));
  }
  return out;
}

function mergeRelays(...relayLists) {
  const out = [];
  const seen = new Set();
  for (const list of relayLists) {
    for (const r of list || []) {
      const norm = normalizeRelayUrl(r);
      if (!norm || seen.has(norm)) continue;
      seen.add(norm);
      out.push(norm);
    }
  }
  return out;
}

function decodeWatchSegment(value) {
  const raw = String(value || "");
  if (!raw) return "";
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

function parseAddressableVideoCoord(value) {
  const v = String(value || "").trim();
  const m = v.match(/^(30311|34235|34236):([0-9a-f]{64}):(.+)$/i);
  if (!m) return null;
  const kind = Number(m[1]);
  const pubkey = String(m[2] || "").toLowerCase();
  const identifier = decodeWatchSegment(m[3]);
  if (!identifier) return null;
  return { kind, pubkey, identifier, coord: `${kind}:${pubkey}:${identifier}` };
}

function normalizeWatchTarget(rawId) {
  const value = String(rawId || "").trim();
  if (!value) return { id: "", relays: [], addr: null };

  const addr = parseAddressableVideoCoord(value);
  if (addr) {
    return { id: addr.coord, relays: [], addr };
  }

  const tools = getNostrTools();
  if (tools?.nip19?.decode && /^(note|nevent)1[0-9a-z]+$/i.test(value)) {
    try {
      const decoded = tools.nip19.decode(value);
      if (decoded?.type === "note") {
        return { id: bytesToHex(decoded.data), relays: [], addr: null };
      }
      if (decoded?.type === "nevent") {
        return {
          id: String(decoded.data?.id || ""),
          relays: Array.isArray(decoded.data?.relays) ? decoded.data.relays : [],
          addr: null,
        };
      }
    } catch {}
  }
  return { id: value, relays: [], addr: null };
}

async function fetchFirstEventFromRelays(relays, filter) {
  let found = null;
  await Promise.all(
    relays.map((relay) =>
      requestEvents(relay, filter, (event) => {
        if (!found) found = event;
      })
    )
  );
  return found;
}

async function refineAddressableOriginalTimestamps(videoId, address, relays, seedEvent) {
  // Disabled: prefer stable published timestamps without original-time refinement.
  return;
}

async function fetchProfileFromRelays(relays, pubkey) {
  if (!pubkey) return null;
  let profile = null;
  const filter = { kinds: [0], authors: [pubkey], limit: 1 };
  await Promise.all(
    relays.map((relay) =>
      requestEvents(relay, filter, (event) => {
        if (profile) return;
        try {
          const data = JSON.parse(event.content || "{}");
          profile = {
            name: data.display_name || data.name || shortenKey(event.pubkey),
            picture: data.picture || "",
            nip05: data.nip05 || "",
            banner: data.banner || data.cover || "",
          };
        } catch {
          profile = {
            name: shortenKey(event.pubkey),
            picture: "",
            nip05: "",
            banner: "",
          };
        }
      })
    )
  );
  return profile;
}

async function ensureWatchVideoLoaded(route) {
  const token = ++watchLoadToken;
  const target = normalizeWatchTarget(route?.id);
  const queryRelays = parseRelayHints(route?.params);
  const relays = mergeRelays(getReadRelays(), target.relays, queryRelays);

  if (!target.id) {
    showToast("Invalid video id.");
    if (token === watchLoadToken) window.location.hash = "#home";
    return;
  }

  if (target.addr) {
    if (watchStatus) {
      watchStatus.textContent = "Loading video…";
      watchStatus.hidden = false;
    }
    setActivePage(pageWatch);
    setActiveNav(getLineageMainNavKey(route));
    updateSubscribeButton();
    setWatchLikeUi();
    setWatchSaveUi();

    const hits = [];
    const matches = [];
    const filter = {
      kinds: [target.addr.kind],
      authors: [target.addr.pubkey],
      "#d": [target.addr.identifier],
      limit: 20,
    };
    await Promise.all(
      relays.map((relay) =>
        requestEvents(relay, filter, (ev) => {
          if (!ev?.id) return;
          matches.push(ev);
          hits.push(relay);
        })
      )
    );

    if (token !== watchLoadToken) return;
    if (!matches.length) {
      showToast("Video not found.");
      if (watchStatus) {
        watchStatus.textContent = "Video not found.";
        watchStatus.hidden = false;
      }
      return;
    }

    matches.sort((a, b) => (b.created_at || 0) - (a.created_at || 0));
    const event = matches[0];
    const foundOnRelays = Array.from(new Set(hits));

    const restriction = classifyRestrictedContent(event);
    if (restriction.restricted && !isRestrictedContentAllowed()) {
      const blockedVideo = parseVideoEvent(event);
      const profile =
        profilesCache.get(event.pubkey) ||
        (await fetchProfileFromRelays(relays, event.pubkey));
      if (profile) profilesCache.set(event.pubkey, profile);
      storeVideo(
        {
          ...blockedVideo,
          nostrEventRaw: event,
          nostrRelays: foundOnRelays,
        },
        profile
      );
      showWatchForVideo(videoStore.get(blockedVideo.id));
      return;
    }

    const video = parseVideoEvent(event);
    const profile =
      profilesCache.get(event.pubkey) ||
      (await fetchProfileFromRelays(relays, event.pubkey));
    if (profile) profilesCache.set(event.pubkey, profile);
    try {
      if (Number(video.kind) === 30311) {
        const tmp = { ...video, nostrEventRaw: event };
        const hostState = await getLiveHostVerificationState(tmp);
        const hostPk = String(hostState?.pubkey || "");
        if (hostPk && !profilesCache.get(hostPk)) {
          const hostProfile = await fetchProfileFromRelays(relays, hostPk);
          if (hostProfile) profilesCache.set(hostPk, hostProfile);
        }
        video.liveHostPubkey = hostPk;
        video.liveHostVerified = Boolean(hostState?.verified);
      }
    } catch {}
    storeVideo(
      {
        ...video,
        nostrEventRaw: event,
        nostrRelays: foundOnRelays,
      },
      profile
    );
    const stored = videoStore.get(video.id);
    showWatchForVideo(stored);
    return;
  }

  const isHex = /^[0-9a-f]+$/i.test(target.id);
  if (!isHex || target.id.length < 8 || target.id.length > 64) {
    showToast("Invalid video id.");
    if (token === watchLoadToken) window.location.hash = "#home";
    return;
  }

  if (watchStatus) {
    watchStatus.textContent = "Loading video…";
    watchStatus.hidden = false;
  }
  setActivePage(pageWatch);
  setActiveNav(getLineageMainNavKey(route));
  updateSubscribeButton();
  setWatchLikeUi();
  setWatchSaveUi();

  let event = null;
  let foundOnRelays = [];
  if (/^[0-9a-f]{64}$/i.test(target.id)) {
    let first = null;
    const hits = [];
    await Promise.all(
      relays.map((relay) =>
        requestEvents(relay, { ids: [target.id], limit: 1 }, (ev) => {
          if (!ev?.id) return;
          if (!first) first = ev;
          hits.push(relay);
        })
      )
    );
    event = first;
    foundOnRelays = Array.from(new Set(hits));
  } else {
    const matches = new Map();
    const matchRelays = new Map();
    await Promise.all(
      relays.map((relay) =>
        requestEvents(relay, { ids: [target.id], limit: 20 }, (ev) => {
          if (!matches.has(ev.id)) matches.set(ev.id, ev);
          if (!matchRelays.has(ev.id)) matchRelays.set(ev.id, []);
          matchRelays.get(ev.id).push(relay);
        })
      )
    );
    if (matches.size === 1) {
      event = Array.from(matches.values())[0];
      const rel = matchRelays.get(event.id) || [];
      foundOnRelays = Array.from(new Set(rel));
    } else if (matches.size > 1) {
      showToast("That short id matched multiple videos. Use a longer id.");
      if (token === watchLoadToken) window.location.hash = "#home";
      return;
    }
  }

  if (token !== watchLoadToken) return;
  if (!event) {
    showToast("Video not found on relays.");
    if (watchStatus) {
      watchStatus.textContent = "Video not found on relays.";
      watchStatus.hidden = false;
    }
    return;
  }

  const restriction = classifyRestrictedContent(event);
  if (restriction.restricted && !isRestrictedContentAllowed()) {
    const blockedVideo = parseVideoEvent(event);
    const profile =
      profilesCache.get(event.pubkey) ||
      (await fetchProfileFromRelays(relays, event.pubkey));
    if (profile) profilesCache.set(event.pubkey, profile);
    storeVideo(
      {
        ...blockedVideo,
        nostrEventRaw: event,
        nostrRelays: foundOnRelays,
        restricted: true,
        restrictedReason: restriction.reason,
      },
      profile
    );
    showWatchForVideo(videoStore.get(blockedVideo.id));
    return;
  }

  const video = parseVideoEvent(event);
  const profile =
    profilesCache.get(event.pubkey) ||
    (await fetchProfileFromRelays(relays, event.pubkey));
  if (profile) profilesCache.set(event.pubkey, profile);
  storeVideo(
    {
      ...video,
      nostrEventRaw: event,
      nostrRelays: foundOnRelays,
    },
    profile
  );
  showWatchForVideo(videoStore.get(video.id));
}

function storeVideo(video, profile) {
  if (!video?.id) return;
  const existing = videoStore.get(video.id) || {};
  const nextOriginal = (() => {
    const a = Number(existing.originalPublished || 0);
    const b = Number(video.originalPublished || 0);
    if (a && b) return Math.min(a, b);
    if (a) return a;
    if (b) return b;
    const fallback = Number(video.published || existing.published || 0);
    return fallback || 0;
  })();
  const next = {
    ...existing,
    ...video,
    originalPublished: nextOriginal,
    nostrEventRaw:
      Object.prototype.hasOwnProperty.call(video, "nostrEventRaw") && video.nostrEventRaw != null
        ? video.nostrEventRaw
        : existing.nostrEventRaw,
    nostrRelays:
      Object.prototype.hasOwnProperty.call(video, "nostrRelays") && video.nostrRelays != null
        ? video.nostrRelays
        : existing.nostrRelays,
    restricted:
      Object.prototype.hasOwnProperty.call(video, "restricted") && video.restricted != null
        ? Boolean(video.restricted)
        : Boolean(existing.restricted),
    restrictedReason:
      Object.prototype.hasOwnProperty.call(video, "restrictedReason") && video.restrictedReason != null
        ? String(video.restrictedReason || "")
        : String(existing.restrictedReason || ""),
    channel: profile?.name || existing.channel || "Nostr creator",
    picture: profile?.picture || existing.picture || "",
    nip05: profile?.nip05 || existing.nip05 || "",
  };

  if (Number(next.kind) === 30311) {
    const liveStarts = Number(next.liveStarts || 0);
    if (liveStarts) {
      next.published = liveStarts;
    } else if (existing.published) {
      next.published = existing.published;
    } else if (next.published) {
      next.published = Number(next.published || 0);
    }
  }

  videoStore.set(video.id, next);
}

function hydrateRestrictedCardUi(clone, reason) {
  const title = clone.querySelector(".video-title, .short-title, .watch-item-title");
  const channel = clone.querySelector(".video-channel, .short-meta, .watch-item-channel");
  const time = clone.querySelector(".video-time");
  const duration = clone.querySelector(".duration");
  const live = clone.querySelector(".live-pill");
  const verified = clone.querySelector(".verified");
  const avatar = clone.querySelector(".channel-avatar");
  const thumb = clone.querySelector(".thumbnail, .short-thumb, .watch-thumb");
  if (title) title.textContent = "Restricted content";
  if (channel) channel.textContent = "Hidden by safety settings";
  if (time) time.textContent = "";
  if (duration) duration.hidden = true;
  if (live) live.hidden = true;
  if (verified) verified.hidden = true;
  if (avatar) {
    try {
      avatar.classList.remove("has-image");
    } catch {}
  }
  if (thumb) {
    try {
      thumb.style.backgroundImage = "";
    } catch {}
  }
  const card = clone.querySelector(".video-card, .short-card, .watch-item");
  if (card) {
    card.dataset.restricted = "1";
    card.dataset.restrictedReason = String(reason || "");
    try {
      card.removeAttribute("data-video-url");
    } catch {}
  }
}

function setWatchEventInspectorOpen(isOpen) {
  if (!watchEventPanel) return;
  watchEventPanel.hidden = !isOpen;
}

function populateWatchEventInspector(video) {
  if (!watchEventRelays || !watchEventRaw) return;
  const relays = Array.isArray(video?.nostrRelays) ? video.nostrRelays.filter(Boolean) : [];
  watchEventRelays.innerHTML = "";
  if (!relays.length) {
    const el = document.createElement("div");
    el.textContent = "No relay info.";
    watchEventRelays.appendChild(el);
  } else {
    relays.forEach((relay) => {
      const el = document.createElement("div");
      el.textContent = relay;
      watchEventRelays.appendChild(el);
    });
  }

  const raw = video?.nostrEventRaw;
  if (raw && typeof raw === "object") {
    try {
      watchEventRaw.textContent = JSON.stringify(raw, null, 2);
    } catch {
      watchEventRaw.textContent = String(raw);
    }
  } else {
    watchEventRaw.textContent = "No raw event.";
  }
}

function showWatchForVideo(video) {
  if (!video) return;
  if (video.restricted && !isRestrictedContentAllowed()) {
    stopWatchPlayback();
    lastWatchedVideoId = video.id;
    watchLoadedVideoId = String(video.id || "");
    if (miniPlayerTitle) miniPlayerTitle.textContent = "Restricted content";
    if (miniPlayerVideo) {
      try {
        miniPlayerVideo.style.backgroundImage = "";
      } catch {}
    }
    if (watchTitle) watchTitle.textContent = "Restricted content";
    if (watchStats) watchStats.textContent = "Hidden by safety settings";
    if (watchDesc) {
      watchDesc.innerHTML = `This video is restricted. <button class="text-btn" type="button" data-open-settings="content">Open settings</button>`;
    }
    if (watchChannelName) watchChannelName.textContent = "Restricted uploader";
    if (watchChannelMeta) watchChannelMeta.textContent = "Hidden by safety settings";
    if (watchChannelAvatar) {
      try {
        hydrateAvatar(watchChannelAvatar, { name: "Restricted", picture: "" });
      } catch {}
    } else {
      if (watchChannelInitials) watchChannelInitials.textContent = "";
      if (watchChannelImage) {
        try {
          watchChannelImage.classList.remove("is-loaded");
        } catch {}
        try {
          watchChannelImage.removeAttribute("src");
        } catch {}
      }
    }

    if (watchSubscribeBtn) {
      watchSubscribeBtn.disabled = true;
      watchSubscribeBtn.textContent = "Subscribe";
    }
    if (watchLikeBtn) watchLikeBtn.disabled = true;
    if (watchDislikeBtn) watchDislikeBtn.disabled = true;
    if (watchSaveBtn) watchSaveBtn.disabled = true;
    if (watchShareBtn) watchShareBtn.disabled = true;
    if (watchShareNative) watchShareNative.disabled = true;
    if (watchShareLink) watchShareLink.disabled = true;
    if (watchShareEmbed) watchShareEmbed.disabled = true;
    if (watchEventBtn) watchEventBtn.disabled = true;
    try {
      closeMenu(watchShareMenu);
    } catch {}

    if (watchCommentInput) watchCommentInput.disabled = true;
    if (watchCommentSend) watchCommentSend.disabled = true;
    if (watchCommentsNote) {
      watchCommentsNote.hidden = false;
      watchCommentsNote.textContent = "Comments are disabled for restricted content.";
    }
    if (watchStatus) {
      watchStatus.textContent = "Restricted content";
      watchStatus.hidden = false;
    }
    if (watchPoster) {
      try {
        watchPoster.style.backgroundImage = "";
      } catch {}
      watchPoster.classList.add("is-visible");
    }
    setWatchAspect(16, 9);
    buildWatchList(video.id);
    setActivePage(pageWatch);
    stopWatchCommentsPolling();
    return;
  }
  lastWatchedVideoId = video.id;
  watchLoadedVideoId = String(video.id || "");
  watchCommentsLoadToken += 1;
  resetWatchCommentsUiForVideo(video);
  addToIdList(STORAGE_HISTORY, video.id, 200);
  if (!isMini) {
    miniLastHash = lastNonWatchHash || "#home";
  }
  if (miniPlayerVideo) {
    const thumb = video.thumb || "";
    miniPlayerVideo.style.backgroundImage = thumb ? `url('${thumb}')` : "";
    miniPlayerVideo.style.backgroundSize = "cover";
    miniPlayerVideo.style.backgroundPosition = "center";
  }
  if (watchControlsTitle) {
    watchControlsTitle.textContent = video.title || "Now playing";
  }
  if (watchTitle) watchTitle.textContent = video.title || "NosTube video";
  if (watchStats) {
    if (video.kind === 30311) {
      const status = String(video.liveStatus || "").toLowerCase();
      const label = status === "ended" ? "Ended stream" : "Live stream";
      const pub = Number(video.published || 0);
      watchStats.textContent = pub
        ? `${timeAgo(pub)} · ${label}`
        : label;
    } else {
      const pub = Number(video.published || 0);
      watchStats.textContent = pub
        ? `${timeAgo(pub)} · Nostr video`
        : "Nostr video";
    }
  }
  if (watchDesc) {
    if (video.kind === 30311) {
      const nowPlaying = String(video.liveNowPlaying || "").trim();
      const base = video.summary || "";
      const alt = String(video.liveAlt || "").trim();
      const combined = [nowPlaying, base, alt].filter(Boolean).join("\n\n");
      watchDesc.textContent = combined;
    } else {
      try {
        renderMentionsOnly(
          watchDesc,
          video.summary || "This video is powered by Nostr video events (NIP-71).",
          profilesCache
        );
      } catch {
        watchDesc.textContent = video.summary || "This video is powered by Nostr video events (NIP-71).";
      }
    }
  }

  const signedIn = Boolean(authState.pubkey);
  if (watchLikeBtn) watchLikeBtn.disabled = false;
  if (watchDislikeBtn) watchDislikeBtn.disabled = false;
  if (watchShareBtn) watchShareBtn.disabled = false;
  if (watchShareNative) watchShareNative.disabled = false;
  if (watchShareLink) watchShareLink.disabled = false;
  if (watchShareEmbed) watchShareEmbed.disabled = false;
  if (watchEventBtn) watchEventBtn.disabled = false;

  if (watchCommentInput) watchCommentInput.disabled = !signedIn;
  if (watchCommentSend) watchCommentSend.disabled = !signedIn;
  if (watchCommentsNote) watchCommentsNote.hidden = signedIn;

  try {
    populateWatchEventInspector(video);
    setWatchEventInspectorOpen(false);
  } catch {}
  if (watchChannelName) watchChannelName.textContent = video.channel || "Nostr creator";
  if (watchChannelMeta) watchChannelMeta.textContent = video.nip05 || "nostr profile";
  if (watchChannelAvatar) {
    hydrateAvatar(watchChannelAvatar, {
      name: video.channel || "Nostr creator",
      picture: video.picture || "",
    });
  } else {
    if (watchChannelInitials) watchChannelInitials.textContent = initialsFromName(video.channel || "");
    if (watchChannelImage) {
      watchChannelImage.classList.remove("is-loaded");
      if (video.picture) {
        watchChannelImage.src = video.picture;
        watchChannelImage.addEventListener(
          "load",
          () => watchChannelImage.classList.add("is-loaded"),
          { once: true }
        );
      } else {
        watchChannelImage.removeAttribute("src");
      }
    }
  }

  if (Number(video.kind) === 30311) {
    try {
      const hostPk = String(video.liveHostPubkey || "").trim();
      const publisherPk = String(video.pubkey || "");
      if (hostPk && hostPk !== publisherPk) {
        const hostProfile = profilesCache.get(hostPk) || null;
        const hostName = String(hostProfile?.name || "").trim() || shortenKey(hostPk);
        const publisherName = video.channel || shortenKey(publisherPk);
        if (watchChannelName) watchChannelName.textContent = hostName;
        if (watchChannelMeta) watchChannelMeta.textContent = `via ${publisherName}`;
        if (watchChannelAvatar) {
          hydrateAvatar(watchChannelAvatar, {
            name: hostName,
            picture: hostProfile?.picture || "",
          });
        }
      }
    } catch {}
  }

  if (watchPoster) {
    if (video.thumb) {
      watchPoster.style.backgroundImage = `url('${video.thumb}')`;
      watchPoster.classList.add("is-visible");
    } else {
      watchPoster.classList.remove("is-visible");
    }
  }
  if (watchVideo) {
    if (video.thumb) {
      watchVideo.setAttribute("poster", video.thumb);
    } else {
      watchVideo.removeAttribute("poster");
    }
  }

  if (watchStatus) {
    watchStatus.textContent = video.url ? "Loading video…" : "No video URL available";
    watchStatus.hidden = false;
  }

  setWatchAspect(16, 9);
  loadWatchVideo(video.url || "", video.mime || "");
  updateWatchProgress();
  setPlayState();
  setVolumeState();
  if (watchVideo && video.url) {
    watchVideo.volume = lastVolume;
    watchVideo.muted = false;

    const isHlsAuto = guessMimeType(String(video.url || ""), String(video.mime || "")) === "application/vnd.apple.mpegurl";

    const shouldSuppress = suppressWatchAutoplayOnce;
    suppressWatchAutoplayOnce = false;
    if (shouldSuppress) {
      const canResume = String(video.id || "") && String(video.id || "") === String(miniResumeVideoId || "");
      if (!canResume) {
        miniResumeTime = 0;
        miniWasPlaying = false;
        miniResumeVideoId = "";
      }
      const t = Number.isFinite(miniResumeTime) ? miniResumeTime : 0;
      if (t > 0 && canResume) {
        try {
          watchVideo.currentTime = t;
        } catch {}
      }
      if (!miniWasPlaying || !canResume) {
        try {
          watchVideo.pause();
        } catch {}
        setPlayState();
      } else {
        if (isHlsAuto) {
          watchAutoplayWanted = true;
          startWatchAutoplayRetryLoop();
        }
        watchVideo.play().catch(() => {
          if (watchStatus) {
            watchStatus.textContent = "Tap to play";
            watchStatus.hidden = false;
          }
          setPlayState();
        });
      }
    } else {
      if (isHlsAuto) {
        watchAutoplayWanted = true;
        startWatchAutoplayRetryLoop();
      }
      watchVideo.play().catch(() => {
        if (watchStatus) {
          watchStatus.textContent = "Tap to play";
          watchStatus.hidden = false;
        }
        setPlayState();
      });
    }
  }

  try {
    buildWatchList(video.id);
    ensureWatchListHasCandidates(video.id)
      .then(() => {
        const route = getRoute();
        if (route.page !== "watch" && route.page !== "fullscreen") return;
        const current = getCurrentWatchVideo();
        if (!current?.id || current.id !== video.id) return;
        buildWatchList(video.id);
      })
      .catch(() => {});
  } catch {
    // fall through
  }
  setActivePage(pageWatch);
  updateSubscribeButton();
  setWatchLikeUi();
  setWatchSaveUi();
  try {
    loadWatchComments(video, { loadToken: watchCommentsLoadToken });
    startWatchCommentsPolling(video);
  } catch {}
  try {
    loadWatchLikeCount(video);
  } catch {}
  try {
    ensureWatchReactionState(video);
  } catch {}
}

function setMiniVisible(visible) {
  if (!miniPlayer) return;
  const hasVideo = Boolean(lastWatchedVideoId);
  miniPlayer.hidden = !(visible && hasVideo);
}

function enableMiniPlayerUi() {
  if (isMini) return;
  isMini = true;
  document.body.classList.add("is-mini");
  const video = videoStore.get(lastWatchedVideoId) || getCurrentWatchVideo();
  const isBlocked = Boolean(video?.restricted && !isRestrictedContentAllowed());
  if (miniPlayerTitle) miniPlayerTitle.textContent = isBlocked ? "Restricted content" : video?.title || "Now playing";
  if (miniPlayerVideo) {
    const thumb = isBlocked ? "" : video?.thumb || "";
    miniPlayerVideo.style.backgroundImage = thumb ? `url('${thumb}')` : "";
    miniPlayerVideo.style.backgroundSize = "cover";
    miniPlayerVideo.style.backgroundPosition = "center";
  }
  if (watchVideo && miniPlayerVideo && watchVideo.parentElement !== miniPlayerVideo) {
    try {
      miniPlayerVideo.textContent = "";
    } catch {}
    try {
      miniPlayerVideo.appendChild(watchVideo);
      watchVideoDocked = true;
    } catch {}
  }
  if (watchPoster) {
    watchPoster.classList.remove("is-visible");
  }
  snapMiniPlayerTransitionOnce();
  setMiniVisible(true);
  setDockDragDy(0);
}

function enterMiniPlayer() {
  if (isMini) return;
  isMini = true;
  document.body.classList.add("is-mini");

  if (watchVideo) {
    miniResumeTime = Number.isFinite(watchVideo.currentTime) ? watchVideo.currentTime : 0;
    miniWasPlaying = Boolean(!watchVideo.paused && !watchVideo.ended);
  }

  const video = getCurrentWatchVideo() || videoStore.get(lastWatchedVideoId);
  miniResumeVideoId = String(video?.id || lastWatchedVideoId || "");
  const isBlocked = Boolean(video?.restricted && !isRestrictedContentAllowed());
  if (miniPlayerTitle) miniPlayerTitle.textContent = isBlocked ? "Restricted content" : video?.title || "Now playing";
  if (miniPlayerVideo) {
    const thumb = isBlocked ? "" : video?.thumb || "";
    miniPlayerVideo.style.backgroundImage = thumb ? `url('${thumb}')` : "";
    miniPlayerVideo.style.backgroundSize = "cover";
    miniPlayerVideo.style.backgroundPosition = "center";
  }
  if (watchVideo && miniPlayerVideo && watchVideo.parentElement !== miniPlayerVideo) {
    try {
      miniPlayerVideo.textContent = "";
    } catch {}
    try {
      miniPlayerVideo.appendChild(watchVideo);
      watchVideoDocked = true;
    } catch {}
  }
  if (watchPoster) {
    watchPoster.classList.remove("is-visible");
  }
  snapMiniPlayerTransitionOnce();
  setMiniVisible(true);
  setDockDragDy(0);

  const targetHash = miniLastHash && miniLastHash !== "#watch" ? miniLastHash : "#home";
  try {
    scrollRestorePending = {
      hash: targetHash,
      y: scrollPositions.get(targetHash) || 0,
    };
  } catch {
    scrollRestorePending = { hash: targetHash, y: 0 };
  }

  const idx = getCurrentAppIndex();
  if (idx > 0) {
    try {
      history.go(-1);
      return;
    } catch {}
  }
  navReplace(targetHash);
}

function exitMiniPlayer() {
  if (!isMini) return;

  if (watchVideo) {
    miniResumeTime = Number.isFinite(watchVideo.currentTime) ? watchVideo.currentTime : miniResumeTime;
    miniWasPlaying = Boolean(!watchVideo.paused && !watchVideo.ended);
  }

  miniResumeVideoId = String(lastWatchedVideoId || miniResumeVideoId || "");

  // IMPORTANT: avoid placing <video> in any display:none subtree during restore.
  // We'll keep mini visible until the watch page is activated, then undock.
  isMini = false;
  document.body.classList.remove("is-mini");
  setDockDragDy(0);
  const video = videoStore.get(lastWatchedVideoId);
  if (video?.id) {
    topbarUnderlayOverridePage = getPageForHash(window.location.hash || "#home");
    syncTopbarMode();
    suppressWatchAutoplayOnce = true;
    resumeWatchOnRoute = true;
    const nextHash = `#watch/${video.id}`;
    try {
      navPush(nextHash);
    } catch {
      window.location.hash = nextHash;
      return;
    }

    // navPush already calls handleRoute(). Defer undock/hide until after the
    // watch page becomes active to avoid any playback hiccup.
    requestAnimationFrame(() => {
      undockWatchVideoFromMini();
      setMiniVisible(false);
    });
  }
}

function closeMiniPlayer() {
  exitMiniPlayerAndStop();
}

function expandFromMiniToVideo(id) {
  const nextId = String(id || "");
  if (!nextId) return;
  try {
    miniLastHash = window.location.hash || miniLastHash || lastNonWatchHash || "#home";
  } catch {}
  clearDockDrag();
  // Switching to a different watch target while minimized should NOT reuse the
  // previous video's resume time/play state.
  miniResumeTime = 0;
  miniWasPlaying = false;
  miniResumeVideoId = "";
  suppressWatchAutoplayOnce = false;

  isMini = false;
  document.body.classList.remove("is-mini");
  resumeWatchOnRoute = false;
  lastWatchedVideoId = nextId;
  topbarUnderlayOverridePage = getPageForHash(window.location.hash || "#home");
  syncTopbarMode();

  // Ensure the <video> is back in the watch page container before we load a new src.
  undockWatchVideoFromMini();
  setMiniVisible(false);

  const nextHash = `#watch/${nextId}`;
  try {
    navPush(nextHash);
  } catch {
    window.location.hash = nextHash;
  }
}

function setDockDragDy(nextDy, alphaDy) {
  const raw = Number(nextDy) || 0;
  const rawAlpha = Number.isFinite(Number(alphaDy)) ? Number(alphaDy) : raw;
  dockDragPendingDy = raw;
  dockDragPendingAlphaDy = rawAlpha;
  if (dockDragRaf) return;
  dockDragRaf = window.requestAnimationFrame(() => {
    dockDragRaf = 0;
    const max = Math.max(120, Math.round(window.innerHeight || 0));
    dockDragDy = Math.max(-max, Math.min(max, dockDragPendingDy));
    const alphaSource = dockDragPendingAlphaDy;

    document.body.style.setProperty("--dock-dy", `${dockDragDy}px`);
    document.body.classList.toggle("is-docking", dockDragDy !== 0);
    if (dockDragDy !== 0) {
      clearDockHold();
    }

    const dist = Math.max(240, Math.round((window.innerHeight || 0) * 0.45));
    let alpha = isMini ? 1 : 0;
    if (!isMini && alphaSource > 0) {
      alpha = Math.max(0, Math.min(1, alphaSource / dist));
    }
    if (isMini && alphaSource < 0) {
      alpha = Math.max(0, Math.min(1, 1 - Math.abs(alphaSource) / dist));
    }
    void alpha;

    if (!isMini) {
      const keepUnderlay = dockDragDy > 0 || document.body.classList.contains("is-dock-hold");
      setUnderlayDragVisible(keepUnderlay);
    }

    syncTopbarMode();
  });
}

function clearDockDrag() {
  const wasDocking = dockDragDy !== 0 || dockDragPendingDy !== 0 || document.body.classList.contains("is-docking");
  setDockDragDy(0);
  document.body.classList.remove("is-docking");

  if (!isMobileUi() || !wasDocking) {
    clearDockHold();
    setUnderlayDragVisible(false);
    syncTopbarMode();
    return;
  }

  clearDockHold();
  document.body.classList.add("is-dock-hold");

  const cleanup = () => {
    clearDockHold();
    setUnderlayDragVisible(false);
    syncTopbarMode();
  };

  if (pageWatch) {
    dockHoldListener = (event) => {
      if (event?.target !== pageWatch) return;
      if (event?.propertyName && event.propertyName !== "transform") return;
      cleanup();
    };
    try {
      pageWatch.addEventListener("transitionend", dockHoldListener);
    } catch {}
  }
  dockHoldTimer = window.setTimeout(cleanup, 520);
}

function isMobileUi() {
  return window.matchMedia?.("(max-width: 720px)")?.matches ?? false;
}

function isWatchRouteActive() {
  const route = getRoute();
  return route.page === "watch" || route.page === "fullscreen";
}

function isInAnyFullscreenUi() {
  return Boolean(document.fullscreenElement) || isSimFullscreen();
}

function isMobileThinProgressMode() {
  return isMobileUi() && !isInAnyFullscreenUi();
}

function clearWatchControlsHideTimer() {
  if (!watchControlsHideTimer) return;
  try {
    window.clearTimeout(watchControlsHideTimer);
  } catch {}
  watchControlsHideTimer = 0;
}

function setWatchControlsEnabled(enabled) {
  if (!watchPlayer) return;
  const controls = watchControls || watchPlayer;
  const nodes = Array.from(controls.querySelectorAll("button, input, select, textarea"));
  nodes.forEach((el) => {
    if (!el) return;
    if (el === watchVideo) return;
    try {
      if ("disabled" in el) el.disabled = !enabled;
    } catch {}
  });

  if (!enabled && watchProgress && watchPlayer.classList.contains("is-controls-hidden") && isMobileThinProgressMode()) {
    try {
      watchProgress.disabled = false;
    } catch {}
  }

  if (watchMinimize) {
    try {
      watchMinimize.disabled = !enabled;
    } catch {}
  }
}

function showWatchControls({ pin = false, deferEnable = false } = {}) {
  if (!watchPlayer) return;
  watchControlsPinned = Boolean(pin);
  watchControlsLastShownAt = Date.now();
  watchPlayer.classList.remove("is-controls-hidden");
  if (!deferEnable) {
    setWatchControlsEnabled(true);
  }
  clearWatchControlsHideTimer();
}

function scheduleHideWatchControls() {
  if (!watchPlayer || !watchVideo) return;
  if (!isWatchRouteActive()) return;
  if (watchControlsPinned) return;
  if (!watchVideo.paused && !watchVideo.ended && !isScrubbingProgress) {
    const delay = isMobileUi() ? 3000 : 2200;
    clearWatchControlsHideTimer();
    watchControlsHideTimer = window.setTimeout(() => {
      if (!watchPlayer || !watchVideo) return;
      if (!isWatchRouteActive()) return;
      if (watchControlsPinned) return;
      if (isScrubbingProgress) return;
      if (watchVideo.paused || watchVideo.ended) return;
      watchPlayer.classList.add("is-controls-hidden");
      setWatchControlsEnabled(false);
    }, delay);
  }
}

function pokeWatchControls() {
  if (!isWatchRouteActive()) return;
  showWatchControls({ pin: false });
  scheduleHideWatchControls();
}

function initWatchControlsAutohide() {
  if (!watchPlayer || !watchVideo || !watchControls) return;

  const onMouseMove = () => {
    if (Date.now() < (watchControlsIgnoreActivityUntil || 0)) return;
    pokeWatchControls();
  };

  const onPointerMove = (event) => {
    if (event?.pointerType && event.pointerType !== "mouse") return;
    onMouseMove();
  };

  const shouldIgnoreTapTarget = (event) => {
    if (event?.target?.closest?.("button, a, textarea, select, label")) return true;
    if (event?.target?.closest?.('input[type="range"]')) return true;
    if (event?.target?.closest?.(".watch-control-btn, .watch-controls-progress, input")) return true;
    return false;
  };

  const toggleFromTap = () => {
    watchControlsIgnoreActivityUntil = Date.now() + 650;
    watchControlsLastTapToggleAt = Date.now();

    const isHidden = watchPlayer.classList.contains("is-controls-hidden");
    if (isHidden) {
      showWatchControls({ pin: false, deferEnable: true });
      scheduleHideWatchControls();
      try {
        window.setTimeout(() => {
          setWatchControlsEnabled(true);
        }, 0);
      } catch {
        setWatchControlsEnabled(true);
      }
      return;
    }

    watchControlsPinned = false;
    watchPlayer.classList.add("is-controls-hidden");
    clearWatchControlsHideTimer();
    setWatchControlsEnabled(false);
  };

  const onTapToggleClick = (event) => {
    if (!isWatchRouteActive()) return;
    if (shouldIgnoreTapTarget(event)) return;
    if (Date.now() - (watchControlsLastTapToggleAt || 0) < 500) return;
    toggleFromTap();
  };

  const onTapTogglePointerUp = (event) => {
    if (!isWatchRouteActive()) return;
    if (event?.pointerType && event.pointerType === "mouse") return;
    if (shouldIgnoreTapTarget(event)) return;
    toggleFromTap();
  };

  watchPlayer.addEventListener("mousemove", onMouseMove, { passive: true });
  watchPlayer.addEventListener("pointermove", onPointerMove, { passive: true });
  watchPlayer.addEventListener("pointerup", onTapTogglePointerUp, { passive: true });
  watchPlayer.addEventListener("click", onTapToggleClick, { passive: true });

  document.addEventListener(
    "keydown",
    (event) => {
      if (!isWatchRouteActive()) return;
      if (!isInAnyFullscreenUi()) return;
      const k = String(event.key || "");
      if (k === " " || k === "ArrowLeft" || k === "ArrowRight" || k === "ArrowUp" || k === "ArrowDown") {
        pokeWatchControls();
      }
    },
    { passive: true }
  );

  watchVideo.addEventListener("play", () => {
    showWatchControls({ pin: false });
    scheduleHideWatchControls();
  });
  watchVideo.addEventListener("pause", () => {
    showWatchControls({ pin: true });
  });
  watchVideo.addEventListener("ended", () => {
    showWatchControls({ pin: true });
  });

  watchVideo.addEventListener("seeking", () => {
    showWatchControls({ pin: true });
  });
  watchVideo.addEventListener("seeked", () => {
    showWatchControls({ pin: false });
    scheduleHideWatchControls();
  });

  if (watchProgress) {
    watchProgress.addEventListener(
      "pointerdown",
      () => {
        showWatchControls({ pin: true });
      },
      { passive: true }
    );
    watchProgress.addEventListener(
      "pointerup",
      () => {
        showWatchControls({ pin: false });
        scheduleHideWatchControls();
      },
      { passive: true }
    );
  }
}

function handleMiniTouchStart(event) {
  if (!isMobileUi()) return;
  const touch = event.touches?.[0];
  if (!touch) return;
  touchStartY = touch.clientY;
  touchLastY = touch.clientY;
  touchStartTime = Date.now();
  dragStartBottomOffset = 0;
  if (isMini && miniPlayer) {
    const rect = miniPlayer.getBoundingClientRect();
    dragStartBottomOffset = Math.max(0, (window.innerHeight || 0) - rect.top);
  }
}

function handleMiniTouchEnd(event, direction) {
  if (!event) return;
  const touch = event.changedTouches?.[0];
  if (!touch || touchStartY == null) return;
  const dy = touch.clientY - touchStartY;
  const dt = Date.now() - (touchStartTime || 0);
  touchStartY = null;
  touchLastY = null;
  touchStartTime = 0;
  touchTracking = null;

  const dist = Math.max(260, Math.round((window.innerHeight || 0) * 0.45));
  const progress = Math.max(0, Math.min(1, Math.abs(dy) / dist));
  clearDockDrag();

  if (dt > 1200) return;
  if (direction === "down" && dy > 0) {
    if (progress >= 0.5) requestMiniPlayerGesture();
    return;
  }
  if (direction === "up" && dy < 0) {
    if (progress >= 0.5) exitMiniPlayer();
    return;
  }
}

function stopWatchPlayback() {
  document.body.classList.remove("is-mini");
  setMiniVisible(false);
  try {
    if (watchHls) {
      watchHls.destroy();
      watchHls = null;
    }
  } catch {
    watchHls = null;
  }
  if (watchVideo) {
    try {
      watchVideo.pause();
    } catch {}
    try {
      watchVideo.currentTime = 0;
    } catch {}
    try {
      watchVideo.removeAttribute("poster");
    } catch {}
    try {
      watchVideo.removeAttribute("src");
      watchVideo.src = "";
      watchVideo.load?.();
    } catch {}
  }

  // Some platforms can keep playing the mini element if it was swapped/detached.
  if (miniPlayerVideo) {
    try {
      miniPlayerVideo.pause();
    } catch {}
    try {
      miniPlayerVideo.currentTime = 0;
    } catch {}
    try {
      miniPlayerVideo.removeAttribute("src");
      miniPlayerVideo.src = "";
      miniPlayerVideo.load?.();
    } catch {}
  }
}

if (watchMinimizeBtn) {
  watchMinimizeBtn.addEventListener("click", () => {
    if (!isMobileUi()) return;
    startDockHold({ keepUnderlay: true });
    requestMiniPlayerGesture();
  });
}

if (watchPlayer) {
  watchPlayer.addEventListener(
    "touchstart",
    (event) => {
      if (isMini) return;
      if (!isMobileUi()) return;
      handleMiniTouchStart(event);
    },
    { passive: true }
  );
  watchPlayer.addEventListener("pointerdown", (event) => {
    if (isMini) return;
    handleDockPointerStart(event, "watch");
  });
  watchPlayer.addEventListener(
    "touchmove",
    (event) => {
      if (isMini) return;
      if (!isMobileUi()) return;
      const touch = event.touches?.[0];
      if (!touch || touchStartY == null) return;
      const dy = touch.clientY - touchStartY;
      const lastDy = touch.clientY - (touchLastY ?? touch.clientY);
      touchLastY = touch.clientY;

      if (!touchTracking) {
        if (Math.abs(dy) > 10) {
          touchTracking = "down";
        }
      }

      if (touchTracking === "down" && dy > 0 && Math.abs(lastDy) > 0) {
        event.preventDefault();
        setDockDragDy(dy);
      }
    },
    { passive: false }
  );
  watchPlayer.addEventListener(
    "touchend",
    (event) => {
      if (isMini) return;
      handleMiniTouchEnd(event, "down");
    },
    { passive: true }
  );
}

if (miniPlayerExpand) {
  miniPlayerExpand.addEventListener("click", () => {
    startDockHold();
    exitMiniPlayer();
  });
}

if (miniPlayerClose) {
  miniPlayerClose.addEventListener("click", () => {
    closeMiniPlayer();
  });
}

if (miniPlayer) {
  miniPlayer.addEventListener("click", (event) => {
    const btn = event.target.closest("button");
    if (btn) return;
    startDockHold();
    exitMiniPlayer();
  });
  miniPlayer.addEventListener("pointerdown", (event) => {
    if (!isMini) return;
    handleDockPointerStart(event, "mini");
  });
  miniPlayer.addEventListener(
    "touchstart",
    (event) => {
      if (!isMini) return;
      if (!isMobileUi()) return;
      handleMiniTouchStart(event);
    },
    { passive: true }
  );
  miniPlayer.addEventListener(
    "touchmove",
    (event) => {
      if (!isMini) return;
      if (!isMobileUi()) return;
      const touch = event.touches?.[0];
      if (!touch || touchStartY == null) return;
      const dy = touch.clientY - touchStartY;
      const lastDy = touch.clientY - (touchLastY ?? touch.clientY);
      touchLastY = touch.clientY;

      if (!touchTracking) {
        if (Math.abs(dy) > 10) {
          touchTracking = "up";
        }
      }

      if (touchTracking === "up" && dy < 0 && Math.abs(lastDy) > 0) {
        event.preventDefault();
        setDockDragDy(dy - dragStartBottomOffset, dy);
      }
    },
    { passive: false }
  );
  miniPlayer.addEventListener(
    "touchend",
    (event) => {
      if (!isMini) return;
      handleMiniTouchEnd(event, "up");
    },
    { passive: true }
  );
}

window.addEventListener(
  "pointermove",
  (event) => {
    if (!pointerTracking) return;
    handleDockPointerMove(event);
  },
  { passive: false }
);

window.addEventListener(
  "pointerup",
  (event) => {
    if (!pointerTracking) return;
    const direction = pointerSource === "watch" ? "down" : "up";
    handleDockPointerEnd(event, direction);
  },
  { passive: true }
);

window.addEventListener(
  "pointercancel",
  (event) => {
    if (!pointerTracking) return;
    const direction = pointerSource === "watch" ? "down" : "up";
    handleDockPointerEnd(event, direction);
  },
  { passive: true }
);

function resetPageScroll() {
  const hash = window.location.hash || "#home";

  if (isMobileUi() && document.body.classList.contains("is-dock-hold")) {
    const route = getRoute();
    if (route.page === "watch") {
      return;
    }
  }

  if (scrollRestorePending && scrollRestorePending.hash === hash) {
    const y = scrollRestorePending.y || 0;
    requestAnimationFrame(() => {
      try {
        window.scrollTo(0, y);
      } catch {}
    });
    scrollRestorePending = null;
    return;
  }

  if (scrollPositions.has(hash)) {
    const y = scrollPositions.get(hash) || 0;
    requestAnimationFrame(() => {
      try {
        window.scrollTo(0, y);
      } catch {}
    });
    return;
  }
  try {
    window.scrollTo(0, 0);
  } catch {}
}

if (watchSaveBtn) {
  watchSaveBtn.addEventListener("click", () => {
    const video = getCurrentWatchVideo();
    if (!video?.id) return;
    if (!authState.pubkey) {
      showToast("Sign in to save videos");
      openAuthModal("chooser");
      return;
    }
    if (hasInIdList(STORAGE_WATCHLATER, video.id)) {
      removeFromIdList(STORAGE_WATCHLATER, video.id);
      showToast("Removed from Watch later");
    } else {
      addToIdList(STORAGE_WATCHLATER, video.id, 500);
      showToast("Saved to Watch later");
    }
    setWatchSaveUi();
    renderLocalPages();
  });
}

function showChannel(pubkey) {
  if (!channelFeed || !channelEmpty) return;
  const targetPubkey = String(pubkey || "");
  if (currentChannelPubkey && currentChannelPubkey !== targetPubkey) {
    currentChannelTabKey = "videos";
  }
  currentChannelPubkey = targetPubkey;
  const token = ++channelRenderToken;

  try {
    if (profilesCache.has(targetPubkey)) {
      const st = channelProfileFetchState.get(targetPubkey) || {};
      if (!st.hasFetched) channelProfileFetchState.set(targetPubkey, { ...st, inFlight: null, hasFetched: true });
    }
  } catch {}

  setChannelHeaderLoading(targetPubkey);
  renderChannelPanelsFromStore(targetPubkey);
  const existingProfile = channelProfileFetchState.get(targetPubkey) || { inFlight: null, hasFetched: false };
  if (!existingProfile.inFlight) {
    let resolveDone = null;
    const inFlight = new Promise((resolve) => {
      resolveDone = resolve;
    });
    channelProfileFetchState.set(targetPubkey, { ...existingProfile, inFlight });
    ensureProfiles([targetPubkey])
      .then(() => {
        if (token !== channelRenderToken) return;
        renderChannelHeader(targetPubkey, token);
      })
      .catch(() => {})
      .finally(() => {
        const st = channelProfileFetchState.get(targetPubkey) || {};
        channelProfileFetchState.set(targetPubkey, { ...st, inFlight: null, hasFetched: true });
        try {
          resolveDone?.();
        } catch {}
        try {
          if (token === channelRenderToken) renderChannelPanelsFromStore(targetPubkey);
        } catch {}
      });
  }
  if (existingProfile.inFlight) {
    Promise.resolve(existingProfile.inFlight)
      .catch(() => {})
      .finally(() => {
        const st = channelProfileFetchState.get(targetPubkey) || {};
        channelProfileFetchState.set(targetPubkey, { ...st, inFlight: null, hasFetched: true });
        if (token !== channelRenderToken) return;
        try {
          renderChannelHeader(targetPubkey, token);
        } catch {}
        try {
          renderChannelPanelsFromStore(targetPubkey);
        } catch {}
      });
  }
  setActivePage(pageChannel);

  Promise.all([
    Promise.resolve().then(() => ensureChannelVideosLoaded(targetPubkey, token)),
    Promise.resolve().then(() => ensureChannelLiveEventsLoaded(targetPubkey, token)),
  ])
    .then(() => {
      if (token !== channelRenderToken) return;
      // Always rerender after fetches settle so Loading… resolves even when there are 0 items.
      const st = channelFetchState.get(targetPubkey) || {};
      channelFetchState.set(targetPubkey, { ...st, hasNew: false });
      const lst = channelLiveFetchState.get(targetPubkey) || {};
      channelLiveFetchState.set(targetPubkey, { ...lst, hasNew: false });
      renderChannelPanelsFromStore(targetPubkey);
    })
    .catch(() => {});
}

if (channelTabVideos) {
  channelTabVideos.addEventListener("click", () => {
    setChannelTab("videos");
  });
}

if (channelTabShorts) {
  channelTabShorts.addEventListener("click", () => {
    setChannelTab("shorts");
  });
}

if (channelTabLive) {
  channelTabLive.addEventListener("click", () => {
    setChannelTab("live");
  });
}

if (channelTabAbout) {
  channelTabAbout.addEventListener("click", () => {
    setChannelTab("about");
  });
}

function handleRoute() {
  const prevHash = handleRoute._lastHash || "#home";
  const prevRoute = handleRoute._lastRoute || { page: "" };
  const route = getRoute();
  const isWatchLike = (page) => page === "watch" || page === "fullscreen";
  const changedPage = isWatchLike(route.page)
    ? !isWatchLike(prevRoute.page)
    : route.page !== prevRoute.page;

  if (route.page === "settings") {
    lastSettingsHash = window.location.hash || lastSettingsHash || "#settings";
  }

  if (changedPage && route.page === "search" && prevRoute.page !== "search") {
    const entryHash = isWatchLike(prevRoute.page)
      ? miniLastHash || lastNonWatchHash || "#home"
      : prevHash || "#home";
    if (entryHash && !/^#search\b/i.test(entryHash)) {
      lastNonSearchHash = entryHash || lastNonSearchHash || "#home";
      searchEntryHash = lastNonSearchHash;
      searchEntryMainNavKey = lineageMainNavKeyFromHash(searchEntryHash);
    }
  }

  syncAndroidFullscreenForRoute(route);

  if (route.page) {
    if (!isWatchLike(route.page)) {
      lastNonWatchHash = window.location.hash || "#home";
    }
    if (route.page !== "search") {
      lastNonSearchHash = window.location.hash || "#home";
    }
    if (isMini && !isWatchLike(route.page)) {
      try {
        miniLastHash = window.location.hash || miniLastHash || lastNonWatchHash || "#home";
      } catch {}
    }
  }

  syncTopbarMode();

  if (changedPage && route.page === "channel" && prevRoute.page !== "channel") {
    // When opening *your own* channel from the user menu, make it behave like Settings:
    // it is "owned" by Library for main-nav highlighting.
    if (forceMyChannelOwnedByLibraryOnce && authState.pubkey && String(route.id || "") === String(authState.pubkey)) {
      channelEntryHash = "#library";
      forceMyChannelOwnedByLibraryOnce = false;
    } else {
      if (/^#watch\b/i.test(prevHash)) {
        channelEntryHash = miniLastHash || lastNonWatchHash || "#home";
      } else {
        channelEntryHash = prevHash || "#home";
      }
      // Never let the "entry" become another channel hash, otherwise lineage will
      // recurse and fall back to Home. If we're coming from a channel, preserve the
      // previous channel's owning entry instead.
      if (/^#channel\b/i.test(channelEntryHash)) {
        channelEntryHash = handleRoute._lastChannelEntryHash || "#home";
      }
      if (!channelEntryHash) channelEntryHash = "#home";
    }
  }

  if (route.page === "channel") {
    handleRoute._lastChannelEntryHash = channelEntryHash || handleRoute._lastChannelEntryHash || "#home";
  }

  if (changedPage && isWatchLike(prevRoute.page) && !isWatchLike(route.page)) {
    if (!isMini) {
      if (suppressMiniOnLeaveWatchOnce) {
        suppressMiniOnLeaveWatchOnce = false;
        stopWatchPlayback();
      } else {
      const isPlaying = Boolean(watchVideo && !watchVideo.paused && !watchVideo.ended);
      if (isPlaying && lastWatchedVideoId) {
        enableMiniPlayerUi();
      } else {
        stopWatchPlayback();
      }
      }
    }
  }
  if (changedPage && !isWatchLike(prevRoute.page) && isWatchLike(route.page)) {
    try {
      miniLastHash = lastNonWatchHash || miniLastHash || "#home";
    } catch {}
  }
  if (changedPage) {
    resetPageScroll();
  }
  handleRoute._lastRoute = route;
  handleRoute._lastHash = window.location.hash || "#home";

  if (isMini && !isWatchLike(route.page)) {
    miniLastHash = window.location.hash || miniLastHash || "#home";
  }

  if (route.page === "shorts") {
    setActivePage(pageShorts);
    setActiveNav("shorts");
    renderLocalPages();
    return;
  }
  if (route.page === "subs") {
    setActivePage(pageSubs);
    setActiveNav("subs");
    renderSubscriptionsPage();
    return;
  }
  if (route.page === "library") {
    setActivePage(pageLibrary);
    setActiveNav("library");
    renderLocalPages();
    return;
  }
  if (route.page === "history") {
    setActivePage(pageHistory);
    setActiveNav(getLineageMainNavKey(route));
    renderLocalPages();
    return;
  }
  if (route.page === "watchlater") {
    setActivePage(pageWatchlater);
    setActiveNav(getLineageMainNavKey(route));
    renderLocalPages();
    return;
  }
  if (route.page === "liked") {
    setActivePage(pageLiked);
    setActiveNav(getLineageMainNavKey(route));
    renderLocalPages();
    return;
  }
  if (route.page === "settings") {
    setActivePage(pageSettings);
    setActiveNav(getLineageMainNavKey(route));
    renderSettingsPage(route);
    return;
  }
  if (route.page === "fullscreen") {
    const id = String(route.id || "");
    if (id) {
      lastWatchedVideoId = id;
    }
    setActivePage(pageWatch);
    setActiveNav(getLineageMainNavKey(route));
    updateSubscribeButton();
    setWatchLikeUi();
    setWatchSaveUi();

    // Android simulated fullscreen is a UI mode. Avoid reloading the video when
    // entering #fullscreen for the same watch id, otherwise playback can glitch
    // or restart.
    if (id && String(watchLoadedVideoId || "") !== id) {
      ensureWatchVideoLoaded({ page: "watch", id, params: route.params });
    }
    return;
  }

  if (route.page === "watch") {
    if (
      isAndroidMode() &&
      String(prevRoute?.page || "") === "fullscreen" &&
      String(prevRoute?.id || "") &&
      String(prevRoute.id || "") === String(route.id || "") &&
      String(watchLoadedVideoId || "") === String(route.id || "")
    ) {
      setActivePage(pageWatch);
      setActiveNav(getLineageMainNavKey(route));
      updateSubscribeButton();
      setWatchLikeUi();
      setWatchSaveUi();
      return;
    }

    // If a new watch id is opened while the old video is minimized, treat this
    // as a clean switch, not a restore of the previous video's state.
    if (isMini) {
      const nextId = String(route.id || "");
      const dockedId = String(miniResumeVideoId || lastWatchedVideoId || "");
      if (nextId && dockedId && nextId !== dockedId) {
        miniResumeTime = 0;
        miniWasPlaying = false;
        miniResumeVideoId = "";
        suppressWatchAutoplayOnce = false;
        isMini = false;
        document.body.classList.remove("is-mini");
        undockWatchVideoFromMini();
        setMiniVisible(false);
        syncTopbarMode();
      }
    }
    if (resumeWatchOnRoute) {
      resumeWatchOnRoute = false;
      setActivePage(pageWatch);
      setActiveNav(getLineageMainNavKey(route));
      updateSubscribeButton();
      setWatchLikeUi();
      setWatchSaveUi();
      return;
    }
    const video = videoStore.get(route.id);
    if (video) {
      showWatchForVideo(video);
    } else {
      ensureWatchVideoLoaded(route);
    }
    setActiveNav(getLineageMainNavKey(route));
    updateSubscribeButton();
    return;
  }
  if (route.page === "search") {
    setActivePage(pageSearch);
    setActiveNav(getLineageMainNavKey(route));
    if (!(prevRoute.page === "search" && String(prevRoute.id || "") === String(route.id || ""))) {
      void renderSearchPage(decodeUriComponentSafe(route.id || ""));
    }
    return;
  }
  if (route.page) {
    if (isMini && route.page !== "watch") {
      try {
        miniLastHash = window.location.hash || miniLastHash || lastNonWatchHash || "#home";
      } catch {}
    }
  }
  if (route.page === "channel") {
    if (route.id) {
      try {
        showChannel(route.id);
      } catch (error) {
        console.error(error);
        showToast("Unable to open channel right now.");
        setActivePage(pageHome);
      }
    } else {
      setActivePage(pageHome);
    }
    setActiveNav(getLineageMainNavKey(route));
    updateChannelActions(route.id);
    return;
  }
  setActivePage(pageHome);
  setActiveNav("home");
}

if (watchChannelName) {
  watchChannelName.addEventListener("click", () => {
    const video = getCurrentWatchVideo();
    if (!video?.pubkey) return;
    if (video?.restricted && !isRestrictedContentAllowed()) {
      showToast("Restricted content");
      return;
    }
    const hostPk = String(video.liveHostPubkey || "").trim();
    navigateFromWatchTo(`#channel/${hostPk || video.pubkey}`);
  });
}

if (watchChannelAvatar) {
  watchChannelAvatar.addEventListener("click", () => {
    const video = getCurrentWatchVideo();
    if (!video?.pubkey) return;
    if (video?.restricted && !isRestrictedContentAllowed()) {
      showToast("Restricted content");
      return;
    }
    const hostPk = String(video.liveHostPubkey || "").trim();
    navigateFromWatchTo(`#channel/${hostPk || video.pubkey}`);
  });
}

document.addEventListener("click", (event) => {
  const target = event.target;
  const btn = target.closest("[data-auth-open]");
  if (!btn) return;
  event.preventDefault();
  openAuthModal("chooser");
});

function getTagValue(tags, key) {
  const tag = tags.find((entry) => entry[0] === key);
  return tag ? tag[1] : "";
}

 function getTagValues(tags, key) {
  try {
   return (tags || [])
    .filter((entry) => entry && entry[0] === key && entry.length >= 2)
    .map((entry) => String(entry[1] || ""));
  } catch {
   return [];
  }
 }

 function normalizeContentSignal(value) {
  return String(value || "")
   .trim()
   .toLowerCase()
   .replace(/[^a-z0-9+_-]+/g, "");
 }

 function classifyRestrictedContent(event) {
  const tags = event?.tags || [];
  const content = String(event?.content || "");

  const reasons = [];

  const cwValues = getTagValues(tags, "content-warning")
   .concat(getTagValues(tags, "content_warning"))
   .concat(getTagValues(tags, "cw"))
   .map(normalizeContentSignal)
   .filter(Boolean);

  if (cwValues.length) {
   reasons.push("content-warning");
   if (cwValues.some((v) => v === "nsfw" || v === "porn" || v === "nudity" || v === "adult" || v === "18+")) {
    reasons.push("nsfw");
   }
  }

  const hashtagSignals = getTagValues(tags, "t")
   .concat(getTagValues(tags, "hashtag"))
   .map(normalizeContentSignal)
   .filter(Boolean);
  const explicitSignals = new Set([
   "nsfw",
   "18+",
   "adult",
   "porn",
   "porno",
   "nudity",
   "nude",
   "sex",
   "xxx",
   "explicit",
  ]);
  if (hashtagSignals.some((v) => explicitSignals.has(v))) {
   reasons.push("tagged-explicit");
  }

  const subjectSignals = getTagValues(tags, "subject")
   .concat(getTagValues(tags, "title"))
   .concat(getTagValues(tags, "summary"))
   .join(" \n");

  const textSignals = `${subjectSignals}\n${content}`.toLowerCase();
  if (/(^|\b)(nsfw|18\+|adult|porn|nudity|explicit|xxx)($|\b)/i.test(textSignals)) {
   reasons.push("text-explicit");
  }

  const restricted = reasons.length > 0;
  return {
   restricted,
   reason: restricted ? Array.from(new Set(reasons)).join(",") : "",
  };
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

function formatDuration(seconds) {
  if (!seconds || Number.isNaN(seconds)) {
    return "0:00";
  }
  const total = Math.max(0, Math.floor(seconds));
  const hrs = Math.floor(total / 3600);
  const mins = Math.floor((total % 3600) / 60);
  const secs = total % 60;
  if (hrs > 0) {
    return `${hrs}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }
  return `${mins}:${String(secs).padStart(2, "0")}`;
}

function timeAgo(timestamp) {
  const now = Date.now() / 1000;
  const ts = Number(timestamp || 0);
  if (!Number.isFinite(ts) || ts <= 0) return "";
  if (ts > now + 60) return "Just now";
  const diff = Math.max(0, now - ts);
  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(diff / 3600);
  const days = Math.floor(diff / 86400);
  const date = new Date(ts * 1000);

  const unit = (n, singular) => `${n} ${singular}${n === 1 ? "" : "s"} ago`;

  if (minutes < 1) {
    return date.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
  }
  if (minutes < 60) {
    return unit(minutes, "min");
  }
  if (hours < 24) {
    return unit(hours, "hour");
  }
  if (days < 7) {
    return unit(days, "day");
  }
  const weeks = Math.floor(days / 7);
  if (weeks < 5) {
    return unit(weeks, "week");
  }

  const years = Math.floor(days / 365);
  if (years >= 1) {
    return date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  }
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function initialsFromName(name) {
  if (!name) return "NT";
  const parts = name.trim().split(/\\s+/).slice(0, 2);
  return parts.map((part) => part[0].toUpperCase()).join("");
}

function shortenKey(key) {
  if (!key) return "nostr";
  return `${key.slice(0, 8)}…`;
}

function pubkeyToNpubSafe(pubkey) {
  const raw = String(pubkey || "").trim();
  if (!/^[0-9a-f]{64}$/i.test(raw)) return "";
  const tools = getNostrTools();
  try {
    if (tools?.nip19?.npubEncode) return tools.nip19.npubEncode(raw);
  } catch {
    // fall through
  }
  try {
    const bytes = hexToBytes(raw);
    if (!bytes) return "";
    const words = convertBits(Array.from(bytes), 8, 5, true);
    if (!words) return "";
    return bech32Encode("npub", words);
  } catch {
    return "";
  }
}

function shortenNpub(npub) {
  const v = String(npub || "").trim();
  if (!/^npub1[0-9a-z]+$/i.test(v)) return "";
  if (v.length <= 18) return v;
  return `${v.slice(0, 9)}…${v.slice(-5)}`;
}

function normalizeThumbUrl(url) {
  const raw = String(url || "").trim();
  if (!raw) return "";
  if (raw.startsWith("http://")) return `https://${raw.slice(7)}`;
  return raw;
}

function isLikelyImageThumb(url) {
  const value = String(url || "").trim();
  if (!value) return false;
  if (/^data:image\//i.test(value)) return true;
  if (/^(https?:|ipfs:)/i.test(value)) {
    const lower = value.toLowerCase();
    return /\.(png|jpe?g|gif|webp|avif|bmp|svg)(\?|#|$)/i.test(lower);
  }
  return false;
}

function hashSeedToIndex(seed, modulo) {
  const value = String(seed || "");
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return modulo > 0 ? hash % modulo : 0;
}

function applyThumbVariant(thumbEl, seed) {
  if (!thumbEl) return;
  const variants = [
    "",
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
  const idx = hashSeedToIndex(seed, variants.length);
  const cls = variants[idx];
  if (cls) thumbEl.classList.add(cls);
}

function setCardThumb(thumbEl, url, seed) {
  if (!thumbEl) return;
  const normalized = normalizeThumbUrl(url);
  const safeUrl = isLikelyImageThumb(normalized) ? normalized : "";
  if (safeUrl) {
    thumbEl.style.backgroundImage = `url('${safeUrl}')`;
    applyThumbVariant(thumbEl, "");
    return;
  }
  thumbEl.style.backgroundImage = "";
  applyThumbVariant(thumbEl, seed || normalized);
}

function parseVideoEvent(event) {
  if (event?.kind === 30311) {
    const tags = event.tags || [];
    const title = getTagValue(tags, "title") || "Live stream";
    const summary = getTagValue(tags, "summary") || "";
    const thumb = getTagValue(tags, "image") || getTagValue(tags, "thumb") || "";
    const status = String(getTagValue(tags, "status") || "").trim().toLowerCase();
    const starts = Number(getTagValue(tags, "starts")) || 0;
    const ends = Number(getTagValue(tags, "ends")) || 0;
    const participants = Number(getTagValue(tags, "current_participants")) || 0;
    const nowPlaying = String(event.content || "").trim();
    const alt = String(getTagValue(tags, "alt") || "").trim();
    const streaming = String(getTagValue(tags, "streaming") || "").trim();
    const recording = String(getTagValue(tags, "recording") || "").trim();
    const dTag = String(getTagValue(tags, "d") || "").trim();
    const address = dTag ? `30311:${event.pubkey}:${dTag}` : "";
    const url = pickLive30311Url({ status, streaming, recording });
    const mimeHint = url && url.toLowerCase().includes(".m3u8") ? "application/vnd.apple.mpegurl" : "";
    return {
      id: address || String(event.id || ""),
      address,
      kind: event.kind,
      pubkey: event.pubkey,
      title,
      summary,
      thumb,
      duration: "",
      durationSeconds: 0,
      published: starts || event.created_at,
      url,
      mime: mimeHint,
      liveStatus: status,
      liveStarts: starts,
      liveEnds: ends,
      liveParticipants: participants,
      liveNowPlaying: nowPlaying,
      liveAlt: alt,
      liveStreaming: streaming,
      liveRecording: recording,
      restricted: false,
      restrictedReason: "",
    };
  }
  const tags = event.tags || [];
  const content = event.content || "";
  const rUrl = tags.find(
    (entry) => entry[0] === "r" && /^(https?:|ipfs:)/i.test(entry[1] || "")
  )?.[1];
  const tagUrl = getTagWithMime(tags, ["url", "video", "file", "u"]);
  const title = getTagValue(tags, "title") || event.content?.split("\\n")[0] || "Untitled";
  const summary = getTagValue(tags, "summary") || "";
  const thumb =
    getTagValue(tags, "thumb") ||
    getTagValue(tags, "image") ||
    getImetaUrl(tags);
  const durationTag = getTagValue(tags, "duration");
  const durationSeconds = Number(durationTag);
  const published = Number(getTagValue(tags, "published_at")) || event.created_at;
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
  const mime =
    tagUrl.mime ||
    jsonUrl.mime ||
    getTagValue(tags, "m") ||
    getTagValue(tags, "mime") ||
    getImetaMime(tags) ||
    "";

  const restriction = classifyRestrictedContent(event);
  const dTag = getTagValue(tags, "d");
  const isAddressable = (event.kind === 34235 || event.kind === 34236) && Boolean(dTag);
  const address = isAddressable ? `${event.kind}:${event.pubkey}:${dTag}` : "";
  return {
    id: address || event.id,
    address,
    kind: event.kind,
    pubkey: event.pubkey,
    title,
    summary,
    thumb,
    duration: formatDuration(durationSeconds),
    durationSeconds,
    published,
    url,
    mime,
    restricted: restriction.restricted,
    restrictedReason: restriction.reason,
  };
}

function getVideoEventKey(event) {
  if (!event) return "";
  if (event.kind === 30311 || event.kind === 34235 || event.kind === 34236) {
    const dTag = getTagValue(event.tags || [], "d");
    if (dTag) return `${event.kind}:${event.pubkey}:${dTag}`;
  }
  return String(event.id || "");
}

function dedupeVideoEventsByKey(events) {
  const out = [];
  const seen = new Set();
  (events || []).forEach((event) => {
    const key = getVideoEventKey(event);
    if (!key || seen.has(key)) return;
    seen.add(key);
    out.push(event);
  });
  return out;
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
    console.debug("[NosTube] Missing video URL", payload);
  } else {
    console.debug("[NosTube] Video URL", {
      id: event.id,
      kind: event.kind,
      pubkey: event.pubkey,
      url: extracted.url,
      mime: extracted.mime,
    });
  }
}

function teardownWatchPlayer() {
  if (watchHls) {
    watchHls.destroy();
    watchHls = null;
  }
  if (watchVideo) {
    watchVideo.pause();
    watchVideo.removeAttribute("src");
    watchVideo.load();
  }
  setWatchAspect(16, 9);
  updateWatchProgress();
  setPlayState();
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

function loadWatchVideo(url, mimeHint) {
  if (!watchVideo) return;
  watchHlsRetryAt = 0;
  watchHlsRetryCount = 0;
  teardownWatchPlayer();
  if (!url) return;
  watchVideo.preload = "metadata";
  watchVideo.playsInline = true;
  const mime = guessMimeType(url, mimeHint);
  const isHls = mime === "application/vnd.apple.mpegurl";
  watchLastLoadUrl = String(url || "");
  watchLastLoadMime = String(mime || "");
  watchLastIsHls = Boolean(isHls);
  if (isHls && watchVideo.canPlayType(mime)) {
    watchVideo.src = url;
    watchVideo.load();
    return;
  }
  if (isHls && window.Hls && window.Hls.isSupported()) {
    watchHls = new window.Hls({ enableWorker: true, lowLatencyMode: true });
    try {
      watchHls.on(window.Hls.Events.ERROR, (_, data) => {
        try {
          if (!data) return;
          if (data.fatal) {
            if (data.type === window.Hls.ErrorTypes.NETWORK_ERROR) {
              if (watchStatus) {
                watchStatus.textContent = "Reconnecting…";
                watchStatus.hidden = false;
              }
              try {
                watchHls.startLoad();
              } catch {}
              return;
            }
            if (data.type === window.Hls.ErrorTypes.MEDIA_ERROR) {
              if (watchStatus) {
                watchStatus.textContent = "Recovering playback…";
                watchStatus.hidden = false;
              }
              try {
                watchHls.recoverMediaError();
              } catch {}
              return;
            }

            // Unknown fatal error: attempt a bounded full reload before giving up.
            try {
              const now = Date.now();
              const canRetry = watchLastLoadUrl && now - watchHlsRetryAt > 12_000 && watchHlsRetryCount < 2;
              if (canRetry) {
                watchHlsRetryAt = now;
                watchHlsRetryCount += 1;
                if (watchStatus) {
                  watchStatus.textContent = "Retrying stream…";
                  watchStatus.hidden = false;
                }
                try {
                  watchHls.destroy();
                } catch {}
                watchHls = null;
                loadWatchVideo(watchLastLoadUrl, watchLastLoadMime);
                try {
                  maybeAutoPlayWatchVideo();
                } catch {}
                return;
              }
            } catch {}
            try {
              watchHls.destroy();
            } catch {}
            watchHls = null;
            if (watchStatus) {
              watchStatus.textContent = "This stream failed to load.";
              watchStatus.hidden = false;
            }
          }
        } catch {}
      });
    } catch {}
    try {
      watchHls.on(window.Hls.Events.MANIFEST_PARSED, () => {
        try {
          startWatchAutoplayRetryLoop();
          maybeAutoPlayWatchVideo();
        } catch {}
      });
    } catch {}
    watchHls.loadSource(url);
    watchHls.attachMedia(watchVideo);
    return;
  }
  setVideoSource(watchVideo, url, mime);
  watchVideo.load();
}

function requestEvents(relayUrl, filter, onEvent) {
  return new Promise((resolve) => {
    let isDone = false;
    const socket = new WebSocket(relayUrl);
    const subId = `nostube-${Math.random().toString(36).slice(2, 10)}`;
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
  const normalizedKinds = Array.isArray(kinds) ? kinds.filter((k) => Number.isFinite(Number(k))) : [];
  const omitSince = normalizedKinds.includes(30311);
  const since = omitSince ? 0 : Math.floor(Date.now() / 1000) - MAX_EVENT_AGE_DAYS * 86400;
  const filter = { kinds: normalizedKinds, limit };
  if (!omitSince) {
    filter.since = since;
  }
  const events = new Map();
  await Promise.all(
    getReadRelays().map((relay) =>
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
    getReadRelays().map((relay) =>
      requestEvents(relay, filter, (event) => {
        if (profiles.has(event.pubkey)) return;
        try {
          const data = JSON.parse(event.content || "{}");
          profiles.set(event.pubkey, {
            name: data.display_name || data.name || shortenKey(event.pubkey),
            picture: data.picture || "",
            nip05: data.nip05 || "",
            banner: data.banner || data.cover || "",
            about: data.about || "",
            display_name: data.display_name || "",
            username: data.username || "",
          });
        } catch (error) {
          profiles.set(event.pubkey, {
            name: shortenKey(event.pubkey),
            picture: "",
            nip05: "",
            banner: "",
            about: "",
            display_name: "",
            username: "",
          });
        }
      })
    )
  );
  return profiles;
}

function hydrateAvatar(avatar, profile) {
  const img = avatar.querySelector(".avatar-img");
  const initials = avatar.querySelector(".channel-initials");
  if (!profile) return;
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

function renderVideos(container, emptyState, events, profiles) {
  if (!container || !videoTemplate) return;
  container.innerHTML = "";
  if (!events.length) {
    if (emptyState) {
      emptyState.textContent = "No videos found on relays yet.";
      emptyState.hidden = false;
    }
    return;
  }
  const out = [];
  events.forEach((event) => {
    const video = parseVideoEvent(event);
    logEventDebug(event, video);
    if (video.restricted && !isRestrictedContentAllowed()) return;
    out.push({ event, video });
  });

  if (!out.length) {
    if (emptyState) {
      emptyState.textContent = "No videos available.";
      emptyState.hidden = false;
    }
    return;
  }
  if (emptyState) emptyState.hidden = true;
  out
    .slice()
    .sort((a, b) => Number(b.video?.published || 0) - Number(a.video?.published || 0))
    .forEach(({ event, video }) => {
    const clone = videoTemplate.content.cloneNode(true);
    const card = clone.querySelector(".video-card");
    const thumb = clone.querySelector(".thumbnail");
    const duration = clone.querySelector(".duration");
    const title = clone.querySelector(".video-title");
    const channel = clone.querySelector(".video-channel");
    const time = clone.querySelector(".video-time");
    const live = clone.querySelector(".live-pill");
    const avatar = clone.querySelector(".channel-avatar");
    const verified = clone.querySelector(".verified");

    const publisherPk = String(video.pubkey || "");
    const publisherProfile = profiles.get(publisherPk);

    // For NIP-53 streams (30311), display the host as the channel when present,
    // without requiring proof.
    let displayPk = publisherPk;
    let displayProfile = publisherProfile;
    if (Number(event?.kind) === 30311) {
      try {
        const tmp = { ...video, kind: 30311, nostrEventRaw: event };
        const hostPk = String(getLiveHostPubkeyFrom30311(tmp) || "").trim();
        if (hostPk) {
          displayPk = hostPk;
          displayProfile = profilesCache.get(hostPk) || profiles.get(hostPk) || null;
          if (!displayProfile) {
            displayProfile = { name: shortenKey(hostPk), picture: "", nip05: "" };
          }
          video.liveHostPubkey = hostPk;
        }
      } catch {}
    }

    const channelName = String(displayProfile?.name || "").trim() || shortenKey(displayPk);
    storeVideo(video, publisherProfile);

    title.textContent = video.title;
    channel.textContent = channelName;
    time.textContent = timeAgo(video.published);
    duration.textContent = video.duration;
    if (!video.durationSeconds) {
      duration.hidden = true;
    }

    setCardThumb(thumb, video.thumb, video.id);

    if (
      ((event.kind === 21 || event.kind === 34235) && event.tags?.some((tag) => tag[0] === "live")) ||
      event.kind === 30311
    ) {
      live.hidden = false;
      if (event.kind === 30311) {
        const status = String(video.liveStatus || "").toLowerCase();
        const isEnded = status === "ended";
        live.textContent = isEnded ? "ENDED" : "LIVE";
        live.classList.toggle("is-ended", isEnded);
      } else {
        live.textContent = "LIVE";
        live.classList.remove("is-ended");
      }
    }

    if (!displayProfile?.nip05) {
      verified.hidden = true;
    }

    hydrateAvatar(avatar, displayProfile);
    card.dataset.videoUrl = video.url || "";
    card.dataset.videoMime = video.mime || "";
    card.dataset.videoId = video.id;
    card.dataset.videoTitle = video.title;
    card.dataset.videoChannel = channelName;
    card.dataset.videoTime = timeAgo(video.published);
    card.dataset.videoSummary = video.summary || "";
    card.dataset.videoThumb = video.thumb || "";
    card.dataset.videoPicture = displayProfile?.picture || "";
    card.dataset.videoNip05 = displayProfile?.nip05 || "";
    card.dataset.videoPubkey = displayPk || "";
    container.appendChild(clone);
  });
}

function renderShorts(container, emptyState, events, profiles) {
  if (!container || !shortTemplate) return;
  container.innerHTML = "";
  if (!events.length) {
    if (emptyState) {
      emptyState.textContent = "No shorts found yet.";
      emptyState.hidden = false;
    }
    return;
  }
  const out = [];
  events.forEach((event) => {
    const video = parseVideoEvent(event);
    logEventDebug(event, video);
    if (video.restricted && !isRestrictedContentAllowed()) return;
    out.push({ event, video });
  });

  if (!out.length) {
    if (emptyState) {
      emptyState.textContent = "No shorts available.";
      emptyState.hidden = false;
    }
    return;
  }
  if (emptyState) emptyState.hidden = true;
  out
    .slice()
    .sort((a, b) => Number(b.video?.published || 0) - Number(a.video?.published || 0))
    .forEach(({ video }) => {
    const clone = shortTemplate.content.cloneNode(true);
    const card = clone.querySelector(".short-card");
    const thumb = clone.querySelector(".short-thumb");
    const title = clone.querySelector(".short-title");
    const meta = clone.querySelector(".short-meta");
    const profile = profiles.get(video.pubkey);
    storeVideo(video, profile);

    title.textContent = video.title;
    meta.textContent = profile?.name || "Nostr creator";
    setCardThumb(thumb, video.thumb, video.id);
    card.dataset.videoUrl = video.url || "";
    card.dataset.videoMime = video.mime || "";
    card.dataset.videoId = video.id;
    card.dataset.videoTitle = video.title;
    card.dataset.videoChannel = profile?.name || "Nostr creator";
    card.dataset.videoTime = timeAgo(video.published);
    card.dataset.videoSummary = video.summary || "";
    card.dataset.videoThumb = video.thumb || "";
    card.dataset.videoUrl = video.url || "";
    card.dataset.videoMime = video.mime || "";
    card.dataset.videoPicture = profile?.picture || "";
    card.dataset.videoNip05 = profile?.nip05 || "";
    container.appendChild(clone);
  });
}

async function initNostrFeed() {
  if (!recommendedFeed || !latestFeed || !shortsGrid) return;
  try {
    const [videoEvents, liveEventsRaw, shorts] = await Promise.all([
      fetchNostrEvents([21, 34235], FEED_LIMIT * 4),
      fetchNostrEvents([30311], FEED_LIMIT * 6),
      fetchNostrEvents([22, 34236], SHORTS_LIMIT),
    ]);

    const liveByKey = new Map();
    (liveEventsRaw || []).forEach((event) => {
      if (!event?.id) return;
      const tags = event.tags || [];
      const status = String(getTagValue(tags, "status") || "").trim().toLowerCase();
      if (status === "ended") return;
      const streaming = String(getTagValue(tags, "streaming") || "").trim();
      const recording = String(getTagValue(tags, "recording") || "").trim();
      const alt = String(getTagValue(tags, "alt") || "").trim();
      if (!isDisplayableLive30311FromTags({ status, streaming, recording, alt }, { allowExternal: false })) return;
      const d = String(getTagValue(tags, "d") || "").trim();
      const key = d ? `${event.pubkey}:${d}` : String(event.id);
      const existing = liveByKey.get(key);
      if (!existing || Number(event.created_at || 0) > Number(existing.created_at || 0)) {
        liveByKey.set(key, event);
      }
    });
    const liveEvents = Array.from(liveByKey.values());

    const maxLive = Math.max(2, Math.floor(FEED_LIMIT * 0.4));
    const cappedLive = liveEvents
      .slice()
      .sort((a, b) => b.created_at - a.created_at)
      .slice(0, maxLive);

    const merged = dedupeVideoEventsByKey(
      [...(videoEvents || []), ...cappedLive].sort((a, b) => b.created_at - a.created_at)
    );

    // Prefetch host profiles so 30311 cards can show host name/picture immediately.
    try {
      const hostPubkeys = new Set();
      (cappedLive || []).forEach((ev) => {
        try {
          if (Number(ev?.kind) !== 30311) return;
          const tmp = { kind: 30311, nostrEventRaw: ev };
          const hostPk = String(getLiveHostPubkeyFrom30311(tmp) || "").trim();
          if (hostPk) hostPubkeys.add(hostPk);
        } catch {}
      });
      const missingHosts = Array.from(hostPubkeys).filter((pk) => pk && !profilesCache.get(pk));
      if (missingHosts.length) {
        const hostProfiles = await fetchProfiles(missingHosts);
        hostProfiles.forEach((value, key) => profilesCache.set(key, value));
      }
    } catch {}

    const profiles = await fetchProfiles([
      ...new Set([...merged, ...shorts].map((event) => event.pubkey)),
    ]);
    profiles.forEach((value, key) => profilesCache.set(key, value));
    const recommended = merged.slice(0, FEED_LIMIT);
    const latest = merged.slice(FEED_LIMIT, FEED_LIMIT * 2);
    renderVideos(recommendedFeed, recommendedEmpty, recommended, profiles);
    renderVideos(latestFeed, latestEmpty, latest, profiles);
    renderShorts(shortsGrid, shortsEmpty, shorts, profiles);
  } catch {
    recommendedFeed.innerHTML = "";
    latestFeed.innerHTML = "";
    shortsGrid.innerHTML = "";
    if (recommendedEmpty) {
      recommendedEmpty.textContent = "Unable to load videos right now.";
      recommendedEmpty.hidden = false;
    }
    if (latestEmpty) {
      latestEmpty.textContent = "Unable to load videos right now.";
      latestEmpty.hidden = false;
    }
    if (shortsEmpty) {
      shortsEmpty.textContent = "Unable to load shorts right now.";
      shortsEmpty.hidden = false;
    }
  }
}

try {
  initAndroidModeFlagFromUrl();
} catch {}

try {
  initThemeController();
} catch {}

initNostrFeed();
ensureSessionStateForCurrentEntry();
window.addEventListener("hashchange", () => {
  if (homeResetInProgress) return;
  try {
    handleRoute();
  } catch {}
});
window.addEventListener("popstate", () => {
  if (homeResetInProgress) {
    const idx = getCurrentAppIndex();
    if (idx === 0) {
      homeResetInProgress = false;
      if (homeResetGuardTimer) {
        try {
          window.clearTimeout(homeResetGuardTimer);
        } catch {}
        homeResetGuardTimer = 0;
      }
      mainNavHasHomeBase = true;

      // We may have started the session on a deep URL (e.g. #watch/...). Once we
      // rewind to the session root, force that root to be #home so Back exits the
      // app instead of returning to the initial deep URL.
      try {
        navReplace("#home");
      } catch {}

      if (pendingMainAfterHomeReset) {
        const next = pendingMainAfterHomeReset;
        pendingMainAfterHomeReset = "";
        try {
          navPush(next);
        } catch {}
        return;
      }
      try {
        handleRoute();
      } catch {}
      return;
    }

    // Still within our in-app stack; continue rewinding.
    try {
      history.back();
      return;
    } catch {}
    homeResetInProgress = false;
  }
  try {
    handleRoute();
  } catch {}
});
handleRoute();

let scrollTrackRaf = 0;
window.addEventListener(
  "scroll",
  () => {
    if (scrollTrackRaf) return;
    scrollTrackRaf = window.requestAnimationFrame(() => {
      scrollTrackRaf = 0;
      const route = getRoute();
      if (route.page === "watch" && !isMini) return;
      const hash = window.location.hash || "#home";
      if (/^#watch\b/i.test(hash)) return;
      try {
        scrollPositions.set(hash, window.scrollY || 0);
      } catch {}
    });
  },
  { passive: true }
);

let _lastIsMobileUi = isMobileUi();
window.addEventListener("resize", () => {
  const next = isMobileUi();
  if (next === _lastIsMobileUi) return;
  _lastIsMobileUi = next;

  // Switching between desktop/mobile UI can leave menus in the wrong presentation
  // mode (desktop-positioned dropdown vs. mobile sheet). Reset them completely.
  try {
    closeAllMenus();
  } catch {}
  try {
    resetMenuPresentation(createMenu);
    resetMenuPresentation(userMenu);
    resetMenuPresentation(channelMenu);
    resetMenuPresentation(watchShareMenu);
  } catch {}
  try {
    const backdrop = openMenu._sheetBackdrop;
    if (backdrop) backdrop.hidden = true;
    document.body.classList.remove("is-menu-sheet-open");
    emitAndroidUiScheme("ACTION_SHEET:CLOSED");
  } catch {}

  try {
    syncTopbarMode();
  } catch {}
  if (!isMini) return;
  try {
    handleRoute();
  } catch {}
});

document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  if (event.defaultPrevented) return;
  if (event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  // sidebar main links already have a dedicated handler
  if (link.matches(".sidebar-link[data-nav]")) return;

  const href = link.getAttribute("href") || "";
  if (!href || href === "#") return;

  event.preventDefault();
  closeAllMenus();

  // Normalize to a standard hash format.
  const hash = href.startsWith("#") ? href : `#${href}`;

  if (hash === "#home") {
    navToMain("home");
    return;
  }
  if (hash === "#shorts") {
    navToMain("shorts");
    return;
  }
  if (hash === "#subs") {
    navToMain("subs");
    return;
  }
  if (hash === "#library") {
    navToMain("library");
    return;
  }

  // Deep pages
  if (hash === "#history" || hash === "#watchlater" || hash === "#liked") {
    navToDeep(hash);
    return;
  }
  if (/^#channel\//i.test(hash) || /^#search\//i.test(hash)) {
    navToDeep(hash);
    return;
  }

  // Watch routes
  if (/^#watch\//i.test(hash)) {
    const current = getRoute();
    if (current.page === "watch") navReplace(hash);
    else navPush(hash);
    return;
  }

  // Fallback: treat as deep navigation.
  navToDeep(hash);
});

restoreAuth().then(updateAuthUi).catch(() => {});

function buildWatchList(activeId) {
  if (!watchList || !watchItemTemplate) return;
  watchList.innerHTML = "";
  const candidates = Array.from(videoStore.values())
    .filter((video) => video.id && video.id !== activeId)
    .slice(0, 12);

  if (!candidates.length) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "No other videos yet.";
    watchList.appendChild(empty);
    return;
  }

  candidates.forEach((video) => {
      if (video.restricted && !isRestrictedContentAllowed()) return;
      const clone = watchItemTemplate.content.cloneNode(true);
      const item = clone.querySelector(".watch-item");
      const thumb = clone.querySelector(".watch-thumb");
      const title = clone.querySelector(".watch-item-title");
      const channel = clone.querySelector(".watch-item-channel");

      title.textContent = video.title || "NosTube video";
      channel.textContent = video.channel || "Nostr creator";
      setCardThumb(thumb, video.thumb, video.id);
      item.dataset.videoId = video.id || "";
      item.dataset.videoTitle = video.title || "";
      item.dataset.videoChannel = video.channel || "";
      item.dataset.videoTime = video.published ? timeAgo(video.published) : "";
      item.dataset.videoSummary = video.summary || "";
      item.dataset.videoThumb = video.thumb || "";
      item.dataset.videoUrl = video.url || "";
      item.dataset.videoMime = video.mime || "";
      item.dataset.videoPicture = video.picture || "";
      item.dataset.videoNip05 = video.nip05 || "";
      item.dataset.videoPubkey = video.pubkey || "";
      watchList.appendChild(clone);
    });
}

function openWatchFromCard(card) {
  if (card?.dataset?.restricted === "1") {
    showToast("Restricted content");
    return;
  }
  const id = card.dataset.videoId || "";
  if (!id) return;
  const current = getRoute();
  if (isMini) {
    miniLastHash = window.location.hash || miniLastHash || "#home";
    expandFromMiniToVideo(id);
    return;
  }
  if (current.page === "watch") {
    navReplace(`#watch/${id}`);
  } else {
    const currentHash = window.location.hash || "#home";
    lastNonWatchHash = currentHash;
    try {
      scrollPositions.set(currentHash, window.scrollY || 0);
    } catch {}
    navPush(`#watch/${id}`);
  }
}

function navigateFromWatchTo(nextHash) {
  const route = getRoute();
  const target = String(nextHash || "") || "#home";
  if (route.page !== "watch" || isMini) {
    navToDeep(target);
    return;
  }
  try {
    navReplace(target);
  } catch {
    window.location.hash = target;
    return;
  }
  try {
    handleRoute();
  } catch {}
}

function wireVideoClicks(container) {
  if (!container) return;
  container.addEventListener("click", (event) => {
    const card = event.target.closest("[data-video-url]");
    if (!card) return;
    if (card?.dataset?.restricted === "1") {
      showToast("Restricted content");
      return;
    }
    const channelTarget = event.target.closest(".video-channel, .channel-avatar");
    if (channelTarget && card.dataset.videoPubkey) {
      navigateFromWatchTo(`#channel/${card.dataset.videoPubkey}`);
      return;
    }
    openWatchFromCard(card);
  });
}

wireVideoClicks(recommendedFeed);
wireVideoClicks(latestFeed);
wireVideoClicks(shortsGrid);
wireVideoClicks(channelFeed);
wireVideoClicks(channelShortsGrid);
wireVideoClicks(channelLiveFeed);
wireVideoClicks(searchFeed);

if (channelTabs) {
  channelTabs.addEventListener("click", (event) => {
    const btn = event.target.closest(".channel-tab");
    if (!btn) return;
    const id = btn.id || "";
    if (id === "channel-tab-videos") setChannelTab("videos");
    else if (id === "channel-tab-shorts") setChannelTab("shorts");
    else if (id === "channel-tab-live") setChannelTab("live");
    else if (id === "channel-tab-about") setChannelTab("about");
  });
}

document.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-open-settings]");
  if (!btn) return;
  const target = String(btn.getAttribute("data-open-settings") || "").trim();
  if (!target) return;
  event.preventDefault();
  navToDeep(`#settings/${encodeURIComponent(target)}`);
});

if (watchList) {
  watchList.addEventListener("click", (event) => {
    const item = event.target.closest(".watch-item");
    if (item) {
      openWatchFromCard(item);
    }
  });
}

function attachCardClick(container) {
  if (!container) return;
  container.addEventListener("click", (event) => {
    const card = event.target.closest(".video-card");
    if (!card) return;
    openWatchFromCard(card);
  });
}

attachCardClick(historyList);
attachCardClick(watchlaterList);
attachCardClick(likedList);
attachCardClick(libraryHistoryFeed);

if (watchToggle) {
  watchToggle.addEventListener("click", togglePlay);
}

if (watchProgress && watchVideo) {
  watchProgress.addEventListener("pointerdown", () => {
    isScrubbingProgress = true;
  });
  watchProgress.addEventListener("pointerup", () => {
    isScrubbingProgress = false;
  });
  watchProgress.addEventListener("input", (event) => {
    const value = Number(event.target.value);
    if (Number.isFinite(value)) {
      watchVideo.currentTime = value;
      updateWatchProgress();
    }
  });
}

if (watchMute) {
  watchMute.addEventListener("click", toggleMute);
}

if (watchVolume && watchVideo) {
  watchVolume.addEventListener("input", (event) => {
    const value = Number(event.target.value);
    if (!Number.isFinite(value)) return;
    watchVideo.muted = value === 0;
    watchVideo.volume = value;
    lastVolume = value || lastVolume;
    setVolumeState();
  });
}

if (watchFullscreen) {
  watchFullscreen.addEventListener("click", toggleFullscreen);
}

if (userAvatar) {
  userAvatar.addEventListener("click", () => {
    closeMenu(createMenu);
    if (!authState.pubkey) {
      openAuthModal("chooser");
      return;
    }
    if (isMenuOpen(userMenu)) closeMenu(userMenu);
    else openMenuWithPosition(userMenu);
  });
}

if (createBtn) {
  createBtn.addEventListener("click", () => {
    closeMenu(userMenu);
    if (!authState.pubkey) {
      showToast("Sign in to create");
      openAuthModal("chooser");
      return;
    }
    if (isMenuOpen(createMenu)) closeMenu(createMenu);
    else openMenuWithPosition(createMenu);
  });
}

if (watchShareBtn && watchShareMenu) {
  watchShareBtn.addEventListener("click", () => {
    if (watchShareMenu.hidden) {
      closeAllMenus();
      openMenuWithPosition(watchShareMenu);
    } else {
      closeMenu(watchShareMenu);
    }
  });
}

if (watchShareLink) {
  watchShareLink.addEventListener("click", async () => {
    closeAllMenus();
    const video = getCurrentWatchVideo();
    if (!video?.id) return;
    const origin = window.location.origin;
    const shareUrl = `${origin}/share/${encodeURIComponent(video.id)}`;
    try {
      await copyText(shareUrl);
      showToast("Link copied");
    } catch {
      showToast("Copy failed");
    }
  });
}

if (watchShareNative) {
  try {
    watchShareNative.hidden = !(window.isSecureContext && typeof navigator.share === "function");
  } catch {
    watchShareNative.hidden = true;
  }
  watchShareNative.addEventListener("click", async () => {
    closeAllMenus();
    const video = getCurrentWatchVideo();
    if (!video?.id) return;
    const origin = window.location.origin;
    const shareUrl = `${origin}/share/${encodeURIComponent(video.id)}`;

    const isBlocked = Boolean(video?.restricted && !isRestrictedContentAllowed());
    const title = isBlocked ? "" : String(video.title || "").trim();
    const shareData = {
      url: shareUrl,
    };
    if (title) shareData.title = title;

    const canShare = Boolean(navigator.share) && (!navigator.canShare || navigator.canShare(shareData));
    if (!canShare) {
      try {
        await copyText(shareUrl);
        showToast("Link copied");
      } catch {
        showToast("Copy failed");
      }
      return;
    }

    try {
      await navigator.share(shareData);
    } catch (err) {
      // User cancellation should be silent.
      const name = String(err?.name || "");
      if (name === "AbortError") return;
      try {
        await copyText(shareUrl);
        showToast("Link copied");
      } catch {
        showToast("Share failed");
      }
    }
  });
}

if (watchShareEmbed) {
  watchShareEmbed.addEventListener("click", () => {
    closeAllMenus();
    showToast("Embed code (coming soon)");
  });
}

window.addEventListener("resize", () => {
  positionMenu(createMenu);
  positionMenu(userMenu);
  positionMenu(channelMenu);
  positionMenu(watchShareMenu);
});

if (menuUpload) {
  menuUpload.addEventListener("click", () => {
    closeAllMenus();
    window.location.href = "studio/";
  });
}

if (menuLive) {
  menuLive.addEventListener("click", () => {
    closeAllMenus();
    window.location.href = "studio/#live";
  });
}

if (menuYourChannel) {
  menuYourChannel.addEventListener("click", () => {
    closeAllMenus();
    if (!authState.pubkey) {
      openAuthModal("chooser");
      return;
    }

    forceMyChannelOwnedByLibraryOnce = true;

    // Ensure channel navigation participates in our in-app history stack.
    // Only replace from watch (non-mini) to keep watch ephemeral.
    const route = getRoute();
    if (route.page === "watch" && !isMini) {
      navigateFromWatchTo(`#channel/${authState.pubkey}`);
      return;
    }
    navToDeep(`#channel/${authState.pubkey}`);
  });
}

if (menuSignout) {
  menuSignout.addEventListener("click", () => {
    closeAllMenus();
    clearAuth();
    showToast("Signed out");
  });
}

document.addEventListener("click", (event) => {
  const target = event.target;
  const path = typeof event.composedPath === "function" ? event.composedPath() : null;
  const inMenu = path ? path.some((n) => n?.classList?.contains("menu")) : Boolean(target?.closest?.(".menu"));
  const inAnchor = path ? path.some((n) => n?.classList?.contains("menu-anchor")) : Boolean(target?.closest?.(".menu-anchor"));
  if (inMenu || inAnchor) return;
  closeAllMenus();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeAllMenus();
  }
});

if (channelSubscribeBtn) {
  channelSubscribeBtn.addEventListener("click", async () => {
    try {
      const route = getRoute();
      if (route.page !== "channel" || !route.id) return;
      await toggleSubscription(route.id);
    } catch (error) {
      showToast(error?.message || "Subscribe failed");
    }
  });
}

if (channelEditBtn) {
  channelEditBtn.addEventListener("click", async () => {
    try {
      const route = getRoute();
      if (route.page !== "channel" || !route.id) return;
      if (!authState.pubkey || route.id !== authState.pubkey) return;

      window.location.href = "studio/#customization";
    } catch (error) {
      showToast(error?.message || "Update failed");
    }
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
      await setSignedIn(pubkey, "extension", false);
      showToast("Signed in with extension");
      closeModal(authModal);
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
      if (authPersist?.checked) {
        setPersistedSecretKeyHex(hex);
      } else {
        setPersistedSecretKeyHex("");
      }
      const skBytes = hexToBytes(hex);
      if (!skBytes) throw new Error("Invalid secret key");
      const pubkey = tools.getPublicKey(skBytes);
      await setSignedIn(pubkey, "nsec", true);
      if (authNsecInput) authNsecInput.value = "";
      showToast(authPersist?.checked ? "Signed in" : "Signed in (session only)");
      closeModal(authModal);
    } catch (error) {
      showToast(error?.message || "Invalid nsec");
    }
  });
}

if (authSignupBtn) {
  authSignupBtn.addEventListener("click", async () => {
    try {
      const tools = getNostrTools();
      if (!tools?.getPublicKey) throw new Error("nostr-tools not loaded");
      const raw = tools?.generateSecretKey ? tools.generateSecretKey() : generateSecretKeyBytesFallback();
      const skBytes = normalizeSecretKeyBytes(raw) || generateSecretKeyBytesFallback();
      const skHex = bytesToHex(skBytes);
      if (!skHex) throw new Error("Unable to generate secret key");
      const pubkey = tools.getPublicKey(skBytes);
      const npub = pubkeyToNpub(pubkey);
      const nsec = secretKeyBytesToNsec(skBytes);
      if (authGeneratedNpub) authGeneratedNpub.value = npub || pubkey;
      if (authGeneratedNsec) authGeneratedNsec.value = nsec || skHex;
      if (authGenerated) authGenerated.hidden = false;
      setSecretKeyHex(skHex);
      const persist = Boolean(authPersistSignup?.checked || authPersist?.checked);
      if (persist) {
        setPersistedSecretKeyHex(skHex);
      } else {
        setPersistedSecretKeyHex("");
      }
      await setSignedIn(pubkey, "nsec", true);
      showToast(persist ? "Account created" : "Account created (session only)");
      if (authSetup) authSetup.hidden = false;
      if (authProfileName) authProfileName.focus();
    } catch (error) {
      showToast(error?.message || "Unable to generate keys");
    }
  });
}

if (authFinishBtn) {
  authFinishBtn.addEventListener("click", async () => {
    try {
      if (!authState.pubkey) return;
      const name = String(authProfileName?.value || "").trim();
      const about = String(authProfileAbout?.value || "").trim();
      const picture = String(authProfilePicture?.value || "").trim();

      if (name || about || picture) {
        const existing = profilesCache.get(authState.pubkey) || {};
        const nextProfile = {
          ...existing,
          name: name || existing.name || "",
          about: about || existing.about || "",
          picture: picture || existing.picture || "",
        };
        await publishProfileMetadata(nextProfile);
      }

      closeModal(authModal);
      showToast("Welcome to NosTube");
      initNostrFeed();
    } catch (error) {
      showToast(error?.message || "Setup failed");
    }
  });
}

if (publishSend) {
  publishSend.addEventListener("click", async () => {
    try {
      if (!authState.pubkey) {
        showToast("Sign in to publish");
        openAuthModal("chooser");
        return;
      }
      const kind = Number(publishKind?.value || 21);
      const title = String(publishTitle?.value || "").trim();
      const url = String(publishUrl?.value || "").trim();
      if (!title || !url) {
        showToast("Title and URL are required");
        return;
      }
      const tags = [];
      tags.push(["title", title]);
      tags.push(["published_at", String(Math.floor(Date.now() / 1000))]);
      tags.push(["url", url, String(publishMime?.value || "").trim()].filter(Boolean));
      const thumb = String(publishThumb?.value || "").trim();
      if (thumb) tags.push(["thumb", thumb]);
      const summary = String(publishSummary?.value || "").trim();
      if (summary) tags.push(["summary", summary]);
      const unsigned = buildUnsignedEvent(kind, summary || title, tags);
      const signed = await signEvent(unsigned);
      await publishEvent(signed);
      showToast("Published");
      closeModal(publishModal);
      initNostrFeed();
    } catch (error) {
      showToast(error?.message || "Publish failed");
    }
  });
}

if (watchLikeBtn) {
  watchLikeBtn.addEventListener("click", async () => {
    try {
      if (!authState.pubkey) {
        showToast("Sign in to like");
        openAuthModal("chooser");
        return;
      }
      const video = getCurrentWatchVideo();
      if (!video?.id) return;

      const alreadyLiked = hasInIdList(STORAGE_LIKED, video.id);
      const alreadyDisliked = hasInIdList(STORAGE_DISLIKED, video.id);

      // Toggle off like.
      if (alreadyLiked) {
        if (!watchUserLikeEventId) {
          await ensureWatchReactionState(video);
        }
        if (!watchUserLikeEventId) {
          showToast("Unable to find your like to remove.");
          return;
        }
        await deleteWatchReaction(watchUserLikeEventId, watchUserLikeRelayHint);
        removeFromIdList(STORAGE_LIKED, video.id);
        watchUserLikeEventId = "";
        watchUserLikeRelayHint = "";
        showToast("Unliked");
        setWatchLikeUi();
        renderLocalPages();
        try {
          loadWatchLikeCount(video);
        } catch {}
        return;
      }

      // If they previously disliked, remove it first (mutually exclusive).
      if (alreadyDisliked) {
        if (!watchUserDislikeEventId) {
          await ensureWatchReactionState(video);
        }
        if (watchUserDislikeEventId) {
          await deleteWatchReaction(watchUserDislikeEventId, watchUserDislikeRelayHint);
        }
        removeFromIdList(STORAGE_DISLIKED, video.id);
        watchUserDislikeEventId = "";
        watchUserDislikeRelayHint = "";
      }

      const tags = [
        video.address ? ["a", video.address] : ["e", video.id],
        ["p", video.pubkey],
      ];
      const unsigned = buildUnsignedEvent(7, "+", tags);
      const signed = await signEvent(unsigned);
      await publishEvent(signed);

      if (!hasInIdList(STORAGE_LIKED, video.id)) {
        addToIdList(STORAGE_LIKED, video.id, 500);
      }
      watchUserLikeEventId = String(signed?.id || "");
      watchUserLikeRelayHint = getPreferredRelayHint();
      showToast("Liked");
      setWatchLikeUi();
      setWatchDislikeUi();
      renderLocalPages();
      try {
        loadWatchLikeCount(video);
      } catch {}
    } catch (error) {
      showToast(error?.message || "Like failed");
    }
  });
}

if (watchDislikeBtn) {
  watchDislikeBtn.addEventListener("click", async () => {
    try {
      if (!authState.pubkey) {
        showToast("Sign in to dislike");
        openAuthModal("chooser");
        return;
      }
      const video = getCurrentWatchVideo();
      if (!video?.id) return;

      const alreadyDisliked = hasInIdList(STORAGE_DISLIKED, video.id);
      const alreadyLiked = hasInIdList(STORAGE_LIKED, video.id);

      // Toggle off dislike.
      if (alreadyDisliked) {
        if (!watchUserDislikeEventId) {
          await ensureWatchReactionState(video);
        }
        if (!watchUserDislikeEventId) {
          showToast("Unable to find your dislike to remove.");
          return;
        }
        await deleteWatchReaction(watchUserDislikeEventId, watchUserDislikeRelayHint);
        removeFromIdList(STORAGE_DISLIKED, video.id);
        watchUserDislikeEventId = "";
        watchUserDislikeRelayHint = "";
        showToast("Undisliked");
        setWatchDislikeUi();
        renderLocalPages();
        try {
          loadWatchLikeCount(video);
        } catch {}
        return;
      }

      // If they previously liked, remove it first (mutually exclusive).
      if (alreadyLiked) {
        if (!watchUserLikeEventId) {
          await ensureWatchReactionState(video);
        }
        if (watchUserLikeEventId) {
          await deleteWatchReaction(watchUserLikeEventId, watchUserLikeRelayHint);
        }
        removeFromIdList(STORAGE_LIKED, video.id);
        watchUserLikeEventId = "";
        watchUserLikeRelayHint = "";
      }

      const tags = [
        video.address ? ["a", video.address] : ["e", video.id],
        ["p", video.pubkey],
      ];
      const unsigned = buildUnsignedEvent(7, "-", tags);
      const signed = await signEvent(unsigned);
      await publishEvent(signed);

      if (!hasInIdList(STORAGE_DISLIKED, video.id)) {
        addToIdList(STORAGE_DISLIKED, video.id, 500);
      }
      watchUserDislikeEventId = String(signed?.id || "");
      watchUserDislikeRelayHint = getPreferredRelayHint();
      showToast("Disliked");
      setWatchDislikeUi();
      setWatchLikeUi();
      renderLocalPages();
      try {
        loadWatchLikeCount(video);
      } catch {}
    } catch (error) {
      showToast(error?.message || "Dislike failed");
    }
  });
}

if (watchCommentSend) {
  watchCommentSend.addEventListener("click", async () => {
    try {
      if (!authState.pubkey) {
        showToast("Sign in to comment");
        openAuthModal("chooser");
        return;
      }
      const text = String(watchCommentInput?.value || "").trim();
      if (!text) return;
      const video = getCurrentWatchVideo();
      if (!video?.id) return;

      let unsigned = null;
      if (video.kind === 30311) {
        const addr = String(video.address || video.id || "");
        if (!addr) return;
        unsigned = buildUnsignedEvent(1311, text, [["a", addr, "", "root"]]);
      } else {
        unsigned = buildUnsignedVideoComment1111(video, text);
        if (!unsigned) return;
      }

      const signed = await signEvent(unsigned);
      await publishEvent(signed);
      if (watchCommentInput) watchCommentInput.value = "";
      if (watchCommentInput) autoResizeTextarea(watchCommentInput, 180);
      showToast("Comment posted");
      try {
        await loadWatchComments(video);
      } catch {}
    } catch (error) {
      showToast(error?.message || "Comment failed");
    }
  });
}

if (watchSubscribeBtn) {
  watchSubscribeBtn.addEventListener("click", async () => {
    try {
      if (!authState.pubkey) {
        showToast("Sign in to subscribe");
        openAuthModal("chooser");
        return;
      }
      const route = getRoute();
      const video = route.page === "watch" ? videoStore.get(route.id) : null;
      if (video?.restricted && !isRestrictedContentAllowed()) return;
      const target = video?.pubkey || "";
      if (!target || target === authState.pubkey) return;

      const next = new Set(Array.from(contacts.values()));
      if (next.has(target)) next.delete(target);
      else next.add(target);

      const tags = Array.from(next.values()).map((pk) => ["p", pk]);
      const unsigned = buildUnsignedEvent(3, contactsEvent?.content || "", tags);
      const signed = await signEvent(unsigned);
      await publishEvent(signed);
      contacts = next;
      contactsEvent = signed;
      await ensureProfiles([target]);
      renderSidebarSubs();
      updateSubscribeButton();
      showToast(next.has(target) ? "Subscribed" : "Unsubscribed");
    } catch (error) {
      showToast(error?.message || "Subscribe failed");
    }
  });
}

document.addEventListener("fullscreenchange", () => {
  if (isSimFullscreen()) {
    if (watchFullscreenIcon) watchFullscreenIcon.textContent = "fullscreen_exit";
    showWatchControls({ pin: false });
    scheduleHideWatchControls();
    return;
  }
  if (watchFullscreenIcon) {
    watchFullscreenIcon.textContent = document.fullscreenElement ? "fullscreen_exit" : "fullscreen";
  }
  showWatchControls({ pin: false });
  scheduleHideWatchControls();
  if (!document.fullscreenElement) {
    unlockOrientation();
    if (pendingMiniAfterFullscreenExit) {
      pendingMiniAfterFullscreenExit = false;
      enterMiniPlayer();
    }
  }
});

if (watchVideo) {
  watchVideo.addEventListener("loadedmetadata", () => {
    updateWatchProgress();
    try {
      if (isMenuOpen(playerSettingsMenu)) {
        renderPlayerSettingsMenu();
        try {
          positionMenu(playerSettingsMenu);
        } catch {}
      }
    } catch {}
  });
  watchVideo.addEventListener("timeupdate", updateWatchProgress);
  watchVideo.addEventListener("durationchange", updateWatchProgress);
  watchVideo.addEventListener("play", setPlayState);
  watchVideo.addEventListener("pause", setPlayState);
  watchVideo.addEventListener("ended", setPlayState);
  initWatchControlsAutohide();
  watchVideo.addEventListener("volumechange", setVolumeState);
  watchVideo.addEventListener("playing", () => {
    if (watchPoster) watchPoster.classList.remove("is-visible");
    watchHlsRetryAt = 0;
    watchHlsRetryCount = 0;
    stopWatchAutoplayRetryLoop();
    if (watchStatus) {
      watchStatus.textContent = "";
      watchStatus.hidden = true;
    }
  });
  watchVideo.addEventListener("loadeddata", () => {
    if (watchPoster) watchPoster.classList.remove("is-visible");
    if (watchStatus && watchStatus.textContent.includes("Loading")) {
      watchStatus.hidden = true;
    }
  });
  watchVideo.addEventListener("waiting", () => {
    if (watchStatus) {
      watchStatus.textContent = "Buffering…";
      watchStatus.hidden = false;
    }
  });
  watchVideo.addEventListener("error", () => {
    if (!watchStatus) return;
    if (watchLastIsHls) {
      const now = Date.now();
      const canRetry = watchLastLoadUrl && now - watchHlsRetryAt > 12_000 && watchHlsRetryCount < 2;
      if (canRetry) {
        watchHlsRetryAt = now;
        watchHlsRetryCount += 1;
        watchStatus.textContent = "Retrying stream…";
        watchStatus.hidden = false;
        try {
          if (watchHls) {
            try {
              watchHls.destroy();
            } catch {}
            watchHls = null;
          }
          loadWatchVideo(watchLastLoadUrl, watchLastLoadMime);
          try {
            startWatchAutoplayRetryLoop();
            maybeAutoPlayWatchVideo();
          } catch {}
          return;
        } catch {}
      }
      watchStatus.textContent = "Unable to play this stream right now.";
      watchStatus.hidden = false;
      return;
    }
    watchStatus.textContent = "This video format is not supported.";
    watchStatus.hidden = false;
  });
  watchVideo.addEventListener("stalled", () => {
    if (watchStatus) {
      watchStatus.textContent = "Playback stalled.";
      watchStatus.hidden = false;
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (isSimFullscreen()) {
    event.preventDefault();
    exitAndroidFullscreenRoute();
    return;
  }
  if (document.fullscreenElement) {
    event.preventDefault();
    try {
      document.exitFullscreen?.();
    } catch {}
  }
});
