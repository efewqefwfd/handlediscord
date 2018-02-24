var express = require('express')
var app = express()
var port = process.env.PORT || 8080;

app.get('/discord/:hook', function (req, res, next) {
 var hook = req.params.hook;
 console.log(hook);
});
        
        app.listen(port, function () {
    console.log('Listening on port ' + port);
  });
