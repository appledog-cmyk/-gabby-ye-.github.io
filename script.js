// AI USAGE NOTE: The dark mode toggle logic below was suggested by Claude
// as a simple JS interactive feature. I understand it works by toggling a
// CSS class on <body>, which swaps the CSS variables defined in style.css.

const toggleBtn = document.getElementById('dark-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});