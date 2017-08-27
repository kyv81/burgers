$(document).ready(function() {
  var slider = $('.slider').slick({
    arrows: false,
    draggable: false,
    speed: 777,
  });

  $('.burger__left-link').on('click', function(e){
    e.preventDefault();
    slider.slick('slickPrev');
  })

  $('.burger__right-link').on('click', function(e){
    e.preventDefault();
    slider.slick('slickNext');
  })
});
