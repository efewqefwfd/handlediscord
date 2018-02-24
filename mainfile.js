var express = require('express')
var Webhook = require("webhook-discord")
var app = express()
var port = process.env.PORT || 8080;

app.get('/discord/:hook/:name/:content', function (req, res, next) {
 var hook = req.params.hook;
 var name = req.params.name;
 var info = req.params.content;
 var Hoook = new Webhook(hook)
 Hook.info(name,info)
});
        
        app.listen(port, function () {
    console.log('Listening on port ' + port);
  });
