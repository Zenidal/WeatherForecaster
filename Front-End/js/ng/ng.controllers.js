function AdvancedWeather() {

    this.roundValue = function(value) {
        return Math.round(value);
    };
}

function WeatherAdapter() {

    var weather = new AdvancedWeather();

    return {
        request: function (dataRequest) {
            return {
                temp: weather.roundValue(dataRequest.data.current_condition[0].temp_C),
                humidity: dataRequest.data.current_condition[0].humidity,
                pressure: dataRequest.data.current_condition[0].pressure,
                iconUrl:  dataRequest.data.current_condition[0].weatherIconUrl[0].value,
                date: dataRequest.data.weather[0].date,
                observation_time: dataRequest.data.current_condition[0].observation_time,
                weatherDescription: dataRequest.data.current_condition[0].weatherDesc[0].value,
                sync_time: Date.now()
            };
        }
    };
};



function AdvancedGeotargeting() {
    this.getLocationFromResponse = function(value) {
        var location;
        angular.forEach(value.results, function(result) {
            if($.inArray("locality", result.types)>-1 && $.inArray("political", result.types)>-1 && result.types.length<=2){
                location = result.formatted_address;
            }
        });
        return location;
    };
};

function GeotargetingAdapter() {

    var geotargeting = new AdvancedGeotargeting();

    return {
        request: function (dataRequest) {
            return {
                location:  geotargeting.getLocationFromResponse(dataRequest),
                sync_time: Date.now()
            };
        }
    };
};


var contr = angular.module('app.controllers', [])

    .controller('WeatherAppController', [
        function ($scope, $rootScope, $location) {


        }
    ])

    // Path: /Home
    .controller('HomeController', ['$scope','$rootScope', '$location','weatherService', 'geotargetingService', 'weatherStorageService', 'locationStorageService',
             function ($scope, $rootScope, $location, weatherService, geotargetingService, weatherStorageService, locationStorageService) {

                 var weatherAdapter = new WeatherAdapter();
                 var geotargetingAdapter = new GeotargetingAdapter();

                 $scope.timeIsNow =  Date.now(); 

                 function successGetPosition(pos) {

                     var requestParametersToWeatherApi = {
                         key: '70388b130b191be8c6a64da274a27',
                         format: 'json',
                         q: pos.coords.latitude+','+pos.coords.longitude,
                         num_of_days: 1
                     };

                     weatherService.get(requestParametersToWeatherApi, function (response) {
                         $scope.weatherData = weatherAdapter.request(response);
                         weatherStorageService.clearLocationStorage();
                         weatherStorageService.saveWeatherData($scope.weatherData);
                     }, function (error) {
                        $scope.weatherData = weatherStorageService.getWeatherData();
                     });

                     var requestParametersToGeotargetingApi = {
                        latlng: pos.coords.latitude+','+pos.coords.longitude,
                        language: 'EN',
                        sensor: false
                     };

                     geotargetingService.get(requestParametersToGeotargetingApi, function (response) {
                        $scope.locationData = geotargetingAdapter.request(response)
                        locationStorageService.remove();
                        locationStorageService.saveLocationData($scope.locationData);
                     }, function (error) {
                        $scope.locationData = locationStorageService.getLocationData();
                     });


                 }

                 function errorGetPosition(err) {
                     console.warn('ERROR(' + err.code + '): ' + err.message);
                 };

                 navigator.geolocation.getCurrentPosition(successGetPosition, errorGetPosition);

             }
    ]);