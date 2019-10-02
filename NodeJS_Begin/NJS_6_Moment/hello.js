var http = require('http');
var moment = require('moment');

function serverCallback(req, res)
{

  var begin_time = moment("10:00", "HH:mm");
  var end_time = moment("18:00", "HH:mm");

  var message = "Hello!" + "!\n";
  message += "Welcome to our page.\n"
  message += "Now, it is " + moment().format("HH:mm") + ".\n";
  message += "Our business hours is from " + begin_time.format("HH:mm") + " to " + end_time.format("HH:mm") + ".\n";

  var begin_difference = begin_time.diff(moment(), 'minute');
  var end_difference = moment().diff(end_time, 'minute');

  if (begin_difference > 0)
  {
    message += "Please come back in " + begin_difference + " minutes.\n";
  }

  if (end_difference > 0)
  {
    message += "Please come back tomorrow.\n";
  }

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(message);
}

http.createServer(serverCallback).listen(8080);
