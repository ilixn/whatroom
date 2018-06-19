const
  express = require('express'),
  io = require('socket.io'),
  http = require('http');
var
  app = express(),
  port = 1234;


//Default homepage
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/*' , function(req, res, next) {
  var file = req.params[0];
  console.log('\t :: Express :: file requested : ' + file);
  res.sendFile(__dirname + '/' + file);
});


//Socket.io setup
var server = http.Server(app);

var sio = io.listen(server);
server.listen(port);

sio.sockets.on('connection', function(socket) {

  socket.emit('onconnected', { test: "OK!" });
  console.log('\t socket.io:: client connected');

  socket.on('getFreeRooms', function() {
	var rooms = getFreeRooms();
	socket.emit('freeRooms', rooms);
  });
  socket.on('setRoomFull', function(room) {
	  setRoomFull(room);
  });

  //Disconnection
  socket.on('disconnect', function () {
      console.log('\t socket.io:: client disconnected');
  });
});


//Functions
function getFreeRooms() {
	return { rooms: "OK" };
}
function setRoomFull(room) {
}
