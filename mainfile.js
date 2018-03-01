//require the express nodejs module
var express = require('express'),
    //set an instance of exress
    app = express(),
    //require the body-parser nodejs module
app.post('/POST', function (req, res) {
  res.send('POST request to the homepage')
})

app.listen(80, function () {
  console.log('Server is running. Point your browser to: http://localhost:80');
});
