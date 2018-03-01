var http = require('http');
http.createServer(function (req, resp) {
  if (req.url === '/post') {
    if (req.method === 'POST') {
     console.log('post')
    } else if (req.method === 'GET' || req.method === 'HEAD') {
      console.log('get')
    }
  }
})
