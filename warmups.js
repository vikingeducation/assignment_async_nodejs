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

