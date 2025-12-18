const qs = (s, el = document) => el.querySelector(s);
const qsa = (s, el = document) => Array.from(el.querySelectorAll(s));

const menuBtn = qs('#menuBtn');
const mobileMenu = qs('#mobileMenu');

const setMenu = (open) => {
  if (!menuBtn || !mobileMenu) return;
  menuBtn.setAttribute('aria-expanded', String(open));
  mobileMenu.hidden = !open;
};

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const open = menuBtn.getAttribute('aria-expanded') === 'true';
    setMenu(!open);
  });

  qsa('a', mobileMenu).forEach((a) => {
    a.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
  });
}

const yearEl = qs('#year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
