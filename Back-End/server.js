var baseUrlApiWeather = "http://api.worldweatheronline.com/free/v2/weather.ashx";
var baseUrlApiGeotargeting = "http://maps.googleapis.com/maps/api/geocode/json";

var express = require('express');
var app = express();
var request = require('request');
var requestOptions = {
	headers: {
		'content-type': 'application/json; charset=UTF-8'
	}
} 

app.get('/Weather', function(req, res){
	res.send('Api is running')
});

app.get('/Location', function(req, res){
	var latitude = req.query.latitude;
	var longitude = req.query.longitude;
	var requestParams = {latlng: 30 + ',' + 30, language: 'EN', sensor: false };

	request({url: baseUrlApiGeotargeting, qs: requestParams, headers: {
		'content-type': 'application/json; charset=UTF-8'
	}}, function(error, response, body){
		if (!error && response.statusCode == 200) {
    		res.send(body); 
  		}else{
  			res.send('error');
  		}
	})
});

app.listen(1337, function(){
    console.log('Express server listening on port 1337');
});