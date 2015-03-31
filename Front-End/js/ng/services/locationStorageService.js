services.factory('locationStorageService', [
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