console.log('Starting up!');

//----------------------------------------------------------------------------->
//Do Bad Things
function doBadThing(forRealz) {
  var doBadThing = new Promise(function(resolve, reject) {
    if (forRealz) {
      reject('error?');
    } else {
      resolve('Yay!');
    }
  });
  return doBadThing;
}

//----------------------------------------------------------------------------->
//Squareing Map
function square(num) {
  var square = new Promise(function(resolve, reject) {
    if (Number.isInteger(num)) {
      resolve(num * num);
    } else {
      reject('NaN error');
    }
  });
  return square;
}

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
nums = nums.map(function(i) {
  return square(i);
});

//----------------------------------------------------------------------------->
//Countdown to Hello
  var hello = Promise.resolve('Hello Promise!');

  function delay(milliseconds, interval) {
    var timer = new Promise(function(resolve, reject) {
      resolve(milliseconds);
    })
      .then(function(result) {
        countDown(result, interval);
      });
  }

  function countDown(ms, int) {
    console.log(ms);
    var ticker = setInterval(function(){
      if (ms <= (0 + int)) {
        console.log('Done!')
        clearInterval(ticker);
      } else {
        ms -= int;
        console.log(ms);
      }
    }, int);
  }

//----------------------------------------------------------------------------->
//Execution
hello.then(function(message){
  setTimeout(function(){
    console.log(message);
  }, 1000);
})
  .then(function(result) {
    doBadThing(true)
      .then(function(result) {
        console.log(result);
      })
      .catch(function(err) {
        console.log(err);
      });
  })
  .then(function(result) {
    doBadThing(NaN)
      .then(function(result) {
        console.log(result);
      })
      .catch(function(err) {
        console.log(err);
      });
  })
  .then(function(result) {
    Promise.all(nums)
      .then(function(result) {
        console.log(result);
      })
      .catch(function(err) {
        console.log(err);
      });
  })
  .then(function(result){
    delay(1000, 100);
  });

  console.log('Waiting...');
