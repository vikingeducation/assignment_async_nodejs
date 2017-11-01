'use strict';

var hello = new Promise(function(resolve, reject) {
  setTimeout(resolve('Hello Promise!'), 1000);
});

hello
  .then(function(message) {
    console.log(message);
  })
  .catch(function(err) {
    console.error(err);
  });

let delay = function(milliseconds) {
  return new Promise(function(resolve, reject) {
    setTimeout(milliseconds);
    if (milliseconds > 0) {
      resolve(milliseconds);
    } else {
      reject('Done');
    }
  });
};

let countDown = function(result) {
  if (result > 0) {
    console.log(result);
    return (result -= 100);
  } else {
    console.log('Done!');
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

let square = function(val) {
  return new Promise(function(resolve, reject) {
    if (val !== undefined && typeof val === 'number') {
      resolve(Math.pow(val, 2));
    } else {
      reject('No bueno');
    }
  });
};

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numArray = numArray.map(square);

Promise.all(numArray).then(function(val) {
  console.log(val);
});

let doBadThing = function(forRealz) {
  return new Promise(function(resolve, reject) {
    if (forRealz) {
      reject('Booo');
    } else {
      resolve('Yay');
    }
  });
};

doBadThing('jefe').then(
  function(resolve) {
    console.log(resolve);
  },
  function(reject) {
    throw reject;
  }
);
doBadThing(21)
  .then(function(result) {
    console.log('!!' + result);
  })
  .catch(function(err) {
    console.error(err);
  });
