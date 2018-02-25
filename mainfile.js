


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
