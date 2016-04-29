'use strict';


angular.module('tmd')

.factory('Movies',function($http){

	var imdb_url = "http://imdb.wemakesites.net/api/";
	var imdb_search_url = "http://imdb.wemakesites.net/api/search?callback=JSON_CALLBACK&"

	var api = {};


	api.search = function(keyword) {
		$http.jsonp(imdb_search_url+"q="+keyword)
			 .success(function(response){
			 	console.log(response.data);
			 })
			 .error(function(response){
			 	console.log(response);
			 });
	};

	return api;
});