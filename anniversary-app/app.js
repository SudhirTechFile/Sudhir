/* =========================================================================
   OURFLIX — app logic (login, tabs, rows, modal)
   Reads all content from data.js — no content is hard-coded here.
   ========================================================================= */

(function () {
  "use strict";

  // ------------------------------------------------------------------
  // DOM shortcuts
  // ------------------------------------------------------------------
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  const loginScreen = $("#login-screen");
  const profileBtn = $("#profile-btn");
  const profileName = $("#profile-name");
  const passwordModal = $("#password-modal");
  const passwordInput = $("#password-input");
  const passwordSubmit = $("#password-submit");
  const passwordCancel = $("#password-cancel");
  const passwordError = $("#password-error");

  const celebrationOverlay = $("#celebration-overlay");
  const heartsContainer = $("#hearts-container");

  const mainApp = $("#main-app");
  const navbar = $("#navbar");
  const mobileMenuBtn = $("#mobile-menu-btn");
  const mobileNav = $("#mobile-nav");

  const mediaModal = $("#media-modal");
  const modalMedia = $("#modal-media");
  const modalClose = $("#modal-close");

  let heartInterval = null;

  // ------------------------------------------------------------------
  // Apply site-wide text from SITE_CONFIG / data
  // ------------------------------------------------------------------
  function applyConfig() {
    $("#login-logo").textContent = SITE_CONFIG.logoText;
    $("#main-logo").textContent = SITE_CONFIG.logoText;
    profileName.textContent = SITE_CONFIG.profileName;
    $("#celebration-message").textContent = SITE_CONFIG.anniversaryMessage;
    $("#celebration-sub").textContent = SITE_CONFIG.anniversarySubMessage;
    document.title = `${SITE_CONFIG.logoText} — Anniversary`;
  }

  // ------------------------------------------------------------------
  // LOGIN FLOW
  // ------------------------------------------------------------------
  profileBtn.addEventListener("click", () => {
    passwordModal.classList.remove("hidden");
    passwordInput.value = "";
    passwordError.classList.add("hidden");
    setTimeout(() => passwordInput.focus(), 50);
  });

  passwordCancel.addEventListener("click", () => {
    passwordModal.classList.add("hidden");
  });

  function checkPassword() {
    if (passwordInput.value.trim() === String(SITE_CONFIG.password)) {
      passwordModal.classList.add("hidden");
      startCelebration();
    } else {
      passwordError.classList.remove("hidden");
      const box = passwordModal.querySelector(".rounded-md");
      box.classList.remove("shake");
      // eslint-disable-next-line no-unused-expressions
      void box.offsetWidth; // restart animation
      box.classList.add("shake");
      passwordInput.value = "";
      passwordInput.focus();
    }
  }

  passwordSubmit.addEventListener("click", checkPassword);
  passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkPassword();
  });

  // ------------------------------------------------------------------
  // CELEBRATION OVERLAY
  // ------------------------------------------------------------------
  function spawnHeart() {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = ["❤️", "💕", "💖", "💗"][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + "%";
    heart.style.setProperty("--drift", (Math.random() * 120 - 60) + "px");
    const duration = 4 + Math.random() * 3;
    heart.style.animationDuration = duration + "s";
    heart.style.fontSize = 1 + Math.random() * 1.5 + "rem";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), duration * 1000 + 200);
  }

  function startCelebration() {
    celebrationOverlay.classList.remove("hidden");
    heartInterval = setInterval(spawnHeart, 180);
    for (let i = 0; i < 12; i++) setTimeout(spawnHeart, i * 60);

    const finish = () => endCelebration();
    celebrationOverlay.addEventListener("click", finish, { once: true });
    setTimeout(finish, 4200);
  }

  function endCelebration() {
    clearInterval(heartInterval);
    celebrationOverlay.classList.add("hidden");
    loginScreen.remove();
    mainApp.classList.remove("hidden");
    document.body.style.overflow = "";
  }

  // ------------------------------------------------------------------
  // NAVBAR: solid background on scroll + tab switching
  // ------------------------------------------------------------------
  function setupNavbar() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        navbar.classList.remove("navbar-transparent");
        navbar.classList.add("navbar-solid");
      } else {
        navbar.classList.add("navbar-transparent");
        navbar.classList.remove("navbar-solid");
      }
    });

    mobileMenuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("hidden");
    });

    $$("[data-tab]").forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });
  }

  function switchTab(tab) {
    $$(".tab-panel").forEach((p) => p.classList.add("hidden"));
    $(`#tab-${tab}`).classList.remove("hidden");

    $$(".nav-link, .nav-link-mobile").forEach((btn) => {
      btn.classList.toggle("active-tab", btn.dataset.tab === tab);
    });

    mobileNav.classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ------------------------------------------------------------------
  // CARD BUILDING (shared by rows + grids)
  // ------------------------------------------------------------------
  function createCard(item, type, variant) {
    const card = document.createElement("div");
    card.className = "media-card" + (variant === "grid" ? " grid-card" : "");
    card.tabIndex = 0;

    const isVideo = type === "video";
    const thumb = isVideo ? item.thumbnail : item.image;

    let mediaEl;
    if (isVideo) {
      mediaEl = document.createElement("video");
      mediaEl.src = item.video;
      mediaEl.poster = thumb;
      mediaEl.muted = true;
      mediaEl.loop = true;
      mediaEl.playsInline = true;
      mediaEl.preload = "metadata";
      card.addEventListener("mouseenter", () => mediaEl.play().catch(() => {}));
      card.addEventListener("mouseleave", () => {
        mediaEl.pause();
        mediaEl.currentTime = 0;
      });
    } else {
      mediaEl = document.createElement("img");
      mediaEl.src = thumb;
      mediaEl.loading = "lazy";
      mediaEl.alt = item.title;
    }
    card.appendChild(mediaEl);

    if (isVideo) {
      const playIcon = document.createElement("div");
      playIcon.className = "play-icon";
      playIcon.textContent = "▶";
      card.appendChild(playIcon);
    }

    const badge = document.createElement("span");
    badge.className = "card-badge";
    badge.textContent = `${item.match}% Match`;
    card.appendChild(badge);

    const overlay = document.createElement("div");
    overlay.className = "card-overlay";
    overlay.innerHTML = `<div class="card-title">${item.title}</div>`;
    card.appendChild(overlay);

    card.addEventListener("click", () => openModal(item, type));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(item, type);
      }
    });

    return card;
  }

  function fillRow(containerId, items, type) {
    const container = $("#" + containerId);
    items.forEach((item) => container.appendChild(createCard(item, type, "row")));
  }

  function fillGrid(containerId, items, type) {
    const container = $("#" + containerId);
    items.forEach((item) => container.appendChild(createCard(item, type, "grid")));
  }

  // ------------------------------------------------------------------
  // ROW ARROW SCROLLING
  // ------------------------------------------------------------------
  function setupRowArrows() {
    $$(".row-arrow").forEach((btn) => {
      btn.addEventListener("click", () => {
        const track = $("#" + btn.dataset.target);
        const scrollAmount = track.clientWidth * 0.9;
        track.scrollBy({
          left: btn.classList.contains("row-arrow-left") ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      });
    });
  }

  // ------------------------------------------------------------------
  // "MORE INFO" MODAL
  // ------------------------------------------------------------------
  function openModal(item, type) {
    modalMedia.innerHTML = "";

    if (type === "video") {
      const video = document.createElement("video");
      video.src = item.video;
      video.poster = item.thumbnail || item.poster || "";
      video.controls = true;
      video.autoplay = true;
      video.muted = false;
      video.loop = true;
      video.playsInline = true;
      modalMedia.appendChild(video);
    } else {
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.title;
      modalMedia.appendChild(img);
    }

    $("#modal-match").textContent = `${item.match}% Match`;
    $("#modal-year").textContent = item.year;
    $("#modal-rating").textContent = item.rating;
    $("#modal-title").textContent = item.title;
    $("#modal-description").textContent = item.description;

    const tagsWrap = $("#modal-tags");
    tagsWrap.innerHTML = "";
    (item.tags || []).forEach((tag) => {
      const pill = document.createElement("span");
      pill.className = "tag-pill";
      pill.textContent = tag;
      tagsWrap.appendChild(pill);
    });

    mediaModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    mediaModal.classList.add("hidden");
    modalMedia.innerHTML = "";
    document.body.style.overflow = "";
  }

  modalClose.addEventListener("click", closeModal);
  mediaModal.addEventListener("click", (e) => {
    if (e.target === mediaModal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !mediaModal.classList.contains("hidden")) closeModal();
  });

  // ------------------------------------------------------------------
  // HERO
  // ------------------------------------------------------------------
  function setupHero() {
    const video = $("#hero-video");
    video.src = HERO.video;
    video.poster = HERO.poster;

    $("#hero-tag").textContent = HERO.tag;
    $("#hero-title").textContent = HERO.title;
    $("#hero-description").textContent = HERO.description;

    $("#hero-play-btn").addEventListener("click", () => {
      openModal(
        { ...HERO, thumbnail: HERO.poster, video: HERO.video },
        "video"
      );
    });
    $("#hero-info-btn").addEventListener("click", () => {
      openModal({ ...HERO, image: HERO.poster }, "photo");
    });
  }

  // ------------------------------------------------------------------
  // OUR STORY TIMELINE
  // ------------------------------------------------------------------
  function setupStory() {
    $("#story-intro").textContent = OUR_STORY.intro;
    const timeline = $("#story-timeline");

    MILESTONES.forEach((m) => {
      const item = document.createElement("div");
      item.className = "timeline-item relative";
      item.innerHTML = `
        <p class="text-netflix-red text-xs font-bold tracking-wide mb-1">${m.date}</p>
        <h3 class="text-lg font-bold mb-1">${m.title}</h3>
        <p class="text-neutral-400 text-sm mb-3">${m.description}</p>
        <img src="${m.image}" alt="${m.title}" class="rounded-md w-full max-w-md aspect-video object-cover cursor-pointer hover:opacity-90 transition" />
      `;
      item.querySelector("img").addEventListener("click", () => openModal(m, "photo"));
      timeline.appendChild(item);
    });
  }

  // ------------------------------------------------------------------
  // INIT
  // ------------------------------------------------------------------
  function init() {
    applyConfig();
    setupHero();
    setupNavbar();
    setupRowArrows();
    setupStory();

    fillRow("row-videos", VIDEOS, "video");
    fillRow("row-photos", PHOTOS, "photo");
    fillRow("row-milestones", MILESTONES, "photo");

    fillGrid("grid-videos", VIDEOS, "video");
    fillGrid("grid-photos", PHOTOS, "photo");
  }

  init();
})();
