var Emitter = require('./lib/my_event_emitter');
// var Emitter = require('events');


var emitter = new Emitter();
emitter.on('go', function() {
  console.log(this);
});

console.log('1. ', emitter._events);

var fn = function() {
  console.log('Hi');
};

emitter.on('go', fn);
// emitter.addListener('go', fn);

console.log('2. ', emitter._events);

emitter.removeListener('go', fn);

console.log('3. ', emitter._events);

emitter.on('go', fn);

console.log('4. ', emitter._events);

emitter.emit('go');

emitter.removeAllListeners('go');

console.log('5. ', emitter._events);


