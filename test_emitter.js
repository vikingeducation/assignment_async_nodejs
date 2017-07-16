var Emitter = require('./emitter.js');
var emitter = new Emitter();

var leash = () => {console.log("Hold on to the leash");}
var tidbit = (eventType) => {console.log(eventType + " happenned, so give 'em a tidbit");}
var release = () => {console.log("Turn 'em loose");}

emitter.on('bate', leash);
emitter.on('hunt', release);
emitter.on('hunt', tidbit);
emitter.emit('bate');
emitter.emit('hunt'); //tidbit eventType undefined?
emitter.removeListener('hunt', tidbit);
emitter.removeAllListeners('bate');
emitter.emit('bate');
emitter.emit('hunt');
