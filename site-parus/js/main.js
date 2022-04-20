$(function(){
    var rellax = new Rellax(".rellax");

    $('.info-block__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });
});