const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.18 });
revealEls.forEach((el) => observer.observe(el));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const panels = document.querySelectorAll('.panel');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  panels.forEach((panel, index) => {
    const speed = 0.015 * (index + 1);
    panel.style.setProperty('--scroll', y * speed);
  });
}, { passive: true });
