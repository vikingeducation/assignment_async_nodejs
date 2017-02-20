const EventEmitter = require("events");
const copyEmitter = require('./Emitter.js')

var listenerA = function listenerA() {
  console.log("ListenerA is emitted");
};

var listenerB = function listenerB() {
  console.log("ListenerB is emitted");
}


const nodeEmitter = new EventEmitter();
nodeEmitter.on("event", listenerA)
           .on("event", listenerB)
           .emit("event");
nodeEmitter.removeListener("event", listenerA);
nodeEmitter.removeAllListeners("event");

           console.log(nodeEmitter);




const testEmitter = new copyEmitter();
testEmitter.on("event", listenerA)
           .on("event", listenerB)
           .emit('event');
testEmitter.removeListener("event", listenerA);
testEmitter.on("event", listenerA);
testEmitter.emit('event');
testEmitter.removeAllListeners("event");
testEmitter.emit('event');

console.log(testEmitter);
