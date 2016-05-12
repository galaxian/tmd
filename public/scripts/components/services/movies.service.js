
'use strict';
angular.module("moviedb")
.factory("MovieService",function($http){

var imdb_url = "http://imdb.wemakesites.net/api";
	var imdb_search_url = "http://imdb.wemakesites.net/api/search?callback=JSON_CALLBACK&"

	var api = {};


	api.search = function(keyword) {
		return $http.jsonp(imdb_search_url+"q="+keyword);
	};

	api.getById = function(id) {
		return $http.jsonp(imdb_url+"/"+id+"?callback=JSON_CALLBACK");
	};
	
	return api;
}); 

