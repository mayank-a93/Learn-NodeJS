var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listUsers', function(req, res) {
	fs.readFile(__dirname + "/" + "users.json", "utf-8", function(err, data) {
		if (err) {
			console.log(err.stack);
			throw err;
		}
		console.log(data);
		res.end(data);
	})
})

app.get('/deleteUsers', function(req, res) {
	fs.readFile(__dirname + "/" + "users.json", "utf-8", function(err, data) {
		if (err) {
			console.log(err.stack);
			throw err;
		}
		console.log(data);
		data = JSON.parse(data);
		delete data["user" + 2];
		res.end(JSON.stringify(data,null,4));
	})
})

app.get('/addUser', function(req, res) {
	fs.readFile(__dirname + "/" + "users.json", 'utf-8', function(err, data) {
		if (err) {
			console.log(err.stack);
			throw err;
		}
		data = JSON.parse(data);
	})
})

app.get('/:id', function(req, res) {
	fs.readFile(__dirname + "/" + "users.json", 'utf-8', function(err, data) {
		if (err) {
			console.log(err.stack);
			throw err;
		}
		data = JSON.parse(data);
		var user = data["user" + req.params.id];
		console.log(user);
		res.end(JSON.stringify(user, null, 4));
	})
})

var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("App running at http://%s:%s", host, port);
})