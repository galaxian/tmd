'use strict';

/**
* tmd Module
*
* Description
*/
angular.module('tmd', ["ngRoute","ngMaterial"])
.run(function($timeout){
		
})
.config(function($mdThemingProvider,$routeProvider){
    // Update the theme colors to use themes on font-icons
    $mdThemingProvider.theme('default')
          .primaryPalette("blue")
          .accentPalette('green')
          .warnPalette('red');

	$routeProvider.otherwise("/");          

    $routeProvider.when("/",{
    	controller:"DashboardController",
    	templateUrl:"scripts/app/dashboard/dashboard.html"
    });      
  })