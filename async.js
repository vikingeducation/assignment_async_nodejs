/////////////////////////////////////////////////////
// 1.

var p = new Promise(function(resolve, reject) {
    resolve('Hello Promise!');
});

p.then(function(message) {
  setTimeout(function() {
    console.log(message);
    }, 1000);
});

/////////////////////////////////////////////////////
//2.

var delay = function (milliseconds) {

  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      resolve(milliseconds);
    }, 100);
  });

};

var countDown = function (currentCount) {
  console.log(currentCount);
  return currentCount - 100;
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

/////////////////////////////////////////////////////
// 3.

var promiseSquare = function(number) {
  return new Promise(function(resolve, reject) {
    if (Number.isInteger(number)) {
      resolve(number * number);
    }
    else {
      reject("Not a number");
    }
  });
};

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

nums = nums.map(function(i) {
  return promiseSquare(i);
});

Promise.all(nums)
  .then(function(results) {
    console.log(results);
  });

/////////////////////////////////////////////////////
// 4.

var doBadThing = function(forRealz) {
  return new Promise(function(resolve, reject) {
    if (!forRealz) {
      resolve("Yay!");
    }
    else {
      reject("Meh");
    }
  });
};

doBadThing(false)
  .then(function(result) {
    console.log(result); //meh
    throw("But also:");
  })
  .catch(function(err) {
    console.error(err); //yay
  });

/////////////////////////////////////////////////////
// 5.

var fsp = require('./lib/fsp');

fsp.readFile('./data/lorem.txt')
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp.writeFile('./data/test.txt', 'Hello!')
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp.appendFile('./data/test.txt', 'Hello again!')
  .then(function(res) {
    // Outputs the file data
    // after appending
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });

/////////////////////////////////////////////////////
// 6.

// My emitter
var Emitter = require('./lib/Emitter');
var emitter = new Emitter();

// Event and callbacks to add to emitter object
var listener1 = function listener1() {
   console.log('listener1 executed');
};
var listener2 = function listener2() {
  console.log('listener2 executed');
};

var listener3 = function listener3() {
  console.log('listener3 executed');
};

// Adding events and callbacks to emitter
emitter.on('connection', listener1);
emitter.on('connection', listener2);

// Calls listener1 and listener2
emitter.emit('connection');

// Adds listener 3, removes listener 1, calls listener 2 and 3
emitter.on('connection', listener3);
emitter.removeListener('connection', listener1);
emitter.emit('connection');

// Removes listener 2 and 3, doesn't call any listeners
emitter.removeAllListeners('connection');
emitter.emit('connection');
