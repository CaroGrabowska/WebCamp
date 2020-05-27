const benefitsSlider = {
  container: document.querySelector('.js-swiper-slider-benefits'),
  navigation: {
    next: document.querySelector('.js-swiper-slider-benefits__next'),
    prev: document.querySelector('.js-swiper-slider-benefits__prev'),
  },
};

const benefitsSliderConfig = {
  clickableState: true,
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: benefitsSlider.navigation.next,
    prevEl: benefitsSlider.navigation.prev,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};

const benefitsSwiper = new Swiper(benefitsSlider.container, benefitsSliderConfig);
