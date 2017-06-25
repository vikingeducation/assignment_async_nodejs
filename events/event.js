const emitter = require('./emitter');

const emitter = new emitter();

emitter.on("first_arg", () => console.log("testing1"));
emitter.on("first_arg", () => console.log("testing2"));
emitter.on("other", () => console.log("1 other here"));
emitter.on("other2", () => console.log("other there"));
emitter.on("other", () => console.log("2 everywhere"));


emitter.emit("first_arg");
emitter.emit("other");
emitter.emit("other2");
emitter.emit("otherttt");

emitter.removeAllListeners("other");
