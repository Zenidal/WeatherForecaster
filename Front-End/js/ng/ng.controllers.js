function AdvancedWeather() {
    this.getIconUrl=function(iconName){
        return "http://openweathermap.org/img/w/"+iconName+".png";
    };

    this.getTodayDate=function(){
        return  new Date();
    };

    this.roundValue=function(value){
        return Math.round(value);
    };
}

function WeatherAdapter() {

    var weather = new AdvancedWeather();

    return {
        request: function (country, city, temp, humidity, pressure, temp_min, temp_max,
            windSpeed, icon, observation_time, date, weatherDescription) {
            return {
                country: country,
                city: city,
                temp: weather.roundValue(temp),
                humidity: humidity,
                pressure: pressure,
                temp_min: weather.roundValue(temp_min),
                temp_max: weather.roundValue(temp_max),
                iconUrl: icon,
                date: date,
                observation_time: observation_time,
                weatherDescription: weatherDescription
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
                         key: '70388b130b191be8c6a64da274a27',
                         format: 'json',
                         q: pos.coords.latitude+','+pos.coords.longitude,
                         num_of_days: 1
                     }
                     console.log(weatherService);
                     weatherService.get(requestParameters, function (response) {
                         $scope.weatherData=adapter.request("Belarus", "Grodno",  response.data.current_condition[0].temp_C,
                          response.data.current_condition[0].humidity, response.data.current_condition[0].pressure,
                            response.data.weather[0].mintempC, response.data.weather[0].maxtempC, 
                            response.data.current_condition[0].windspeedKmph,
                            response.data.current_condition[0].weatherIconUrl[0].value, 
                            response.data.current_condition[0].observation_time,
                            response.data.weather[0].date,
                            response.data.current_condition[0].weatherDesc[0].value);
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