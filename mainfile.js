//JS Side
var express = require('express');
app = express();
var port = process.env.PORT || 80

app.post('/', function (req, res) {
res.send('Hello World!') 
console.log('Post.')
});

app.listen(80, () => console.log('Example app listening on port '+ port))
