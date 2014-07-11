'use strict';

/*global App*/

App.controller('NavCtrl', function ($scope, $location, $routeParams, $anchorScroll) {

	console.log($routeParams.page);

	if($routeParams.page === 'home'){
		$anchorScroll();
		$location.hash('');
	}else if($routeParams.page === 'projects'){
		$anchorScroll();
		$location.hash('');
	}else if($routeParams.page === 'about'){
		$anchorScroll();
		$location.hash('');
	}else if($routeParams.page === 'contact'){
		$anchorScroll();
		$location.hash('');
	}

});

