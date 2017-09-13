var fs = require("fs");
var fsp = require("./lib/fsp");

fsp
  .readFile("./data/lorem.txt")
  .then(function(data) {
    // Outputs the file data
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp
  .writeFile("./data/test.txt", "Hello!")
  .then(function(res) {
    // Outputs the file data
    // after writing
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp
  .appendFile("./data/test.txt", "Hello again!")
  .then(function(res) {
    // Outputs the file data
    // after appending
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });
