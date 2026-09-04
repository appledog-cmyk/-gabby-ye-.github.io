// AI USAGE NOTE: Carousel auto-fade, pause toggle, and horizontal card-row
// scroll controls were suggested by Claude. I understand the fade carousel
// cycles a CSS class on a timer, the pause button clears/resets that timer,
// and the arrow buttons scroll the card row by one card width at a time.

const toggleBtn = document.getElementById('dark-toggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  });
}

// Hero carousel with pause/play
const slides = document.querySelectorAll('.hero-slide');
const pauseBtn = document.getElementById('pause-btn');
let currentSlide = 0;
let carouselInterval = null;
let isPaused = false;

function advanceSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

if (slides.length > 0) {
  carouselInterval = setInterval(advanceSlide, 4000);
}

if (pauseBtn) {
  pauseBtn.addEventListener('click', () => {
    isPaused = !isPaused;
    if (isPaused) {
      clearInterval(carouselInterval);
      pauseBtn.textContent = '▶';
    } else {
      carouselInterval = setInterval(advanceSlide, 4000);
      pauseBtn.textContent = '❚❚';
    }
  });
}
