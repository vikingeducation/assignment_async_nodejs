var Emitter = require('./emitter.js');
var emitter = new Emitter();

let callbackOne = function() {
  console.log('One');
};
let callbackTwo = function() {
  console.log('Two');
};
let callbackThree = function() {
  console.log('Three');
};

var emitter = new Emitter();
emitter.on('a', callbackOne)
 .on('a', callbackTwo)
 .on('a', callbackThree);

 emitter.emit('a');

  emitter.removeListener('a', callbackTwo);

  emitter.on('b', callbackOne)
   .on('b', callbackTwo);

   emitter.on('a', callbackThree);
  emitter.emit('a');
  emitter.emit('b');
console.log(emitter.removeAllListeners('b'));
  emitter.removeListener('a', callbackThree);
console.log(emitter);
