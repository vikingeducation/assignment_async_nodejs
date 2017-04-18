var Emitter = require('./lib/event_emitter');

const myEmitter = new Emitter();

var sayNonsense = function() {
  console.log('gifilgafish');
};

var countMe = function() {
  console.log(++m);
};

var m = 0;

myEmitter.on('eventOne', countMe);

myEmitter.on('eventOne', sayNonsense);

myEmitter.on('eventOne', function() {
  console.log("I'm an anonymous function!");
});

myEmitter.emit('eventOne');
// Prints: 1, anonymous, and gifilgafish
myEmitter.emit('eventOne');
// Prints: 2, anonymous, and gifilgafish

myEmitter.removeListener('eventOne', sayNonsense);

myEmitter.emit('eventOne');
// Prints: 3 and anonymous
myEmitter.emit('eventOne');
// Prints: 4 and anonymous

myEmitter.removeListener('eventOne', countMe);

myEmitter.emit('eventOne');
// Prints anonymous function only

myEmitter.removeListener('eventOne', function() {
  console.log("I'm an anonymous function!");
});

console.log("Nothing should print between me...");

myEmitter.emit('eventOne');
// Prints nothing

console.log("...and me.");

myEmitter.on('eventTwo', countMe);

myEmitter.on('eventTwo', sayNonsense);

myEmitter.emit('eventTwo');
// Prints: 5 and gifilgafish
myEmitter.emit('eventTwo');
// Prints: 6 and gifilgafish
myEmitter.removeAllListeners('eventTwo');

console.log("Nothing should print between me...");

myEmitter.emit('eventTwo');
// Prints nothing

console.log("...and me.");