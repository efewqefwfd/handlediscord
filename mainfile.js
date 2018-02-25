const http = require('http');
const server = http.createServer();
server.on('post', (request, response) => {
  console.log('hihi')
});
