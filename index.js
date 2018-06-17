const express = require('express');
const fs = require('fs');

var 
	app = express();

//Default homepage
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

//List of empty/occuped rooms
app.get('/salles.json' , function(req, res, next) {
    var file = "salles.json"
    res.sendFile(__dirname + '/' + file);
});

//Change the state of a room
app.get('/change', function(req, res, next) {
	var room_nb = req.query.room;
	res.send('OK!' + room_nb);
	console.log(room_nb);
	setRoomOccuped(room_nb);
});

app.listen(1234, () => console.log('Whatroom app listening on port 1234!'));

function setRoomOccuped(id) {
	fs.readFile('salles.json', function(err, data) {
		if (err) throw err;
		salles_list = JSON.parse(data);
		salles_list.salles[id].state = false;
		console.log(JSON.stringify(salles_list));
		var salles_list_stringified = JSON.stringify(salles_list);
		//fs.writeFile('salles.json', salles_list_stringified, (err) => { if (err) throw err } );
	});
}
