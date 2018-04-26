
/*
  cd Documents/Viking/Node/async
*/

const fs = require('fs');

var fsp = {
  readFile: function(path) {
    var rf = new Promise((resolve, reject) => {
      fs.readFile(path, 'utf8', (err, data) => {
        err ? reject(err) : resolve(data);
      });
    });
    return rf;
  }
};

/*
fs.readFile('dummy.txt', 'utf8', (err, data) => {
  if (err) throw new Error(err);
  console.log('I read "' + data + '"');
});

fs.writeFile('dummy.txt', 'test', 'utf8', (err) => {
  if (err) throw new Error(err);
  console.log('file overwritten');
});

fs.appendFile('dummy.txt', 'example', 'utf8', (err) => {
  if (err) throw new Error(err);
  console.log('data appended');
});
*/

module.exports = fsp;



// spacing
