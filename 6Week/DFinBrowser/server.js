var express = require('express');
var app = express();
var server = app.listen(80);
const dialogflow = require('dialogflow');

app.use(express.static('public'));

app.get("/", function (request, response) {
	  response.sendFile(__dirname + '/views/index.html');
});

const io = require('socket.io').listen(server)

io.on('connection'), socket => {
	console.log('new user: ' + socket.id);
	socket.on('hi', data => {
		console.log(data);
	});
});
}
