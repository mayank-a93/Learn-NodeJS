var events = require("events");
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
	console.log("Inside Listener 1");
}

var listener2 = function listener2() {
	console.log("Inside Listener 2");
}

eventEmitter.addListener('Connection', listener1);
eventEmitter.on('Connection', listener2);


var eventlisteners = require('events').EventEmitter.listenerCount(eventEmitter, 'Connection');
console.log(eventListeners + " Listner(s) listening to connection event");

eventEmitter.emit('Connection');

eventEmitter.on('Some_new_event', listener2);
eventEmitter.emit('Some_new_event');
eventEmitter.removeListener('Connection', listener2);
eventEmitter.emit('Connection');


console.log('Fin');