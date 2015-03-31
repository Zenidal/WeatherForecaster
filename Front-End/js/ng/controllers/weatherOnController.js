controllers.controller('WeatherOnController', ['$scope', '$rootScope', '$location', 'weatherService',
         'geotargetingService',
            function ($scope, $rootScope, $location, weatherService, geotargetingService) {

                $scope.getWeatherOn = function (date)
                {
                    if (date === undefined)
                    {
                        alert("Input date");
                    }
                    else
                    {
                        $scope.isClicked = true;
                        var weatherAdapter = new WeatherAdapter();
                        var geotargetingAdapter = new GeotargetingAdapter();
                        function successGetPosition(pos)
                        {
                            var requestParametersToWeatherApi = {
                                latitude: pos.coords.latitude,
                                longitude: pos.coords.longitude,
                                date: $scope.weatherDate,
                            };

                            weatherService.get(requestParametersToWeatherApi, function (response) {
                                $scope.weatherData = weatherAdapter.request(response);
                            }, function (error) {
                            });

                            var requestParametersToGeotargetingApi = {
                                    latitude: pos.coords.latitude,
                                    longitude: pos.coords.longitude,
                            };

                            geotargetingService.get(requestParametersToGeotargetingApi, function (response) {
                                $scope.locationData = geotargetingAdapter.request(response)
                            }, function (error) {
                            });
                        }

                        function errorGetPosition(err) 
                        {
                            console.warn('ERROR(' + err.code + '): ' + err.message);
                        };

                        if (window.navigator.onLine) 
                        {
                            navigator.geolocation.getCurrentPosition(successGetPosition, errorGetPosition);
                        }
                        else 
                        {
                                //TO DO if offline??
                          //  $scope.weatherData = weatherStorageService.getWeatherData();
                          //  $scope.locationData = locationStorageService.getLocationData();
                        }
                    }
                };
            }
        ]);