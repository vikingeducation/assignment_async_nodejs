
var Emitter = require(`../modules/my_emitter.js`);
// var Emitter = require('events');
var emitter = new Emitter();

function alpha() {
  console.log(`alpha`);
}

function bravo() {
  console.log(`bravo`);
}

function charlie() {
  console.log(`charlie`);
}

emitter.on(`event`, alpha);
emitter
  .on(`event_2`, alpha)
  .on("event", bravo)
  .on(`event`, charlie);

emitter.emit(`event`);
emitter.emit(`event_2`);

emitter.removeListener(`event`, alpha);
emitter.removeAllListeners(`event_2`);

emitter.emit(`event`);
emitter.emit(`event_2`);
