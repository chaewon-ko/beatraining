var swiper = new Swiper( '.swiper-container', {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  effect: 'coverflow',
  loop: false,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 20,
  slideToClickedSlide : true,
  coverflow: {
    rotate: 0,
    stretch: 100,
    depth: 200,
    modifier: 1.5,
    slideShadows : false,
  },
} );