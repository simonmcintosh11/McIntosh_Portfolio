(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const linkList = (links = []) =>
    links
      .filter((l) => l && l.url)
      .map((l) => `<a class="pill-link" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`)
      .join("");

  // Hide a block when its data is empty
  const hideIfEmpty = (id, list) => {
    if (!list || !list.length) $(id).hidden = true;
  };

  // ---------- Header / hero ----------
  const initials = S.name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2);
  $("brand").textContent = S.name;
  $("name").textContent = S.name;
  $("subtitle").innerHTML = [S.title, S.affiliation].filter(Boolean).map(esc).join(" &middot; ");
  $("photo").innerHTML = S.photo
    ? `<img src="${esc(S.photo)}" alt="Photo of ${esc(S.name)}">`
    : `<span>${esc(initials)}</span>`;
  $("about-text").innerHTML = (S.about || []).map((p) => `<p>${esc(p)}</p>`).join("");
  $("interests").innerHTML = (S.interests || []).map((i) => `<li>${esc(i)}</li>`).join("");

  const actions = [];
  if (S.cvPdf) actions.push(`<a class="btn primary" href="${esc(S.cvPdf)}" target="_blank" rel="noopener">Download CV</a>`);
  if (S.email) actions.push(`<a class="btn" href="mailto:${esc(S.email)}">Email me</a>`);
  $("hero-actions").innerHTML = actions.join("") + linkList(S.links);

  // ---------- News ----------
  hideIfEmpty("news-section", S.news);
  $("news").innerHTML = (S.news || [])
    .map((n) => `<li><time>${esc(n.date)}</time><span>${esc(n.text)}</span></li>`)
    .join("");

  // ---------- Research ----------
  hideIfEmpty("research", S.research);
  $("research-list").innerHTML = (S.research || [])
    .map(
      (r) => `
      <article class="card">
        <div class="card-head">
          <h3>${esc(r.title)}</h3>
          ${r.period ? `<span class="muted small">${esc(r.period)}</span>` : ""}
        </div>
        <p>${esc(r.description)}</p>
        ${r.tags && r.tags.length ? `<ul class="chips small">${r.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
        ${r.links && r.links.length ? `<div class="links">${linkList(r.links)}</div>` : ""}
      </article>`
    )
    .join("");

  // ---------- Featured research ----------
  const F = S.featured;
  if (!F) {
    $("featured").hidden = true;
    $("more-research").hidden = true;
  } else {
    if (!(S.research || []).length) $("more-research").hidden = true;
    $("featured").innerHTML = `
      <div class="card-head">
        <h3 class="featured-title">${esc(F.title)}</h3>
        ${F.period ? `<span class="muted small">${esc(F.period)}</span>` : ""}
      </div>
      ${(F.intro || []).map((p) => `<p>${esc(p)}</p>`).join("")}
      ${F.tags && F.tags.length ? `<ul class="chips small">${F.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
      ${(F.visuals || [])
        .map(
          (v, i) => `
        <figure class="visual">
          <figcaption>
            <div class="visual-head">
              <h4><span class="muted">Figure ${i + 1}.</span> ${esc(v.title)}</h4>
              <a class="pill-link" href="${esc(v.src)}" target="_blank" rel="noopener">Open full screen</a>
            </div>
            <p>${esc(v.paragraph)}</p>
          </figcaption>
          <div class="visual-frame"><iframe src="${esc(v.src)}" title="${esc(v.title)}" loading="lazy"></iframe></div>
        </figure>`
        )
        .join("")}`;
  }

  // Embedded visuals: match the site theme and grow to fit their content
  const syncFrame = (f) => {
    try {
      const doc = f.contentDocument;
      const t = document.documentElement.dataset.theme;
      if (t) doc.documentElement.dataset.theme = t;
      else delete doc.documentElement.dataset.theme;
      const fit = () => (f.style.height = doc.documentElement.scrollHeight + "px");
      fit();
      if (!f._ro) (f._ro = new ResizeObserver(fit)).observe(doc.body);
    } catch (_) {} // cross-origin (e.g. opened from disk): keep the CSS fallback height
  };
  document.querySelectorAll(".visual-frame iframe").forEach((f) => f.addEventListener("load", () => syncFrame(f)));

  // ---------- Publications ----------
  const pubs = (S.publications || []).slice().sort((a, b) => (b.year || 0) - (a.year || 0));

  const typeLabels = { journal: "Journal", conference: "Conference", preprint: "Preprint", report: "Report", thesis: "Thesis", other: "Other" };
  const types = [...new Set(pubs.map((p) => p.type || "other"))];

  const highlight = (authors) => {
    const safe = esc(authors);
    return S.highlightAuthor ? safe.split(esc(S.highlightAuthor)).join(`<strong>${esc(S.highlightAuthor)}</strong>`) : safe;
  };

  function renderPubs(filter) {
    if (!pubs.length) {
      $("pub-list").innerHTML = `<p class="muted empty">Publications and reports will be listed here.</p>`;
      return;
    }
    const shown = filter === "all" ? pubs : pubs.filter((p) => (p.type || "other") === filter);
    const byYear = {};
    shown.forEach((p) => (byYear[p.year || "Undated"] ||= []).push(p));
    const years = Object.keys(byYear).sort((a, b) => b - a);

    $("pub-list").innerHTML = years
      .map(
        (y) => `
        <div class="pub-year">
          <h3 class="year">${esc(y)}</h3>
          <ol class="pubs">
            ${byYear[y]
              .map(
                (p, i) => `
              <li class="pub">
                <span class="badge badge-${esc(p.type || "other")}">${esc(typeLabels[p.type] || "Other")}</span>
                <div>
                  <div class="pub-title">${esc(p.title)}</div>
                  <div class="pub-authors">${highlight(p.authors)}</div>
                  <div class="pub-venue">${esc(p.venue)}</div>
                  <div class="links">
                    ${linkList(p.links)}
                    ${p.bibtex ? `<button class="pill-link" data-bib="${y}-${i}">BibTeX</button>` : ""}
                  </div>
                  ${p.bibtex ? `<pre class="bibtex" id="bib-${y}-${i}" hidden>${esc(p.bibtex)}</pre>` : ""}
                </div>
              </li>`
              )
              .join("")}
          </ol>
        </div>`
      )
      .join("");
  }

  if (types.length > 1) {
    $("pub-filters").innerHTML = ["all", ...types]
      .map((t) => `<button role="tab" data-filter="${t}" class="${t === "all" ? "active" : ""}">${t === "all" ? "All" : typeLabels[t] || t}</button>`)
      .join("");
    $("pub-filters").addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      $("pub-filters").querySelectorAll("button").forEach((x) => x.classList.toggle("active", x === b));
      renderPubs(b.dataset.filter);
    });
  }
  $("pub-list").addEventListener("click", (e) => {
    const b = e.target.closest("[data-bib]");
    if (!b) return;
    const pre = $("bib-" + b.dataset.bib);
    pre.hidden = !pre.hidden;
  });
  renderPubs("all");

  // ---------- Resume ----------
  if (S.cvPdf)
    $("cv-download").innerHTML = `<a class="btn primary" href="${esc(S.cvPdf)}" target="_blank" rel="noopener">Download full CV (PDF)</a>`;

  // "Label | text" bullets render the label in bold
  const bullet = (b) => {
    const i = b.indexOf(" | ");
    return i < 0 ? `<li>${esc(b)}</li>` : `<li><strong>${esc(b.slice(0, i))}.</strong> ${esc(b.slice(i + 3))}</li>`;
  };

  hideIfEmpty("experience-block", S.experience);
  $("experience").innerHTML = (S.experience || [])
    .map(
      (e) => `
      <div class="tl-item">
        <div class="tl-head"><strong>${esc(e.role)}</strong><span class="muted small">${esc(e.period)}</span></div>
        <div class="muted">${esc(e.organization)}</div>
        ${e.summary ? `<p>${esc(e.summary)}</p>` : ""}
        ${e.bullets && e.bullets.length ? `<ul>${e.bullets.map(bullet).join("")}</ul>` : ""}
      </div>`
    )
    .join("");

  hideIfEmpty("education-block", S.education);
  $("education").innerHTML = (S.education || [])
    .map(
      (e) => `
      <div class="tl-item">
        <div class="tl-head"><strong>${esc(e.degree)}</strong><span class="muted small">${esc(e.period)}</span></div>
        <div class="muted">${esc(e.institution)}</div>
        ${e.details ? `<p>${esc(e.details)}</p>` : ""}
      </div>`
    )
    .join("");

  hideIfEmpty("awards-block", S.awards);
  $("awards").innerHTML = (S.awards || [])
    .map((a) => `<li><strong>${esc(a.title)}</strong><span class="muted small">${esc([a.org, a.year].filter(Boolean).join(", "))}</span></li>`)
    .join("");

  hideIfEmpty("talks-block", S.talks);
  $("talks").innerHTML = (S.talks || [])
    .map((t) => `<li><strong>${esc(t.title)}</strong><span class="muted small">${esc([t.event, t.date].filter(Boolean).join(", "))}</span></li>`)
    .join("");

  hideIfEmpty("skills-block", S.skills);
  $("skills").innerHTML = (S.skills || [])
    .map((s) => `<div class="skill"><div class="small muted">${esc(s.category)}</div><ul class="chips small">${s.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>`)
    .join("");

  // ---------- Contact / footer ----------
  $("contact-text").innerHTML = S.email
    ? `The best way to reach me is by email at <a href="mailto:${esc(S.email)}">${esc(S.email)}</a>.${S.location ? ` Based in ${esc(S.location)}.` : ""}`
    : "";
  $("contact-links").innerHTML = (S.links || [])
    .map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a></li>`)
    .join("");
  $("footer").innerHTML = `&copy; ${new Date().getFullYear()} ${esc(S.name)}`;
  document.title = S.name;

  // ---------- Theme toggle ----------
  const root = document.documentElement;
  try {
    const saved = localStorage.getItem("theme");
    if (saved) root.dataset.theme = saved;
  } catch (_) {}
  $("theme-toggle").addEventListener("click", () => {
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    document.querySelectorAll(".visual-frame iframe").forEach(syncFrame);
    try {
      localStorage.setItem("theme", root.dataset.theme);
    } catch (_) {}
  });

  // ---------- Mobile menu ----------
  const toggle = $("menu-toggle");
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", open);
  });
  $("nav").addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();
