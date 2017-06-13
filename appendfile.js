const fs = require('fs');

const fsp = {}

// Define the function using parameter names
// file
// options
fsp.appendFile = (file, data) => {
  return new Promise((resolve, reject) => {

    // Pass in those parameters to the `fs.writeFile`
    // method call
    fs.appendFile(file, data, (err) => {
      err ? reject(err) : resolve(data);
    });
  });
};

fsp.appendFile('testing.txt', '\n + data to append')
  .then(data => console.log(data))
  .catch(err => console.error(err));