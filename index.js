// 1. Create a promise that resolves the message "Hello Promise!" after 1 second
var p = Promise.resolve("Hello Promise!");
p.then(function(message) {
  setTimeout(function() {
    console.log(message);
  }, 1000);
});

// 2. Create a function delay that returns a promise that resolves the value milliseconds after delaying for the specified number of milliseconds
var delay = function(milliseconds) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(milliseconds);
    }, milliseconds);
  });
};

var countDown = function(t) {
  console.log(t);
  return delay((t -= 100));
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

// 3. Create a function that accepts a number and returns a promise that resolves that number squared

var squared = function(number) {
  if (number !== "NaN") {
    return number * number;
  } else {
    // can't get it to throw error beyond NaN
    throw "Your input is not a number.";
  }
};

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array = array.map(function(i) {
  return Promise.resolve(squared(i));
});

Promise.all(array).then(
  function(results) {
    console.log(results);
  },
  function(err) {
    console.log(err);
  }
);

// 4. Create a function with signature doBadThing(forRealz)
var doBadThing = function(bool) {
  if (bool === false) {
    return Promise.resolve("Yay!");
  } else {
    return Promise.reject("No");
  }
};

var forRealz = true;
doBadThing(forRealz)
  .then(function(results) {
    console.log(results);
  })
  .catch(function(err) {
    console.log(err);
  });

var forRealz = false;
doBadThing(forRealz)
  .then(function(results) {
    console.log(results);
  })
  .catch(function(err) {
    console.log(err);
  });
