let Emitter = require('./emit.js');

let emitter = new Emitter();

let test1 = function(){
	console.log("Listener 1");
};

let test2 = function(){
	console.log("Listener 2");
}
emitter.on("FGSFDS", test1);
emitter.on("FGSFDS", test2);
emitter.on("not-FGSFDS", function(){
	console.log("This shouldn't ever be called.");
});

emitter.emit("FGSFDS");

emitter.removeListener("FGSFDS", test1);

emitter.emit("FGSFDS");

emitter.removeAllListeners("FGSFDS");

emitter.emit("FGSFDS");
