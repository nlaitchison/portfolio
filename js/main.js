$(function() {

	// Smooth scroll
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	// Slide Header on click
	// var headerSlide = false;

	// $('#logo').click(function() {
	// 	if(headerSlide){
	// 		headerSlide = false;
	// 	}else{
	// 		headerSlide = true;
	// 	}
	// 	$('#header-slider').toggleClass('slide', headerSlide);
	// });

});

