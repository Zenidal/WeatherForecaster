function AdvancedWeather() {
    this.getIconUrl=function(iconName){
        return "http://openweathermap.org/img/w/"+iconName+".png";
    };

    this.getTodayDate=function(){
        return  new Date().toJSON().slice(0,10);;
    };

    this.roundValue=function(value){
        return Math.round(value);
    };
}

function WeatherAdapter() {

    var weather = new AdvancedWeather();

    return {
        request: function (country, city, weatherMain, weatherDescription, temp, humidity, pressure, temp_min, temp_max,
            windSpeed, windDeg, icon) {
            return {
                country: country,
                city: city,
                weatherMain: weatherMain,
                weatherDescription: weatherDescription,
                temp: weather.roundValue(temp),
                humidity: humidity,
                pressure: pressure,
                temp_min: weather.roundValue(temp_min),
                temp_max: weather.roundValue(temp_max),
                iconUrl: weather.getIconUrl(icon),
                date: weather.getTodayDate()
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
    .controller('HomeController', ['$scope','$rootScope', '$location','weatherService',
             function ($scope, $rootScope, $location, weatherService) {

                 var adapter = new WeatherAdapter();


                 function successGetPosition(pos) {

                     var requestParameters = {
                         lat: pos.coords.latitude,
                         lon: pos.coords.longitude,
                         units: 'metric'
                     }
                     console.log(weatherService);
                     weatherService.get(requestParameters, function (response) {
                         $scope.weatherData=adapter.request(response.sys.country, response.name, response.weather[0].main,
                            response.weather[0].description, response.main.temp, response.main.humidity, response.main.pressure,
                            response.main.temp_min, response.main.temp_max);
                         console.log($scope.weatherData);
                     }, function (error) {

                     })
                 }

                 function errorGetPosition(err) {
                     console.warn('ERROR(' + err.code + '): ' + err.message);
                 };

                 navigator.geolocation.getCurrentPosition(successGetPosition, errorGetPosition);

             }
    ]);