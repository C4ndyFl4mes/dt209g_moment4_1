import './style.css'

import './style.css'

const menuBTN = document.getElementById("menu-btn");
const menuNAV = document.getElementById("nav-menu");
const menuClose = document.getElementById("menu-close-btn");
const navBackdrop = document.getElementById("nav-backdrop");

if (menuBTN && menuNAV && navBackdrop) {
	// helper to open/close
	const setOpen = (open) => {
		if (open) {
			menuNAV.classList.remove('translate-x-full');
			navBackdrop.classList.remove('hidden');
			// document.body.classList.add('overflow-hidden');
			menuBTN.setAttribute('aria-expanded','true');
			menuNAV.setAttribute('aria-hidden','false');
            menuBTN.blur();
            menuClose.focus();
		} else {
			menuNAV.classList.add('translate-x-full');
			navBackdrop.classList.add('hidden');
			// document.body.classList.remove('overflow-hidden');
			menuBTN.setAttribute('aria-expanded','false');
			menuNAV.setAttribute('aria-hidden','true');
            menuBTN.focus();
            menuClose.blur();
		}
	};

	// initial state once (desktop visible, mobile hidden)
	setOpen(window.innerWidth >= 768);

	// minimal event wiring
	menuBTN.addEventListener('click', () => setOpen(true));
	menuClose?.addEventListener('click', () => setOpen(false));
	navBackdrop.addEventListener('click', () => setOpen(false));
  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      setOpen(false);
    }
  });
	document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false) });
}