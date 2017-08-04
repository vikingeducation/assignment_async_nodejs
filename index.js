var fsp = require('./lib/fsp');

var dataPath = './data/data.json';
var textPath = './data/lorem.txt';
var newText = "This is the new text."

fsp.readFile(textPath)
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp.writeFile('./data/test.txt', 'Hello!')
  .then(function(res) {
    console.log(res);
    // Outputs the file data after writing
  })
  .catch(function(err) {
    console.error(err);
  });

// fsp.appendFile('./data/test.txt', 'Hello again!')
//   .then(function(res) {
//     // Outputs the file data
//     // after appending
//     console.log(res);
//   })
//   .catch(function(err) {
//     console.error(err);
//   });