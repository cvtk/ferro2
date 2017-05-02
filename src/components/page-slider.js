$(document).ready(function(){
  $('#sliderShow').slick({
    arrows: false,
    dots: false,
    asNavFor: '#sliderNav',
    autoplay: true,
    autoplaySpeed: 2000
  });
  $('#sliderNav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '#sliderShow',
    dots: true,
    centerMode: true,
    focusOnSelect: true
});
});