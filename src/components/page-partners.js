
$(document).ready(function(){
  $('.page-partners').slick({
    centerMode: true,
    slidesToShow: 5,
    centerPadding: '10px',
    lazyLoad: 'ondemand',
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 2
      }
    }
    ]
  });
});