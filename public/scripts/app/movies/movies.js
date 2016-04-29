'use strict';

angular.module('tmd')

.config(function($routeProvider) {
	
	$routeProvider.when("/movies",{
		controller:"MoviesController",
		templateUrl:"scripts/app/movies/movies.html"
	});

});