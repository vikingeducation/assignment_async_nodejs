const fs = require("fs");

var fsp = {
  readFile: function(file){
    return new Promise(function(resolve, reject) {
     fs.readFile(file, "utf8", (err, data) => {
      if (err) reject(err);
      resolve(data);
      });
    })
  },
  writeFile: function(file, input){
    return new Promise(function(resolve, reject) {
     fs.writeFile(file, input, "utf8", (err, data) => {
      if (err) reject(err);
      resolve(input);
      });
    })
  },
  appendFile: function(file, input){
    return new Promise(function(resolve, reject) {
       fs.appendFile(file, input, (err) => {
        if (err) reject(err);
        fs.readFile(file, "utf8", (err, data) => {
        if (err) reject(err);
        resolve(data);
       });
      });
    })
  },


}


/*
fsp.readFile('./data/lorem.txt')
  .then(function(data) {
    // Outputs the file data
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });
*/
fsp.writeFile('./data/test.txt', 'Hello!')
  .then(function(res) {
    // Outputs the file data
    // after writing
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp.appendFile('./data/test.txt', 'Hello again!')
  .then(function(res) {
    // Outputs the file data
    // after appending
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });
