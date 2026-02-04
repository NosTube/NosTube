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
const channelAvatar = document.getElementById("channel-avatar");
const channelInitials = document.getElementById("channel-initials");
const channelImage = document.getElementById("channel-image");
const channelTitle = document.getElementById("channel-title");
const channelMeta = document.getElementById("channel-meta");
const channelFeed = document.getElementById("feed-channel");
const channelEmpty = document.getElementById("feed-channel-empty");
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
const watchSubscribeBtn = document.getElementById("watch-subscribe");
const watchSaveBtn = document.getElementById("watch-save");
const watchCommentInput = document.getElementById("watch-comment-input");
const watchCommentSend = document.getElementById("watch-comment-send");
const watchCommentsNote = document.getElementById("watch-comments-note");
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

const ANDROID_MODE_KEY = "nostube-android-mode";
let isAndroidModeCached = null;

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

function renderSettingsPage(route) {
  if (!settingsContent) return;
  const section = String(route?.id || "");
  if (settingsTitle) {
    settingsTitle.textContent = "Settings";
  }
  const sectionTitle = (key) => {
    const k = String(key || "").toLowerCase();
    if (k === "account") return "Account";
    if (k === "appearance") return "Appearance";
    if (k === "playback") return "Playback";
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
            <select class="settings-select" disabled>
              <option>System</option>
              <option>Light</option>
              <option>Dark</option>
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
let channelRenderToken = 0;
let currentChannelPubkey = "";

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
  const route = getRoute();
  const video = route.page === "watch" ? videoStore.get(route.id) : null;
  if (!video?.id) {
    watchLikeBtn.disabled = true;
    return;
  }
  watchLikeBtn.disabled = !authState.pubkey;
  watchLikeBtn.classList.toggle("is-active", hasInIdList(STORAGE_LIKED, video.id));
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
  return videoStore.get(route.id) || null;
}

async function fetchNostrEventsForAuthors(kinds, authors, limit) {
  const since = Math.floor(Date.now() / 1000) - MAX_EVENT_AGE_DAYS * 86400;
  const filter = {
    kinds,
    authors: (authors || []).filter(Boolean).slice(0, 80),
    limit,
    since,
  };
  if (!filter.authors.length) return [];
  const events = new Map();
  await Promise.all(
    RELAYS.map((relay) =>
      requestEvents(relay, filter, (event) => {
        if (!events.has(event.id)) events.set(event.id, event);
      })
    )
  );
  return Array.from(events.values()).sort((a, b) => b.created_at - a.created_at);
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
  if (!items.length) {
    if (emptyEl) {
      emptyEl.textContent = options?.empty || "Nothing here yet.";
      emptyEl.hidden = false;
    }
    return;
  }
  if (emptyEl) emptyEl.hidden = true;
  items.forEach((video) => {
    const clone = videoTemplate.content.cloneNode(true);
    const card = clone.querySelector(".video-card");
    const thumb = clone.querySelector(".thumbnail");
    const duration = clone.querySelector(".duration");
    const title = clone.querySelector(".video-title");
    const channel = clone.querySelector(".video-channel");
    const time = clone.querySelector(".video-time");
    const avatar = clone.querySelector(".channel-avatar");
    const verified = clone.querySelector(".verified");

    title.textContent = video.title;
    channel.textContent = video.channel;
    time.textContent = timeAgo(video.published);
    duration.textContent = video.duration || "0:00";
    if (!video.durationSeconds) {
      duration.hidden = true;
    }
    setCardThumb(thumb, video.thumb, video.id);
    hydrateAvatar(avatar, {
      name: video.channel,
      picture: video.picture,
    });
    if (!video.nip05) {
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
    card.dataset.videoPicture = video.picture || "";
    card.dataset.videoNip05 = video.nip05 || "";
    card.dataset.videoPubkey = video.pubkey || "";
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

function extractSearchWords(query) {
  return String(query || "")
    .toLowerCase()
    .split(/\s+/)
    .map((w) => w.trim())
    .filter(Boolean);
}

function matchesQueryLocally(video, query) {
  const q = String(query || "").trim().toLowerCase();
  if (!q) return true;
  const words = extractSearchWords(q);
  const hay = `${video?.title || ""} ${video?.summary || ""}`.toLowerCase();
  return words.every((w) => hay.includes(w));
}

async function searchNostrVideos(query, { limit = 80 } = {}) {
  const q = normalizeSearchQuery(query);
  if (!q) return [];

  const since = Math.floor(Date.now() / 1000) - MAX_EVENT_AGE_DAYS * 86400;

  const isTagOnly = /^#\S+$/.test(q);
  const tag = isTagOnly ? normalizeHashTag(q) : "";

  const primaryFilter = {
    kinds: [21, 22],
    limit,
    since,
  };

  if (tag) {
    primaryFilter["#t"] = [tag];
  } else {
    primaryFilter.search = q;
  }

  const events = new Map();
  await Promise.all(
    RELAYS.map((relay) =>
      requestEvents(relay, primaryFilter, (event) => {
        if (!events.has(event.id)) events.set(event.id, event);
      })
    )
  );

  let found = Array.from(events.values()).sort((a, b) => b.created_at - a.created_at);

  if (!found.length && !tag) {
    const fallbackEvents = new Map();
    const fallbackFilter = { kinds: [21, 22], limit: Math.max(120, limit), since };
    await Promise.all(
      RELAYS.map((relay) =>
        requestEvents(relay, fallbackFilter, (event) => {
          if (!fallbackEvents.has(event.id)) fallbackEvents.set(event.id, event);
        })
      )
    );
    const candidate = Array.from(fallbackEvents.values()).sort((a, b) => b.created_at - a.created_at);
    found = candidate.filter((event) => {
      const parsed = parseVideoEvent(event);
      return matchesQueryLocally(parsed, q);
    });
  }

  return found;
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
  const profiles = await fetchProfiles(pubkeys);
  profiles.forEach((value, key) => profilesCache.set(key, value));
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

const RELAYS = [
  "wss://relay.damus.io",
  "wss://relay.coinos.io",
  "wss://nos.lol",
  "wss://relay.snort.social",
  "wss://relay.primal.net",
  "wss://nostr.wine",
];

const FEED_LIMIT = 64;
const SHORTS_LIMIT = 12;
const MAX_EVENT_AGE_DAYS = 365;
const DEBUG_NOSTR = false;

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
  if (isMobileUi()) {
    if (!openMenu._sheetBackdrop) {
      const el = document.createElement("div");
      el.className = "menu-sheet-backdrop";
      el.hidden = true;
      el.addEventListener("click", () => {
        closeAllMenus();
      });
      document.body.appendChild(el);
      openMenu._sheetBackdrop = el;
    }
    const backdrop = openMenu._sheetBackdrop;
    if (backdrop) {
      backdrop.hidden = false;
      try {
        document.body.appendChild(backdrop);
      } catch {}
    }
    document.body.classList.add("is-menu-sheet-open");

    // Portal the menu to <body> so it can overlay everything (watch page,
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
    if (menu.parentNode && placeholder && menu.parentNode !== document.body) {
      try {
        menu.parentNode.insertBefore(placeholder, menu);
      } catch {}
    }
    if (menu.parentNode !== document.body) {
      try {
        document.body.appendChild(menu);
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
    }
  }
}

function closeAllMenus() {
  closeMenu(createMenu);
  closeMenu(userMenu);
  closeMenu(channelMenu);
  closeMenu(searchMenu);
  closeMenu(watchShareMenu);
}

function closeAllMenusExcept(exceptMenu) {
  if (createMenu && createMenu !== exceptMenu) closeMenu(createMenu);
  if (userMenu && userMenu !== exceptMenu) closeMenu(userMenu);
  if (channelMenu && channelMenu !== exceptMenu) closeMenu(channelMenu);
  if (searchMenu && searchMenu !== exceptMenu) closeMenu(searchMenu);
  if (watchShareMenu && watchShareMenu !== exceptMenu) closeMenu(watchShareMenu);
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
  if (channelMeta) channelMeta.textContent = shortenKey(pubkey) || "nostr profile";
  if (channelInitials) channelInitials.textContent = initialsFromName(pubkey);
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

  if (channelTitle) channelTitle.textContent = name || "Channel";
  if (channelMeta) channelMeta.textContent = nip05 || pubkey || "nostr profile";
  if (channelInitials) channelInitials.textContent = initialsFromName(name || pubkey);

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
    RELAYS.map((relay) =>
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
    watchVideo.play().catch(() => {});
  } else {
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

function normalizeWatchTarget(rawId) {
  const value = String(rawId || "").trim();
  if (!value) return { id: "", relays: [] };
  const tools = getNostrTools();
  if (tools?.nip19?.decode && /^(note|nevent)1[0-9a-z]+$/i.test(value)) {
    try {
      const decoded = tools.nip19.decode(value);
      if (decoded?.type === "note") {
        return { id: bytesToHex(decoded.data), relays: [] };
      }
      if (decoded?.type === "nevent") {
        return {
          id: String(decoded.data?.id || ""),
          relays: Array.isArray(decoded.data?.relays) ? decoded.data.relays : [],
        };
      }
    } catch {}
  }
  return { id: value, relays: [] };
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
          };
        } catch {
          profile = {
            name: shortenKey(event.pubkey),
            picture: "",
            nip05: "",
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
  const relays = mergeRelays(RELAYS, target.relays, queryRelays);

  if (!target.id) {
    showToast("Invalid video id.");
    if (token === watchLoadToken) window.location.hash = "#home";
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
  if (/^[0-9a-f]{64}$/i.test(target.id)) {
    event = await fetchFirstEventFromRelays(relays, { ids: [target.id], limit: 1 });
  } else {
    const matches = new Map();
    await Promise.all(
      relays.map((relay) =>
        requestEvents(relay, { ids: [target.id], limit: 20 }, (ev) => {
          if (!matches.has(ev.id)) matches.set(ev.id, ev);
        })
      )
    );
    if (matches.size === 1) {
      event = Array.from(matches.values())[0];
    } else if (matches.size > 1) {
      showToast("That short id matched multiple videos. Use a longer id.");
      if (token === watchLoadToken) window.location.hash = "#home";
      return;
    }
  }

  if (token !== watchLoadToken) return;
  if (!event) {
    showToast("Video not found on relays.");
    window.location.hash = "#home";
    return;
  }

  const video = parseVideoEvent(event);
  const profile =
    profilesCache.get(event.pubkey) ||
    (await fetchProfileFromRelays(relays, event.pubkey));
  if (profile) profilesCache.set(event.pubkey, profile);
  storeVideo(video, profile);
  showWatchForVideo(videoStore.get(video.id));
}

function storeVideo(video, profile) {
  if (!video?.id) return;
  videoStore.set(video.id, {
    ...video,
    channel: profile?.name || "Nostr creator",
    picture: profile?.picture || "",
    nip05: profile?.nip05 || "",
  });
}

function showWatchForVideo(video) {
  if (!video) return;
  lastWatchedVideoId = video.id;
  watchLoadedVideoId = String(video.id || "");
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
    watchStats.textContent = video.published
      ? `${timeAgo(video.published)} · Nostr video`
      : "Nostr video";
  }
  if (watchDesc) {
    watchDesc.textContent = video.summary || "This video is powered by Nostr video events (NIP-71).";
  }
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
        watchVideo.play().catch(() => {
          if (watchStatus) {
            watchStatus.textContent = "Tap to play";
            watchStatus.hidden = false;
          }
          setPlayState();
        });
      }
    } else {
      watchVideo.play().catch(() => {
        if (watchStatus) {
          watchStatus.textContent = "Tap to play";
          watchStatus.hidden = false;
        }
        setPlayState();
      });
    }
  }

  buildWatchList(video.id);
  setActivePage(pageWatch);
  updateSubscribeButton();
  setWatchLikeUi();
  setWatchSaveUi();
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
  if (miniPlayerTitle) miniPlayerTitle.textContent = video?.title || "Now playing";
  if (miniPlayerVideo) {
    const thumb = video?.thumb || "";
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
  if (miniPlayerTitle) miniPlayerTitle.textContent = video?.title || "Now playing";
  if (miniPlayerVideo) {
    const thumb = video?.thumb || "";
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
      watchVideo.removeAttribute("src");
      watchVideo.load?.();
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

if (watchLikeBtn) {
  watchLikeBtn.addEventListener("click", () => {
    const video = getCurrentWatchVideo();
    if (!video?.id) return;
    if (!authState.pubkey) {
      showToast("Sign in to like videos");
      openAuthModal("chooser");
      return;
    }
    if (hasInIdList(STORAGE_LIKED, video.id)) {
      removeFromIdList(STORAGE_LIKED, video.id);
      showToast("Removed like");
    } else {
      addToIdList(STORAGE_LIKED, video.id, 500);
      showToast("Liked");
    }
    setWatchLikeUi();
    renderLocalPages();
  });
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
  currentChannelPubkey = targetPubkey;
  const token = ++channelRenderToken;

  channelFeed.innerHTML = "";
  setChannelHeaderLoading(targetPubkey);
  const videos = Array.from(videoStore.values()).filter((video) => video.pubkey === targetPubkey);
  if (!videos.length) {
    channelEmpty.textContent = "No videos for this channel yet.";
    channelEmpty.hidden = false;
  } else {
    channelEmpty.hidden = true;
    videos.forEach((video) => {
      const clone = videoTemplate.content.cloneNode(true);
      const card = clone.querySelector(".video-card");
      const thumb = clone.querySelector(".thumbnail");
      const duration = clone.querySelector(".duration");
      const title = clone.querySelector(".video-title");
      const channel = clone.querySelector(".video-channel");
      const time = clone.querySelector(".video-time");
      const avatar = clone.querySelector(".channel-avatar");
      const verified = clone.querySelector(".verified");
      title.textContent = video.title;
      channel.textContent = video.channel;
      time.textContent = timeAgo(video.published);
      duration.textContent = video.duration || "0:00";
      if (!video.durationSeconds) {
        duration.hidden = true;
      }
      setCardThumb(thumb, video.thumb, video.id);
      hydrateAvatar(avatar, {
        name: video.channel,
        picture: video.picture,
      });
      if (!video.nip05) {
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
      card.dataset.videoPicture = video.picture || "";
      card.dataset.videoNip05 = video.nip05 || "";
      card.dataset.videoPubkey = video.pubkey || "";
      channelFeed.appendChild(clone);
    });
  }
  updateChannelActions(targetPubkey);
  ensureProfiles([targetPubkey])
    .then(() => {
      if (token !== channelRenderToken) return;
      renderChannelHeader(targetPubkey, token);
    })
    .catch(() => {});
  setActivePage(pageChannel);
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
      void renderSearchPage(route.id || "");
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
      showChannel(route.id);
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
    navigateFromWatchTo(`#channel/${video.pubkey}`);
  });
}

if (watchChannelAvatar) {
  watchChannelAvatar.addEventListener("click", () => {
    const video = getCurrentWatchVideo();
    if (!video?.pubkey) return;
    navigateFromWatchTo(`#channel/${video.pubkey}`);
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

function initialsFromName(name) {
  if (!name) return "NT";
  const parts = name.trim().split(/\\s+/).slice(0, 2);
  return parts.map((part) => part[0].toUpperCase()).join("");
}

function shortenKey(key) {
  if (!key) return "nostr";
  return `${key.slice(0, 8)}…`;
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
  return {
    id: event.id,
    pubkey: event.pubkey,
    title,
    summary,
    thumb,
    duration: formatDuration(durationSeconds),
    durationSeconds,
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
  teardownWatchPlayer();
  if (!url) return;
  watchVideo.preload = "metadata";
  watchVideo.playsInline = true;
  const mime = guessMimeType(url, mimeHint);
  const isHls = mime === "application/vnd.apple.mpegurl";
  if (isHls && watchVideo.canPlayType(mime)) {
    watchVideo.src = url;
    watchVideo.load();
    return;
  }
  if (isHls && window.Hls && window.Hls.isSupported()) {
    watchHls = new window.Hls({ enableWorker: true, lowLatencyMode: true });
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
          profiles.set(event.pubkey, {
            name: data.display_name || data.name || shortenKey(event.pubkey),
            picture: data.picture || "",
            nip05: data.nip05 || "",
          });
        } catch (error) {
          profiles.set(event.pubkey, {
            name: shortenKey(event.pubkey),
            picture: "",
            nip05: "",
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
  if (emptyState) emptyState.hidden = true;
  events.forEach((event) => {
    const video = parseVideoEvent(event);
    logEventDebug(event, video);
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

    const profile = profiles.get(video.pubkey);
    const channelName = profile?.name || shortenKey(video.pubkey);
    storeVideo(video, profile);
    title.textContent = video.title;
    channel.textContent = channelName;
    time.textContent = timeAgo(video.published);
    duration.textContent = video.duration;
    if (!video.durationSeconds) {
      duration.hidden = true;
    }

    setCardThumb(thumb, video.thumb, video.id);

    if (event.kind === 21 && event.tags?.some((tag) => tag[0] === "live")) {
      live.hidden = false;
    }

    if (!profile?.nip05) {
      verified.hidden = true;
    }

    hydrateAvatar(avatar, profile);
    card.dataset.videoUrl = video.url || "";
    card.dataset.videoMime = video.mime || "";
    card.dataset.videoId = video.id;
    card.dataset.videoTitle = video.title;
    card.dataset.videoChannel = channelName;
    card.dataset.videoTime = timeAgo(video.published);
    card.dataset.videoSummary = video.summary || "";
    card.dataset.videoThumb = video.thumb || "";
    card.dataset.videoPicture = profile?.picture || "";
    card.dataset.videoNip05 = profile?.nip05 || "";
    card.dataset.videoPubkey = video.pubkey || "";
    card.dataset.videoPubkey = video.pubkey || "";
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
  if (emptyState) emptyState.hidden = true;
  events.forEach((event) => {
    const video = parseVideoEvent(event);
    logEventDebug(event, video);
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
    const [videos, shorts] = await Promise.all([
      fetchNostrEvents([21], FEED_LIMIT * 2),
      fetchNostrEvents([22], SHORTS_LIMIT),
    ]);
    const profiles = await fetchProfiles([
      ...new Set([...videos, ...shorts].map((event) => event.pubkey)),
    ]);
    profiles.forEach((value, key) => profilesCache.set(key, value));
    const recommended = videos.slice(0, FEED_LIMIT);
    const latest = videos.slice(FEED_LIMIT, FEED_LIMIT * 2);
    renderVideos(recommendedFeed, recommendedEmpty, recommended, profiles);
    renderVideos(latestFeed, latestEmpty, latest, profiles);
    renderShorts(shortsGrid, shortsEmpty, shorts.slice(0, SHORTS_LIMIT), profiles);
    handleRoute();
  } catch (error) {
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
  Array.from(videoStore.values())
    .filter((video) => video.id && video.id !== activeId)
    .slice(0, 12)
    .forEach((video) => {
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
wireVideoClicks(searchFeed);

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
    const shareUrl = `${origin}/share/${video.id}`;
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
    const shareUrl = `${origin}/share/${video.id}`;

    const title = String(video.title || "").trim();
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
  if (target.closest(".menu-anchor")) return;
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
      const route = getRoute();
      const video = route.page === "watch" ? videoStore.get(route.id) : null;
      if (!video?.id) return;
      const tags = [
        ["e", video.id],
        ["p", video.pubkey],
      ];
      const unsigned = buildUnsignedEvent(7, "+", tags);
      const signed = await signEvent(unsigned);
      await publishEvent(signed);
      showToast("Liked");
    } catch (error) {
      showToast(error?.message || "Like failed");
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
      const route = getRoute();
      const video = route.page === "watch" ? videoStore.get(route.id) : null;
      if (!video?.id) return;
      const tags = [
        ["e", video.id],
        ["p", video.pubkey],
      ];
      const unsigned = buildUnsignedEvent(1, text, tags);
      const signed = await signEvent(unsigned);
      await publishEvent(signed);
      if (watchCommentInput) watchCommentInput.value = "";
      showToast("Comment posted");
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
    if (watchStatus) {
      watchStatus.textContent = "This video format is not supported.";
      watchStatus.hidden = false;
    }
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
