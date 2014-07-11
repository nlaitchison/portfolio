'use strict';

var App = angular.module('angularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

App.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landing.html',
        controller: 'MainCtrl'
      })
      .when('/:page', {
        templateUrl: 'views/landing.html',
        controller: 'NavCtrl'
      })
      .when('/projects/:name', {
        templateUrl: 'views/projectView.html',
        controller: 'ProjectViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
