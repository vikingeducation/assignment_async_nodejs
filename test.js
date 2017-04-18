var Emitter = require('./lib/event_emitter');

const myEmitter = new Emitter();
;
let m = 0;
myEmitter.on('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
// Prints: 1
myEmitter.emit('event');
// Prints: 2