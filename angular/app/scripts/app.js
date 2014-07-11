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
      .when('/projects/:name', {
        templateUrl: 'views/projectView.html',
        controller: 'ProjectViewCtrl'
      })
      // .when('/projects/lanciv', {
      //   templateUrl: 'views/lanciv.html',
      //   controller: 'MainCtrl'
      // })
      // .when('/projects/bandmate', {
      //   templateUrl: 'views/bandmate.html',
      //   controller: 'MainCtrl'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });
