// SlickSlider
$(".Sliders").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  // arrows: true,
  prevArrow: '<i class="fa-solid fa-chevron-left prev"></i>',
  nextArrow: '<i class="fa-solid fa-chevron-right next"></i>',
});
// SlickSlider

// Back to Top
//==== Back-to-top button
$(window).on('scroll', function(event) {
  if($(this).scrollTop() >100){
      $('.bactoTop').fadeIn(200)
  } else{
      $('.bactoTop').fadeOut(200)
  }
});
//==== Animate the scroll to top
$('.bactoTop').on('click', function(event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: 0,
  }, 100);
});
// Back to Top