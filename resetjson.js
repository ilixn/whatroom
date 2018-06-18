const fs = require('fs');
var salles_list;

fs.readFile('salles.json', function(err, data) {
	if (err) throw err;
	resetJSON();
});

function resetJSON() {
	salles_list = { "salles" : [] };

	for (var i = 0; i < 10; i++) {
		salles_list.salles[i] = {"id" : i, "name" : "VH" + i, "state" : true};
	}

	salles_list = JSON.stringify(salles_list, null, 2);

	fs.writeFile('salles.json', salles_list, (err) => { if (err) throw err } );
}