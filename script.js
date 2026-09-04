// AI USAGE NOTE: Dark mode toggle and hero carousel auto-fade logic were
// suggested by Claude. I understand the carousel works by cycling a CSS
// class ("active") across the slide images on a timer.

const toggleBtn = document.getElementById('dark-toggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  });
}

// Hero carousel auto-fade (only runs on pages that have it, like index.html)
const slides = document.querySelectorAll('.hero-slide');
if (slides.length > 0) {
  let currentSlide = 0;
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 4000);
}