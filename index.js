// WARM UPS
//
//
//
//



// warm up #1
// Create a promise that resolves the message "Hello Promise!" after 1 second

var p = Promise.resolve('Hello Promise!');


p.then(function(message){
  setTimeout(function(){
    console.log(message);
  }, 1);
});


// warm up #2
// Your delay function should return a promise that resolves the value
// milliseconds after delaying for the specified number of milliseconds


var delay = function (ms) {
  return new Promise( (resolve,reject) => {
    setTimeout ( resolve(ms) , ms)
  });
}

var countDown = (remaining) => {
  if (remaining > 0 ) {
      console.log (remaining)
      remaining -= 100;
      return remaining;
  } else {
    console.log("Done!")
  }
};


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



// warm up #3
// Create a function that accepts a number and returns a promise that resolves that number squared
  // The promise should reject if it is not passed a number
  // Now map an array of integers 1 to 9 to an array of promises using the function above
  // Use Promise.all to get the result of all of the promises in the array


var squares = [1,2,3,4,5,6,7,8,9];

var squared = function (n) {
    return new Promise (function (resolve,reject) {
      if (typeof n === 'number') {
        resolve(n*n);
      } else {
        reject(n + " is not a number")
      }
    });
  };

squares = squares.map (function (i) {
  return squared(i);
});

Promise.all(squares)
  .then(function(result){
    console.log(result + " is the result")
  });


// warm up #4
// ✔️ Create a function with this signature doBadThing(forRealz)
  // ✔️ Return a promise that resolves to "Yay!" when forRealz is falsy
  // ✔️ The promise should reject when forRealz is truthy
  // Now call doBadThing with both a true and false value chaining on .then and .catch
  // Experiment with using .catch vs supplying a reject handler in your .then call
  // Experiment using now try throwing an error in the resolve handler of your .then call
  // What do you notice about when the .catch handler and the reject handler are invoked?

var doBadThing = function (value) {
  return new Promise (function (resolve,reject) {
     value == false ? resolve("Yay!") : reject (value + " => evalutes to true, got to rejection");
  });
};

doBadThing(false).then (function(result) {
  console.log(result);
})
  .catch(function(err) {
    console.log(err);
  })


doBadThing(true).then (function(result) {
  console.log(result);
})
  .catch(function(err) {
    console.log(err);
  })



// Now call doBadThing with both a true and false value chaining on .then and .catch
// **** come back to this ****
// how to call two  values? used map with array of 4 values, but only showing one
// to the console

var bad_things = [false, false, true, true]

bad_things = bad_things.map ( i => {
  return doBadThing(i);
});


Promise.all(bad_things).then (function(result) {
  console.log(result);
})
  .catch(function(err) {
    console.log(err);
  })

// Experiment with using .catch vs supplying a reject handler in your .then call
// with a rejected hanlder, its functioning as like an if/else statement


// FILE OPERATIONS
//
//
//
//
//This part of the assignment takes the fs module in Node.js and has you wrap it
//with a promise based interface.

var fsp = require('./fsp');


fsp.readFile('./data/lorem.txt')
  .then(function(data) {
    // Outputs the file data
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp.writeFile('./data/test.txt', 'Hello!')
  .then(function(res) {
    // Outputs the file data
    // after writing
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp.appendFile('./data/test.txt', 'Hello again!')
  .then(function(res) {
    // Outputs the file data
    // after appending
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });




// CREATE AN EMITTER FROM SCRATCH
//
//
//
//

// var Emitter = require('./emitter.js');
// var emitter = new Emitter();

// #1 create new instance
var events = require ('events');
var Emitter = require ('./emitter.js')


var myEmitter = new Emitter();


// callback functions
var unce = function() {console.log('unce unce unce')}
var bass = () => {console.log('bass line')}
var wubs = () => {console.log('wub wub')}

// #2 - 4 adding listeners and emitting
myEmitter.on('party', unce);
myEmitter.on('party', bass);
myEmitter.on('bass_drop', wubs);

myEmitter.emit('party');


// # 5- 7 removing listeners

myEmitter.removeListener('bass_drop', wubs);
console.log(myEmitter);

myEmitter.removeAllListeners('party')
console.log(myEmitter)
