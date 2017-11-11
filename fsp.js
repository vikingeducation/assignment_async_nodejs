
let fs = require('fs');

let fsp = {
  readFile: (path, options) => {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  },
  writeFile: (path, data) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, data, (err) => {
        if (err) reject(err);
        resolve(data);
      });   
    });
  },
  appendFile: (path, data) => {
    return new Promise((resolve, reject) => {
      fs.appendFile(path, data, (err) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }
}
  
fs.readFile('./data/lorem.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.writeFile("message.txt", "Hello!", (err) => {
  if (err) throw err;
});

fs.appendFile("message.txt", "\ndata to append", (err) => {
  if (err) throw err;
});

module.exports = fsp;
