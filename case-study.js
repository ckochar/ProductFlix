const revealTargets = [
  ...document.querySelectorAll('.case-section > *'),
  ...document.querySelectorAll('.decision-matrix article, .impact-grid article, .next-grid article')
];

revealTargets.forEach(el => el.classList.add('reveal'));
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12, rootMargin: '0px 0px -8% 0px' });
revealTargets.forEach(el => revealObserver.observe(el));

const bars = document.querySelectorAll('.bar i');
bars.forEach(bar => {
  const width = getComputedStyle(bar).getPropertyValue('--w');
  bar.style.width = '0';
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      requestAnimationFrame(() => {
        bar.style.transition = 'width .9s cubic-bezier(.2,.8,.2,1)';
        bar.style.width = width;
      });
      observer.disconnect();
    }
  }, { threshold: .6 });
  observer.observe(bar);
});

const navLinks = [...document.querySelectorAll('.case-nav a')];
const sections = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-25% 0px -65% 0px', threshold: .01 });
sections.forEach(section => sectionObserver.observe(section));
