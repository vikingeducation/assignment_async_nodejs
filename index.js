
var fsp = require('./lib/fsp')

//fsp path for fsp objects

fsp.readFile('./data/lorem.txt')
  .then(function(data) {
    // Outputs the file data
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp.writeFile('./data/test.txt', 'Hello!')
  .then(function(res) {
    // Outputs the file data
    // after writing
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp.appendFile('./data/test.txt', 'Hello again!')
  .then(function(res) {
    // Outputs the file data
    // after appending
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });



//EMITTER STUFF

//var Emitter = require('./emitter');
var events = require('events');

var Emitter = new events.EventEmitter();

Emitter.on('happy', function(message){
  console.log(message)
});

Emitter.emit('happy', 'smile was emitted');
