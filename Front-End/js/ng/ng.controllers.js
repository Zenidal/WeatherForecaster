function AdvancedWeather() {

    this.roundValue = function (value) {
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
                iconUrl: dataRequest.data.current_condition[0].weatherIconUrl[0].value,
                date: dataRequest.data.weather[0].date,
                observation_time: dataRequest.data.current_condition[0].observation_time,
                weatherDescription: dataRequest.data.current_condition[0].weatherDesc[0].value,
                sync_time: Date.now(),
                
                partsOfDay: [
                    {
                        dateTemp: weather.roundValue(dataRequest.data.weather[0].hourly[0].tempC),
                        dateHumidity: dataRequest.data.weather[0].hourly[0].humidity,
                        datePressure: dataRequest.data.weather[0].hourly[0].pressure,
                        dateIconUrl: dataRequest.data.weather[0].hourly[0].weatherIconUrl[0].value,
                        dateWindSpeed: Math.round(dataRequest.data.weather[0].hourly[0].windspeedKmph / 3.6 * 10) / 10,
                        dateWindGust: Math.round(dataRequest.data.weather[0].hourly[0].WindGustKmph / 3.6 * 10) / 10,
                        dateTime: dataRequest.data.weather[0].hourly[0].time/100
                    },
                    {
                        dateTemp: weather.roundValue(dataRequest.data.weather[0].hourly[1].tempC),
                        dateHumidity: dataRequest.data.weather[0].hourly[1].humidity,
                        datePressure: dataRequest.data.weather[0].hourly[1].pressure,
                        dateIconUrl: dataRequest.data.weather[0].hourly[1].weatherIconUrl[0].value,
                        dateWindSpeed: Math.round(dataRequest.data.weather[0].hourly[1].windspeedKmph / 3.6 * 10) / 10,
                        dateWindGust: Math.round(dataRequest.data.weather[0].hourly[1].WindGustKmph / 3.6 * 10) / 10,
                        dateTime: dataRequest.data.weather[0].hourly[1].time/100
                    },
                    {
                        dateTemp: weather.roundValue(dataRequest.data.weather[0].hourly[2].tempC),
                        dateHumidity: dataRequest.data.weather[0].hourly[2].humidity,
                        datePressure: dataRequest.data.weather[0].hourly[2].pressure,
                        dateIconUrl: dataRequest.data.weather[0].hourly[2].weatherIconUrl[0].value,
                        dateWindSpeed: Math.round(dataRequest.data.weather[0].hourly[2].windspeedKmph / 3.6 * 10) / 10,
                        dateWindGust: Math.round(dataRequest.data.weather[0].hourly[2].WindGustKmph / 3.6 * 10) / 10,
                        dateTime: dataRequest.data.weather[0].hourly[2].time/100
                    },
                    {
                        dateTemp: weather.roundValue(dataRequest.data.weather[0].hourly[3].tempC),
                        dateHumidity: dataRequest.data.weather[0].hourly[3].humidity,
                        datePressure: dataRequest.data.weather[0].hourly[3].pressure,
                        dateIconUrl: dataRequest.data.weather[0].hourly[3].weatherIconUrl[0].value,
                        dateWindSpeed: Math.round(dataRequest.data.weather[0].hourly[3].windspeedKmph / 3.6 * 10) / 10,
                        dateWindGust: Math.round(dataRequest.data.weather[0].hourly[3].WindGustKmph / 3.6 * 10) / 10,
                        dateTime: dataRequest.data.weather[0].hourly[3].time/100
                    },
                    {
                        dateTemp: weather.roundValue(dataRequest.data.weather[0].hourly[4].tempC),
                        dateHumidity: dataRequest.data.weather[0].hourly[4].humidity,
                        datePressure: dataRequest.data.weather[0].hourly[4].pressure,
                        dateIconUrl: dataRequest.data.weather[0].hourly[4].weatherIconUrl[0].value,
                        dateWindSpeed: Math.round(dataRequest.data.weather[0].hourly[4].windspeedKmph / 3.6 * 10) / 10,
                        dateWindGust: Math.round(dataRequest.data.weather[0].hourly[4].WindGustKmph / 3.6 * 10) / 10,
                        dateTime: dataRequest.data.weather[0].hourly[4].time/100
                    },
                    {
                        dateTemp: weather.roundValue(dataRequest.data.weather[0].hourly[5].tempC),
                        dateHumidity: dataRequest.data.weather[0].hourly[5].humidity,
                        datePressure: dataRequest.data.weather[0].hourly[5].pressure,
                        dateIconUrl: dataRequest.data.weather[0].hourly[5].weatherIconUrl[0].value,
                        dateWindSpeed: Math.round(dataRequest.data.weather[0].hourly[5].windspeedKmph / 3.6 * 10) / 10,
                        dateWindGust: Math.round(dataRequest.data.weather[0].hourly[5].WindGustKmph / 3.6 * 10) / 10,
                        dateTime: dataRequest.data.weather[0].hourly[5].time/100
                    },
                    {
                        dateTemp: weather.roundValue(dataRequest.data.weather[0].hourly[6].tempC),
                        dateHumidity: dataRequest.data.weather[0].hourly[6].humidity,
                        datePressure: dataRequest.data.weather[0].hourly[6].pressure,
                        dateIconUrl: dataRequest.data.weather[0].hourly[6].weatherIconUrl[0].value,
                        dateWindSpeed: Math.round(dataRequest.data.weather[0].hourly[6].windspeedKmph / 3.6 * 10) / 10,
                        dateWindGust: Math.round(dataRequest.data.weather[0].hourly[6].WindGustKmph / 3.6 * 10) / 10,
                        dateTime: dataRequest.data.weather[0].hourly[6].time/100
                    },
                    {
                        dateTemp: weather.roundValue(dataRequest.data.weather[0].hourly[7].tempC),
                        dateHumidity: dataRequest.data.weather[0].hourly[7].humidity,
                        datePressure: dataRequest.data.weather[0].hourly[7].pressure,
                        dateIconUrl: dataRequest.data.weather[0].hourly[7].weatherIconUrl[0].value,
                        dateWindSpeed: Math.round(dataRequest.data.weather[0].hourly[7].windspeedKmph / 3.6 * 10) / 10,
                        dateWindGust: Math.round(dataRequest.data.weather[0].hourly[7].WindGustKmph / 3.6 * 10) / 10,
                        dateTime: dataRequest.data.weather[0].hourly[7].time/100
                    }
                ]
            };
        }
    };
};
function AdvancedGeotargeting() {
    this.getLocationFromResponse = function (value) {
        var location;
        angular.forEach(value.results, function (result) {
            if ($.inArray("locality", result.types) > -1 && $.inArray("political", result.types) > -1 && result.types.length <= 2) {
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
                location: geotargeting.getLocationFromResponse(dataRequest),
                sync_time: Date.now()
            };
        }
    };
};

var controllers = angular.module('app.controllers', []);