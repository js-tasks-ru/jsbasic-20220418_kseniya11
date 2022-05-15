function initCarousel() {
  let buttonRight = document.querySelector('.carousel__arrow_right');
  let buttonLeft = document.querySelector('.carousel__arrow_left');
  let carousel = document.querySelector('.carousel__inner');
  let carouselSlide = document.querySelector('.carousel__slide');
  let slideWidth = carouselSlide.offsetWidth;
  let slideIndex = 0;
  let slideNumber = 3; //сделать ноормально
  buttonLeft.style.display = 'none';

  buttonRight.addEventListener('click', (event) => {
    if (slideIndex < slideNumber) {
      slideIndex++;
      let slideWithPX = (slideIndex * slideWidth) + 'px';
      carousel.style.transform = 'translateX(-' + slideWithPX + ')';
      buttonLeft.style.display = '';
    }
    if (slideIndex === slideNumber) {
      buttonRight.style.display = 'none';
    }
  });

  buttonLeft.addEventListener('click', (event) => {
    if (slideIndex > 0) {
      slideIndex--;
      let slideWithPX = (slideIndex * slideWidth) + 'px';
      carousel.style.transform = 'translateX(-' + slideWithPX + ')';
      buttonRight.style.display = '';
    }
    if (slideIndex === 0) {
      buttonLeft.style.display = 'none';
    }
  });
}
