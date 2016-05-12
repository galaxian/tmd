angular.module("moviedb")
.controller("MoviesController",function($scope,MovieService){



$scope.results = [];
$scope.movies = [];

MovieService.search("Interstallar")
			.success(function(response){
				console.log(response);
				$scope.movies = response.data.results.titles;

				$scope.movies.forEach(function(movie){
					MovieService.getById(movie.id).success(function(response){
						console.log("-------------Additional info for "+movie.id+"--------------");
						console.log(response);
						movie.info = response.data;
						console.log("---------------------------");
					}).error(function(response){

					});
				});

			})
			.error(function(response){
				console.log("Error processing");
			});

});