$(function () {

  $('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active')
  }); 

  $('.heroes__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-text',
    prevArrow: '<button class="arrow-btn slick-prev"><img src="images/arrow-prev.png" alt="prev"></button>',
    nextArrow: '<button class="arrow-btn slick-next"><img src="images/arrow-next.png" alt="next"></button>'
  });

  $('.heroes__slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    asNavFor: '.heroes__slider-img',
  });

});