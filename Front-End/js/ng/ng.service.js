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
    	'$resource', function ($resource) {
    		return $resource(baseUrlApiGeotargeting, {}, {
    		});
    }])
    
    .factory('weatherStorageService', [
    	'localStorageService', function (localStorageService) {
    		    var weatherAdapter = new WeatherAdapter();
    		    var weatherStorageService = {};

    		    var _saveWeatherData = function (weatherData) {
    		    	localStorageService.set('weatherData', weatherData);
    		    };

    		    var _getWeatherData = function () {
    		    	return localStorageService.get('weatherData');
    		    };

    		    var _clearWeatherStorage = function () {
    		    	localStorageService.remove('weatherData');
    		    };

    		    weatherStorageService.saveWeatherData = _saveWeatherData;
    		    weatherStorageService.getWeatherData = _getWeatherData;
    		    weatherStorageService.clearWeatherStorage = _clearWeatherStorage;
    		    return weatherStorageService;
    }])

    .factory('locationStorageService', [
    	'localStorageService', function (localStorageService) {
                var geotargetingAdapter = new GeotargetingAdapter();
                var locationStorageService = {};

                var _saveLocationData = function (locationData) {
                	localStorageService.set('locationData', locationData);
                };

                var _getLocationData = function () {
                	return localStorageService.get('locationData');
                };

                var _clearLocationStorage = function () {
                	 localStorageService.remove('locationData');
                };

                locationStorageService.saveLocationData = _saveLocationData;
                locationStorageService.getLocationData = _getLocationData;
                locationStorageService.clearLocationStorage = _clearLocationStorage; 

                return locationStorageService;
    	}])