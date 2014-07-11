$(function() {

	// SOFT SCROLL --------------------


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


	// ON LOAD --------------------


	$.get('http://localhost:8888/ajaxWhatnot/template.html', function(htmlArg){

		console.log('get');

		// home
		var source = $(htmlArg).find('#home').html();
		var template = Handlebars.compile(source);
		var context = "";
		var html = template(context);
		$("#main-content").append(html);

	});



	// $.get('template.html', function(htmlArg){

	// 	$("#main_content").append(h2);

	// 	var source = $(htmlArg).find('#post-preview').html();
	// 	var template = Handlebars.compile(source);

	// 	for(var i = 0, max = posts.length; i < max; i++ ){

	// 		var context = {'id': posts[i]._id, 'title': posts[i].title, 'author': posts[i].author, 'createdDate': posts[i].createdDate, 'category': posts[i].category};
	// 		var html = template(context);
	// 		$("#main_content").append(html);

	// 	}

	// });

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

