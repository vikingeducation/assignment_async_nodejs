var Emitter = require("./event-emmiter.js");
var emitter = new Emitter();

emitter.on("type", function(){ 
	console.log('test');
	return true;
} );
emitter.on("type", function(){ 
	console.log('another test');
	return true;
} );
emitter.on("typsdfe", function(){ return true;} );
emitter.on("typsdfe", function(){ return true;} );
emitter.on("typsdfe", function(){ return true;} );

emitter.on("hello", function(){ 
	console.log(`hello world`)
})


emitter.on("hello", function(){
	console.log("goodbye world");
})

emitter.removeAllListeners("type");
