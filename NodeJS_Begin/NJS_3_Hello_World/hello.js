var http = require('http');

function serverCallback(req, res)
{
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Hello " + process.argv[2]);
}

http.createServer(serverCallback).listen(8080);
