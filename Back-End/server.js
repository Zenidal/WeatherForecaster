var baseUrlApiWeather = "http://api.worldweatheronline.com/free/v2/weather.ashx";
var baseUrlApiGeotargeting = "http://maps.googleapis.com/maps/api/geocode/json";

var express = require('express');
var app = express();
var request = require('request');

app.get('/Weather', function(req, res){
	res.header("Content-Type", "application/json");
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	var requestParams = { 
		key: '70388b130b191be8c6a64da274a27',
		format: 'json',
		num_of_days: 1,
		q: req.query.latitude + ',' + req.query.longitude,
		date: req.query.date }

	request({url: baseUrlApiWeather, qs: requestParams}, function(error, response, body){
		if (!error && response.statusCode == 200) {
			res.send(body); }
		else {
			res.status(400).send('Error');
		}
	});
});

app.get('/Location', function(req, res){
	res.header("Content-Type", "application/json");
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	var requestParams = {
		latlng: req.query.latitude + ',' + req.query.longitude,
		language: 'EN', 
		sensor: false };

	request({url: baseUrlApiGeotargeting, qs: requestParams}, function(error, response, body){
    		if (!error && response.statusCode == 200) {
    		res.send(body); }
    		else{
    			res.status(400).send('Error');
    		}
	});
});

app.listen(1337, function(){
});