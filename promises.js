// 1. Promise with setTimeout

var p = new Promise(function(resolve) {
  setTimeout(function() {
    resolve('Hello Promise!');
  }, 1000);
});


p.then(function(message) {
  console.log(message);
});




// 2. Promise driven delay


function delay(milliseconds) {
  return new Promise(function(resolve) {
    if (milliseconds > 0) {
      setTimeout(function() {
        resolve(milliseconds);
      }, milliseconds);
    } else {
      resolve(0);
    }
  });
}

var countDown = function(t) {
  var output = t > 0 ? t : 'Done!';
  console.log(output);
  return delay(t - 100);
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



// 3. Multiple promises with Promise.all

var squares = [1, 2, 3, 4, 5, 6, 7, 8, 9];
squares = squares.map(function(i) {
  return new Promise(function(resolve, reject) {
    if (Number.isNaN(i)) {
      reject(`Cannot square: ${ i }`);
    } else {
      resolve(Math.pow(i, 2));
    }
  });
});


Promise.all(squares)
  .then(function(result) {
    console.log(result);
  }, function(error) {
    console.log(error);
  });



// 4. Catching errors with `catch`

function doBadThing(forRealz) {
  return new Promise(function(resolve, reject) {
    if (forRealz) {
      reject("Oh snap!");
      // throw new Error("Oh snap!");
    } else {
      resolve("Yay!");
    }
  });
}

doBadThing(true)
  .then(function(message) {
    console.log(message);
  })
  .catch(function(err) {
    console.error('Catch', err);
  });

doBadThing(false)
  .then(function(message) {
    console.log(message);
    throw "Fuh queue!";
  }, function(err) {
    console.error('Reject', err);
  })
  .catch(function(err) {
    console.error('Catch', err);
  });

















