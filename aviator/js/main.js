var swiper = new Swiper('.main-slider', {
    navigation: {
        nextEl: '.main-slider__button-next',
        prevEl: '.main-slider__button-prev',
      },
});

lightGallery(document.getElementById('lightgallery'));

$(function(){
  $('.services__slider-main-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    asNavFor: '.services__slider-preview-wrapper'
  });
  $('.services__slider-preview-wrapper').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: '.services__slider-main-wrapper',
    dots: false,
    focusOnSelect: true,
    variableWidth: true,
  });

  $('.menu__btn').click(function(e) {
    $('.menu__btn, .menu').toggleClass('active');
  });
});


