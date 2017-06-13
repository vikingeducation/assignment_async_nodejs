// const fs = require('fs');

// const fsp = {};

// fsp.readFile = ('/etc/passwd',(err, data)) => {

//   return new Promise((resolve, reject) => {

//     fs.readFile('/etc/passwd',(err, data) => {

//     if(err) throw err;
//     console.log(data);
//     }

//     )};
//   )};
// // Use the promise based fsp method
// fsp.readFile('./etc/passwd', 'Hello world Again!')
//   .then(data => console.log(`Read: ${ data } to file`))
//   .catch(err => console.error(err));

const fs = require('fs');

const fsp = {}

// Define the function using parameter names
// path
// options
fsp.readFile = (path, options='utf8') => {
  return new Promise((resolve, reject) => {

    // Pass in those parameters to the `fs.writeFile`
    // method call
    fs.readFile(path, options, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
};

// Here is where we actually
// pass in the path of the file
// to read
fsp.readFile('./writeFile.js')
  .then(data => console.log(data))
  .catch(err => console.error(err));