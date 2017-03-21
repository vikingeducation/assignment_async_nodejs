const fs = require('fs');

// fs.readFile('./dummy.txt', 'utf8', function(err, data) {
//   if (err) {
//     throw err;
//   } else {
//     console.log(data);
//   }
// })

// fs.writeFile('./dummy.txt', 'There', function(err, data) {
//   if (err) {
//     throw err;
//   } else {
//     console.log(data);
//   }
// });

function wrappedReadFile(filePath) {
  var p = new Promise(function(resolve, reject) {
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
  return p;
}

function wrappedWriteFile(file, data) {
  var p = new Promise(function(resolve, reject) {
    fs.writeFile(file, data, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
  return p;
}

function wrappedAppendFile(file, data) {
  var p = new Promise(function(resolve, reject) {
    fs.appendFile(file, data, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
  return p;
}

var fsp = {
  readFile: wrappedReadFile,
  writeFile: wrappedWriteFile,
  appendFile: wrappedAppendFile
}

fsp.readFile('./dummy.txt')
  .then(function(data) {
    // Outputs the file data
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp.writeFile('./dummy.txt', 'Hello!!!!!!!!!!!')
  .then(function(res) {
    // Outputs the file data
    // after writing
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });

  fsp.appendFile('./dummy.txt', 'Hello again!')
  .then(function(res) {
    // Outputs the file data
    // after appending
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });












