// Warmups

// 1.

var p = new Promise(function() {
  setTimeout(function() {
    console.log("Hello Promise!");
  }, 1000);
});

p.then(function(messsage) {
  console.log(message);
});

// 2.

var delayedMilliseconds;

function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

function delay(milliseconds) {
  delayedMilliseconds = milliseconds;

  return new Promise(function() {
    sleep(milliseconds);
    console.log(milliseconds);
  });
}

function countDown() {
  if (delayedMilliseconds > 100) {
    delayedMilliseconds -= 100;
  } else {
    delayedMilliseconds = "Done!";
  }

  delay(delayedMilliseconds);
}

delay(1000)
  .then(countDown()) //=> 900
  .then(countDown()) //=> 800
  .then(countDown()) //=> 700
  .then(countDown()) //=> 600
  .then(countDown()) //=> 500
  .then(countDown()) //=> 400
  .then(countDown()) //=> 300
  .then(countDown()) //=> 200
  .then(countDown()) //=> 100
  .then(countDown()); //=> Done!

// 3.

function square(num) {
  return new Promise(function(resolve, reject) {
    if (isNaN(num)) {
      reject("'" + num + "' is not a number");
    } else {
      resolve(num * num);
    }
  });
}

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

nums = nums.map(function(i) {
  return square(i);
});

Promise.all(nums)
  .then(function(results) {
    console.log(results);
});

// 4.

function doBadThing(forRealz) {
  return new Promise(function(resolve, reject) {
    if (!forRealz) {
      resolve("Yay!");
    } else {
      reject("Noooooo!");
    }
  });
}

// :) Path using reject handler
doBadThing(0)
  .then(function(results) {
    console.log(results);
  }, function(err) {
    console.error(err);
  });

// :( Path using reject handler
doBadThing(1)
  .then(function(results) {
    console.log(results);
  }, function(err) {
    console.error(err);
  });

// :) Path using .catch
doBadThing(0)
  .then(function(results) {
    console.log(results);
  })
  .catch(function(err) {
    console.error(err);
  });

// :( Path using .catch
doBadThing(1)
  .then(function(results) {
    console.log(results);
  })
  .catch(function(err) {
    console.error(err);
  });



// Create an Event Emitter from Scratch

var Emitter = require('./event_emitter');
// var Emitter = require('events');
var emitter = new Emitter();

function clickCallback() {
  console.log('clicked');
}

function clickedAgainCallback() {
  console.log('clicked again');
}

emitter.on('click', clickCallback);

emitter.on('click', clickedAgainCallback);

emitter.on('submit', function() {
  console.log('submitted');
});

emitter.emit('click');

emitter.removeListener('click', clickCallback);

console.log("Removed the 'click' listener with the 'clickedAgainCallback', now there are " + emitter.listenerCount('click') + " 'click' event listeners");

emitter.removeAllListeners('click');

console.log("Removed all 'click' listeners, now there are " + emitter.listenerCount('click'));
