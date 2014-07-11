'use strict';

/*global App*/

App.controller('ProjectViewCtrl', function ($scope, $location, $routeParams) {

	var lanciv = {
		'name' : 'Lanciv',
		'description' : "Lanciv provides managed IT services for small and medium sized companies and is currently based in Sydney, Australia. I designed their logo and business cards based on concepts and ideas provided by the client. The bright colors make the clean geometric logo fun and fresh while clear plastic brings a modern feel to the business card.",
		'category' : 'Branding / Print Design',
		'client' : 'Lanciv LLC',
		'images' : ['images/lanciv/logo-large.png', 'images/lanciv/buisnesscard.png']
	};

	var bandmate = {
		'name' : 'Bandmate',
		'description' : "Bandmate is a social network designed to promote creativity in musicians by helping them meet and colloborate. This is a project that I've been designing and developing throughout my time at Full Sail University and it evolved greatly as I learned new web technologies and concepts. I completed the beta stage of Bandmate in a period of 3 months for my web final project. Although it hasn't been launched yet, Bandmate is a project that I will continue to work on and plan on launching in the future. I also recieved the Course Director's Award for this project in Web Final Project II.",
		'category' : 'Web Design & Development / Branding',
		'technology' : 'AngularJS, Sails.js, MongoDB',
		'client' : 'Full Sail University - Web Final Project',
		'githubUrl' : 'https://github.com/nlaitchison/BandmateWFP',
		'githubDisplay' : 'https://github.com/nlaitchison/BandmateWFP',
		'images' : ['images/bandmate/logo-large.png', 'images/bandmate/landing.png', 'images/bandmate/search.png', 'images/bandmate/profile.png']
	};

	if($routeParams.name === 'lanciv')
		$scope.project = lanciv;
	if($routeParams.name === 'bandmate')
		$scope.project = bandmate;

	console.log($scope.project);

});