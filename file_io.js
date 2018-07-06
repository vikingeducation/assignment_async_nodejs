var fs = require('fs');
var fsp = require('./lib/fsp');


const FILE_PATH = `${ __dirname }/data/lorem.txt`;
// console.log(FILE_PATH);

var data = fs.readFileSync(FILE_PATH, 'utf8');
// console.log(data);


// fs.readFile(FILE_PATH, 'utf8', function(err, data) {
//   err ? console.error(err) : console.log(data);
// });


fsp.readFile('./data/lorem.txt')
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });


fsp.writeFile('./data/test.txt', 'Hello!')
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });


fsp.appendFile('./data/test.txt', 'Hello again!')
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });








