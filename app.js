const tg = window.Telegram ? window.Telegram.WebApp : null;

/* ---------- persisted state ---------- */
const LS_LANG = 'xzone_lang';
const LS_THEME = 'xzone_theme';

let LANG = localStorage.getItem(LS_LANG) || 'fa';
let THEME = localStorage.getItem(LS_THEME) || 'dark';

const THEME_BG = { dark: '#0B0712', light: '#F5F1FA' };

function applyDocumentAttrs() {
  document.documentElement.lang = LANG === 'fa' ? 'fa' : 'en';
  document.documentElement.dir = LANG === 'fa' ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('data-theme', THEME);
  document.documentElement.setAttribute('data-lang', LANG);
  if (tg) {
    try { tg.setBackgroundColor(THEME_BG[THEME]); tg.setHeaderColor(THEME_BG[THEME]); } catch (e) {}
  }
}
applyDocumentAttrs();

function setLang(l) { LANG = l; localStorage.setItem(LS_LANG, l); applyDocumentAttrs(); render(); }
function setTheme(th) { THEME = th; localStorage.setItem(LS_THEME, th); applyDocumentAttrs(); }

/* ---------- UI strings ---------- */
const STRINGS = {
  fa: {
    title: '『𝖃』𝑵𝑬𝑻𝑾𝑶𝑹𝑲 𝙻𝚒𝚋𝚛𝚊𝚛𝚢',
    subtitle: 'شخصیت‌ها · دنیاها · داستان‌ها',
    searchPlaceholder: 'جست‌وجوی شخصیت...',
    empty: 'شخصیتی یافت نشد.',
    loadError: 'بایگانی بارگذاری نشد. characters.json را بررسی کنید.',
    back: 'بازگشت به فهرست',
    dossier: 'مشخصات شخصیت',
    abilities: 'توانایی‌ها',
    trivia: 'نکات جالب',
    networkNav: 'شبکه XZONE',
    themeLight: 'حالت روشن',
    themeDark: 'حالت تاریک',
    langBtn: 'EN',
    footerTagline: 'One Network • Infinite Worlds',
  },
  en: {
    title: '『𝖃』𝑵𝑬𝑻𝑾𝑶𝑹𝑲 𝙻𝚒𝚋𝚛𝚊𝚛𝚢',
    subtitle: 'Characters · Worlds · Stories',
    searchPlaceholder: 'Search a character…',
    empty: 'No character found.',
    loadError: 'Could not load the archive. Please check characters.json.',
    back: 'Back to list',
    dossier: 'Character Profile',
    abilities: 'Abilities',
    trivia: 'Trivia',
    networkNav: 'XZONE Network',
    themeLight: 'Light mode',
    themeDark: 'Dark mode',
    langBtn: 'فا',
    footerTagline: 'One Network • Infinite Worlds',
  }
};
function t(key) { return STRINGS[LANG][key]; }

/* ---------- XZONE Network article content ---------- */
const NETWORK = {
  fa: {
    eyebrow: 'مرکز شبکه',
    title: 'شبکه XZONE',
    subtitle: 'One Network • Infinite Worlds ♾️',
    intro: [
      'فندوم‌ها همیشه بزرگ بوده‌اند؛ اما وقتی از هم جدا باشند، قدرت واقعی آن‌ها دیده نمی‌شود.',
      '🔥 شبکه XZONE برای تغییر همین موضوع ساخته شده است.',
      'ما نمی‌خواهیم فقط یک شبکه از کانال‌ها باشیم. ما می‌خواهیم فندوم‌ها را به یکدیگر متصل کنیم، به آن‌ها نظم بدهیم و قدرت همکاری آن‌ها را آزاد کنیم.',
      'ما از یک فندوم شروع می‌کنیم، اما هدف ما ساختن چیزی است که از مرز یک فندوم فراتر برود. 🌌'
    ],
    missionTitle: '🎯 مأموریت ما',
    missionBody: [
      'هدف XZONE ساده است: ساختن یک جامعه و اکوسیستم بزرگ که زندگی فندوم‌ها را آسان‌تر، منظم‌تر و لذت‌بخش‌تر کند.',
      'از دسترسی سریع و منظم به محتوا و اخبار، تا گفت‌وگو، ارتباط، ایده‌پردازی و همکاری با طرفدارانی که علایق مشترک دارند.',
      'اما این تنها قدم اول است. 🚀'
    ],
    visionTitle: '🌌 چشم‌انداز ما',
    visionBody: [
      'تصور کنید فندوم‌های مختلف دیگر فقط جوامعی جدا از یکدیگر نباشند.',
      'تصور کنید بتوانند کنار هم قرار بگیرند، ایده‌های خود را به اشتراک بگذارند، پروژه‌های مشترک بسازند و برای آینده‌ی آثاری که دوست دارند، صدایی قدرتمندتر داشته باشند.',
      '🎬 انیمه‌ها · 🎥 فیلم‌ها · 📺 سریال‌ها · 🌌 و تمام دنیاهایی که دوستشان داریم',
      'از حمایت از آثار موردعلاقه، تا ساخت پروژه‌های طرفداری، ارائه‌ی ایده‌های خلاقانه، و تلاش برای شکل‌گیری دنباله‌ها، اسپین‌آف‌ها، بازسازی‌ها، اقتباس‌ها و پروژه‌های جدید برای آثاری که دوستشان داریم.',
      'شبکه XZONE می‌خواهد پلی باشد میان فندوم‌هایی که امروز از هم جدا هستند؛ اما فردا می‌توانند در کنار یکدیگر چیزی بسیار بزرگ‌تر بسازند. 🤝'
    ],
    pillars: [
      { icon: '💬', label: 'ارتباط' }, { icon: '🤝', label: 'همکاری' },
      { icon: '💡', label: 'خلاقیت' }, { icon: '📚', label: 'نظم' },
      { icon: '🚀', label: 'پیشرفت' }
    ],
    quote: '«یک فندوم می‌تواند صدایی ایجاد کند. اما فندوم‌های متحد می‌توانند آن صدا را به نیرویی واقعی تبدیل کنند. 🔥»',
    closing: 'این فقط یک شبکه نیست. این آغاز یک اتحاد است. 🌐⚡',
    channelsTitle: 'کانال‌های شبکه',
    channelsIntro: 'هر کانال، یک جهان متفاوت. همه‌ی آن‌ها، زیرمجموعه‌ی یک شبکه.',
    channels: [
      { icon: '🌐', name: 'مرکز شبکه', handle: '@XZ_Network' },
      { icon: '🐉', name: 'Dragon Ball', handle: '@XZ_DragonBall' },
      { icon: '🌌', name: 'Multiverse', handle: '@XZ_Multiverse' },
      { icon: '⚔️', name: 'Demon Slayer', handle: '@XZ_DemonSlayer' },
      { icon: '⚔️', name: 'Bleach', handle: '@XZ_Bleach' },
      { icon: '🏴‍☠️', name: 'One Piece', handle: '@XZ_OnePiece' },
      { icon: '🍥', name: 'Naruto', handle: '@XZ_Naruto' },
      { icon: '👁️', name: 'Jujutsu Kaisen', handle: '@XZ_JujutsuKaisen' },
      { icon: '🩸', name: 'Invincible', handle: '@XZ_Invincible' },
      { icon: '🧙‍♂️', name: 'Lord of the Rings', handle: '@XZ_LordOfTheRings' },
      { icon: '🌍', name: 'Universal Group Chat', handle: '@XZONE_Topic' }
    ],
    cta: '✨ عضو XZONE شو؛ دنیای موردعلاقه‌ات را انتخاب کن.'
  },
  en: {
    eyebrow: 'Network Hub',
    title: 'XZONE Network',
    subtitle: 'One Network • Infinite Worlds ♾️',
    intro: [
      'Fandoms have always been vast — but scattered apart, their real power stays hidden.',
      '🔥 XZONE Network exists to change that.',
      "We don't want to be just another network of channels. We want to connect fandoms, bring them order, and unlock the power of working together.",
      "We're starting with one fandom, but our goal reaches far beyond the borders of just one. 🌌"
    ],
    missionTitle: '🎯 Our Mission',
    missionBody: [
      "XZONE's goal is simple: build a large community and ecosystem that makes fandom life easier, more organized, and more enjoyable.",
      'From fast, organized access to content and news, to discussion, connection, brainstorming, and collaboration with fans who share your interests.',
      "But that's only the first step. 🚀"
    ],
    visionTitle: '🌌 Our Vision',
    visionBody: [
      'Imagine different fandoms no longer existing as separate, isolated communities.',
      'Imagine them standing side by side, sharing ideas, building projects together, and having a stronger voice in shaping the future of the stories they love.',
      '🎬 Anime · 🎥 Movies · 📺 TV Series · 🌌 and every world we love',
      'From supporting the stories we love, to building fan projects, pitching creative ideas, and pushing for sequels, spin-offs, remakes, adaptations, and new projects for the works we care about.',
      'XZONE wants to be the bridge between fandoms that are separate today, but could build something far bigger together tomorrow. 🤝'
    ],
    pillars: [
      { icon: '💬', label: 'Connection' }, { icon: '🤝', label: 'Collaboration' },
      { icon: '💡', label: 'Creativity' }, { icon: '📚', label: 'Order' },
      { icon: '🚀', label: 'Progress' }
    ],
    quote: '"One fandom can raise a voice. But united fandoms can turn that voice into real power. 🔥"',
    closing: "This isn't just a network. It's the beginning of an alliance. 🌐⚡",
    channelsTitle: 'Network Channels',
    channelsIntro: 'Every channel is a different world. All of them, part of one network.',
    channels: [
      { icon: '🌐', name: 'Network Hub', handle: '@XZ_Network' },
      { icon: '🐉', name: 'Dragon Ball', handle: '@XZ_DragonBall' },
      { icon: '🌌', name: 'Multiverse', handle: '@XZ_Multiverse' },
      { icon: '⚔️', name: 'Demon Slayer', handle: '@XZ_DemonSlayer' },
      { icon: '⚔️', name: 'Bleach', handle: '@XZ_Bleach' },
      { icon: '🏴‍☠️', name: 'One Piece', handle: '@XZ_OnePiece' },
      { icon: '🍥', name: 'Naruto', handle: '@XZ_Naruto' },
      { icon: '👁️', name: 'Jujutsu Kaisen', handle: '@XZ_JujutsuKaisen' },
      { icon: '🩸', name: 'Invincible', handle: '@XZ_Invincible' },
      { icon: '🧙‍♂️', name: 'Lord of the Rings', handle: '@XZ_LordOfTheRings' },
      { icon: '🌍', name: 'Universal Group Chat', handle: '@XZONE_Topic' }
    ],
    cta: '✨ Join XZONE — pick your favorite world.'
  }
};

/* ---------- data ---------- */
let DATA = { characters: [] };
const app = document.getElementById('app');

fetch('characters.json')
  .then(r => r.json())
  .then(data => { DATA = data; render(); })
  .catch(err => {
    app.innerHTML = `<p style="padding:40px 20px;text-align:center;">${t('loadError')}</p>`;
    console.error(err);
  });

window.addEventListener('hashchange', render);

/* Merge a character with its localized translation (if any). */
function loc(c) {
  if (LANG === 'en' && c.translations && c.translations.en) {
    return Object.assign({}, c, c.translations.en);
  }
  return c;
}

/* ---------- shared header controls ---------- */
function controlsHTML() {
  return `
    <div class="controls">
      <button class="ctrl-btn" id="theme-btn" aria-label="theme">${THEME === 'dark' ? '☀️' : '🌙'}</button>
      <button class="ctrl-btn lang-btn" id="lang-btn" aria-label="language">${t('langBtn')}</button>
    </div>
  `;
}

function bindControls() {
  const themeBtn = document.getElementById('theme-btn');
  const langBtn = document.getElementById('lang-btn');
  if (themeBtn) themeBtn.addEventListener('click', () => {
    setTheme(THEME === 'dark' ? 'light' : 'dark');
    themeBtn.textContent = THEME === 'dark' ? '☀️' : '🌙';
  });
  if (langBtn) langBtn.addEventListener('click', () => setLang(LANG === 'fa' ? 'en' : 'fa'));
}

/* ---------- router ---------- */
function render() {
  const hash = location.hash;
  if (hash === '#/network') { renderNetwork(); return; }
  if (hash.startsWith('#/')) {
    const id = decodeURIComponent(hash.slice(2));
    const char = DATA.characters.find(c => c.id === id);
    if (char) { renderDetail(loc(char)); return; }
  }
  renderList();
}

/* ---------- list view ---------- */
function renderList(filterText) {
  if (tg) tg.BackButton.hide();

  const q = (filterText || '').trim().toLowerCase();
  const items = DATA.characters.map(loc).filter(c => {
    if (!q) return true;
    const hay = (c.name + ' ' + (c.byline || '') + ' ' + (c.tags || []).join(' ')).toLowerCase();
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
      <div class="chevron">${LANG === 'fa' ? '‹' : '›'}</div>
    </div>
  `).join('');

  app.innerHTML = `
    <div class="page">
      <div class="masthead">
        ${controlsHTML()}
        <h1>${t('title')}</h1>
        <div class="sub">${t('subtitle')}</div>
        <button class="network-pill" id="network-nav">🌐 ${t('networkNav')}</button>
      </div>
      <div class="search">
        <input id="search-input" type="text" placeholder="${t('searchPlaceholder')}" value="${filterText ? filterText.replace(/"/g, '&quot;') : ''}">
      </div>
      <div class="list">
        ${items.length ? cards : `<div class="empty">${t('empty')}</div>`}
      </div>
    </div>
  `;

  bindControls();
  document.getElementById('network-nav').addEventListener('click', () => { location.hash = '#/network'; });

  document.querySelectorAll('.card').forEach(el => {
    const go = () => {
      el.classList.add('is-opening');
      setTimeout(() => { location.hash = '#/' + el.dataset.id; }, 150);
    };
    el.addEventListener('click', go);
    el.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
  });

  const input = document.getElementById('search-input');
  input.addEventListener('input', () => renderList(input.value));
  input.focus({ preventScroll: true });
}

/* ---------- detail view ---------- */
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

  const trivia = (c.trivia || []).map(item => `<li>${item}</li>`).join('');

  app.innerHTML = `
    <div class="page detail">
      <div class="detail-top">
        <button class="back" id="back-btn">${LANG === 'fa' ? '→' : '←'} ${t('back')}</button>
        ${controlsHTML()}
      </div>
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
        <h2>${t('dossier')}</h2>
        <dl class="dossier">${stats}</dl>
      </section>` : ''}

      ${sections}

      ${c.abilities && c.abilities.length ? `
      <div class="rune-divider"><span>⚔️</span></div>
      <section class="block">
        <h2>${t('abilities')}</h2>
        <ul class="abilities">${abilities}</ul>
      </section>` : ''}

      ${c.trivia && c.trivia.length ? `
      <div class="rune-divider"><span>🜏</span></div>
      <section class="block">
        <h2>${t('trivia')}</h2>
        <ul class="trivia">${trivia}</ul>
      </section>` : ''}

      <footer class="site">
        <div class="sigil" id="footer-network">『𝚇𝚉𝙾𝙽𝙴◇𝙽𝙴𝚃𝚆𝙾𝚁𝙺』</div>
        <div class="network">XZONE NETWORK</div>
        <div class="tagline">${t('footerTagline')} — 🌐 @XZ_Network</div>
        <div class="hashtags">${(c.tags || []).map(tag => '#' + tag).join(' ')}</div>
      </footer>
    </div>
  `;

  bindControls();
  document.getElementById('back-btn').addEventListener('click', goBack);
  document.getElementById('footer-network').addEventListener('click', () => { location.hash = '#/network'; });
  window.scrollTo(0, 0);
}

/* ---------- network article view ---------- */
function renderNetwork() {
  if (tg) {
    tg.BackButton.show();
    tg.BackButton.onClick(goBack);
  }
  const n = NETWORK[LANG];

  const pillars = n.pillars.map(p => `<div class="pillar"><span>${p.icon}</span>${p.label}</div>`).join('');

  const channels = n.channels.map(ch => `
    <a class="channel" href="https://t.me/${ch.handle.replace('@', '')}" target="_blank" rel="noopener">
      <span class="ch-icon">${ch.icon}</span>
      <span class="ch-name">${ch.name}</span>
      <span class="ch-handle">${ch.handle}</span>
    </a>
  `).join('');

  app.innerHTML = `
    <div class="page detail network-page">
      <div class="detail-top">
        <button class="back" id="back-btn">${LANG === 'fa' ? '→' : '←'} ${t('back')}</button>
        ${controlsHTML()}
      </div>

      <div class="hero network-hero">
        <div class="glyph">🌐</div>
        <div class="eyebrow">${n.eyebrow}</div>
        <h1>${n.title}</h1>
        <div class="latin">${n.subtitle}</div>
      </div>

      <section class="block">
        ${n.intro.map(p => `<p>${p}</p>`).join('')}
      </section>

      <div class="pillars">${pillars}</div>

      <div class="rune-divider"><span>✦</span></div>
      <section class="block">
        <h2>${n.missionTitle}</h2>
        ${n.missionBody.map(p => `<p>${p}</p>`).join('')}
      </section>

      <div class="rune-divider"><span>🜂</span></div>
      <section class="block">
        <h2>${n.visionTitle}</h2>
        ${n.visionBody.map(p => `<p>${p}</p>`).join('')}
      </section>

      <div class="quote-block">${n.quote}</div>
      <div class="closing-line">${n.closing}</div>

      <div class="rune-divider"><span>🌐</span></div>
      <section class="block">
        <h2>${n.channelsTitle}</h2>
        <p class="channels-intro">${n.channelsIntro}</p>
        <div class="channels">${channels}</div>
      </section>

      <div class="cta-line">${n.cta}</div>

      <footer class="site">
        <div class="sigil">『𝚇𝚉𝙾𝙽𝙴◇𝙽𝙴𝚃𝚆𝙾𝚁𝙺』</div>
        <div class="network">XZONE NETWORK</div>
        <div class="tagline">${n.subtitle}</div>
      </footer>
    </div>
  `;

  bindControls();
  document.getElementById('back-btn').addEventListener('click', goBack);
  window.scrollTo(0, 0);
}

function goBack() {
  location.hash = '';
}
