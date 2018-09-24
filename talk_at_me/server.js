var express = require('express');
var app = express();
var server = app.listen(80);
var io = require('socket.io')(server);
var wayback = require('wayback-machine');

io.on('connection', function(socket){
	socket.on('theurl', function(urlResult){
	  console.log('message: ' + urlResult);
	  
	  wayback.getTimeline(urlResult, function(err, timeline) {
		if (err) {
		  console.error(err);
		  return;
		}
	   
		console.log('Timeline for <%s>:', urlResult);
		console.log(timeline.first.url);
		io.sockets.emit('timesocket', timeline.first.url);
	  });

	});
});

app.use(express.static('public'));

app.get("/", function (request, response) {
	  response.sendFile(__dirname + '/views/index.html');
});
