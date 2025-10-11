const slides = Array.from(document.querySelectorAll('.slide'));
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let current = 0;

function updateSlides() {
  const total = slides.length;

  slides.forEach(slide => {
    slide.classList.remove('center', 'left', 'right');
  });

  // Center slide
  slides[current].classList.add('center');

  // Left slide
  const leftIndex = (current === 0 ? slides.length - 1 : current - 1);
  slides[leftIndex].classList.add('left');

  // Right slide
  const rightIndex = (current === slides.length - 1 ? 0 : current + 1);
  slides[rightIndex].classList.add('right');
}

nextBtn.addEventListener('click', () => {
  // Check if the current slide is the last one,
  // if so, go to the first slide
  // else go to the next slide
  current = (current === slides.length - 1 ? 0 : current + 1);
  updateSlides();
});

prevBtn.addEventListener('click', () => {
  // Check if the current slide is the first one,
  // if so, go to the last slide
  // else go to the previous slide
  current = (current === 0 ? slides.length - 1 : current - 1);
  updateSlides();
});

// Initial call
updateSlides();