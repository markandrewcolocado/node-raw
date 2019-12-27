const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter { }

// Initiate object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event fired!'));
myEmitter.on('test', (msg) => console.log('test: ' + msg));

// Init event
myEmitter.emit('event');
myEmitter.emit('test', 123);
