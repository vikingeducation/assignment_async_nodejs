"use strict";

// 1. File Operations Testing
let fsp = require("./library/fspMod.js");

fsp.readFile('./data/lorem.txt')
.then(function(data) {
  // Outputs the file data
  console.log(data);
})
.catch(function(err) {
  console.error(err);
});

fsp.writeFile('./data/test.txt', 'Hello!')
.then(function(res) {
  // Outputs the file data
  // after writing
  console.log(res);
})
.catch(function(err) {
  console.error(err);
});

fsp.appendFile('./data/test.txt', 'Hello again!')
.then(function(res) {
  // Outputs the file data
  // after appending
  console.log(res);
})
.catch(function(err) {
  console.error(err);
});

/*******************************************************************/
// 2. Event Emitter Testing
let Emitter = require("./library/emitter.js");
let emitter = new Emitter();

// Attach multiple event listeners
function test(message) {console.log(message);}
emitter.on("someEvent", test);
emitter.on("someEvent", () => {console.log("Doritos Locos");});
emitter.on("anotherEvent", () => {console.log("Coding is fun!");});
emitter.on("anotherEvent", () => {console.log("This is another event!");});

// Emit an event
emitter.emit("someEvent", "plz work or else I'm in trouble");

// Remove a listener
emitter.removeListener("someEvent", test);
emitter.emit("someEvent", "should not be printed");

// Remove all listeners on an event
emitter.removeAllListeners("anotherEvent");
emitter.emit("AnotherEvent"); // <- successfully prints nothing :) MUHAHA
