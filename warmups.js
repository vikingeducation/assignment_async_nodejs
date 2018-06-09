//These few warmups will get you started working with promises.

//1. create a promise that logs  "Hello Promise!" after one second using .then
var helloPromise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve(`Hello Promise!`);
  }, 1000);
});

helloPromise.then(function(hello) {
  console.log("helloPromise", hello);
});

//2. Create a delay(milliseconds) function that should return a promise thatresolves the value milliseconds after delaying for the specified number of milliseconds
function delay(milliseconds) {
  return new Promise((resolve, reject) => {
    if (milliseconds > 0) {
      console.log("delay", milliseconds);
      resolve(milliseconds);
    } else {
      console.log(`Countdown Done!`);
    }
  });
}

function countDown(time) {
  return delay(time - 100);
}

delay(1000)
  .then(countDown) //=> 1000
  .then(countDown) //=> 900
  .then(countDown) //=> 800
  .then(countDown) //=> 700
  .then(countDown) //=> 600
  .then(countDown) //=> 500
  .then(countDown) //=> 400
  .then(countDown) //=> 300
  .then(countDown) //=> 200
  .then(countDown) //=> 100
  .then(countDown); //=> Done!


//3. Create a function that accepts a number and returns a promise that resolves that number squared. The promise should reject if it is not passed a number. Map an array of integers 1 to 9 to an array of promises using the function. Use Promise.all to get the result of all of the promises in the array.

var array = [1,2,3,4,5,6,7,8,9];

function squared(num) {
  return new Promise((resolve, reject) => {
    if (isNaN(num)) {
      reject(num);
    } else {
      resolve(num*num);
    }
  });
}

Promise.all(array.map(squared)).then(
  results => {
    console.log("squared", results);
  },
  error => {
    console.log(error);
  }
);

//4. Experiment with catch vs reject
var doBadThing = forRealz => {
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

doBadThing( false )
  .then( result => console.log( result ))
  .catch( error => console.error( error ));

doBadThing( false )
  .then( result => {
    console.log( result );
    throw "ERROR!";
  })
  .catch( error => console.error( error ));

doBadThing( true )
  .then( result => {
    console.log( result );
  },
    err => console.error( err )
  );
