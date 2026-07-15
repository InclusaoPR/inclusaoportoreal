// ── MENU MOBILE ──────────────────────────────────────────────────────────────
function toggleMenu() {
  var menu = document.getElementById('nav-mobile');
  menu.classList.toggle('aberto');
}

document.addEventListener('click', function(e) {
  var menu = document.getElementById('nav-mobile');
  var hamburger = document.querySelector('.nav-hamburger');
  if (menu && hamburger && !menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove('aberto');
  }
});

// ── COOKIE CONSENT ────────────────────────────────────────────────────────────
function setCookie(name, value, days) {
  var date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = name + '=' + value + '; expires=' + date.toUTCString() + '; path=/; SameSite=Lax';
}

function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
  }
  return null;
}

function carregarGA() {
  if (document.getElementById('ga-script')) return;
  var s1 = document.createElement('script');
  s1.id = 'ga-script';
  s1.async = true;
  s1.src = 'https://www.googletagmanager.com/gtag/js?id=G-DQYVE7B82S';
  document.head.appendChild(s1);
  s1.onload = function() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-DQYVE7B82S');
  };
}

function aceitarCookies() {
  setCookie('iipr-consent', 'aceito', 365);
  var b = document.getElementById('cookie-banner');
  if (b) b.style.display = 'none';
  carregarGA();
}

function recusarCookies() {
  setCookie('iipr-consent', 'recusado', 365);
  window['ga-disable-G-DQYVE7B82S'] = true;
  var b = document.getElementById('cookie-banner');
  if (b) b.style.display = 'none';
}

function configurarCookies() {
  setCookie('iipr-consent', '', -1);
  var b = document.getElementById('cookie-banner');
  if (b) b.style.display = 'flex';
}

(function() {
  var consent = getCookie('iipr-consent');
  if (consent === 'aceito') {
    var b = document.getElementById('cookie-banner');
    if (b) b.style.display = 'none';
    carregarGA();
  } else if (consent === 'recusado') {
    window['ga-disable-G-DQYVE7B82S'] = true;
    var b = document.getElementById('cookie-banner');
    if (b) b.style.display = 'none';
  }
})();
