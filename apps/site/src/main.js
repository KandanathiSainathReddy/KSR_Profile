import { site } from "./content.js";

/* ── helpers ─────────────────────────────────────────────────────────────── */

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const extLink = (href, label, cls = "") =>
  `<a href="${href}" class="${cls}" target="_blank" rel="noreferrer">${label}</a>`;

const fill = (id, html) => {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
};

/* ── meta ────────────────────────────────────────────────────────────────── */

document.title = site.meta.title;
document.querySelector('meta[name="description"]').setAttribute("content", site.meta.description);

/* ── nav brand ───────────────────────────────────────────────────────────── */

fill(
  "nav-brand",
  `<span class="mark">${esc(site.brand.initials)}</span>` +
    `<span class="brand-name">${esc(site.brand.name)}</span>` +
    `<span class="brand-pill">${esc(site.brand.pill)}</span>`,
);

/* ── nav links ───────────────────────────────────────────────────────────── */

fill(
  "nav-links",
  site.nav.map((l) => `<a href="${l.href}">${esc(l.label)}</a>`).join(""),
);

/* ── nav cta ─────────────────────────────────────────────────────────────── */

const navCta = document.getElementById("nav-cta");
if (navCta) {
  navCta.href = site.headerCta.href;
  navCta.textContent = site.headerCta.label;
  if (site.headerCta.external) {
    navCta.target = "_blank";
    navCta.rel = "noreferrer";
  }
}

/* ── hero ────────────────────────────────────────────────────────────────── */

fill(
  "hero",
  `<p class="kicker"><span class="dot"></span><span class="kicker-text">${esc(site.kicker)}</span></p>` +
    `<h1 class="headline">` +
    `<span class="headline-light">${esc(site.headline[0])}</span>` +
    `<span class="headline-heavy">${esc(site.headline[1])}</span>` +
    `</h1>` +
    `<p class="lede">${esc(site.lede)}</p>` +
    `<div class="hero-actions">` +
    site.heroActions
      .map((a) => extLink(a.href, esc(a.label), `btn btn-${a.kind}`))
      .join("") +
    `</div>`,
);

/* ── stats ───────────────────────────────────────────────────────────────── */

fill(
  "stats",
  site.stats
    .map(
      (s) =>
        `<article class="stat">` +
        `<p class="stat-value">${esc(s.value)}</p>` +
        `<p class="stat-label">${esc(s.label)}</p>` +
        `</article>`,
    )
    .join(""),
);

/* ── explore ─────────────────────────────────────────────────────────────── */

const exploreHeading = document.getElementById("explore-heading");
if (exploreHeading) exploreHeading.textContent = site.explore.heading;
const exploreLede = document.getElementById("explore-lede");
if (exploreLede) exploreLede.textContent = site.explore.lede;

fill(
  "explore-grid",
  site.explore.items
    .map((item) => {
      const pillClass = `pill${item.live ? " live" : ""}`;
      const actions =
        item.links && item.links.length
          ? `<div class="actions">${item.links
              .map((l) => extLink(l.href, esc(l.label), "btn btn-text"))
              .join("")}</div>`
          : "";
      return (
        `<article class="explore-card">` +
        `<header class="work-head">` +
        `<h3>${esc(item.title)}</h3>` +
        `<span class="${pillClass}">${esc(item.kind)}</span>` +
        `</header>` +
        `<p>${esc(item.blurb)}</p>` +
        actions +
        `</article>`
      );
    })
    .join(""),
);

/* ── featured ────────────────────────────────────────────────────────────── */

const f = site.featured;
fill(
  "featured",
  `<p class="section-kicker"><span class="dot"></span><span>${esc(f.kicker)}</span></p>` +
    `<h2 class="featured-title">${esc(f.title)}</h2>` +
    `<p class="featured-sub">${esc(f.subtitle)}</p>` +
    `<p class="featured-blurb">${esc(f.blurb)}</p>` +
    `<ol class="flow">${f.flow.map((step) => `<li>${esc(step)}</li>`).join("")}</ol>` +
    `<ul class="policies">${f.policies.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` +
    `<p class="featured-note">${esc(f.note)}</p>` +
    `<p class="stack">${esc(f.stack)}</p>` +
    `<div class="actions">` +
    f.links
      .map((l) => extLink(l.href, esc(l.label), `btn btn-${l.kind || "solid"}`))
      .join("") +
    `</div>`,
);

/* ── work grid ───────────────────────────────────────────────────────────── */

fill(
  "work-grid",
  site.work
    .map((w) => {
      const pillClass = `pill${w.live ? " live" : ""}`;
      const actions =
        w.links && w.links.length
          ? `<div class="actions">${w.links
              .map((l) => extLink(l.href, esc(l.label), "btn btn-text"))
              .join("")}</div>`
          : "";
      return (
        `<article class="work-card">` +
        `<header class="work-head">` +
        `<h3>${esc(w.title)}</h3>` +
        `<span class="${pillClass}">${esc(w.pill)}</span>` +
        `</header>` +
        `<p>${esc(w.blurb)}</p>` +
        `<p class="stack">${esc(w.stack)}</p>` +
        actions +
        `</article>`
      );
    })
    .join(""),
);

/* ── platform ────────────────────────────────────────────────────────────── */

const platformHeading = document.getElementById("platform-heading");
if (platformHeading) platformHeading.textContent = site.platform.heading;

fill(
  "platform-body",
  `<p class="lede">${esc(site.platform.lede)}</p>` +
    `<div class="pillar-grid">` +
    site.platform.pillars
      .map(
        (p) =>
          `<article class="pillar">` +
          `<h3>${esc(p.title)}</h3>` +
          `<p>${esc(p.body)}</p>` +
          `</article>`,
      )
      .join("") +
    `</div>`,
);

/* ── approach ────────────────────────────────────────────────────────────── */

fill(
  "approach-list",
  site.approach
    .map(
      (a) =>
        `<li><div class="point-copy"><strong>${esc(a.title)}</strong> <span>${esc(a.body)}</span></div></li>`,
    )
    .join(""),
);

/* ── certs ───────────────────────────────────────────────────────────────── */

const certsHeading = document.getElementById("certs-heading");
if (certsHeading) certsHeading.textContent = site.certs.heading;

fill(
  "certs-body",
  site.certs.items
    .map(
      (c) =>
        `<article class="cert">` +
        `<h3>${esc(c.title)}</h3>` +
        `<p>${esc(c.meta)}</p>` +
        `</article>`,
    )
    .join(""),
);

/* ── footer ──────────────────────────────────────────────────────────────── */

fill(
  "contact",
  `<p class="footer-line">${esc(site.contact.line)}</p>` +
    `<div class="footer-links">` +
    `<a href="mailto:${site.contact.email}">${esc(site.contact.email)}</a>` +
    extLink(site.contact.github, "GitHub ↗") +
    extLink(site.contact.linkedin, "LinkedIn ↗") +
    `</div>`,
);
