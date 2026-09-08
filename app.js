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
    title: '『𝖃』𝑵𝑬𝑻𝑾𝑶𝑹𝑲 𝙰𝚛𝚌𝚑𝚒𝚟𝚎',
    subtitle: 'انیمه · فیلم · سریال · دنیاها · شخصیت‌ها',
    searchPlaceholder: 'جست‌وجوی بایگانی...',
    characterSearchPlaceholder: 'جست‌وجوی شخصیت...',
    empty: 'موردی یافت نشد.',
    emptyCharacters: 'شخصیتی برای این آرشیو وجود ندارد.',
    loadError: 'بایگانی بارگذاری نشد. characters.json را بررسی کنید.',
    back: 'بازگشت',
    dossier: 'مشخصات شخصیت',
    abilities: 'توانایی‌ها',
    trivia: 'نکات جالب',
    networkNav: 'شبکه XZONE',
    themeLight: 'حالت روشن',
    themeDark: 'حالت تاریک',
    langBtn: 'EN',
    footerTagline: 'One Network • Infinite Worlds',
    info: 'اطلاعات',
    episodes: 'قسمت‌ها',
    characters: 'شخصیت‌ها',
    voiceActors: 'صداپیشگان',
    movies: 'فیلم‌ها',
    timeline: 'خط زمانی',
    gallery: 'گالری',
    related: 'مرتبط',
    unavailable: 'این بخش هنوز برای این آرشیو تکمیل نشده است.',
    archiveKind: 'آرشیو',
    characterArchive: 'شخصیت‌های این دنیا',
    spoilerTitle: '⚠️ هشدار اسپویلر',
    spoilerConfirm: 'اسپویلرهای این شخصیت را می‌پذیرم و می‌خواهم ادامه دهم.',
    continue: 'مشاهده شخصیت',
    cancel: 'لغو',
  },
  en: {
    title: '『𝖃』𝑵𝑬𝑻𝑾𝙊𝚁𝙺 𝙰𝚛𝚌𝚑𝚒𝚟𝚎',
    subtitle: 'Anime · Movies · Series · Worlds · Characters',
    searchPlaceholder: 'Search the archive…',
    characterSearchPlaceholder: 'Search characters…',
    empty: 'Nothing found.',
    emptyCharacters: 'No characters are available for this archive yet.',
    loadError: 'Could not load the archive. Please check characters.json.',
    back: 'Back',
    dossier: 'Character Profile',
    abilities: 'Abilities',
    trivia: 'Trivia',
    networkNav: 'XZONE Network',
    themeLight: 'Light mode',
    themeDark: 'Dark mode',
    langBtn: 'فا',
    footerTagline: 'One Network • Infinite Worlds',
    info: 'Info',
    episodes: 'Episodes',
    characters: 'Characters',
    voiceActors: 'Voice Actors',
    movies: 'Movies',
    timeline: 'Timeline',
    gallery: 'Gallery',
    related: 'Related',
    unavailable: 'This section has not been completed for this archive yet.',
    archiveKind: 'Archive',
    characterArchive: 'Characters from this world',
    spoilerTitle: '⚠️ Spoiler Warning',
    spoilerConfirm: 'I understand the spoilers and want to continue.',
    continue: 'View Character',
    cancel: 'Cancel',
  }
};
function t(key) { return STRINGS[LANG][key]; }

/* ---------- XZONE Network article content ---------- */
const NETWORK = {
  fa: {
    eyebrow: 'مرکز شبکه', title: 'شبکه XZONE', subtitle: 'One Network • Infinite Worlds ♾️',
    intro: ['فندوم‌ها همیشه بزرگ بوده‌اند؛ اما وقتی از هم جدا باشند، قدرت واقعی آن‌ها دیده نمی‌شود.','🔥 شبکه XZONE برای تغییر همین موضوع ساخته شده است.','ما نمی‌خواهیم فقط یک شبکه از کانال‌ها باشیم. ما می‌خواهیم فندوم‌ها را به یکدیگر متصل کنیم، به آن‌ها نظم بدهیم و قدرت همکاری آن‌ها را آزاد کنیم.','ما از یک فندوم شروع می‌کنیم، اما هدف ما ساختن چیزی است که از مرز یک فندوم فراتر برود. 🌌'],
    missionTitle: '🎯 مأموریت ما', missionBody: ['هدف XZONE ساده است: ساختن یک جامعه و اکوسیستم بزرگ که زندگی فندوم‌ها را آسان‌تر، منظم‌تر و لذت‌بخش‌تر کند.','از دسترسی سریع و منظم به محتوا و اخبار، تا گفت‌وگو، ارتباط، ایده‌پردازی و همکاری با طرفدارانی که علایق مشترک دارند.','اما این تنها قدم اول است. 🚀'],
    visionTitle: '🌌 چشم‌انداز ما', visionBody: ['تصور کنید فندوم‌های مختلف دیگر فقط جوامعی جدا از یکدیگر نباشند.','تصور کنید بتوانند کنار هم قرار بگیرند، ایده‌های خود را به اشتراک بگذارند، پروژه‌های مشترک بسازند و برای آینده‌ی آثاری که دوست دارند، صدایی قدرتمندتر داشته باشند.','🎬 انیمه‌ها · 🎥 فیلم‌ها · 📺 سریال‌ها · 🌌 و تمام دنیاهایی که دوستشان داریم','از حمایت از آثار موردعلاقه، تا ساخت پروژه‌های طرفداری، ارائه‌ی ایده‌های خلاقانه، و تلاش برای شکل‌گیری دنباله‌ها، اسپین‌آف‌ها، بازسازی‌ها، اقتباس‌ها و پروژه‌های جدید برای آثاری که دوستشان داریم.','شبکه XZONE می‌خواهد پلی باشد میان فندوم‌هایی که امروز از هم جدا هستند؛ اما فردا می‌توانند در کنار یکدیگر چیزی بسیار بزرگ‌تر بسازند. 🤝'],
    pillars: [{icon:'💬',label:'ارتباط'},{icon:'🤝',label:'همکاری'},{icon:'💡',label:'خلاقیت'},{icon:'📚',label:'نظم'},{icon:'🚀',label:'پیشرفت'}],
    quote: '«یک فندوم می‌تواند صدایی ایجاد کند. اما فندوم‌های متحد می‌توانند آن صدا را به نیرویی واقعی تبدیل کنند. 🔥»',
    closing: 'این فقط یک شبکه نیست. این آغاز یک اتحاد است. 🌐⚡', channelsTitle:'کانال‌های شبکه', channelsIntro:'هر کانال، یک جهان متفاوت. همه‌ی آن‌ها، زیرمجموعه‌ی یک شبکه.',
    channels:[{icon:'🌐',name:'مرکز شبکه',handle:'@XZ_Network'},{icon:'🐉',name:'Dragon Ball',handle:'@XZ_DragonBall'},{icon:'🌌',name:'Multiverse',handle:'@XZ_Multiverse'},{icon:'⚔️',name:'Demon Slayer',handle:'@XZ_DemonSlayer'},{icon:'⚔️',name:'Bleach',handle:'@XZ_Bleach'},{icon:'🏴‍☠️',name:'One Piece',handle:'@XZ_OnePiece'},{icon:'🍥',name:'Naruto',handle:'@XZ_Naruto'},{icon:'👁️',name:'Jujutsu Kaisen',handle:'@XZ_JujutsuKaisen'},{icon:'🩸',name:'Invincible',handle:'@XZ_Invincible'},{icon:'🧙‍♂️',name:'Lord of the Rings',handle:'@XZ_LordOfTheRings'},{icon:'🌍',name:'Universal Group Chat',handle:'@XZONE_Topic'}],
    cta:'✨ عضو XZONE شو؛ دنیای موردعلاقه‌ات را انتخاب کن.'
  },
  en: {
    eyebrow:'Network Hub', title:'XZONE Network', subtitle:'One Network • Infinite Worlds ♾️',
    intro:['Fandoms have always been vast — but scattered apart, their real power stays hidden.','🔥 XZONE Network exists to change that.',"We don't want to be just another network of channels. We want to connect fandoms, bring them order, and unlock the power of working together.","We're starting with one fandom, but our goal reaches far beyond the borders of just one. 🌌"],
    missionTitle:'🎯 Our Mission', missionBody:["XZONE's goal is simple: build a large community and ecosystem that makes fandom life easier, more organized, and more enjoyable.",'From fast, organized access to content and news, to discussion, connection, brainstorming, and collaboration with fans who share your interests.',"But that's only the first step. 🚀"],
    visionTitle:'🌌 Our Vision', visionBody:['Imagine different fandoms no longer existing as separate, isolated communities.','Imagine them standing side by side, sharing ideas, building projects together, and having a stronger voice in shaping the future of the stories they love.','🎬 Anime · 🎥 Movies · 📺 TV Series · 🌌 and every world we love','From supporting the stories we love, to building fan projects, pitching creative ideas, and pushing for sequels, spin-offs, remakes, adaptations, and new projects for the works we care about.','XZONE wants to be the bridge between fandoms that are separate today, but could build something far bigger together tomorrow. 🤝'],
    pillars:[{icon:'💬',label:'Connection'},{icon:'🤝',label:'Collaboration'},{icon:'💡',label:'Creativity'},{icon:'📚',label:'Order'},{icon:'🚀',label:'Progress'}],
    quote:'"One fandom can raise a voice. But united fandoms can turn that voice into real power. 🔥"', closing:"This isn't just a network. It's the beginning of an alliance. 🌐⚡", channelsTitle:'Network Channels', channelsIntro:'Every channel is a different world. All of them, part of one network.',
    channels:[{icon:'🌐',name:'Network Hub',handle:'@XZ_Network'},{icon:'🐉',name:'Dragon Ball',handle:'@XZ_DragonBall'},{icon:'🌌',name:'Multiverse',handle:'@XZ_Multiverse'},{icon:'⚔️',name:'Demon Slayer',handle:'@XZ_DemonSlayer'},{icon:'⚔️',name:'Bleach',handle:'@XZ_Bleach'},{icon:'🏴‍☠️',name:'One Piece',handle:'@XZ_OnePiece'},{icon:'🍥',name:'Naruto',handle:'@XZ_Naruto'},{icon:'👁️',name:'Jujutsu Kaisen',handle:'@XZ_JujutsuKaisen'},{icon:'🩸',name:'Invincible',handle:'@XZ_Invincible'},{icon:'🧙‍♂️',name:'Lord of the Rings',handle:'@XZ_LordOfTheRings'},{icon:'🌍',name:'Universal Group Chat',handle:'@XZONE_Topic'}],
    cta:'✨ Join XZONE — pick your favorite world.'
  }
};

/* ---------- data ---------- */
let DATA = { characters: [] };
const app = document.getElementById('app');

/* Archive is intentionally schema-first: add more works here later without changing the UI. */
const ARCHIVE = [
  {
    id: 'dragon-ball', kind: 'anime', icon: '🐉', colorClass: 'dragon', cover: 'goku-cover.jpg',
    title: { fa: 'دراگون بال', en: 'Dragon Ball' },
    subtitle: { fa: 'جهان سایان‌ها، اژدها و نبردهای کیهانی', en: 'Saiyans, Dragon Balls, and cosmic battles' },
    tags: ['DragonBall','DragonBallZ','DragonBallSuper'],
    characters: ['goku'],
    tabs: ['info','episodes','characters','voiceActors','movies','timeline','gallery','related'],
    info: {
      fa: ['این کارت در حال حاضر بر پایه‌ی داده‌ی شخصیت‌های موجود در آرشیو ساخته شده است. بخش‌های اپیزودها، فیلم‌ها و صداپیشگان را می‌توان به همین ساختار اضافه کرد.','صفحه‌ی شخصیت‌ها اکنون برای سون گوکو دارای پرونده‌ی کامل و چندبخشی است.'],
      en: ['This archive card currently uses the character data already present in the library. Episodes, movies, and voice-actor records can be added to the same structure.','The Characters section currently includes a detailed multi-section profile for Son Goku.']
    }
  },
  {
    id: 'lord-of-the-rings', kind: 'movie', icon: '🧙🏻‍♂️', colorClass: 'lotr', cover: 'gandalf-cover.jpeg',
    title: { fa: 'ارباب حلقه‌ها', en: 'The Lord of the Rings' },
    subtitle: { fa: 'سرزمین میانه و افسانه‌های آن', en: 'Middle-earth and its legends' },
    tags: ['LOTR','MiddleEarth','LordOfTheRings'],
    characters: ['gandalf'],
    tabs: ['info','episodes','characters','voiceActors','movies','timeline','gallery','related'],
    info: {
      fa: ['این آرشیو از داده‌ی فعلی شخصیت گندالف استفاده می‌کند. اطلاعات گسترده‌تر درباره‌ی فیلم‌ها، شخصیت‌های دیگر و صداپیشگان را می‌توان بعداً به فایل آرشیو اضافه کرد.'],
      en: ['This archive currently uses the existing Gandalf character profile. More movie, character, and voice-actor records can be added later to the archive data.']
    }
  }
];

fetch('characters.json')
  .then(r => r.json())
  .then(data => { DATA = data; render(); })
  .catch(err => {
    app.innerHTML = `<p style="padding:40px 20px;text-align:center;">${t('loadError')}</p>`;
    console.error(err);
  });

window.addEventListener('hashchange', render);

function loc(c) {
  if (LANG === 'en' && c.translations && c.translations.en) return Object.assign({}, c, c.translations.en);
  return c;
}

function controlsHTML() {
  return `<div class="controls"><button class="ctrl-btn" id="theme-btn" aria-label="theme">${THEME === 'dark' ? '☀️' : '🌙'}</button><button class="ctrl-btn lang-btn" id="lang-btn" aria-label="language">${t('langBtn')}</button></div>`;
}

function bindControls() {
  const themeBtn = document.getElementById('theme-btn');
  const langBtn = document.getElementById('lang-btn');
  if (themeBtn) themeBtn.addEventListener('click', () => { setTheme(THEME === 'dark' ? 'light' : 'dark'); themeBtn.textContent = THEME === 'dark' ? '☀️' : '🌙'; });
  if (langBtn) langBtn.addEventListener('click', () => setLang(LANG === 'fa' ? 'en' : 'fa'));
}

function getChar(id) { return DATA.characters.find(c => c.id === id); }
function getArchive(id) { return ARCHIVE.find(a => a.id === id); }

/* ---------- router ---------- */
function render() {
  const hash = location.hash;
  if (!hash || hash === '#') { renderArchiveList(); return; }
  if (hash === '#/network') { renderNetwork(); return; }

  const parts = hash.slice(2).split('/').filter(Boolean).map(decodeURIComponent);
  if (parts[0] === 'work') {
    const archive = getArchive(parts[1]);
    if (archive) { renderArchive(archive, parts[2] || 'info'); return; }
  }
  if (parts[0] === 'character') {
    const char = getChar(parts[1]);
    if (char) { renderDetail(loc(char), parts[1]); return; }
  }
  /* Backward compatibility with the original #/goku and #/gandalf routes. */
  const legacy = getChar(parts[0]);
  if (legacy) { renderDetail(loc(legacy), parts[0]); return; }
  renderArchiveList();
}

/* ---------- archive list ---------- */
function renderArchiveList(filterText = '') {
  if (tg) tg.BackButton.hide();
  const q = filterText.trim().toLowerCase();
  const items = ARCHIVE.filter(a => {
    if (!q) return true;
    const hay = [a.title.fa, a.title.en, a.subtitle.fa, a.subtitle.en, a.kind, ...a.tags].join(' ').toLowerCase();
    return hay.includes(q);
  });
  const cards = items.map(a => `
    <div class="archive-card ${a.colorClass}" data-id="${a.id}" tabindex="0" role="button">
      <div class="archive-cover">${a.cover ? `<img src="${a.cover}" alt="${a.title[LANG]}">` : `<div class="archive-icon">${a.icon}</div>`}</div>
      <div class="archive-card-body"><div class="archive-kind">${a.icon} ${t('archiveKind')}</div><div class="archive-title">${a.title[LANG]}</div><div class="archive-subtitle">${a.subtitle[LANG]}</div><div class="archive-tags">${a.tags.map(x => '#' + x).join(' ')}</div></div>
      <div class="archive-chevron">${LANG === 'fa' ? '‹' : '›'}</div>
    </div>`).join('');
  app.innerHTML = `<div class="page"><div class="masthead">${controlsHTML()}<h1>${t('title')}</h1><div class="sub">${t('subtitle')}</div><button class="network-pill" id="network-nav">🌐 ${t('networkNav')}</button></div><div class="search"><input id="search-input" type="text" placeholder="${t('searchPlaceholder')}" value="${escapeAttr(filterText)}"></div><div class="list archive-list">${items.length ? cards : `<div class="empty">${t('empty')}</div>`}</div></div>`;
  bindControls();
  document.getElementById('network-nav').addEventListener('click', () => { location.hash = '#/network'; });
  document.querySelectorAll('.archive-card').forEach(el => {
    const go = () => { el.classList.add('is-opening'); setTimeout(() => { location.hash = '#/work/' + el.dataset.id + '/info'; }, 120); };
    el.addEventListener('click', go); el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
  });
  const input = document.getElementById('search-input');
  input.addEventListener('input', () => renderArchiveList(input.value));
  input.focus({ preventScroll: true });
}

/* ---------- archive/work page ---------- */
function renderArchive(archive, tab) {
  if (tg) { tg.BackButton.show(); tg.BackButton.onClick(goBack); }
  const validTab = archive.tabs.includes(tab) ? tab : 'info';
  const tabs = archive.tabs.map(key => `<button class="archive-tab ${validTab === key ? 'active' : ''}" data-tab="${key}">${t(key)}</button>`).join('');
  const chars = archive.characters.map(getChar).filter(Boolean).map(loc);

  let content = '';
  if (validTab === 'characters') {
    content = `
      <section class="block archive-section"><div class="section-kicker">${archive.icon} ${t('characters')}</div><h2>${t('characterArchive')}</h2>
      <div class="character-grid">${chars.map(c => `<div class="character-card" data-char-id="${c.id}" tabindex="0" role="button"><img src="${c.cover}" alt="${c.name}"><div><div class="character-name">${c.name}</div><div class="character-role">${c.byline || c.latin || ''}</div><div class="character-tags">${(c.tags || []).slice(0,4).map(x => '#' + x).join(' ')}</div></div><span class="character-arrow">${LANG === 'fa' ? '‹' : '›'}</span></div>`).join('') || `<div class="empty">${t('emptyCharacters')}</div>`}</div>
      </section>`;
  } else if (validTab === 'info') {
    content = `<section class="block archive-section"><div class="section-kicker">${archive.icon} ${t('info')}</div><h2>${archive.title[LANG]}</h2>${archive.info[LANG].map(p => `<p>${p}</p>`).join('')}</section>`;
  } else {
    content = `<section class="block archive-section"><div class="section-kicker">${archive.icon} ${t(validTab)}</div><h2>${t(validTab)}</h2><div class="empty archive-empty">${t('unavailable')}</div></section>`;
  }

  app.innerHTML = `<div class="page detail archive-detail"><div class="detail-top"><button class="back" id="back-btn">${LANG === 'fa' ? '→' : '←'} ${t('back')}</button>${controlsHTML()}</div><div class="archive-hero"><div class="archive-hero-image">${archive.cover ? `<img src="${archive.cover}" alt="${archive.title[LANG]}">` : `<div class="archive-icon large">${archive.icon}</div>`}</div><div class="archive-hero-copy"><div class="eyebrow">${t('archiveKind')} · ${archive.kind}</div><h1>${archive.title[LANG]}</h1><p>${archive.subtitle[LANG]}</p><div class="hero-tags">${archive.tags.map(x => '#' + x).join(' ')}</div></div></div><nav class="archive-tabs" aria-label="${t('archiveKind')}">${tabs}</nav>${content}<footer class="site"><div class="sigil" id="footer-network">『𝚇𝚉𝙾𝙽𝙴◇𝙽𝙴𝚃𝚆𝙾𝚁𝙺』</div><div class="network">XZONE NETWORK</div><div class="tagline">${t('footerTagline')} — 🌐 @XZ_Network</div></footer></div>`;

  bindControls();
  document.getElementById('back-btn').addEventListener('click', goBack);
  document.getElementById('footer-network').addEventListener('click', () => { location.hash = '#/network'; });
  document.querySelectorAll('.archive-tab').forEach(btn => btn.addEventListener('click', () => { location.hash = `#/work/${archive.id}/${btn.dataset.tab}`; window.scrollTo(0,0); }));
  document.querySelectorAll('.character-card').forEach(el => {
    const open = () => openSpoilerGate(el.dataset.charId, archive.id);
    el.addEventListener('click', open); el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
  window.scrollTo(0,0);
}

/* ---------- spoiler gate ---------- */
function openSpoilerGate(charId, archiveId) {
  const c = loc(getChar(charId));
  if (!c) return;
  if (!c.notice) { location.hash = `#/character/${charId}`; return; }
  const existing = document.getElementById('spoiler-modal');
  if (existing) existing.remove();
  const title = LANG === 'fa' ? `ورود به پرونده‌ی ${c.name}` : `Open ${c.name}'s profile`;
  const text = c.notice.text || (LANG === 'fa' ? 'این صفحه شامل اطلاعات داستانی مهم است.' : 'This profile contains major story information.');
  document.body.insertAdjacentHTML('beforeend', `
    <div class="spoiler-modal" id="spoiler-modal" role="dialog" aria-modal="true" aria-labelledby="spoiler-title">
      <div class="spoiler-backdrop" data-close="1"></div>
      <div class="spoiler-dialog">
        <div class="spoiler-icon">⚠️</div><h2 id="spoiler-title">${t('spoilerTitle')}</h2>
        <h3>${title}</h3><p>${text}</p>
        <label class="spoiler-check"><input type="checkbox" id="spoiler-confirm"><span>${t('spoilerConfirm')}</span></label>
        <div class="spoiler-actions"><button class="modal-cancel" id="spoiler-cancel">${t('cancel')}</button><button class="modal-continue" id="spoiler-continue" disabled>${t('continue')}</button></div>
      </div>
    </div>`);
  const modal = document.getElementById('spoiler-modal');
  const check = document.getElementById('spoiler-confirm');
  const proceed = document.getElementById('spoiler-continue');
  const close = () => modal.remove();
  check.addEventListener('change', () => { proceed.disabled = !check.checked; });
  proceed.addEventListener('click', () => { location.hash = `#/character/${charId}`; close(); });
  document.getElementById('spoiler-cancel').addEventListener('click', close);
  modal.querySelector('.spoiler-backdrop').addEventListener('click', close);
  document.addEventListener('keydown', function onKey(e){ if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onKey); } }, { once: true });
  check.focus();
}

/* ---------- character detail ---------- */
function spoilerBox(spoiler) {
  if (!spoiler) return '';
  const cls = spoiler.level === 'final' ? 'spoiler final' : (spoiler.level === 'warn' ? 'notice' : 'spoiler');
  return `<div class="${cls}"><span class="label">${spoiler.label}</span><p>${spoiler.text}</p></div>`;
}

function renderDetail(c, originalId) {
  if (tg) { tg.BackButton.show(); tg.BackButton.onClick(goBack); }
  const stats = (c.stats || []).map(s => `<div class="row"><dt>${s.label}</dt><dd>${s.value}</dd></div>`).join('');
  const sections = (c.sections || []).map(s => `<section class="block"><h2>${s.icon ? s.icon + ' ' : ''}${s.heading}</h2>${spoilerBox(s.spoiler)}${(s.body || []).map(p => `<p>${p}</p>`).join('')}</section>`).join('');
  const abilities = (c.abilities || []).map(a => `<li><strong>${a.title}</strong>${a.text}</li>`).join('');
  const trivia = (c.trivia || []).map(item => `<li>${item}</li>`).join('');
  app.innerHTML = `<div class="page detail"><div class="detail-top"><button class="back" id="back-btn">${LANG === 'fa' ? '→' : '←'} ${t('back')}</button>${controlsHTML()}</div><div class="hero"><div class="glyph">${c.glyph || '🎭'}</div><h1>${c.name}</h1><div class="latin">${c.latin || ''}</div><div class="byline">${c.byline || ''}</div>${c.quote ? `<div class="quote">${c.quote}</div>` : ''}</div>${c.cover ? `<figure class="cover"><img src="${c.cover}" alt="${c.caption || c.name}">${c.caption ? `<figcaption>${c.caption}</figcaption>` : ''}</figure>` : ''}${c.notice ? `<div class="notice"><span class="label">${c.notice.label}</span><p>${c.notice.text}</p></div>` : ''}${c.stats?.length ? `<div class="rune-divider"><span>🜂</span></div><section class="block"><h2>${t('dossier')}</h2><dl class="dossier">${stats}</dl></section>` : ''}${sections}${c.abilities?.length ? `<div class="rune-divider"><span>⚔️</span></div><section class="block"><h2>${t('abilities')}</h2><ul class="abilities">${abilities}</ul></section>` : ''}${c.trivia?.length ? `<div class="rune-divider"><span>🜏</span></div><section class="block"><h2>${t('trivia')}</h2><ul class="trivia">${trivia}</ul></section>` : ''}<footer class="site"><div class="sigil" id="footer-network">『𝚇𝚉𝙾𝙽𝙴◇𝙽𝙴𝚃𝚆𝙾𝚁𝙺』</div><div class="network">XZONE NETWORK</div><div class="tagline">${t('footerTagline')} — 🌐 @XZ_Network</div><div class="hashtags">${(c.tags || []).map(tag => '#' + tag).join(' ')}</div></footer></div>`;
  bindControls();
  document.getElementById('back-btn').addEventListener('click', goBack);
  document.getElementById('footer-network').addEventListener('click', () => { location.hash = '#/network'; });
  window.scrollTo(0,0);
}

/* ---------- network article view ---------- */
function renderNetwork() {
  if (tg) { tg.BackButton.show(); tg.BackButton.onClick(goBack); }
  const n = NETWORK[LANG];
  const pillars = n.pillars.map(p => `<div class="pillar"><span>${p.icon}</span>${p.label}</div>`).join('');
  const channels = n.channels.map(ch => `<a class="channel" href="https://t.me/${ch.handle.replace('@','')}" target="_blank" rel="noopener"><span class="ch-icon">${ch.icon}</span><span class="ch-name">${ch.name}</span><span class="ch-handle">${ch.handle}</span></a>`).join('');
  app.innerHTML = `<div class="page detail network-page"><div class="detail-top"><button class="back" id="back-btn">${LANG === 'fa' ? '→' : '←'} ${t('back')}</button>${controlsHTML()}</div><div class="hero network-hero"><div class="glyph">🌐</div><div class="eyebrow">${n.eyebrow}</div><h1>${n.title}</h1><div class="latin">${n.subtitle}</div></div><section class="block">${n.intro.map(p => `<p>${p}</p>`).join('')}</section><div class="pillars">${pillars}</div><div class="rune-divider"><span>✦</span></div><section class="block"><h2>${n.missionTitle}</h2>${n.missionBody.map(p => `<p>${p}</p>`).join('')}</section><div class="rune-divider"><span>🜂</span></div><section class="block"><h2>${n.visionTitle}</h2>${n.visionBody.map(p => `<p>${p}</p>`).join('')}</section><div class="quote-block">${n.quote}</div><div class="closing-line">${n.closing}</div><div class="rune-divider"><span>🌐</span></div><section class="block"><h2>${n.channelsTitle}</h2><p class="channels-intro">${n.channelsIntro}</p><div class="channels">${channels}</div></section><div class="cta-line">${n.cta}</div><footer class="site"><div class="sigil">『𝚇𝚉𝙾𝙽𝙴◇𝙽𝙴𝚃𝚆𝙾𝚁𝙺』</div><div class="network">XZONE NETWORK</div><div class="tagline">${n.subtitle}</div></footer></div>`;
  bindControls();
  document.getElementById('back-btn').addEventListener('click', goBack);
  window.scrollTo(0,0);
}

function escapeAttr(v) { return String(v).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function goBack() { location.hash = ''; }
