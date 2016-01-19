var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
	console.log('Connection Successful');
	eventEmitter.emit('Data_Recieved');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('Data_Recieved', function() {
	console.log("Data successfully recieved");
});

eventEmitter.emit('Data_Recieved');
eventEmitter.emit('connection');

console.log('Fin');