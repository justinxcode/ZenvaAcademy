var http = require('http');
var moment = require('moment');

function serverCallback(req, res)
{
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Hello world. It is " + moment().format('LLLL') + " now.");
}

http.createServer(serverCallback).listen(8080);
