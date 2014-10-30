'use strict';

/*global App*/

App.controller('NavCtrl', function ($scope, $location, $routeParams, $anchorScroll, anchorSmoothScroll) {

	console.log($routeParams.page);

	if($routeParams.page === 'home'){
		// $location.hash('home');
		// $anchorScroll();
		anchorSmoothScroll.scrollTo('home');
		$location.hash('');
	}else if($routeParams.page === 'projects'){
		// $location.hash('projects');
		// $anchorScroll();
		anchorSmoothScroll.scrollTo('projects');
		$location.hash('');
	}else if($routeParams.page === 'about'){
		// $location.hash('about');
		// $anchorScroll();
		anchorSmoothScroll.scrollTo('about');
		$location.hash('');
	}else if($routeParams.page === 'contact'){
		// $location.hash('contact');
		// $anchorScroll();
		anchorSmoothScroll.scrollTo('contact');
		$location.hash('');
	}

});

