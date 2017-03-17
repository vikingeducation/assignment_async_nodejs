var Emitter = require('./event_emitter/index.js');
var emitter = new Emitter();

// Define listener functions

var barListener = function(){
	console.log('bar');
};
var barfoobarListener = function(){
	console.log('barfoobar');
};
var barfoobarfoobarListener = function(){
	console.log('barfoobarfoobar');
};
var bazListener = function(){
	console.log('baz');
};


// Add 3 event listeners for 'foo' and 1 for 'fiz'
emitter.on('foo', barListener);
emitter.on('foo', barfoobarListener);
emitter.on('foo', barfoobarfoobarListener);
emitter.on('fiz', bazListener);

// Check all listeners get invoked when an event gets emitted
emitter.emit('foo');
emitter.emit('fiz');

// Remove 1 listener from 'foo' and check the other 2 remain
emitter.removeListener('foo', barfoobarListener);
emitter.emit('foo');


// Remove all listeners from 'foo' and check
emitter.removeAllListeners('foo');
emitter.emit('foo');