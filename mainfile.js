var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  console.log(res)
  console.log(req)
})
 
app.listen(3000)
