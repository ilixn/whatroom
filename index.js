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

sio.sockets.on('connection', function(client) {
  client.emit('onconnected', { test: "value" });
  console.log('\t socket.io:: client connected');

  //Disconnection
  client.on('disconnect', function () {
      console.log('\t socket.io:: client disconnected');
  });
})
