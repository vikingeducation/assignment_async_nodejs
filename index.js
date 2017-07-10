
/*--Hello promise--*/

var pro = new Promise(function(resolve, reject) {if (1===1) {resolve("Hello Promise");} else {reject("Goodbye Promise")}});

pro.then(function(result) {
  setTimeout(function(){console.log(result)}, 1000),
  function(result) {
    setTimeout(function(){console.log(result + "is bad")}, 1000)}
  });


/*--delay promise--*/

var delay = function(milli) {
  return new Promise(function(resolve){
    setTimeout(function() {
      resolve(milli);
    }, milli)
  })
}

var countDown = function(milli) {
  if(milli>0){
    console.log(milli);
    return delay(milli-100);
  }
  else {
    console.log("Done!");
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


/*--number squared--*/

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


/*--doBadThing--*/

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



/*--promise fs functions--*/


var fs = require('fs');

fs.appendFile("ianstext.txt", "I've added to the file!", function(err) {
  if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});


fsp.appendFile("ianstext.txt", "appended using a Promise function!")
.then(function(res) {
  console.log(res);
})

/*-- my emitter --*/

var fsp = require('./lib/fsp');
var Emitter = require('./lib/events');


var emitter = new Emitter();


emitter.on("click", function(){
  console.log("Clicked!");
})

emitter.on("mouseover", function(){
  console.log("Moused?...over?");
})

emitter.on("double-click", function(){
  console.log("Clicked... twice real quick!!!");
})

emitter.on("click", function(){
  console.log("Clicked numba 2!");
})

emitter.on("click", function(){
  console.log("Clicked numba 3!");
})

emitter.emit("click");
emitter.emit("mouseover");
emitter.emit("double-click");

emitter.removeListener("click", function(){
  console.log("Clicked numba 2!");
});

emitter.emit("click");
