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

	var fatwreck = {
		'name' : 'Fatwreck',
		'description' : "For Web Standards Project at Full Sail University, I had to redesign an existing website and make it 100% responsive. My love for music led me to resdesign Fat Wreck Chords' website. Fat Wreck Chords is an independent punk rock label based in California. While bringing their site up to date with current technologies, I was still able to maintain the grunge, punk vibe that Fat Wreck Chords is known for. I recieved the Course Director's Award in this class. Note that this is not an official redesign.",
		'category' : 'Web Design & Development',
		'technology' : 'HTML5, CSS3, JavaScript & jQuery',
		'client' : 'Full Sail University - Web Standards Project',
		'githubUrl' : 'https://github.com/nlaitchison/WSP/tree/gh-pages',
		'githubDisplay' : 'github.com/nlaitchison/WSP',
		'viewUrl' : 'http://nlaitchison.github.io/WSP/project/index.html',
		'viewDisplay' : 'Fat Wreck Chords',
		'images' : ['images/fatwreck/home.png', 'images/fatwreck/band.png', 'images/fatwreck/bands.png']
	};

	var loven = {
		'name' : 'Loven',
		'description' : "Loven is a eLearning site for baking that I branded, designed and developed in my Streaming Media Servers class. This site featured video streaming, third party logins and commenting. Loven's simple interface and cute cupcake design created an easy to use and fun environment for users.",
		'category' : 'Web Design & Development / Branding',
		'technology' : 'HTML5, CSS3, JavaScript, Firebase',
		'client' : 'Full Sail University - Streaming Media Servers',
		'githubUrl' : 'https://github.com/nlaitchison/NAitchisonSMS/tree/master/loven',
		'githubDisplay' : 'github.com/nlaitchison/NAitchisonSMS',
		'images' : ['images/loven/logo-large.png', 'images/loven/home.png']
	};

	var noanchor = {
		'name' : 'No Anchor Project',
		'description' : "No Anchor is a collective of artists, producers, and athletes all coming together under one roof to share their aspirations and accomplishments with the world. It's a lifestyle, a brand, and a production company. All the website designs and assets were provided by the client. I built according to those designs and worked with the client to make sure everything met their expectations.",
		'category' : 'Web Development',
		'technology' : 'HTML5, CSS3, JavaScript & jQuery, PHP',
		'client' : 'No Anchor Project',
		'githubUrl' : 'https://github.com/nlaitchison/noAnchor',
		'githubDisplay' : 'github.com/nlaitchison/noAnchor',
		'viewUrl' : 'http://noanchor.com/',
		'viewDisplay' : 'No Anchor Project',
		'images' : ['images/noanchor/landing.png', 'images/noanchor/media.png']
	};

	var akero = {
		'name' : 'Akëro Clothing Co',
		'description' : "Akëro Clothing Co is a clothing company I started with my twin sister when I was in 11th grade. Akëro consists of simple, fun designs and is focused on supporting local musicians and bands. With dreams of becoming a well known name in the clothing and music industry, Akëro is still a work in progress that will continue to grow and develop in the future.",
		'category' : 'Branding / Shirt Design',
		'client' : 'Akëro Clothing Co',
		'viewUrl' : 'http://akeroclothing.bigcartel.com/products',
		'viewDisplay' : 'Akëro Clothing Co',
		'images' : ['images/akero/logo-large.png']
	};

	var dhp = {
		'name' : 'Downhole Plus',
		'description' : "I was asked to create branding for an oilfield company called Downhole Plus, DHP. The logo contains a hidden 'H' and oil drops in the 'd' and 'p'. The client decided to go with a different name though, so these designs where not used.",
		'category' : 'Branding / Print Design',
		'client' : 'Wenzel Downhole Tools LLC',
		'images' : ['images/dhp/logo-large-2.png', 'images/dhp/buisnesscard.png', 'images/dhp/shirt.png']
	};

	if($routeParams.name === 'lanciv')
		$scope.project = lanciv;
	else if($routeParams.name === 'bandmate')
		$scope.project = bandmate;
	else if($routeParams.name === 'fatwreck')
		$scope.project = fatwreck;
	else if($routeParams.name === 'loven')
		$scope.project = loven;
	else if($routeParams.name === 'noanchor')
		$scope.project = noanchor;
	else if($routeParams.name === 'akero')
		$scope.project = akero;
	else if($routeParams.name === 'dhp')
		$scope.project = dhp;

});

