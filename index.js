var fsp = require('./node_modules/fsp.js');
var fs= require('fs');
//var Emitter = require('./node_modules/emitter.js');
var Emitter = require('events');
var emitter = new Emitter();

var p =new Promise(function(resolve, reject){
  setTimeout(function(){resolve('Hello Promise!')}, 1000);
});

p.then(function(message, err){
  console.log(message);
}).catch(function(error){
  console.log(error);
});

function delay(milliseconds){

  let prom = new Promise(function(resolve, reject){
    setTimeout(function(){resolve(milliseconds)}, milliseconds);
  })

  return prom;
}

function countDown(number){
  if (number>0){
    console.log(number);
    number-=100;
  }
  else{
    console.log("Done!");
    return undefined;
  }
  return delay(number);
};

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
  .then(countDown);


function squarePromise(number){
  let prom = new Promise(function(resolve, reject){
    if (typeof number !=="number"){
      reject("Rejected!");
    }
    else
      resolve(number*number);
  })
  return prom;
}

num_array=[1,2,3,4,5,6,7,8,9];

num_array=num_array.map(i => {return squarePromise(i)});

Promise.all(num_array).then(function(result){
  console.log(result);
});


function doBadThing(forRealz){
  let prom = new Promise(function(resolve, reject){
    if (!forRealz){
      resolve('Yay!');
    }
    else{
      reject('Rejected!');
    }
  });
  return prom;
}

doBadThing(true).then(function(result){
  console.log(result);
}, function(reject){
  console.log("This was given a rejection handler");
})

doBadThing(0).then(function(result){
  console.log(result);
})
  .catch(error =>{
    console.log(error);
  });

fsp.readFile('./data/dummy.txt')
  .then(function(data){
    console.log(data);
  })
  .catch(function(err){
    console.log(err);
  });

fsp.writeFile('./data/test.txt', "Help, I'm trapped in a test file!")
  .then(function(res) {
    // Outputs the file data
    // after writing
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp.appendFile('./data/test.txt', '\nHello again!')
  .then(function(res) {
    // Outputs the file data
    // after appending
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });

function firstFunc(){
  console.log("this emitter");
};
emitter.on("first", function(){
  console.log("this emitter");
});

emitter.on("second", function(){
  console.log("is");
});
emitter.on("second", function(){
  console.log("always going to be");
});

emitter.on("third", function(){
  console.log("totally working");
});


emitter.emit("first");
emitter.emit("second");
emitter.emit("third");

var tf=emitter.removeListener("first", firstFunc);
console.log("tf is " +tf);
emitter.emit("first");

emitter.on("first", firstFunc);
emitter.removeAllListeners("second");
emitter.emit("first");
emitter.emit("second");
emitter.emit("third");