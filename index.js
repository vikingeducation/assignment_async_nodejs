var p = Promise.resolve('hello');

p.then(function(message) {
  setTimeout(function() {
    console.log(message);
  }, 1000)
});
//////////////////////////////////////

function delay(milliseconds) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(milliseconds);
    }, milliseconds)
  });
};

function countDown(milliseconds) {
  console.log(milliseconds);
  return milliseconds - 100
}

delay(1000)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown);

/////////////////////////////////////////

function square(num) {
  var p = new Promise(function(value, error) {
    if (num == NaN ) {
      error("not a number");
    } else {
      value(num*num);
    };
  });
  return p;
};

var nums = [1,2,3,4,5,6,7,8,9];

nums = nums.map(function(i) {
  return square(i);
});

Promise.all(nums)
  .then(function(results) {
    console.log(results);
});


//////////////////////////////////////////

function doBadThing(forRealz) {
  var p = new Promise(function(resolve, reject) {
    if (forRealz) {
      reject('reject the truth!!')
    } else {
      resolve('EMBRACE THE FALSEY!!!')
    };
  });
  return p;
}

doBadThing("Heya")
  .then(function(resolve) {
    console.log(resolve);
  })
  .catch(function(reject) {
    console.error(reject);
  });

////////////////////////////////////////////

var Emitter = require('./lib/my-emitter.js');
var f1 = function() {
  console.log("beeboop");
}

var f2 = function() {
  console.log("heyo");
}

var emitter = new Emitter;

emitter.on("thing", f1);
emitter.on("thing", f1);
emitter.on("thing", f1);
emitter.on("stuff", f2);

emitter.emit("thing");


// emitter.emit("thing").removeAllListener("thing", f1).emit("thing");

