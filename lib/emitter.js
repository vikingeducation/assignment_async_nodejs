'use strict';

function Emitter(){
  // Set up hash to store events
  this.events = {};

  // Attach an event listener with emitter.on(eventType, callback)
  // Enable it to capture a variety of callbacks per eventType
  this.on = function(eventType, callback){
    if (this.events[eventType] === undefined) {
      this.events[eventType] = [];
      this.events[eventType].push(callback);
      return callback();
    } else {
      this.events[eventType].push(callback);
      return callback();
    }
  };

  // Emit an event with emitter.emit(eventType)
  // This should result in all listeners attached to that event being invoked
  this.emit = function(eventType) {
    if (this.events[eventType]) {
      this.events[eventType].forEach(function(callback){
        callback();
      });
    } else {
      // Handle the case in which the requested eventType does not exist
      console.log("this event type does not exist");
    }
  };

  // Remove a listener with emitter.removeListener(eventType, callback)
  this.removeListener = function(eventType, callback) {
    var listOfCallbacks = this.events[eventType];
    console.log("list of callbacks for " + eventType);
    console.log(listOfCallbacks);

    var callbackToRemove = listOfCallbacks.indexOf(callback);
    console.log("index of callback to remove:");
    console.log(callbackToRemove);
    if (callbackToRemove > -1) {
      listOfCallbacks.splice(callbackToRemove, 1);
    }
  };


}; // close Emitter

module.exports = Emitter;