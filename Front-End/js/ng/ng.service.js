'use strict';
// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('app.services', ['ngResource'])
    .factory('weatherService', [
        '$resource', function ($resource) {
            return $resource(baseUrlApiWeather, {}, {
            });
        }
    ])
    .factory('geotargetingService', [
    	'$resource', function ($resource){
    		return $resource(baseUrlApiGeotargeting, {}, {
    		});
    	}])
