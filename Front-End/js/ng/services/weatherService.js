services.factory('weatherService', [
        '$resource', function ($resource) {
            return $resource(baseUrlApiWeather, {}, {
            });
        }
    ])