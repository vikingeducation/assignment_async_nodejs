"use strict";

let NativeEmitter = require("events");
let CustomEmitter = require("./eventemitter.js");



let nativeEmitter = new NativeEmitter();
let nativeEmitterWithSubs = new NativeEmitter();
let customEmitter = new CustomEmitter();


/* Change references of of nativeEmitterWithSubs functions to corresponding functions of customEmitter*/
nativeEmitterWithSubs.on = customEmitter.on;
nativeEmitterWithSubs.emit = customEmitter.emit;
nativeEmitterWithSubs.removeListener = customEmitter.removeListener;
nativeEmitterWithSubs.removeAllListeners = customEmitter.removeAllListeners;




function clickHandler() {
    console.log("click event cb called");
}
function lookHandler() {
    console.log("look event cb called");
}
function teaseHandler() {
    console.log("tease event cb called");
}


/*Calls with NativeEmitter functions*/
nativeEmitter.on("click", clickHandler);
console.log("Expect 'click event cb called'");
nativeEmitter.emit("click");
console.log("Expect one listener on click listern called clickHandler");
console.log(nativeEmitter.listeners("click"));
console.log("Expect empty array listener on non-existent 'jump' event");
console.log(nativeEmitterWithSubs.listeners("jump"));
nativeEmitter.removeListener("click", clickHandler);
console.log("Expect empty array with call to event listeners for click");
console.log(nativeEmitter.listeners("click"));
console.log("Expect no output with click emit called");
nativeEmitter.emit("click");
console.log("Add look and tease listeners");
nativeEmitter.on("look", lookHandler);
nativeEmitter.on("tease", teaseHandler);
console.log("Emit look and tease events");
nativeEmitter.emit("look");
nativeEmitter.emit("tease");
console.log("Add tease listener and handler a second time");
nativeEmitter.on("tease", teaseHandler);
console.log("Emit event tease. Should see two calls to cb for tease");
nativeEmitter.emit("tease");
console.log("Calling removeAllListeners of tease event");
nativeEmitter.removeAllListeners("tease");
console.log("Emit event tease. Should see no calls to cb for tease");
nativeEmitter.emit("tease");
console.log("See that no tease cb is called before this statement and the previous emit");
console.log("Emit look event to see that it is still available");
nativeEmitter.emit("look");
console.log("Expect empty array with call to event listeners for click");
console.log(nativeEmitter.listeners("click"));


console.log("**********************Calls with NativeEmitterWithSubs following***********************");
/*The customEventEmitter works by adding data on the nativeEmitter obj listener property and does not run into any collision
issues at this time. The nativeEventEmitter on/addListener function was observered to place all events under the _events property



/* Calls with nativeEmitterWithSubs with CustomEmitter functions subbed in*/
nativeEmitterWithSubs.on("click", clickHandler);
console.log("customEmitter listeners property should be undefined:", customEmitter.listeners);
console.log("nativeEmitterWithSubs listerner property should be a function with properties", nativeEmitterWithSubs.listeners);
console.log("nativeEmitter listerner property should be a function with properties", nativeEmitter.listeners);
console.log("nativeEmitter on property should be a function with properties", nativeEmitter.on);
console.log("Emit click event. Expect 'click event cb called'");
nativeEmitterWithSubs.emit("click");
console.log("Expect one listener on click listern called clickHandler");
console.log(nativeEmitterWithSubs.listeners("click"));
console.log("Expect empty array listener on non-existent 'jump' event");
console.log(nativeEmitterWithSubs.listeners("jump"));
console.log("Removing click listener clickHandler");
nativeEmitterWithSubs.removeListener("click", clickHandler);
console.log("Expect empty array with call to event listeners for click");
console.log(nativeEmitterWithSubs.listeners("click"));
console.log("Expect no output with click emit called");
nativeEmitterWithSubs.emit("click");
console.log("Add look and tease listeners");
nativeEmitterWithSubs.on("look", lookHandler);
nativeEmitterWithSubs.on("tease", teaseHandler);
console.log("Emit look and tease events");
nativeEmitterWithSubs.emit("look");
nativeEmitterWithSubs.emit("tease");
console.log("Add tease listener and handler a second time");
nativeEmitterWithSubs.on("tease", teaseHandler);
console.log("Emit event tease. Should see two calls to cb for tease");
nativeEmitterWithSubs.emit("tease");
console.log("Calling removeAllListeners of tease event");
nativeEmitterWithSubs.removeAllListeners("tease");
console.log("Emit event tease. Should see no calls to cb for tease");
nativeEmitterWithSubs.emit("tease");
console.log("See that no tease cb is called before this statement and the previous emit");
console.log("Emit look event to see that it is still available");
nativeEmitterWithSubs.emit("look");
console.log("Add look event listener a second time");
nativeEmitterWithSubs.on("look", lookHandler);
console.log("Emit event look. Should see two calls to cb for look");
nativeEmitterWithSubs.emit("look");
console.log("Remove one of the look listeners with cb lookHandler");
nativeEmitterWithSubs.removeListener("look", lookHandler);
console.log("Emit look event again to see that lookHandler is still called once.");
nativeEmitterWithSubs.emit("look");
console.log("Remove the last one of the look listeners with cb lookHandler");
nativeEmitterWithSubs.removeListener("look", lookHandler);
console.log("Emit look event again to see that no lookHandler is called.");
nativeEmitterWithSubs.emit("look");
console.log("No lookHandler called before this statement");
console.log("Expect empty array with call to event listeners for click");
console.log(nativeEmitterWithSubs.listeners("click"));