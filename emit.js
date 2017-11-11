
let EventEmitter = require('./customEventEmitter.js');
let emitter = new EventEmitter();

emitter.on("click", () => {
  console.log("click!");
});
emitter.on("click", () => {
  console.log("click again!");
});
emitter.on("clack", () => {
  console.log("clack!");
});

let clackAgain = () => {
  console.log("clack again!");
}
emitter.on("clack", clackAgain);

emitter.emit("click");
emitter.emit("clack");

emitter.removeListener("clack", clackAgain);
emitter.emit("clack");
emitter.emit("click");
emitter.emit("clack");

emitter.removeAllListeners("clack");
emitter.emit("clack");

