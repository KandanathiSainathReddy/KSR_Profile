import { site } from "./content.js";
import { writeup } from "./writeup.js";

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
              .map((l) =>
                /^https?:/i.test(l.href)
                  ? extLink(l.href, esc(l.label), "btn btn-text")
                  : `<a href="${l.href}" class="btn btn-text">${esc(l.label)}</a>`,
              )
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
      .map((l) =>
        /^https?:/i.test(l.href)
          ? extLink(l.href, esc(l.label), `btn btn-${l.kind || "solid"}`)
          : `<a href="${l.href}" class="btn btn-${l.kind || "solid"}">${esc(l.label)}</a>`,
      )
      .join("") +
    `</div>`,
);

/* ── project catalog (click → notes deep dive) ───────────────────────────── */

const workLede = document.getElementById("work-lede");
if (workLede) workLede.textContent = writeup.lede;

const cardHtml = (p) => {
  const pillClass = `pill${p.live ? " live" : ""}`;
  const cardClass = p.startHere ? "project-card start-here" : "project-card supporting";
  const badge = p.startHere ? `<span class="start-badge">Start here</span>` : "";
  return (
    `<a class="${cardClass}" href="notes.html#${p.id}">` +
    `<header class="work-head">` +
    `<h3>${esc(p.title)}</h3>` +
    `<span class="${pillClass}">${esc(p.pill)}</span>` +
    `</header>` +
    badge +
    `<p>${esc(p.summary)}</p>` +
    `<p class="stack">${esc(p.stack)}</p>` +
    `<span class="project-go">Deep dive →</span>` +
    `</a>`
  );
};

const featured = writeup.projects.filter((p) => p.startHere);
const rest = writeup.projects.filter((p) => !p.startHere);

fill(
  "work-grid",
  `<p class="band-kicker">Start here</p>` +
    `<div class="work-grid project-grid featured-grid">${featured.map(cardHtml).join("")}</div>` +
    `<p class="band-kicker">Supporting</p>` +
    `<div class="work-grid project-grid supporting-grid">${rest.map(cardHtml).join("")}</div>`,
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
