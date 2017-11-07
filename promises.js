//Simple Promise that resolves to hello world
var p = Promise.resolve("Hello Promise!");
//Resolving the above promise using then
p.then(function(message){
  setTimeout(function(){
    console.log(message)}, 1000);
  });

// Working code
// function delay(milliseconds){
//   return new Promise(function(resolve, reject){
//     resolve(setTimeout(function(){
//       console.log(milliseconds)
//     }, milliseconds));
//   });
// }

//Working code
function delay(ms) {
      return new Promise(resolve => {
              setTimeout(() => {
                 resolve(ms > 0 ? ms : 'Done!');
               }, ms);
             });
}

function countDown(ms) {
             console.log(ms);
             return delay(ms - 100);
}

delay(300)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown);


//Function that returns a Promise
function squared(num){
  return new Promise(
    function(resolve, reject){
    if (typeof num === 'number'){
      var op = num*num;
      resolve(op);
    }else{
      var err = 'Input is not a number!';
      reject(err);
    }
  }
);
}

//Promise is resolved
squared(3)
.then(function(result){
  console.log(result);
},
function(error){
  console.log(error);
});

//Array of promises
var arr = [1,2,3,4,5,6,7,8,9];
var arr_promises = arr.map(function(elem){
   return squared(elem);
 });

 //Array of promises resolved
 Promise.all(arr_promises)
 .then(function(results){
   console.log(results);
 });

//Working code - Using catch and then
function doBadThing(forRealz){
  return new Promise(function(resolve, reject){
    if (forRealz === false){
      resolve('Yay!');
    }else{
      reject('error');
    }
  });
}

doBadThing(false)
.then(function(result){
  console.log(result);
},
function(error){
  console.error(error);
});

//*****catch not triggered*****
doBadThing(true)
 .then(function(result){
   console.log(result);
   throw "Trigger the catch!";
 })
 .catch(function(err){
   console.error(err);
 });

//Working code
var fsp = require('./fsp');
fsp.readFile('./data/lorem.txt')
.then(function(result){
  console.log(result);
})
.catch(function(err){
  console.error(err);
});

fsp.writeFile('./data/write_here.txt', 'hello')
.then(function(result){
  console.log(result);
})
.catch(function(err){
  console.log(err);
});

//throwing error
fsp.appendFile('./data/write_here.tx', ' File operations succeeded!')
.then(function(result){
  console.log(result);
})
.catch(function(err){
  console.log(err);
  //throw "Append failed!";
});

//Event Emitter
 var Emitter = require('./emitter');
 //debugger;
 var emitter = new Emitter();
 //emitter.on('shout');

 emitter.on("click", function(){
   console.log("hellooo!");
   //debugger;
 });

 emitter.on("scream", function(){
   console.log("Errrrrrr!!!");
   //debugger;
 });


 emitter.emit("scream");

 emitter.emit("click");

 emitter.removeEventListener("click", function(){
   console.log("Removed Listener");
 });

 emitter.emit("click");

 emitter.removeAllListeners();

console.log(emitter.emit("click"));
