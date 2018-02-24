var express = require('express')
var app = express()
 
app.get('/discord/:hook', function (req, res, next) {
 var hook = req.params.hook;
 console.log(hook);
});
        
        app.listen(port, function () {
    console.log('Listening on port ' + port);
  });
