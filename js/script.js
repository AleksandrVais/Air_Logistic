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
	  focusOnSelect: true
});
}); 
