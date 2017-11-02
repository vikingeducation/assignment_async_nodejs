

var Emitter = require('./emitter.js');
var emitter = new Emitter()

var speaking = function(){
	console.log("hadflk")
}
var crying = function(){
	console.log("adfs")
}
emitter.on("blinking", speaking)
emitter.on("test", speaking)
emitter.on("test", crying)

emitter.emit("blinking")

