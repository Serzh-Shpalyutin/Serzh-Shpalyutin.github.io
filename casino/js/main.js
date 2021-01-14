$(function(){

    $('.header__burger').on('click', function() {
        $('.header__burger, .menu').toggleClass('active');
    });

    $('.header__slider').slick({
        dots: true,
        dotsClass: 'header__slider-dots',
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button class="header__arrow-btn header__slick-prev"><img src="img/icons/arrow-left.svg" alt="prev"></button>',
        nextArrow: '<button class="header__arrow-btn header__slick-next"><img src="img/icons/arrow-right.svg" alt="next"></button>'
    });

    


});