/*********************
 * index
 * -------------------
 * 0. common
 * 1. header / footer
 * 2. Swiper
 *********************/

/*********************
 * 0. common
 *********************/

/*********************
 * 1. header / footer
 *********************/

/*********************
 * 2. Swiper
 *********************/
const mvSwiper = new Swiper('.top__mv .swiper', {
  loop: true,
  slidesPerView: 1,
  speed: 1000,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

/*********************
 * 3. Faq Toggle
 *********************/
$(function () {
  $('.top__faq__inner').on('click', function () {
    $(this).find('.top__faq__inner--qu').toggleClass("is-open");
    $(this).find('.top__faq__inner--an').slideToggle();
  });
});
