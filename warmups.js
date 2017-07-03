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
