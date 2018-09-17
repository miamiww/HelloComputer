var express = require('express');
var app = express();
var server = app.listen(80);

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/projects", function (request, response) {
  response.sendFile(__dirname + '/views/projects.html');
});

// listen for requests :)
// var listener = app.listen(process.env.PORT, function () {
//   console.log('Your app is listening on port ' + listener.address().port);
// });
