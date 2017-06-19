"use strict";

/*
// Option 1: pass variable to callback
let p = Promise.resolve("Hello Promise!");

p.then(function(message) {
  // 1 second delay and display "Hello Promise!"
  setTimeout(() => {
    console.log(message);
    return "Hello Promise!";
  }
  , 1000);
});

// Option 2: pass function with variable with message to callback
let p = Promise.resolve(setTimeout( () => {console.log("Hello Promise!");}, 1000));


function delay(milliseconds){
  return new Promise(function(resolve, reject) {
    setTimeout( () => {
      console.log(milliseconds);
      resolve(milliseconds)}
      , milliseconds);
  });
}


function countDown(value){
  if(value > 0) {
    return delay(value - 100);
  } else {
    console.log("Done!");
  }
}

delay(1000)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown);


function squared(num) {
  return new Promise(function(resolve, reject) {
    if(!isNaN(num)) {
      resolve(num * num);
    } else {
      reject();
    }
  });
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrayPromises = array.map(function(i) {
  return squared(i);
});

Promise.all(arrayPromises)
  .then(function(results) {
    console.log(results);
  });
  */

function doBadThing(forRealz) {
  return new Promise(function(resolve, result) {
    if(!forRealz) {
      resolve("Yay!");
    } else {
      reject();
    }
  });
}

 doBadThing(!true)
  .then(function(result) {
    console.log(result);
    throw "Oh no an error has been encountered!";
  }, function(result) {
    console.log(result);
  })
  .catch(function(err) {
    console.error(err);
  }
);
