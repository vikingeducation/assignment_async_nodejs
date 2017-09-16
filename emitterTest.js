var Emitter = require("./lib/emitter");
var emitter = Emitter;

var print = function(str) {
  console.log(str);
};

emitter.on("click", function() {
  console.log("click has fired");
});

emitter.on("pop", function() {
  console.log("pop has fired");
});

emitter.emit("click");
emitter.emit("pop");

emitter.removeListener("click");

emitter.emit("click");
emitter.emit("pop");

emitter.on("click", function() {
  console.log("click has fired");
});
emitter.emit("click");
