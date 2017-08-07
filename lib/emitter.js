'use strict';

function Emitter(){
  // Set up hash to store events
  this.events = {};

  // Attach an event listener with emitter.on(eventType, callback)
  this.on = function(eventType, callback){
    if (this.events[eventType] === undefined) {
      this.events[eventType] = callback;
      return callback();
    } else {
      return callback();
    }
  };

};

module.exports = Emitter;