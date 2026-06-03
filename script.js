// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateBtn();

function updateBtn() {
    if (themeToggle) {
        themeToggle.textContent = html.getAttribute('data-theme') === 'dark' ? 'Morning Ed.' : 'Evening Ed.';
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateBtn();
    });
}

// Smooth scroll for section nav
document.querySelectorAll('.section-nav a').forEach(a => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ── Config Population ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (typeof USER_CONFIG === 'undefined') return;
  populateSimpleFields(USER_CONFIG);
  populateLists(USER_CONFIG);
});

function populateSimpleFields(cfg) {
  document.querySelectorAll('[data-config]').forEach(el => {
    const key = el.dataset.config;
    if (cfg[key] !== undefined) el.textContent = cfg[key];
  });
  if (cfg.name) document.title = `${cfg.name}${cfg.nameZh ? ' (' + cfg.nameZh + ')' : ''} | Academic Homepage`;
  // Profile photo
  if (cfg.photo) {
    const ph = document.querySelector('.hero-photo');
    if (ph) ph.innerHTML = `<img src="${cfg.photo}" alt="${cfg.name}">`;
  }
}

function boldName(authors, name) {
  if (!name) return authors;
  return authors.replace(name, `<strong>${name}</strong>`);
}

// Nicer labels for publication link buttons
const LINK_LABELS = { pdf: 'PDF', code: 'Code', arxiv: 'arXiv', openreview: 'OpenReview', slides: 'Slides', poster: 'Poster', bib: 'BibTeX', project: 'Project', data: 'Data', demo: 'Demo' };

function populateLists(cfg) {
  // ── Research focus areas (front-page sidebar) ──
  const focus = document.getElementById('cfg-focus');
  if (focus && cfg.focusAreas?.length) {
    focus.innerHTML = cfg.focusAreas.map(a => `<li>${a}</li>`).join('');
  }

  // ── Publications (as news articles) ──
  const artCols = document.getElementById('cfg-publications');
  if (artCols && cfg.publications?.length) {
    artCols.innerHTML = cfg.publications.map(p => `
      <article class="news-article">
        <h4 class="article-headline">${p.title}</h4>
        <p class="article-byline">${boldName(p.authors, cfg.name)}</p>
        <p class="article-source">${p.venue}</p>
        ${p.abstract ? `<p class="article-body">${p.abstract}</p>` : ''}
        <div class="article-links">${Object.entries(p.links||{}).map(([k,v])=>`<a href="${v}" target="_blank" rel="noopener">[${LINK_LABELS[k]||k.toUpperCase()}]</a>`).join(' ')}</div>
      </article>`).join('');
  }

  // ── Projects (only if any configured) ──
  const classifieds = document.getElementById('cfg-projects');
  if (classifieds && cfg.projects?.length) {
    classifieds.innerHTML = cfg.projects.map(p => `
      <div class="classified-ad">
        <h5 class="ad-title">★ ${p.name}</h5>
        <p class="ad-body">${p.desc}</p>
        <p class="ad-tags">${(p.tags||[]).join(' · ')}</p>
      </div>`).join('');
  }

  // ── News (bulletin board) ──
  const bulletin = document.getElementById('cfg-news');
  if (bulletin && cfg.news?.length) {
    bulletin.innerHTML = cfg.news.map(n => `
      <div class="bulletin-item">
        <span class="bulletin-date">${n.date}</span>
        <span class="bulletin-badge">${n.badge.toUpperCase()}</span>
        <span class="bulletin-text">${n.text}</span>
      </div>`).join('');
  }

  // ── Education / Experience ──
  // Section banner already says "Education"; only add inner sub-headers when BOTH exist.
  const career = document.getElementById('cfg-experience');
  if (career) {
    const edu = cfg.education||[], exp = cfg.experience||[];
    const both = edu.length && exp.length;
    let out = '';
    if (edu.length) out += `<div class="career-block">${both ? '<h5 class="career-cat">EDUCATION</h5>' : ''}${edu.map(e=>`<div class="career-entry"><span class="career-period">${e.period}</span><strong>${e.degree}</strong><span class="career-place">${e.institution}</span></div>`).join('')}</div>`;
    if (exp.length) out += `<div class="career-block">${both ? '<h5 class="career-cat">EXPERIENCE</h5>' : ''}${exp.map(e=>`<div class="career-entry"><span class="career-period">${e.period}</span><strong>${e.role}</strong><span class="career-place">${e.institution}</span></div>`).join('')}</div>`;
    if (out) career.innerHTML = out;
  }

  // ── Honors & awards (reuses career styling) ──
  const honors = document.getElementById('cfg-honors');
  if (honors && cfg.honors?.length) {
    honors.innerHTML = `<div class="career-block">${cfg.honors.map(h=>`<div class="career-entry"><span class="career-period">${h.year}</span><strong>${h.title}</strong></div>`).join('')}</div>`;
  }
}
