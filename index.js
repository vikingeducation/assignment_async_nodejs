var fsp = require('./lib/fsp');

fsp.readFile('./data/lorem.txt')
  .then(function(data) {
    // Outputs the file data
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });
