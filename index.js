/*
const FSP = require('./lib/fsp');

FSP.readFile('package.json', 'utf8')
  .then(console.log).catch(console.log);
FSP.writeFile('data/test.txt', 'This is a test', 'utf8')
  .then(doAppend).catch(console.log);

function doAppend(result) {
  console.log(result);
  FSP.appendFile('data/test.txt', 'This is also a test', 'utf8')
    .then(console.log).catch(console.log);
}
*/
const Emitter = require('./lib/custom-emitter');
let emitter = new Emitter();
function BARFOO() { console.log('barfoo'); }
emitter.on('foobar', function() { console.log('foobar'); });
emitter.on('foobar', BARFOO);
console.log(emitter.listeners);

emitter.off('foobar', BARFOO);
console.log(emitter.listeners);
emitter.on('foobar', BARFOO);
console.log(emitter.listeners);
//emitter.offAll('foobar');
//console.log(emitter.listeners);
emitter.emit('foobar');
