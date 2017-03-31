var Emitter = require('./lib/emitter');
var emitter = new Emitter();

// some testing functions for emitter
emitter.on('CLICK', function(){console.log("click");});
emitter.on('DONKEY', function(){console.log("donkey");});
emitter.on('MOUSE', function(){console.log("mouse");});
emitter.on('CLICK', function(){console.log("click");});
emitter.on('CLICK', function(){console.log("click");});
emitter.on('CLICK', function(){console.log("click you");});
console.log(emitter.eventArray);
emitter.emit('CLICK');
emitter.removeAllListeners('CLICK');
console.log(emitter.eventArray);
