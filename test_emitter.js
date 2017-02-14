const EventEmitter = require("events");
const MyEmitter = require("./lib/emitter");

var listener1 = function listener1() {
  console.log("Running listener1.");
};

var listener2 = function listener2() {
  console.log("Running listener2.");
}

var listener3 = function listener3() {
  console.log("Running listener3.");
}

const realEmitter = new EventEmitter();
realEmitter.on("event", listener1)
           .on("event", listener2)
           .on("event", listener3)
           .emit("event");
realEmitter.removeListener("event", listener1)
           .emit("event");
realEmitter.removeAllListeners();
console.log(realEmitter);

console.log();

const myEmitter = new MyEmitter();
myEmitter.on("event", listener1)
         .on("event", listener2)
         .on("event", listener3)
         .emit("event");
myEmitter.removeListener("event", listener1)
         .emit("event");
myEmitter.removeAllListeners();
console.log(myEmitter);
