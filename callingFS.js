var fsp = require('./modules/fsp.js')


fsp.readFile('text.txt', 'utf-8').then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

  fsp.writeFile('message.txt', "hello", 'utf-8').then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

  fsp.appendFile('text.txt', 'Hello again! I am editing gibberish', 'utf-8')
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });