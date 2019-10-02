var http = require('http');
var request = require('request');
var fs = require('fs');

var request_body = undefined;
var html_content = undefined;

function createHtmlStringFromJson(retrievedData)
{
  var body_begin_index = html_content.indexOf('<body>');
  var body_end_index = html_content.indexOf('</body>');

  var string_until_body = html_content.slice(0, body_begin_index + 6);
  var string_after_body = html_content.slice(body_end_index);

  var html_string = '<table>\n';
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

  html_string += '</table>';

  return string_until_body + html_string + string_after_body;
}

request('https://www.bnefoodtrucks.com.au/api/1/trucks', function(err, request_res, body)
{
  request_body = body;
});

http.createServer(function (req, res)
{
  if (request_body && html_content)
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

fs.readFile('./index.html', function(err, html)
{
  if(err)
  {
    throw err;
  }
  html_content = html;
});
