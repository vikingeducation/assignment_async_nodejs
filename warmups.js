// warmups

//warmup 1
//version 1.0
var promise1 = Promise.resolve("Hello Promise");

promise1.then(function(message){
  setTimeout(function(){
    console.log(message);
  }, 1000);
})

//version 1.1

var promise2 = Promise.resolve("Hello Promise2");

promise2.then(function(message){
  setTimeout(function(){
    console.log(message);
  }, 1000);
});

//warmup 2

var delay = function(miliseconds){
  setTimeout(function(){

  }, miliseconds);
  return Promise.resolve(miliseconds);
};


var countDown = function(miliseconds){
  miliseconds > 0 ? console.log(miliseconds, "countDown fired") : console.log("Done!");
  return Promise.resolve(miliseconds - 100);
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

//warmup 3
var oneToNine = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var squared = function(n){
  if (!isNaN(n)) {
    return Promise.resolve(n * n);
  }
};

var newArray = oneToNine.map(function(i){
  return squared(i);
});

Promise.all(newArray)
  .then(function(result){
    console.log(result);
  })


//warmup 4

var doBadThing = function(forReal){
  return forReal ?  Promise.resolve("YAY!") :  Promise.reject(forReal);
};

doBadThing(true)
  .then(function(result){
    //the Promise.resolve()
    console.log('result', result)
  },
  function(err){
    //the Promise.reject()
    console.log('err', err);
  });


//not using catch
doBadThing(false)
  .then(function(result){
    console.log('result', result)
  },
  function(err){
    console.log('err', err);
  });


//using catch
doBadThing(false)
  .then(function(result){
    console.log('result', result)

    //using throw will fire .catch()
    throw "gibberish"

  }).catch(function(err){
    console.log("catch", err);
  })
