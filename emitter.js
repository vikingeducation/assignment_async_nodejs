var Emitter = require('./lib/my_emitter');
var emitter = new Emitter();

function test() {
  console.log('test worked!');
}

function test2() {
  console.log('test2 worked!');
}

emitter.on('test', test);
emitter.on('test', test2);
emitter.on('test2', test2);

emitter.emit('test');
emitter.emit('test2');

emitter.removeAllListeners('test', test);

emitter.emit('test');
emitter.emit('test2');
