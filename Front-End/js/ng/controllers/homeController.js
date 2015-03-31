controllers.controller('HomeController', ['$scope', '$rootScope', '$location', 'weatherService', 'geotargetingService', 'weatherStorageService', 'locationStorageService',
            function ($scope, $rootScope, $location, weatherService, geotargetingService, weatherStorageService, locationStorageService) {

                var weatherAdapter = new WeatherAdapter();
                var geotargetingAdapter = new GeotargetingAdapter();

                $scope.timeIsNow = Date.now();

                function successGetPosition(pos) {

                    var requestParametersToWeatherApi = {
                            longitude: pos.coords.longitude,
                            latitude: pos.coords.latitude,
                    };

                    weatherService.get(requestParametersToWeatherApi, function (response) {
                        $scope.weatherData = weatherAdapter.request(response);
                        weatherStorageService.clearWeatherStorage();
                        weatherStorageService.saveWeatherData($scope.weatherData);
                    }, function (error) {
                        $scope.weatherData = weatherStorageService.getWeatherData();
                    });

                    var requestParametersToGeotargetingApi = {
                            latitude: pos.coords.latitude,
                            longitude: pos.coords.longitude,
                    };

                    geotargetingService.get(requestParametersToGeotargetingApi, function (response) {
                        $scope.locationData = geotargetingAdapter.request(response)
                        locationStorageService.clearLocationStorage();
                        locationStorageService.saveLocationData($scope.locationData);
                    }, function (error) {
                        $scope.locationData = locationStorageService.getLocationData();
                    });
                }

                function errorGetPosition(err) {
                    $scope.locationData = locationStorageService.getLocationData();
                    $scope.weatherData = weatherStorageService.getWeatherData();
                    console.warn('ERROR(' + err.code + '): ' + err.message);
                };
                
                if (window.navigator.onLine) {
                    navigator.geolocation.getCurrentPosition(successGetPosition, errorGetPosition);
                }
                else {
                    $scope.weatherData = weatherStorageService.getWeatherData();
                    $scope.locationData = locationStorageService.getLocationData();
                }
            }
        ]);