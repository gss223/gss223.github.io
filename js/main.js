'use strict';

// Content stays readable without JavaScript; enhancement adds the selected view.
const controls = document.querySelector('.paper-controls');
const additionalPapers = document.querySelectorAll('.additional-paper');
const papersTitle = document.querySelector('#papers-title');
if (controls && papersTitle) {
  const selectView = (view) => {
    const selected = view === 'selected';
    additionalPapers.forEach((paper) => { paper.hidden = selected; });
    controls.querySelectorAll('button').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.view === view));
    });
    papersTitle.innerHTML = `${selected ? 'Selected' : 'All'} papers<span class="accent">.</span>`;
  };
  controls.hidden = false;
  controls.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-view]');
    if (button) selectView(button.dataset.view);
  });
  selectView('selected');
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

if ('IntersectionObserver' in window) {
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main > section[id]').forEach((section) => observer.observe(section));
}
