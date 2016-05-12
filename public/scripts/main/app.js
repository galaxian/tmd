'use strict';


angular.module("moviedb",["ngRoute"])

.config(function($routeProvider){
	$routeProvider.otherwise("/");

	$routeProvider.when("/",{
		controller:"DashboardController",
		templateUrl:"scripts/main/dashboard/dashboard.html"
	});
});