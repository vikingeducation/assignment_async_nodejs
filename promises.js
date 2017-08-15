//====WARMUP ONE====

//load up this 1st
var helloPromise = new Promise(function(resolve, reject){
  true ? resolve('Hello Promise!') : reject('oops');
});


//after helloPromise then this:
helloPromise.then(function(message){
//delay message 1 second
  setTimeout(function(){
    console.log(message);//message same as resolve('')
  }, 1000)
});

//====WARMUP TWO===

function delay(millis){
  return new Promise(function(resolve){
    setTimeout(function(){resolve(millis)}
    , millis);
  })
};

function countDown(time){
  if(time > 0){
    console.log(time)
    return delay(time - 100)
  } else {
    console.log('countDown complete')
  }
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
  .then(countDown)




//====WARMUP THREE=====

//check if input value is number
// https://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
function isNum(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

// array loaded 1 - 9
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//map function that resolves integers only, squared
array = array.map(function(int) {
  if(isNum(int)){
    return Promise.resolve(int * int)
  }
});

//resolve all the promises and log results
Promise.all(array)
  .then(function(results){
    console.log(results);
  });



//====WARMUP FOUR====

var doBadThing = function(forRealz){
  if (forRealz === false) {
    return Promise.resolve('yay!')
  } else {
    return Promise.reject('Oh no!')
  };
};

doBadThing(true)
  .then(function(result){
    console.log(result);
    throw "error";
  });

doBadThing(false)
  .catch(function(err){
    console.error(err);
  });
