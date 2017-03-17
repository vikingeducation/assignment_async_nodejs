var Emitter = require('./event_emitter/index.js');
var emitter = new Emitter();


// Add 3 event listeners for 'foo' and 1 for 'fiz'
emitter.on('foo', function(){
	console.log('bar');
});
emitter.on('foo', function(){
	console.log('barfoobar');
});
emitter.on('foo', function(){
	console.log('barfoobarfoobar');
});
emitter.on('fiz', function(){
	console.log('baz');
});

// Check all listeners get invoked when an event gets emitted
emitter.emit('foo');
emitter.emit('fiz');

// Remove 1 listener from 'foo' and check the other 2 remain
emitter.removeListener('foo', function(){
	console.log('barfoobar');
});
emitter.emit('foo');


// Remove all listeners from 'foo' and check
emitter.removeAllListeners('foo');
emitter.emit('foo');