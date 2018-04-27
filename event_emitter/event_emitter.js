
var Emitter = require(`../lib/emitter.js`);
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

emitter.on(`event_2`, alpha).on('event', bravo).on(`event`, charlie);

emitter.getter();

emitter.emit(`event`);

emitter.emit(`event_2`);

emitter.removeListener(`event`, alpha);

emitter.getter();

emitter.removeAllListeners(`event_2`);

emitter.getter();

emitter.emit(`event`);

emitter.emit(`event_2`);
/**/



/*
var fs = require('fs');
var text = fs.createReadStream('../README.md');

text.on('open', (value) => {
  console.log(`
  opened with value ${value}`);
});

process.on('exit', (code) => {
  console.log(`
  About to exit with code: ${code}
  `);
});
*/
