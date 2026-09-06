const tg = window.Telegram ? window.Telegram.WebApp : null;
if (tg) {
  tg.ready();
  tg.expand();
  try { tg.setBackgroundColor('#0B0712'); tg.setHeaderColor('#0B0712'); } catch (e) {}
}

let DATA = { characters: [] };
const app = document.getElementById('app');

fetch('characters.json')
  .then(r => r.json())
  .then(data => { DATA = data; render(); })
  .catch(err => {
    app.innerHTML = '<p style="padding:40px 20px;text-align:center;">بایگانی بارگذاری نشد. characters.json را بررسی کنید.</p>';
    console.error(err);
  });

window.addEventListener('hashchange', render);

function render() {
  const hash = location.hash;
  if (hash.startsWith('#/')) {
    const id = decodeURIComponent(hash.slice(2));
    const char = DATA.characters.find(c => c.id === id);
    if (char) { renderDetail(char); return; }
  }
  renderList();
}

function renderList(filterText) {
  if (tg) tg.BackButton.hide();

  const q = (filterText || '').trim().toLowerCase();
  const items = DATA.characters.filter(c => {
    if (!q) return true;
    const hay = (c.name + ' ' + c.byline + ' ' + (c.tags || []).join(' ')).toLowerCase();
    return hay.includes(q);
  });

  const cards = items.map(c => `
    <div class="card" data-id="${c.id}" tabindex="0" role="button">
      <img src="${c.cover}" alt="${c.name}">
      <div class="info">
        <div class="name">${c.name}</div>
        <div class="byline">${c.byline || ''}</div>
        <div class="tags">${(c.tags || []).join(' · ')}</div>
      </div>
    </div>
  `).join('');

  app.innerHTML = `
    <div class="masthead">
      <h1>『𝖃』𝑵𝑬𝑻𝑾𝑶𝑹𝑲 𝙻𝚒𝚋𝚛𝚊𝚛𝚢</h1>
      <div class="sub">شخصیت‌ها · دنیاها · داستان‌ها</div>
    </div>
    <div class="search">
      <input id="search-input" type="text" placeholder="جست‌وجوی شخصیت..." value="${filterText ? filterText.replace(/"/g,'&quot;') : ''}">
    </div>
    <div class="list">
      ${items.length ? cards : '<div class="empty">شخصیتی یافت نشد.</div>'}
    </div>
  `;

  document.querySelectorAll('.card').forEach(el => {
    el.addEventListener('click', () => { location.hash = '#/' + el.dataset.id; });
    el.addEventListener('keydown', e => { if (e.key === 'Enter') location.hash = '#/' + el.dataset.id; });
  });

  const input = document.getElementById('search-input');
  input.addEventListener('input', () => renderList(input.value));
  input.focus({ preventScroll: true });
}

function spoilerBox(spoiler) {
  if (!spoiler) return '';
  const cls = spoiler.level === 'final' ? 'spoiler final' : (spoiler.level === 'warn' ? 'notice' : 'spoiler');
  return `<div class="${cls}"><span class="label">${spoiler.label}</span><p>${spoiler.text}</p></div>`;
}

function renderDetail(c) {
  if (tg) {
    tg.BackButton.show();
    tg.BackButton.onClick(goBack);
  }

  const stats = (c.stats || []).map(s => `
    <div class="row"><dt>${s.label}</dt><dd>${s.value}</dd></div>
  `).join('');

  const sections = (c.sections || []).map(s => `
    <section class="block">
      <h2>${s.icon ? s.icon + ' ' : ''}${s.heading}</h2>
      ${spoilerBox(s.spoiler)}
      ${(s.body || []).map(p => `<p>${p}</p>`).join('')}
    </section>
  `).join('');

  const abilities = (c.abilities || []).map(a => `
    <li><strong>${a.title}</strong>${a.text}</li>
  `).join('');

  const trivia = (c.trivia || []).map(t => `<li>${t}</li>`).join('');

  app.innerHTML = `
    <button class="back" id="back-btn">→ بازگشت به فهرست</button>
    <div class="hero">
      <div class="glyph">${c.glyph || '🎭'}</div>
      <h1>${c.name}</h1>
      <div class="latin">${c.latin || ''}</div>
      <div class="byline">${c.byline || ''}</div>
      ${c.quote ? `<div class="quote">${c.quote}</div>` : ''}
    </div>

    ${c.cover ? `
    <figure class="cover">
      <img src="${c.cover}" alt="${c.caption || c.name}">
      ${c.caption ? `<figcaption>${c.caption}</figcaption>` : ''}
    </figure>` : ''}

    ${c.notice ? `<div class="notice"><span class="label">${c.notice.label}</span><p>${c.notice.text}</p></div>` : ''}

    ${c.stats && c.stats.length ? `
    <div class="rune-divider"><span>🜂</span></div>
    <section class="block">
      <h2>مشخصات شخصیت</h2>
      <dl class="dossier">${stats}</dl>
    </section>` : ''}

    ${sections}

    ${c.abilities && c.abilities.length ? `
    <div class="rune-divider"><span>⚔️</span></div>
    <section class="block">
      <h2>توانایی‌ها</h2>
      <ul class="abilities">${abilities}</ul>
    </section>` : ''}

    ${c.trivia && c.trivia.length ? `
    <div class="rune-divider"><span>🜏</span></div>
    <section class="block">
      <h2>نکات جالب</h2>
      <ul class="trivia">${trivia}</ul>
    </section>` : ''}

    <footer class="site">
      <div class="sigil">『𝚇𝚉𝙾𝙽𝙴◇𝙽𝙴𝚃𝚆𝙾𝚁𝙺』</div>
      <div class="network">XZONE NETWORK</div>
      <div class="tagline">One Network • Infinite Worlds — 🌐 @XZ_Network</div>
      <div class="hashtags">${(c.tags || []).map(t => '#' + t).join(' ')}</div>
    </footer>
  `;

  document.getElementById('back-btn').addEventListener('click', goBack);
  window.scrollTo(0, 0);
}

function goBack() {
  location.hash = '';
}
