var Emitter = require('events');
var emitter = new Emitter();

function gotcha() {
  console.log('Gotcha!');
}

emitter.on('emit', gotcha);

emitter.emit('emit');

emitter.removeListener('emit', gotcha);

emitter.emit('emit');
