
/*--
var pro = new Promise(function(resolve, reject) {if (1===1) {resolve("Hello Promise");} else {reject("Goodbye Promise")}});

pro.then(function(result) {
  setTimeout(function(){console.log(result)}, 1000),
  function(result) {
    setTimeout(function(){console.log(result + "is bad")}, 1000)}
  });


var delay = function(milli) {
  return prom = new Promise(function(resolve, reject){
    setTimeout(function() {
      resolve(milli);
      reject(milli);
    }, milli)
  })
}

var fun = function(result){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(result -= 100);
      reject(result -=100);
    }, 100)
  })
}

delay(1100)
  .then(function(result){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log(result -= 100);
        resolve(result);
        reject(result);
      }, 100)
    })
  })
  .then(function(result){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log(result -= 100);
        resolve(result);
        reject(result);
      }, 100)
    })
  })
  .then(function(result){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log(result -= 100);
        resolve(result);
        reject(result);
      }, 100)
    })
  })
  .then(function(result){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log(result -= 100);
        resolve(result);
        reject(result);
      }, 100)
    })
  })
  .then(function(result){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log(result -= 100);
        resolve(result);
        reject(result);
      }, 100)
    })
  })
  .then(function(result){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log(result -= 100);
        resolve(result);
        reject(result);
      }, 100)
    })
  })
  .then(function(result){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log(result -= 100);
        resolve(result);
        reject(result);
      }, 100)
    })
  })
  .then(function(result){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log(result -= 100);
        resolve(result);
        reject(result);
      }, 100)
    })
  })
  .then(function(result){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log(result -= 100);
        resolve(result);
        reject(result);
      }, 100)
    })
  })
  .then(function(result){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log(result -= 100);
        resolve(result);
        reject(result);
      }, 100)
    })
  })
  .then(function(result){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log(result -= 100);
        resolve(result);
        reject(result);
      }, 100)
    })
  })

var num = function(i) {
  return Promise.resolve(i*i);
};

var intNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

intNum = intNum.map(function(i){
  return Promise.resolve(i*i);
});


Promise.all(intNum)
  .then(function(results) {
  console.log(results);
});

--*/

function doBadThing(forRealz) {
  return new Promise(function(resolve, reject) {
    if (!(forRealz)) {
      resolve("Yay!");
    }
    else {
      reject("Booo!");
    }
  });
}

doBadThing(null)
  .then(function(results) {
    console.log(results);
    throw "error!";
  }, function(err){
    console.log(err);
  })
  .catch(function(err) {
    console.log(err);
  });
