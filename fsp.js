
var fs = require('fs');

//
// fsp.writeFile('./data/test.txt', 'Hello!')
//   .then(function(res) {
//     // Outputs the file data
//     // after writing
//     console.log(res);
//   })
//   .catch(function(err) {
//     console.error(err);
//   });

module.exports = {
  readFile:  function (path) {
                return new Promise((resolve, reject) => {
                  fs.readFile(path, 'utf8', (err, data) => {
                    err ? reject(err) : resolve(data);
                  })
                })
              },
  writeFile: function (path, text) {
                return new Promise((resolve, reject) => {
                  fs.writeFile(path, text,'utf8', (err, data) => {
                    err ? reject(err) : resolve(data);
                  })
                })
              },
  appendFile: function (path, text) {
              return new Promise((resolve, reject) => {
                fs.appendFile(path, text, 'utf8', (err, data) => {
                  err ? reject(err) : resolve(data);
                })
              })
            }

};
