'use strict';

/*global App*/

App.controller('NavCtrl', function ($scope, $location, $routeParams, $anchorScroll) {

	console.log($routeParams.page);

	if($routeParams.page === 'home'){
		$location.hash('home');
		$anchorScroll();
		$location.hash('');
	}else if($routeParams.page === 'projects'){
		$location.hash('projects');
		$anchorScroll();
		$location.hash('');
	}else if($routeParams.page === 'about'){
		$location.hash('about');
		$anchorScroll();
		$location.hash('');
	}else if($routeParams.page === 'contact'){
		$location.hash('about');
		$anchorScroll();
		$location.hash('');
	}

});

