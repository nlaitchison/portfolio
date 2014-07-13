'use strict';

/*global App*/

App.angular.module('angularApp')
  .controller('MainCtrl', function ($scope) {

    $scope.openPdf() = function(){
    	$window.open("Nicole_Aitchison-Resume.pdf");
    };

  });
