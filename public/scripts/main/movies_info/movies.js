/**
* Moviess Module
*
* Description
*/
angular.module("moviedb")

.config(function($routeProvider) {
	
	$routeProvider.when("/movies",{
	controller:"MoviesController",
	templateUrl:"scripts/main/movies_info/movies.html"
	});

});