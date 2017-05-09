var hello = new Promise(function(resolve, reject) {
  setTimeout(function(){
    resolve('Hello Promise')
  }, 1000);
})

hello.then(function(message){
  console.log(message)
})

function delay(milliseconds){
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      resolve(milliseconds)
    }, milliseconds);
  })
}

function countDown(timeRemaining){
  if (timeRemaining > 0) {
    console.log(timeRemaining);
    return timeRemaining - 100;
  } else {
    console.log('Done!')
  };
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




var squared = function(number){
  return new Promise(function(resolve, reject) {
    var type = typeof number
    if (type === 'number'){
      resolve(number * number);
    } else {
      reject("That's not a number");
    }
  });
}

var toBeSquared = [1,2,3,4,5,6,7,8,9]

toBeSquared = toBeSquared.map(function(i){
  return squared(i);
})

console.log(toBeSquared)

Promise.all(toBeSquared).then(function(results){
    console.log(results);
});

var doBadThing = function(forRealz){
  return new Promise(function(resolve, reject){
    if (!forRealz){
      resolve('Yay!');
    } else {
      reject('you supplied a truthy value');
    }
  })
}

doBadThing(true).then(function(result) {
  console.log(result);
}, function(error){
  console.error(error)
})
  .catch(function(err){
    console.error(err)
  });
