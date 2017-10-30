//This part of the assignment takes the fs module in Node.js and has you wrap it
//with a promise based interface.

var fs = require('fs');


var fsp = {
  readFile: function (path) {
  return new Promise (function (resolve,reject) {
    fs.readFile (path, 'utf8', (err,data) => {
      err ? console.log(error) : resolve(data);
    });
  })
},
  writeFile : function (filename, message) {
    return new Promise ( function (resolve, reject) {
      fs.writeFile(filename, message, 'utf8', (err,data) => {
        resolve(data);
        fsp.readFile(filename)
          .then( data => {
            console.log(data);
          })
      })
    })
},
  appendFile : function (filename, data) {
    return new Promise ( function (resolve, reject) {
      fs.appendFile (filename, data, 'utf8', (err,data) => {
        resolve(data);
        fsp.readFile(filename)
          .then( data => {
            console.log(data);
          })
      })
    })
  }


}


module.exports = fsp;
