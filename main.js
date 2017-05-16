var fs = require("fs");
var express = require('express');
var app = express();

app.use(express.static('static'));

app.get('/', function (req, res) {
	fs.readFile('index.htm', function (err, data) {
		if(!err){
			res.send(data.toString());
		}			
	});	
});

app.get('/index', function (req, res) {
	fs.readFile('index.htm', function (err, data) {
		if(!err){
			res.send(data.toString());
		}			
	});	
});

app.get('/AboutMe', function (req, res) {
	fs.readFile('AboutMe.htm', function (err, data) {
		if(!err){
			res.send(data.toString());
		}			
	});	
});

app.get('/CaseTester', function (req, res) {
	fs.readFile('CaseTester.htm', function (err, data) {
		if(!err){
			res.send(data.toString());
		}			
	});	
});

app.get('/Projects', function (req, res) {
	fs.readFile('Projects.htm', function (err, data) {
		if(!err){
			res.send(data.toString());
		}			
	});	
});

app.listen(3000, function () {
	console.log('Server listening on port 3000!');
});