var Emitter = require('events');
var emitter = new Emitter();

//add event listener
emitter.on("click", function(){console.log("Click 1")});
//add subsequent listener
emitter.on("hover", function(){console.log("Hover 1")});
emitter.on("hover", function(){console.log("Hover 2")});

//Emit an event from all listeners on that event
emitter.emit("click");

//Remove a listener with
emitter.removeListener("click", function(){console.log("Click 1")});

//Remove all listeners on an event with
 emitter.removeAllListeners("Hover");

/*--Finally---
 Swap Your Event Emitter with the Native Node.js Event Emitter

 Now require the event emitter from Node.js with:

 var Emitter = require('events');

 If you can replace your emitter with the native emitter you've successfully implemented the functionality of Node.js event emitters!
 */
