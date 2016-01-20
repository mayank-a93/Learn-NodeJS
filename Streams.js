var fs = require('fs');
var data = '';

var dataStream = fs.createReadStream('text.txt');


dataStream.setEncoding('utf8');

dataStream.on('data', function(chunk) {
	data += chunk;
});

dataStream.on('end', function() {
	console.log(data);
});

dataStream.on('error', function(err) {
	console.log(err.stack);
});

fs.appendFile("text.txt", "\r\nThis is appended2", function(err) {
	if (err)
		console.log(err);
});

console.log('Fin');