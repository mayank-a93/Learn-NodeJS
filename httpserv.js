var http = require('http');
var fs = require('fs');
var url = require('url');

var options = {
	host: 'localhost',
	port: '8083',
	path: '/index.html'
};

function handleRequests(request, response) {

	var pathname = url.parse(request.url).pathname;

	console.log("Got a request!");
	console.log("Request for " + pathname + " received.");

	fs.readFile(pathname.substr(1), function(err, data) {
		if (err) {
			console.log(err);
			response.writeHead(404, {
				'Content-Type': 'text/html'
			});
		} else {
			response.writeHead(200, {
				'Content-Type': 'text/html'
			});

			response.write(data.toString());
		}
		response.end();
	});
	if (request.method == "POST") {
		console.log(""request.body.Name"");
		console.log(request.body.Phone);
	}
}

http.createServer().listen(8083);

console.log('Server running at http://127.0.0.1:8082/');