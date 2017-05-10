var Emitter = require('./emitter');
var emitter = new Emitter();

var printName = function(){
  console.log('Printing the printName function')
};
var test = function(){
  console.log('this is another test')
};

emitter.on('click', printName);
emitter.on('click', test);
console.log(emitter.listeners.click);

emitter.on('myCustomEvent', test);

emitter.emit('click');

emitter.removeListener('click', test)
console.log(emitter.listeners.click)
emitter.emit('click');

console.log(emitter.listeners);
emitter.removeAllListeners('click');
console.log(emitter.listeners);
