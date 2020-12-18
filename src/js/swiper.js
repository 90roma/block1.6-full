const sliders = document.querySelectorAll('.swiper-container');


sliders.forEach((el) => {
 let swiper = new Swiper(el, {
  slidesPerView: 1.3,
  spaceBetween: 16,
  pagination: {
   el: el.querySelector('.swiper-pagination'),
   clickable: true,
  },
  breakpoints: {
   340: {
    slidesPerView: 1.5,
    spaceBetween: 24,
   },
   420: {
    slidesPerView: 1.9,
    spaceBetween: 24,
   },
  }
 })
});

