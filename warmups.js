// 1

var p = Promise.resolve("Hello promise!");

p.then( function(result) {
  setTimeout( function() {
    console.log(result);
  }, 1000);
});

// 2

var startTime = Date.now();

var delay = function(milliseconds) {
  return new Promise( function(resolve) {
    setTimeout(function() {
      console.log(Date.now() - startTime);
      resolve();
    }, milliseconds);
  });
};

var countDown = function() {
  return delay(100);
}

// 3

var square = function(num) {
  return new Promise( function(resolve, reject) {
    if (isNaN(num)) {
      reject(num);
    } else {
      resolve(Math.pow(num, 2));
    };
  });
};

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
nums = nums.map( function(n) {
  return square(n);
});

Promise.all(nums).then( function(results) {
  console.log(results);
}).catch( function(err) {
  console.error(err);
});

// 4

var doBadThing = function(forRealz) {
  return new Promise( function(resolve, reject) {
    if (forRealz === false) {
      resolve("Yay!");
    } else {
      reject();
    }
  });
};

[true, false].forEach( function(bool) {
  doBadThing(bool).then( function(result) {
    console.log(result);
    throw "Trigger catch";
  }).catch( function(err) {
    console.error("You shouldn't do bad things.")
  });
});

[true, false].forEach( function(bool) {
  doBadThing(bool).then( function(result) {
    console.log(result);
    throw "Trigger catch";
  }, function(err) {
    console.error("You shouldn't do bad things.")
  }).catch( function(err) {
    console.error("Caught error.")
  });
});
