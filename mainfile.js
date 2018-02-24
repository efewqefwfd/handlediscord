var express = require('express')
var Webhook = require("webhook-discord")
var app = express()
var port = process.env.PORT || 8080;

app.get('/hook/:hook/name/:name/content/:content', function (req, res, next) {
 console.log('hi')
 var hook = req.params.hook;
 var name = req.params.name;
 var info = req.params.content;
 var Hoook = new Webhook(hook)
 Hook.info(name,info)
});
        
        app.listen(port, function () {
    console.log('Listening on port ' + port);
  });
