const fs = require('fs');

var fsp = {
  readFile: function(path) {
    return new Promise(function(resolve, reject) {
      fs.readFile(path, 'utf8', function(err, data) {
        err ? reject(err) : resolve(data);
      });
    });
  },

  writeFile: function(filename, data) {
    return new Promise(function(resolve, reject) {
      fs.writeFile(filename, data, function(err) {
        err ? reject('failed to write') : resolve('The file has been saved!');
      });
    });
  },

  appendFile: function(filename, data) {
    return new Promise(function(resolve, reject) {
      fs.appendFile(filename, data, function(err) {
        err ? reject('failed to append') : resolve('The data was appended!');
      });
    });
  }
};

fsp
  .readFile('./data/lorem.txt')
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp
  .writeFile('./data/test.txt', 'Hello!')
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp
  .appendFile('./data/test.txt', 'Hello again!')
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });
