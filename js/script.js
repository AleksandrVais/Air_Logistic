// Slick slider

 $(document).ready(function(){
  $('.rev_slider').slick({
    slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
  	fade: true,
  	asNavFor: '.rev_slider_nav'
  });
  $('.rev_slider_nav').slick({
  	 // autoplay: true,
  	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 0,
	  asNavFor: '.rev_slider',
	  centerMode: true,
	  focusOnSelect: true,
	  autoplay: true,
	  adaptiveHeight: true
});

  $('#fixed_menu').removeClass('fixed_top_menu');
  		$(window).scroll(function(){
  			if ($(this).scrollTop()>10){
  				$('#fixed_menu').addClass('fixed_top_menu').fadeIn('fast');
  			} else {
  				$('#fixed_menu').removeClass('fixed_top_menu').fadeIn('fast');
  			}
  		})
}); 
