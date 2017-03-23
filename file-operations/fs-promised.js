//var fs = require('fs');
var myFSP = require('./lib/fsp');
var path = './dummy_text.txt';
var path_2 = './none-existent-file.txt';


myFSP.readFile('./dummy_text.txt').then(function(data){
  console.log(data);
});





/*fs.readFile(path, 'utf8', function(err, data){
  err ? console.error(err) : console.log(data);
});

fs.readFile(path_2, 'utf8', function(err, data){
  err ? console.error(err) : console.log(data);
});*/
