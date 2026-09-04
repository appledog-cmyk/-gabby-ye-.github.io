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

// Horizontal scrolling card row: dots + arrow controls
const row = document.getElementById('carousel-row');
const dotsContainer = document.getElementById('carousel-dots');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

if (row && dotsContainer) {
  const cards = row.querySelectorAll('.click-card');
  cards.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('span');

  function updateDots() {
    const scrollLeft = row.scrollLeft;
    const cardWidth = cards[0].offsetWidth + 24; // includes gap
    const index = Math.round(scrollLeft / cardWidth);
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }

  row.addEventListener('scroll', updateDots);

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      row.scrollBy({ left: -(cards[0].offsetWidth + 24), behavior: 'smooth' });
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      row.scrollBy({ left: cards[0].offsetWidth + 24, behavior: 'smooth' });
    });
  }
}