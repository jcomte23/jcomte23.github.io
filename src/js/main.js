import '../scss/style.scss'
import * as bootstrap from 'bootstrap'

// main.js (ES module — Vite friendly)
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');

navToggle.addEventListener('click', () => {
  const expanded = nav.getAttribute('data-open') === 'true';
  nav.setAttribute('data-open', String(!expanded));
  nav.style.display = expanded ? '' : 'flex';
  navToggle.setAttribute('aria-expanded', String(!expanded));
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // close mobile nav if open
      if (window.innerWidth < 720 && nav.getAttribute('data-open') === 'true') {
        nav.setAttribute('data-open', 'false');
        nav.style.display = '';
        navToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// small enhancement: lazy load project images
document.querySelectorAll('.card-media').forEach(img => {
  if ('loading' in HTMLImageElement.prototype) {
    img.setAttribute('loading', 'lazy');
  } else {
    // fallback simple lazy-init
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const i = entry.target;
          i.src = i.dataset.src || i.src;
          io.unobserve(i);
        }
      });
    });
    img.dataset.src = img.src;
    img.src = '';
    io.observe(img);
  }
});
