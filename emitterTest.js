var Emitter = require(`./eventEmitter`);
// var Emitter = require('events');
var emitter = new Emitter();

function testAlpha() {
  console.log(`alpha`);
}

function testBravo() {
  console.log(`bravo`);
}

function testCharlie() {
  console.log(`charlie`);
}

emitter.on(`event`, testAlpha);
emitter
  .on("event", testBravo)
  .on(`event`, testCharlie);

emitter.emit(`event`);

emitter.removeListener(`event`, testAlpha);
emitter.removeAllListeners(`event`);

emitter.emit(`event`);
