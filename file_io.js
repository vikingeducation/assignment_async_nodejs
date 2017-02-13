var fs = require("fs");
var path = "./data/lorem.txt";
var fsp = require("./lib/fsp");

// fs.readFile(path, "utf8", function(err, data) {
//   if (err) throw err;
//   console.log(data);
// });

var lorem = "Lorem ipsum dolor sit amet.";
// fs.writeFile(path, lorem, function(err) {
//   if (err) throw err;
//   console.log("File overwritten.");
// });

var more_lorem = " Consectetur adipiscing elit.";
// fs.appendFile(path, more_lorem, function(err) {
//   if (err) throw err;
//   console.log("Appended to file.");
// });

var promises = [fsp.readFile(path),
                fsp.writeFile(path, lorem),
                fsp.appendFile(path, more_lorem)];

promises.forEach( function(promise) {
  promise.then( function(result) {
    console.log(result);
  })
  .catch(function(err) {
    console.error(err);
  });
});
