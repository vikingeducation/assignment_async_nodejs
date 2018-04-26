
/*
  debugger;
*/

var fsp = require('../lib/fsp');

fsp.readFile("dummy.txt").then(function(data) {
    console.log(data);
  }).catch(function(err) {
    throw new Error(err);
  });

/*
fsp
  .writeFile("dummy.txt", "Hello!")
  .then(function(res) {
    // Outputs the file data
    // after writing
    console.log(res);
  })
  .catch(function(err) {
    throw new Error(err);
  });

fsp
  .appendFile("dummy.txt", "Hello again!")
  .then(function(res) {
    // Outputs the file data
    // after appending
    console.log(res);
  })
  .catch(function(err) {
    throw new Error(err);
  });
*/
