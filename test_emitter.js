var Emitter = require('./lib/Emitter.js');
// var Emitter = require('events');
var emitter = new Emitter();

var callback = function() {
  console.log('first callback');
};

var callback2 = function() {
  console.log('second callback');
};

emitter.on('event', callback);
emitter.on('event', callback2);
emitter.on('event_other', callback).on('event_other', callback2);

emitter.emit('event');
emitter.emit('event_other');

emitter
  .removeListener('event', callback)
  .emit('event');

emitter
  .removeAllListeners('event_other')
  .emit('event_other');
emitter.emit('event');