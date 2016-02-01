'use strict';

angular.module('myApp', ['ngRoute', 'myApp.controllers', 'myApp.services']).config(function($routeProvider) {
  $routeProvider.when('/page/:pageNumber', {templateUrl: 'views/bookmarks.html'});
  $routeProvider.otherwise({redirectTo: '/page/1'});
});
