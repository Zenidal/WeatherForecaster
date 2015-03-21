var weatherApp = angular.module('weatherApp', [
  	'ngRoute',
  	'ui.bootstrap',
    'app.services',
  	'app.controllers',
  	'app.main',
    'LocalStorageModule'
]);


weatherApp.config(['$routeProvider', '$provide', function ($routeProvider, $provide) {
    $routeProvider
		.when('/', {
		    redirectTo: '/Home'
		})
        .when('/Home', {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
}]);