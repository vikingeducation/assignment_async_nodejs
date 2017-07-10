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
