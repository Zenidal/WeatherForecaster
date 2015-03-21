function WeatherAdapter(){
    return {
        request:function(country, city,  weatherMain, weatherDescription, temp, humidity, pressure, temp_min, temp_max, 
            windSpeed, windDeg){
            return {
                country: country,
                city: city,
                weatherMain: weatherMain,
                weatherDescription: weatherDescription,
                temp: temp,
                humidity: humidity,
                pressure: pressure, 
                temp_min: temp_min,
                temp_max: temp_max.
            };
        };
    };
};

var contr = angular.module('app.controllers', [])

    .controller('WeatherAppController', [
        function ($scope, $rootScope, $location) {
            // your main controller
        }
    ])

    // Path: /Home
    .controller('HomeController', [
             function ($scope, $rootScope,  $location, weatherService) {
            var adapter=new WeatherAdapter();

        }
    ]);