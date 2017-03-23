//var fs = require('fs');
var myFSP = require('./lib/fsp');
var path = './dummy_text.txt';
var path_2 = './none-existent-file.txt';

myFSP.readFile(path)
  .then(function(data) {
    // Outputs the file data
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

myFSP.writeFile('./test1.txt', 'Hello! ')
    .then(function(res) {
      console.log(res);
    })
    .catch(function(err) {
      console.error(err);
    });

myFSP.appendFile('./test.txt', 'Hello again! ')
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });

/*fs.readFile(path, 'utf8', function(err, data){
  err ? console.error(err) : console.log(data);
});

fs.readFile(path_2, 'utf8', function(err, data){
  err ? console.error(err) : console.log(data);
});*/
