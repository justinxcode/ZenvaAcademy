var http = require('http');
var request = require('request');

var request_body = undefined;

function createHtmlStringFromJson(retrievedData)
{
  var html_string = '<html>\n<header>\n<title>Data Aggregator</title>\n</header>\n<body>\n<table>';
  html_string += '<tr>\n';

  for (var attribute in retrievedData[0])
  {
    if (typeof retrievedData[0][attribute] !== 'object')
    {
      html_string += '<td>' + attribute + '</td>';
    }
  }
  html_string += '</tr>\n';

  retrievedData.forEach(function(object)
  {

    for (var attribute in object)
    {
      if (typeof object[attribute] !== 'object')
      {
        html_string += '<td>' + object[attribute] + '</td>';
      }
    }
    html_string += '</tr>\n';

  });

  html_string += '</table>\n</body>\n</html>';

  return html_string;
}

request('https://www.bnefoodtrucks.com.au/api/1/trucks', function(err, request_res, body)
{
  request_body = body;
});

http.createServer(function (req, res)
{
  if (request_body)
  {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(createHtmlStringFromJson(JSON.parse(request_body)));
  }
  else
  {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Nothing rerieved yet...');
  }
}).listen(8080);
