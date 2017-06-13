const Emitter = require('events');

var emitter = new Emitter();

emitter.on('someEvent', function(mssg){
  console.log(mssg);
})

emitter.on('nextEvent', function(mssg){
  console.log(mssg);
})

emitter.emit('someEvent', 'the event was emitted');
emitter.emit('nextEvent', 'the second event was emitted');

// Use a variable to retain a reference
// to the callback function
const someEventCallback = function(mssg){
  console.log(mssg);
};

emitter.on('someEvent', someEventCallback);

// So when you go to remove it
// you can tell removeListener()
// which callback to remove
emitter.removeListener('someEvent', someEventCallback);

emitter.removeAllListeners('nextEvent');