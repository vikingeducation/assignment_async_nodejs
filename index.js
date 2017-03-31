var Emitter = require('events');
var emitter = new Emitter();

// some testing functions for emitter now with built in - still works :-)
emitter.on('CLICK', function(){console.log("click");});
emitter.on('DONKEY', function(){console.log("donkey");});
emitter.on('MOUSE', function(){console.log("mouse");});
emitter.on('CLICK', function(){console.log("click");});
emitter.on('CLICK', function(){console.log("click");});
emitter.on('CLICK', function(){console.log("click you");});
emitter.emit('CLICK');
emitter.removeAllListeners('CLICK');
emitter.emit('CLICK');
