"use strict";

function Emitter() {
  // make the object that will store names and callback functions within the "on"
  // okay so we also need to store the function in an array because
  // multiple callback functions can correspond to one eventObj
  this.emitStorage = new Object();

  this.on = function(eventObj, eventHandler) {
    // first check for existance of property
    if(this.emitStorage.hasOwnProperty(eventObj)){
      this.emitStorage[eventObj].push(eventHandler);
    } else {
      this.emitStorage[eventObj] = [eventHandler];
    }
  }

  this.emit = function(eventObj, eventData){
    // if you don't have property, don't continue
    if(!this.emitStorage.hasOwnProperty(eventObj)){ return;}
    this.emitStorage[eventObj].forEach((currHandler) => {
      currHandler(eventData);
    });
  }

  this.removeAllListeners = function(eventObj){
    // if you don't have property, stop execution
    if(!this.emitStorage.hasOwnProperty(eventObj)) {
      return;
    }
    delete this.emitStorage[eventObj];
  }

  this.removeListener = function(eventObj, eventHandler){
    if(!this.emitStorage.hasOwnProperty(eventObj)){ return;}
    let index = this.emitStorage[eventObj].indexOf(eventHandler);
    if(index > -1){
      this.emitStorage[eventObj].splice(index, 1);
    }
  }

}

module.exports = Emitter;
