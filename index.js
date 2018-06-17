const express = require('express');
var 
	app = express();
	verbose = 1;

//Default homepage
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

//Serve any file
app.get('/*' , function(req, res, next) {
    var file = req.params[0];
    if(verbose) console.log('\t :: Express :: file requested : ' + file);
    res.sendFile(__dirname + '/' + file);
});

app.listen(1234, () => console.log('Whatroom app listening on port 1234!'));