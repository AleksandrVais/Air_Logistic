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
  	  infinite: true,
  	  slidesToShow: 3,
  	  slidesToScroll: 0,
  	  asNavFor: '.rev_slider',
  	  centerMode: true,
  	  focusOnSelect: true,
  	  autoplay: true,
  	  arrows: true
    });

// Top menu resize

	$(window).resize(function() {
  if(document.documentElement.clientWidth > 950) {
    
  	  $('#fixed_menu').removeClass('fixed_top_menu');
  		$(window).scroll(function(){
  			if ($(this).scrollTop()>1){
  				$('#fixed_menu').addClass('fixed_top_menu');
  			} else {
  				$('#fixed_menu').removeClass('fixed_top_menu');
  			}
  })

  }
});

// Adaptive top menu 

	 $('#menuToggle').click(function(){
        if(!$('#menuToggle').hasClass('adaptive_menu_show')){
            $('#menuToggle').addClass('adaptive_menu_show');
            $('nav').css("top", "0px");
        }
    })

    $('#hide_menu').click(function(){
        if($('#menuToggle').hasClass('adaptive_menu_show')){
            $('#menuToggle').removeClass('adaptive_menu_show');
            $('nav').css("top", "-700px");
        }
    })

    $(window).resize(function() {
  if(document.documentElement.clientWidth < 950) {

  	 $('.nav a').click( function() {
  	 	$('#menuToggle').removeClass('adaptive_menu_show');
        $('nav').css("top", "-700px");
  	 })

  } 
});


//Scroll

  $('.nav a').bind("click", function(e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 70
    }, 1000);
    e.preventDefault();
  });

}); 

