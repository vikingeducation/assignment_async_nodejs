const fs = require('fs');

// fsp module wraps fs methods and returns promises
const fsp = {

  readFile( path ) {
    // Return a promise
    return new Promise( (resolve, reject) => {
      // Read in the file specified in path in utf8 format
      fs.readFile( path, 'utf8', (err, data) => {
        if( err ) {
          // Reject if error
          reject( err );
        } 
          // Else resolve with data
          resolve( data );
        
      });
    });
  },

  writeFile( path, message ) {
    // Return a promise
    return new Promise( (resolve, reject) => {
      // Write message to path
      fs.writeFile( path, message, 'utf8', err => {
        if( err ) {
          // Reject if error
          reject( err );
        } else {
          resolve( message );
        }
      });
    });
  },

  appendFile( path, message ) {
    
    return new Promise( (resolve, reject) => {
      // Append message to path
      fs.appendFile( path, message, 'utf8', err => {
        if( err ) {
          // Reject on error
          reject( err );
        } else {
          // Else resolve message
          resolve( message );
        }
      });
    });
  }

};

fsp.readFile('./data/lorem.txt')
  // Output the file data
  .then( data => console.log( data ) )
  // Catch any errors
  .catch( err => console.error( err ) );

fsp.writeFile('./data/test.txt', 'Hello!')
  // Output the written data
  .then( res => console.log( res ) )
  // Catch any errors
  .catch( err => console.error( err ) );

fsp.appendFile('./data/test.txt', 'Hello Again!')
  .then( res => console.log( res ) )
  .catch( err => console.error( err ) );


