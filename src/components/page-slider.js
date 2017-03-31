jQuery(document).ready(function ($) {
  var slideCount = $('.slider-show > .show-item').length,
      slideWidth = $('.slider-show > .show-item').width(),
      slideHeight = $('.slider-show > .show-item').height(),
      overallWidth = slideCount * slideWidth;
  $('.page-slider').css({ width: slideWidth, height: slideHeight });
  $('.page-slider > .slider-show').css({ width: overallWidth, marginLeft: - slideWidth });
  $('.page-slider > .slider-show > .show-item').css({ width: slideWidth, height: slideHeight });
  $('.page-slider > .slider-show > .show-item:last-child').prependTo('.page-slider > .slider-show');

  function moveLeft() {
    $('.page-slider > .slider-show').animate({
        left: + slideWidth
    }, 500, function () {
        $('.page-slider > .slider-show > .show-item:last-child').prependTo('.page-slider > .slider-show');
        $('.page-slider > .slider-show').css('left', '');
    });
  };

  function moveRight() {
    $('.page-slider > .slider-show').animate({
        left: - slideWidth
    }, 500, function () {
        $('.page-slider > .slider-show > .show-item:first-child').appendTo('.page-slider > .slider-show');
        $('.page-slider > .slider-show').css('left', '');
    });
  };

  setInterval(function () {
      moveRight();
  }, 5000);

});