services.factory('weatherStorageService', [
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