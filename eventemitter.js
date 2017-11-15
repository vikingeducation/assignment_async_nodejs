var Emitter = require('./path/to/your/module');
var emitter = new Emitter();

emitter.on(eventType, callback);
emitter.emit(eventType);
emitter.removeListener(eventType, callback);
emitter.removeAllListeners(eventType);

process.stdin.on('data', function(str) {
  str = str.trim();
  if (str === 'q') {
    process.removeAllListeners('data');
  } else {
    console.log(str);
  }
});