'use strict';


// Hello Promise

let myPromise = new Promise(function(resolve) {
  setTimeout(function() {
    resolve('Hello Promise!');
  }, 1000);
});

myPromise.then(function(message) {
  console.log(message);
});


// delay(milliseconds)

function delay(milliseconds) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(milliseconds);
    }, milliseconds);
  })
};

function countDown(time) {
  if (time) {
    console.log(time);
    return delay(time - 100);
  } else {
    console.log('Done!')
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


// async squaring, Promise.all

function asyncSquare(number) {
  return new Promise(function(resolve, reject) {
    let parsedNumber = Number(number);

    if (isNaN(parsedNumber)) {
      reject("That's not a number!");

    } else {
      resolve(Math.pow(parsedNumber, 2));
    }
  });
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let numPromise = numbers.map(function(number) {
  return asyncSquare(number);
})

Promise.all(numPromise)
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error(error);
  })


// catch those errors!

function doBadThing(forRealz) {
  return new Promise(function(resolve, reject) {
    if (forRealz) {
      resolve('Yay!');
    } else {
      reject();
    }
  })
}


doBadThing(true)
  .then(function(result) {
    console.log(result);
    throw 'oops!';
  })
  .catch(function(error) {
    console.log(error);
  })

doBadThing(true)
  .then(function(result) {
    console.log(result);
    throw 'oops!';
  }, function(error) {
    console.log(error);
  })
