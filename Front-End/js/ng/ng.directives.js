// APP DIRECTIVES
// main directives
angular.module('app.main', [])
	.directive('currentTime', ['$interval', 'dateFilter',
	 function($interval, dateFilter) {
	
	 return {
	 scope: {
	 	format: '=format'
	 },
	 link: function(scope, element, attrs) {
          function updateTime() {
            element.text(dateFilter(new Date(), scope.format));
          }

          $interval(updateTime, 100);
        }
    }
	}])
