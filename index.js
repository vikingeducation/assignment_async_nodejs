// Set up modules
var fsp = require('./lib/fsp');
var Emitter = require('./lib/emitter');


// Set up vars
var dataPath = './data/data.json';
var textPath = './data/lorem.txt';
var newText = "This is the new text."


// // Output fs functions
// fsp.readFile(textPath)
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function(err) {
//     console.error(err);
//   });

// fsp.writeFile('./data/test.txt', 'Hello!')
//   .then(function(res) {
//     console.log(res);
//     // Outputs the file data after writing
//   })
//   .catch(function(err) {
//     console.error(err);
//   });

// fsp.appendFile('./data/test.txt', 'Hello again!')
//   .then(function(res) {
//     console.log(res);
//     // Outputs the file data after appending
//   })
//   .catch(function(err) {
//     console.error(err);
//   });


// Set up Emitter
var emitter = new Emitter();

// Attach an event listener with emitter.on(eventType, callback)
emitter.on('click', function(){
  console.log('Clicked 1');
});

// Attach subsequent listeners with emitter.on
emitter.on('click', function(){
  console.log('Clicked 2');
});

emitter.on('click', function(){
  console.log('Clicked 3');
});

emitter.on('change', function(){
  console.log('This just changed');
});


// Emit an event with emitter.emit(eventType)
// This should result in all listeners attached to that event being invoked
emitter.emit('click');


// Remove a listener with emitter.removeListener(eventType, callback)
emitter.on('gonnaBeRemoved', function(){
  console.log('This is going to be removed');
});

emitter.removeListener('gonnaBeRemoved', function(){
  console.log('This is going to be removed');
});

emitter.removeListener('click', function(){
  console.log('Clicked 1');
});


// Remove all listeners on an event with emitter.removeAllListeners(eventType)
emitter.removeAllListeners('click');

console.log(emitter.events);
