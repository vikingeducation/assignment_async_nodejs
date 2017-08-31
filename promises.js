// 1.
// var p = Promise.resolve('Hello Promise!');
//
// p.then(function(message) {
//   setTimeout(function() {
//     console.log(message);
//   }, 1000);
// });

// 2.
var delay = function(milliseconds) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(milliseconds);
    }, milliseconds);
  });
};

var countDown = function(milliseconds) {
  if (milliseconds > 0) {
    console.log(milliseconds);
    return delay(milliseconds - 100);
  } else {
    console.log('Done!');
  };
};

// 3.
var square = function(num) {
  return new Promise(function(resolve, reject) {
    if (typeof num === "number") {
      resolve(num*num);
    } else {
      reject("Not a number");
    };
  });
};

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
nums = nums.map(function(i) {
  return square(i);
});

Promise.all(nums)
  .then(function(results) {
    console.log(results);
  }, function(err) {
    console.error(err);
  });

// 4.
var doBadThing = function(forRealz) {
  return new Promise(function(resolve, reject) {
    if (!forRealz) {
      resolve("Yay!");
    } else {
      reject("Nay!");
    };
  });
};

doBadThing(true).then(function(result) {
  console.log(result);
}, function(err) {
  console.error(err);
});

doBadThing(false)
  .then(function(result) {
    console.log(result);
    throw "Error!";
  })
  .catch(function(err) {
    console.error(err);
  });
