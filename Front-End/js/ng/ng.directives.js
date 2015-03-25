// APP DIRECTIVES
// main directives
angular.module('app.main', [])
	.directive('currentTime', ['$interval', 'dateFilter', function])
