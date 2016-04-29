'use strict';

angular.module('tmd')
.controller('DashboardController',function($scope,$timeout){
	
	    var callAtTimeout=function(){console.log("hi")}
	$timeout(callAtTimeout,3000);


});