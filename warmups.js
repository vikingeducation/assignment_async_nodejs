// 1. Create a promise that resolves the message "Hello Promise!" after 1 second

var p = new Promise(function(resolve) {
  setTimeout(function() {
    resolve('Hello Promise!');
  }, 1000);
});

p.then(function(message) {
  console.log(message);
});

// 2. function that returns a promise that resolves the value milliseconds after delaying for the specified number of milliseconds

var delay = function(milliseconds) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(milliseconds);
    }, milliseconds);
  });
};

function countDown(result) {
  if (result == 0) {
    result = 'Done!';
  }
  console.log(result);
  return result - 100;
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

// 3. Create a function that accepts a number and returns a promise that resolves that number squared
var squareIt = function(num) {
  return new Promise(function(resolve, reject) {
    if (!isNaN(num)) {
      resolve(num * num);
    } else {
      reject(NaN);
    }
  });
};

squareIt('a').then(
  function(result) {
    console.log(result);
  },
  function(err) {
    console.error(err);
  }
);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr = arr.map(squareIt);

Promise.all(arr).then(
  function(result) {
    console.log(result);
  },
  function(err) {
    console.error(err);
  }
);

// #4.
var doBadThings = function(forRealz) {
  return new Promise(function(resolve, reject) {
    if (!forRealz) {
      resolve('Yay!');
    } else {
      reject('rejected');
    }
  });
};

doBadThings(true)
  .then(function(result) {
    console.log(result);
  })
  .catch(function(err) {
    console.error('catch' + err);
  });

doBadThings(false)
  .then(function(result) {
    console.log(result);
    throw 'this got thrown';
  })
  .catch(function(err) {
    console.error(err);
  });

doBadThings(true).then(
  function(result) {
    console.log(result);
  },
  function(err) {
    console.error('then' + err);
  }
);

doBadThings(false).then(
  function(result) {
    console.log(result);
  },
  function(err) {
    console.error(err);
  }
);
