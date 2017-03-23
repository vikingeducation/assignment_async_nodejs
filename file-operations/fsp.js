var fs = require('fs');
var path = './dummy_text.txt';
var path_2 = './none-existent-file.txt';

fs.readFile(path, 'utf8', function(err, data){
  err ? console.error(err) : console.log(data);
});

fs.readFile(path_2, 'utf8', function(err, data){
  err ? console.error(err) : console.log(data);
});
