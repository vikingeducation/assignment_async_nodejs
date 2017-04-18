/*==========================================
   1. Hello Promise
==========================================*/

var hello = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("Hello Promise");
  }, 1000);
});

hello.then(function(result){
  console.log(result);
  })
  .catch(function(err) {
    console.error(err);
});

/*==========================================
   2. Delay * countDown
==========================================*/

var delay = function(milliseconds) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(milliseconds);
    }, milliseconds);
  });
};

var countDown = function(result) {
  console.log(result);
  return delay(result - 100);
};

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

/*==========================================
   3. Squared & Promise All
==========================================*/

var squared = function(num) {
  return new Promise(function(resolve, reject) {
    if (typeof num === "number"){
      resolve(num * num);
    } else {
      reject("Not a number!");
    }
  });
};

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

myArray = myArray.map(function(num) {
  return squared(num);
});

Promise.all(myArray)
  .then(function(results) {
    console.log(results);
});

/*==========================================
   4. doBadThing
==========================================*/

var doBadThing = function(forRealz) {
  return new Promise(function(resolve, reject) {
    if (!forRealz) {
      throw "Whoops!";
      resolve("Yay!");
    } else {
      reject("Nope!");
    }
  });
};

doBadThing(0)
  .then(function(results) {
    console.log(results);
  })
  .catch(function(error) {
    console.log(error);
  });

doBadThing(0)
  .then(function(results) {
    console.log(results);
  }, function(error) {
    console.log(error);
});
