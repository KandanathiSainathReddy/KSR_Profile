import { site } from "./content.js";
import { writeup } from "./writeup.js";

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

const navHref = (href) => (href.startsWith("#") ? `index.html${href}` : href);

fill(
  "nav-brand",
  `<span class="mark">${esc(site.brand.initials)}</span>` +
    `<span class="brand-name">${esc(site.brand.name)}</span>` +
    `<span class="brand-pill">${esc(site.brand.pill)}</span>`,
);

fill(
  "nav-links",
  site.nav.map((l) => `<a href="${navHref(l.href)}">${esc(l.label)}</a>`).join(""),
);

const navCta = document.getElementById("nav-cta");
if (navCta) {
  navCta.href = site.headerCta.href;
  navCta.textContent = site.headerCta.label;
  if (site.headerCta.external) {
    navCta.target = "_blank";
    navCta.rel = "noreferrer";
  }
}

fill(
  "contact",
  `<p class="footer-line">${esc(site.contact.line)}</p>` +
    `<div class="footer-links">` +
    `<a href="mailto:${site.contact.email}">${esc(site.contact.email)}</a>` +
    extLink(site.contact.github, "GitHub ↗") +
    extLink(site.contact.linkedin, "LinkedIn ↗") +
    `</div>`,
);

function cardHtml(p, href) {
  const pillClass = `pill${p.live ? " live" : ""}`;
  const cardClass = p.startHere ? "project-card start-here" : "project-card supporting";
  const badge = p.startHere ? `<span class="start-badge">Start here</span>` : "";
  return (
    `<a class="${cardClass}" href="${href}">` +
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
}

function band(label, projects, extraClass) {
  const cards = projects.map((p) => cardHtml(p, `#${p.id}`)).join("");
  return (
    `<p class="band-kicker">${esc(label)}</p>` +
    `<div class="project-grid ${extraClass}">${cards}</div>`
  );
}

function catalogView() {
  const q1 = writeup.q1.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");
  const q2 = writeup.q2.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");
  const featured = writeup.projects.filter((p) => p.startHere);
  const rest = writeup.projects.filter((p) => !p.startHere);
  return (
    `<p class="kicker"><span class="dot"></span><span class="kicker-text">${esc(writeup.kicker)}</span></p>` +
    `<h1 class="notes-title">${esc(writeup.title)}</h1>` +
    `<p class="lede">${esc(writeup.lede)}</p>` +
    band("Start here", featured, "featured-grid") +
    band("Supporting", rest, "supporting-grid") +
    `<section class="notes-section"><h2>${esc(writeup.q1.heading)}</h2>${q1}</section>` +
    `<section class="notes-section"><h2>${esc(writeup.q2.heading)}</h2>${q2}</section>`
  );
}

function detailView(p) {
  const links = [
    p.liveUrl ? extLink(p.liveUrl, "Live demo →", "btn btn-solid") : "",
    p.github ? extLink(p.github, "GitHub ↗", "btn btn-text") : "",
  ]
    .filter(Boolean)
    .join("");
  const blocks = p.blocks
    .map((b) => `<h3>${esc(b.title)}</h3><p>${esc(b.body)}</p>`)
    .join("");
  return (
    `<p><a class="btn btn-text" href="#">${esc("← All projects")}</a></p>` +
    `<p class="kicker"><span class="dot"></span><span class="kicker-text">${esc(p.pill)}</span></p>` +
    `<h1 class="notes-title">${esc(p.heading)}</h1>` +
    `<p class="notes-sub">${esc(p.sub)}</p>` +
    (links ? `<div class="hero-actions">${links}</div>` : "") +
    `<article class="notes-project notes-project-solo">${blocks}</article>`
  );
}

function render() {
  const id = decodeURIComponent(location.hash.replace(/^#/, ""));
  const project = writeup.projects.find((p) => p.id === id);
  const root = document.getElementById("notes-root");
  if (!root) return;
  if (project) {
    document.title = `${project.title} — Kandanathi Sainath Reddy`;
    root.classList.remove("notes-catalog");
    root.innerHTML = detailView(project);
    window.scrollTo(0, 0);
    return;
  }
  document.title = "Projects — Kandanathi Sainath Reddy";
  root.classList.add("notes-catalog");
  root.innerHTML = catalogView();
}

window.addEventListener("hashchange", render);
render();
