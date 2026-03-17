/* ===========================
   LAB WEBSITE - MAIN JS
   =========================== */

// ── Navigation & SPA routing ──────────────────────────────
const pages   = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-links a');
const hamburger = document.getElementById('nav-hamburger');
const navMenu   = document.getElementById('nav-menu');

function showPage(id) {
  pages.forEach(p => p.classList.remove('active'));
  navLinks.forEach(a => a.classList.remove('active'));

  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navLinks.forEach(a => {
    if (a.dataset.page === id) a.classList.add('active');
  });

  // Close mobile menu
  navMenu.classList.remove('open');

  // Animations
  target?.querySelectorAll('.fade-in').forEach((el, i) => {
    el.style.animationDelay = `${i * 0.08}s`;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    void el.offsetWidth;
    el.style.animation = 'none';
    requestAnimationFrame(() => {
      el.style.animation = '';
    });
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showPage(link.dataset.page);
  });
});

hamburger?.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// ── Publication Search & Filter ──────────────────────────
function initPublications() {
  const searchInput = document.getElementById('pub-search');
  const filterBtns  = document.querySelectorAll('.pub-filter-btn');
  const pubItems    = document.querySelectorAll('.pub-item');
  const pubCountEl  = document.getElementById('pub-count');

  let currentFilter = 'all';
  let currentSearch = '';

  function updateCount() {
    const visible = document.querySelectorAll('.pub-item:not(.hidden-item)').length;
    if (pubCountEl) pubCountEl.innerHTML = `<span>${visible}</span> publications`;
  }

  function applyFilters() {
    pubItems.forEach(item => {
      const year    = item.dataset.year || '';
      const text    = item.textContent.toLowerCase();
      const matchF  = currentFilter === 'all' || year === currentFilter;
      const matchS  = text.includes(currentSearch.toLowerCase());
      item.classList.toggle('hidden-item', !(matchF && matchS));
    });
    updateCount();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.year;
      applyFilters();
    });
  });

  searchInput?.addEventListener('input', e => {
    currentSearch = e.target.value;
    applyFilters();
  });

  updateCount();
}

// ── Init ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  showPage('home');
  initPublications();
});
