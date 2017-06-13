const fs = require('fs');


const fsp = {};


fsp.writeFile = (file, data, options) => {

  // Set the options to encoding if
  // none passed
  options = options || 'utf8';

  // Return the promise to allow chaining
  // .then() etc...
  return new Promise((resolve, reject) => {

    // Wrap the fs.writeFile method
    // call the promise
    fs.writeFile(file, data, options, (err) => {
      // Reject if we have an error
      // and resolve the data if not
      err ? reject(err) : resolve(data);
    });
  });
};


// Use the promise based fsp method
fsp.writeFile('./testing.txt', 'Hello world Again!')
  .then(data => console.log(`Wrote: ${ data } to file`))
  .catch(err => console.error(err));