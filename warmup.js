/*
// Warmup #1:
//
// Promise resolves the message 'Hello Promise!' after one second
const p = new Promise( (resolve, reject) => {
  setTimeout( () => resolve( 'Hello Promise!' ), 1000);
});

// Uses then to resolve the promise and console.log the message
p.then( message => console.log( message ) )
  .catch( error => console.error( error ) );

// Warmup #2:

const delay = milliseconds => {
  // Returns a promise that resolves the value `milliseconds`
  // after delaying for the specified number of milliseconds
  return new Promise( resolve => {
    setTimeout( () => resolve( milliseconds ), milliseconds );
  });
};

// Countdown function uses the delay function to chain and output a countdown
const countDown = count => {

  if( count <= 0) {
    console.log('Done');
    return count - 100;
  }

  console.log( count );

  return count - 100;
};

delay( 1000 )
  .then( countDown )
  .then( countDown )
  .then( countDown )
  .then( countDown )
  .then( countDown )
  .then( countDown )
  .then( countDown )
  .then( countDown )
  .then( countDown )
  .then( countDown )
  .then( countDown );


// Warmup #3:
//
// `square` accepts a number and resolves that number squared
const square = number => {
  return new Promise( ( resolve, reject ) => {
    // Reject if not passed a number
    if (typeof(number) !== 'number'){
      reject( 'Not a number!');
    }
    resolve( number * number );
  });
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Map array of numbers to an array of promises using `square`
numbers = numbers.map( num => square(num) );

// Get the result of all promises in the array
Promise.all( numbers )
  .then( results => console.log( results ))
  .catch( err => console.error( err ));

*/

// Warmup #4:
//

const doBadThing = forRealz => {
  // Return a promise that resolves to 'Yay!' when `forRealz` is falsy
  return new Promise( ( resolve, reject ) => {
    if( forRealz ) {
      reject('Ew');
    } else {
      resolve( 'Yay!');
    }
  });
};

doBadThing( true )
  .then( result => console.log( result ))
  .catch( error => console.error( error ));

doBadThing( null )
  .then( result => {
    console.log( result );
    throw "ERROR!";
  })
  .catch( error => console.error( error ));

doBadThing( null )
  .then( result => { 
    console.log( result );
     throw "ERROR!";
  //  Note that the `reject` handler doesn't catch the throw error
  //   while `.catch` does
  },
    err => console.error( err ));















