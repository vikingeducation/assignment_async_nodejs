var fsp = require('./lib/fsp');
var Emitter = require('./lib/emitter');

var dataPath = './data/data.json';
var textPath = './data/lorem.txt';
var newText = "This is the new text."

// readFile
fsp.readFile(textPath)
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

// writeFile
fsp.writeFile('./data/test.txt', 'Hello!')
  .then(function(res) {
    console.log(res);
    // Outputs the file data after writing
  })
  .catch(function(err) {
    console.error(err);
  });

// appendFile
fsp.appendFile('./data/test.txt', 'Hello again!')
  .then(function(res) {
    console.log(res);
    // Outputs the file data after appending
  })
  .catch(function(err) {
    console.error(err);
  });


// Set up Emitter
var emitter = new Emitter();
emitter.confirmation();
