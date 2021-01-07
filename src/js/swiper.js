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
       320: {
        slidesPerView: 1.2,
        spaceBetween: 16,
       },
       560: {
        slidesPerView: 1.3,
        spaceBetween: 24,
       },
      }
     })
  });
