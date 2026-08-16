const portfolio = {
  fullName: "Artem Yuditskiy",
  shortName: "Artem",
  telegramUrl: "https://t.me/ar3mka",
  githubUrl: "https://github.com/ArtemYuditskiy",
  services: [
    { number: "01", title: "Backend & APIs", description: "FastAPI services, databases, third-party integrations, webhooks and background processing.", icon: "server" },
    { number: "02", title: "Telegram Tools", description: "Bots, monitoring systems, alerts and Telegram-based workflows connected to external services.", icon: "send" },
    { number: "03", title: "Data & Automation", description: "Web scraping, data collection, monitoring and automation of repetitive workflows.", icon: "database" },
    { number: "04", title: "AI Integrations", description: "LLM-powered workflows, classification, summarization and AI features integrated into real products.", icon: "spark" },
  ],
  projects: [
    {
      number: "01",
      title: "Crypto Activity Monitor",
      description: "Track selected blockchain wallets and receive filtered activity alerts directly in Telegram.",
      features: ["Multiple wallets", "Transaction alerts", "Custom filters", "Telegram notifications"],
      tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Telegram Bot API"],
      images: [
        { src: "assets/crypto-activity-monitor.webp", alt: "Configuration screen of a Telegram crypto wallet monitoring bot" },
        { src: "assets/crypto-activity-monitor-alerts.webp", alt: "Wallet activity alerts delivered by the crypto monitoring bot" },
      ],
      architecture: {
        sources: ["Blockchain API / RPC"],
        pipeline: ["Python Workers", "Event Processing", "Filtering & Alert Rules", "PostgreSQL", "Telegram Bot", "User Notifications"],
      },
    },
    {
      number: "02",
      title: "Crypto Market Alert Hub",
      description: "Aggregate market data from multiple exchanges and turn it into configurable real-time alerts.",
      features: ["Price alerts", "Funding monitoring", "Spread monitoring", "Telegram delivery"],
      tech: ["Python", "asyncio", "FastAPI", "PostgreSQL", "WebSockets"],
      images: [
        { src: "assets/crypto-market-alert-hub.webp", alt: "Telegram bot showing live crypto market alerts" },
        { src: "assets/crypto-market-alert-hub-mini-app.webp", alt: "Crypto Market Alert Hub Telegram mini app overview" },
      ],
      architecture: {
        sources: ["Binance", "Bybit", "OKX"],
        pipeline: ["Async Data Collectors", "Data Normalization", "Rules Engine", "PostgreSQL", "Telegram Bot / Mini App", "User Alerts"],
      },
      alternate: true,
    },
    {
      number: "03",
      title: "AI Monitoring & Intelligence System",
      description: "Monitor multiple information sources, filter the noise with AI and receive only the events that actually matter.",
      features: ["Multi-source collection", "Deduplication", "AI relevance filtering", "Telegram / Email alerts"],
      tech: ["Python", "FastAPI", "PostgreSQL", "Scraping", "LLM APIs"],
      images: [
        { src: "assets/ai-monitoring-intelligence.webp", alt: "Telegram interface showing AI-classified monitoring updates" },
      ],
      architecture: {
        sources: ["Websites", "RSS", "APIs", "Telegram"],
        pipeline: ["Data Collection", "Deduplication", "AI Processing", "Classification & Scoring", "PostgreSQL", "Telegram / Email Alerts"],
      },
    },
  ],
  stack: [
    { title: "Backend", items: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL"], icon: "code" },
    { title: "Async & Workers", items: ["asyncio", "Redis", "Celery"], icon: "bolt" },
    { title: "Integrations", items: ["REST APIs", "Webhooks", "Telegram Bot API", "External APIs"], icon: "link" },
    { title: "Tools", items: ["Docker", "Git", "Linux"], icon: "tool" },
    { title: "AI", items: ["LLM APIs", "AI integrations"], icon: "spark" },
  ],
  process: [
    { number: "01", title: "Tell me what you need" },
    { number: "02", title: "I propose scope & approach" },
    { number: "03", title: "Build, demo & handoff" },
  ],
};

const icons = {
  server: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01M16 7h2M16 17h2"/></svg>',
  send: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 3-7.5 18-4.3-6.2L3 10.5 21 3Z"/><path d="m9.2 14.8 4.2-4.2"/></svg>',
  database: '<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/></svg>',
  spark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.4 5.6L19 9l-5.6 1.4L12 16l-1.4-5.6L5 9l5.6-1.4L12 2ZM19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z"/></svg>',
  code: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z"/></svg>',
  link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 13 4-4M7.5 16.5l-1 1a3.5 3.5 0 0 1-5-5l3-3a3.5 3.5 0 0 1 5 0M16.5 7.5l1-1a3.5 3.5 0 0 1 5 5l-3 3a3.5 3.5 0 0 1-5 0"/></svg>',
  tool: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 6.5a4 4 0 0 0-5-5L6.5 4 4 1.5a4 4 0 0 0 5 5L2 13.5a2.1 2.1 0 0 0 3 3l7-7a4 4 0 0 0 5-5L14.5 7 12 4.5"/></svg>',
};

const renderChips = (items) => items.map((item) => `<li>${item}</li>`).join("");

const architectureNodeType = (label, index, pipeline) => {
  if (label === "PostgreSQL") return "storage";
  if (index === pipeline.length - 1 || label.includes("Telegram Bot")) return "delivery";
  return "processing";
};

document.querySelectorAll("[data-full-name]").forEach((node) => { node.textContent = portfolio.fullName; });
document.querySelectorAll("[data-short-name]").forEach((node) => { node.textContent = portfolio.shortName; });
document.querySelectorAll("[data-telegram-link]").forEach((node) => { node.href = portfolio.telegramUrl; });
document.querySelectorAll("[data-github-link]").forEach((node) => { node.href = portfolio.githubUrl; });

document.querySelector("[data-services]").innerHTML = portfolio.services.map((service) => `
  <article class="service-card">
    <div class="service-card__top"><span>${service.number}</span><span class="line-icon">${icons[service.icon]}</span></div>
    <h3>${service.title}</h3>
    <p>${service.description}</p>
  </article>
`).join("");

document.querySelector("[data-projects]").innerHTML = portfolio.projects.map((project) => `
  <article class="project-card${project.alternate ? " project-card--alternate" : ""}">
    <div class="project-visual project-visual--${project.images.length > 1 ? "dual" : "single"}">
      <span class="project-visual__number">${project.number}</span>
      ${project.images.map((image, index) => `
        <button
          class="project-visual__trigger project-visual__trigger--${index === 0 ? "primary" : "secondary"}"
          type="button"
          aria-label="Open larger view: ${image.alt}"
          data-lightbox-src="${image.src}"
          data-lightbox-alt="${image.alt}"
        >
          <img class="project-visual__image" src="${image.src}" alt="${image.alt}" width="941" height="1672" loading="lazy" decoding="async" />
        </button>
      `).join("")}
    </div>
    <div class="project-content">
      <p class="project-label">Example solution · ${project.number}</p>
      <h3>${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="chip-group">
        <p>Capabilities</p>
        <ul class="chips">${renderChips(project.features)}</ul>
      </div>
      <div class="chip-group">
        <p>Technology</p>
        <ul class="chips chips--tech">${renderChips(project.tech)}</ul>
      </div>
    </div>
    <div class="architecture">
      <div class="architecture__heading">
        <p class="architecture__title">Architecture</p>
        <span>System flow</span>
      </div>
      <div class="architecture__flow">
        <div class="architecture__sources architecture__sources--${project.architecture.sources.length}${project.architecture.sources.length > 1 ? " architecture__sources--multiple" : ""}" aria-label="Data sources">
          ${project.architecture.sources.map((source) => `<span class="architecture-node architecture-node--source">${source}</span>`).join("")}
        </div>
        <span class="architecture-connector architecture-connector--merge" aria-hidden="true"></span>
        <ol class="architecture__pipeline">
          ${project.architecture.pipeline.map((item, index, pipeline) => `<li><span class="architecture-node architecture-node--${architectureNodeType(item, index, pipeline)}">${item}</span></li>`).join("")}
        </ol>
      </div>
    </div>
  </article>
`).join("");

document.querySelector("[data-stack]").innerHTML = portfolio.stack.map((group) => `
  <article class="stack-group">
    <div class="stack-group__heading"><span class="line-icon">${icons[group.icon]}</span><h3>${group.title}</h3></div>
    <ul>${group.items.map((item) => `<li>${item}</li>`).join("")}</ul>
  </article>
`).join("");

document.querySelector("[data-process]").innerHTML = portfolio.process.map((step) => `
  <li>
    <span>${step.number}</span>
    <strong>${step.title}</strong>
  </li>
`).join("");

const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
const lightboxClose = document.querySelector("[data-lightbox-close]");

const closeLightbox = () => {
  if (lightbox.open) lightbox.close();
};

document.querySelectorAll("[data-lightbox-src]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    lightboxImage.src = trigger.dataset.lightboxSrc;
    lightboxImage.alt = trigger.dataset.lightboxAlt;
    lightboxCaption.textContent = trigger.dataset.lightboxAlt;
    lightbox.showModal();
    lightboxClose.focus();
  });
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeLightbox();
});
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});

const menuButton = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-navigation]");

const closeMenu = () => {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation menu");
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

menuButton.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(willOpen));
  menuButton.setAttribute("aria-label", willOpen ? "Close navigation menu" : "Open navigation menu");
  navigation.classList.toggle("is-open", willOpen);
  document.body.classList.toggle("menu-open", willOpen);
});

navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
window.addEventListener("resize", () => { if (window.innerWidth > 760) closeMenu(); });

const header = document.querySelector("[data-header]");
const syncHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')];
const observedSections = sectionLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

if ("IntersectionObserver" in window) {
  const navigationObserver = new IntersectionObserver((entries) => {
    const current = entries.find((entry) => entry.isIntersecting);
    if (!current) return;
    sectionLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${current.target.id}`;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }, { rootMargin: "-28% 0px -62%", threshold: 0 });
  observedSections.forEach((section) => navigationObserver.observe(section));
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".section-heading, .service-card, .project-card, .stack-grid, .process-panel, .contact-panel");

if (!reduceMotion && "IntersectionObserver" in window) {
  revealItems.forEach((item) => item.classList.add("reveal"));
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -32px" });
  revealItems.forEach((item) => revealObserver.observe(item));
}
