var emitter = require('./modules/emitter.js')
//var Emitter = require('events');

var myEmitter = new emitter.Emitter()
myEmitter.on("write", function(){ console.log("write") })
myEmitter.on("write", function(){ console.log("read") })
myEmitter.on("write", function(){ console.log("hello") })
myEmitter.emit("write")
myEmitter.removeListener("write",  function(){ console.log("hello") })
//myEmitter.removeAllListeners("write")
