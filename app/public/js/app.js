'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: '/view1/questions.html',
			controller: 'View1Ctrl'
		}).otherwise({
			redirectTo: '/index.html'
		});
	}]);
