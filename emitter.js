// var Emitter = require('./event');

var Emitter = require('events');
var emitter = new Emitter();

var callback1 = function callback1() {
  console.log('The first event occured!');
}

var callback2 = function callback2() {
  console.log('A second Event!!');
}
emitter.on('event', callback1 )
        .on('event', callback2 );
emitter.emit('event');

emitter.removeListener('event', callback1 );
console.log(emitter);

emitter.removeAllListeners('event');
console.log(emitter);
