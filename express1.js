var express = require('express')
var app = express();
var bodyParser = require('body-parser');
// var cookieParser = require('cookie-parser');

app.use(express.static('/'));
// app.use(cookieParser);

var urlencodedParser = bodyParser.urlencoded({
	extended: false
});

app.get('/', function(req, res) {
	console.log('Got a GET request on the HomePage')
	res.send('Hello GET')
})

app.get('/index.html', function(req, res) {
	console.log('Got a GET request for index.html')
	console.log(__dirname);
	console.log("Cookies : ", req.cookies);
	res.sendFile(__dirname + "/" + "index.html");
})

app.get('/get_Details', function(req, res) {
	console.log(req.query.Name);
	console.log(req.query.Phone);
})

app.post('/', urlencodedParser, function(req, res) {
	console.log('Got a POST request on the HomePage');
	console.log(req.body.Name);
	response = {
		Name: req.body.Name,
		Phone: req.body.Phone
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

var server = app.listen(8081, function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log('My server is listening at http://%s:%s', host, port);
})