var Emitter = require("./lib/emitter");
var emitter = new Emitter();

var print = function(str) {
  console.log(str);
};

emitter.on("click", print);
