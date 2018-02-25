var express = require('express')
var Webhook = require("webhook-discord")
var app = express()
var port = process.env.PORT || 8080;

console.log('starting...')
app.get('/hook/:hook/name/:name/content/:content', function (req, res, next) {
 console.log('hi')
});
        
        app.listen(port, function () {
    console.log('Listening on port ' + port);
  });
console.log('started')
