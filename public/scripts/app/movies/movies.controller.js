'use strict';

angular.module('tmd')

.controller('MoviesController',function($scope,Movies){
	
	$scope.movies = [
						{id:101,title:'Point Break',director:'Kathryn Bigelow'},
						{id:102,title:'Interstellar',director:'James Cameron'},
						{id:103,title:'Mulholland Drive',director:'David Lynch'}
					];
	Movies.search("Point Break");
});