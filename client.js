console.log("Client.js imported !");

var socket = io.connect('/');

socket.on('onconnected', function(data) {
    //Note that the data is the object we sent from the server, as is. So we can assume its id exists.
    console.log( 'Connected ! data.test:' + data.test);
});
socket.on('roomlist', function(data) {
  console.log(data.salles);
});
