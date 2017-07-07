"use strict";

// HelloWorld Promise Exercise
let helloWorld = new Promise(function(resolve, reject) {
  setTimeout(() => {
      resolve("Hello World!");
  }, 1000);
});


helloWorld.then((result) => {
    console.log(result);
  }
);

// CountDown Promise Exercises

function countDown(value){
  if(value > 0) {
    console.log(value);
    return delay(value - 100);
  } else {
    console.log("Done!");
    resolve(0);
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

// Using Promise.all to map a squared array
function squared(num) {
  return new Promise((resolve, reject) => {
    if(isNaN(num)) {
      reject(num);
    } else {
      resolve(num * num);
    }
  });
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Promise.all(array.map((i) => {
  return squared(i);
}))
.then((result) => {
  console.log(result);
});


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
*/
