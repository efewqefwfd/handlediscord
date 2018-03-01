


var express = require('express');
var fs = require('fs');
var app = express();


app.get('/', function(req, res){
    console.log('GET /')
    //var html = '<html><body><form method="post" action="http://localhost:3000">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>';
});

app.post('/', function(req, res){
    console.log('POST /');
    console.log(req.body); 
});

port = 3000;
app.listen(port);
console.log('Listening at http://localhost:' + port)


var request = require("request");

var http = require('http');
var qs = require('querystring');

var serverPort = 8124;
http.createServer(function (request, response) {
  if(request.method === "GET") {
   console.log('get')
  } else if(request.method === "POST") {
      console.log('post')
    if (request.url === "/cool") {
        console.log('cool post')
      request.on('data', function(data) {
        console.log(data)
      });
      request.on('end', function() {
       console.log('ended')
      });
}).listen(serverPort);
console.log('Server running at localhost:'+serverPort);
