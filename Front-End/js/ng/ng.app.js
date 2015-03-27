var weatherApp = angular.module('weatherApp', [
  	'ngRoute',
    'blockUI',
  	'ui.bootstrap',
    'app.services',
  	'app.controllers',
  	'app.main',
    'LocalStorageModule'
]);

weatherApp.config(function(blockUIConfig) {

  // Change the default overlay message
  blockUIConfig.message = 'Loading...';

  // Change the default delay to 100ms before the blocking is visible
  blockUIConfig.delay = 10;

});

weatherApp.config(['$routeProvider', '$provide', function ($routeProvider, $provide) {
    $routeProvider
		.when('/', {
		    redirectTo: '/Home'
		})
        .when('/Home', {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
        .when('/WeatherOn', {
            controller: 'WeatherOnController',
            templateUrl: 'views/weatherOn.html'
        })
}]);