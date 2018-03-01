var express = require('express');
app = express();

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.listen(80, () => console.log('Example app listening on port 80!'))
