var fs = require("fs");
var path = "./data/lorem.txt";

var _data;
var __data;
var ___data;

var fsp = {
  readFile: fs.readFile(path, "utf8", function(err, data) {
    _data = data;
    err ? console.error(err) : console.log(data);
  }),

  writeFile: fs.writeFile(path, "We are using fs.writeFile again", function(
    err,
    data
  ) {
    __data = data;
    err ? console.error(err) : console.log("Data has been written.");
  }),

  appendFile: fs.appendFile(
    path,
    "Now let's add this to the file using appendFile",
    function(err, data) {
      ___data = data;
      err ? console.err(err) : console.log("Data has been appended");
    }
  )
};

module.exports = fsp;
