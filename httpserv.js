var http = require('http');

var server = http.createServer(function(request, response) {
	console.log("Got a request!");
	response.write("Wassup?");
	response.end();
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');