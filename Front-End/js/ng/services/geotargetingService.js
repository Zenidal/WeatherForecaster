services.factory('geotargetingService', [
    	'$resource', function ($resource) {
    		return $resource(baseUrlApiGeotargeting, {}, {
    		});
    }])