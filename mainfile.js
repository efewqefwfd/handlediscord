var express = require('express')
app = express()

app.post('/POST', function (req, res) {
  res.send('POST request to the homepage')
})

app.listen(80, function () {
  console.log('Server is running. Point your browser to: http://localhost:80');
});
