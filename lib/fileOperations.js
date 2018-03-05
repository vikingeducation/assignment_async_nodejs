var fsp = require('./modules/fsp');

fsp.writeFile('./data/test.txt', 'Hello!')
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp.appendFile('./data/test.txt', ', Hello again!')
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });

setTimeout(function() {
  fsp.readFile('./data/test.txt')
    .then(function(data) {
      console.log(data);
    })
    .catch(function(err) {
      console.error(err);
    });
}, 100);

console.log('Performing Operations...');
