// 1. Create a promise that resolves the message "Hello Promise!" after 1 sec
var p = Promise.resolve('Hello Promise!');
p.then(function(message) {
  setTimeout(function () {
    console.log(message);
  }, 1000);

});


// 2. Create a function with the following signature: delay(milliseconds)
function delay(milliseconds) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(milliseconds);
    }, milliseconds);
  });
}

function countDown(countDownNumber) {
  if(countDownNumber > 0) {
    console.log(countDownNumber);
    countDownNumber = countDownNumber - 100;
  }
  else {
    console.log('Done!');
  }
  return countDownNumber;
}

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


// 3. Create a function that accepts a number and returns a promise
// that resolves that number squared
function square(integer) {
  return new Promise(function (resolve, reject) {
    if(Number.isInteger(integer)) {
      resolve(integer * integer);
    }
    else {
      reject();
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


// 4. Create a function with this signature doBadThing(forRealz)
function doBadThing(forRealz) {
  return new Promise(function (resolve, reject) {
    if(forRealz) {
      reject('Boo!');
    }
    else {
      resolve('Yay!');
    }
  });
}

function outputResult(result) {
  console.log(result);
}

 doBadThing(true).then(function(result) {
   outputResult(result);
   throw 'Boom!';
 }, function(err) {
      console.error('reject ' + err);
    })
   .catch(function(err) {
     console.error('catch ' + err);
   });