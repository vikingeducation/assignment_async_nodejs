'use strict';

const Emitter = function() {

  // store for events and their listeners
  this.events = {};


  // attach a listener for a particular event
  this.on = function(eventType, callback) {

    // add an event if not there
    if (this.events[eventType] === undefined) {
      this.events[eventType] = [];
    }

    // then attach listeners
    this.events[eventType].push(callback);

  };

  // invoke all listeners for a particular event 
  this.emit = function(eventType) {

    let callbacks = this.events[eventType];

    // check if any listeners for this event
    if (callbacks !== undefined) {

      // loop though all listeners for this event
      callbacks.forEach(function(callback) {
        callback();
      });
    }  else {

      // output error message if no listeners exist for given event
      console.log("this event type does not exist");
    }

  };

  // remove a particular listener of given events
  this.removeListener = function(eventType, callback) {

    // check if any listeners for this event
    let callbacks = this.events[eventType];

    if (callbacks !== undefined) {

      //get index of listener to remove	
      let callbackIndex = callbacks.indexOf(callback);

      if (callbackIndex >= 0) {

        // remove that listener
        callbacks.splice(callbackIndex, 1);
      }

    }

  };

  // remove all listeners from a particular event 
  this.removeAllListeners = function(eventType) {

    //delete all listeners on given event in one go
    delete this.events[eventType];

  };

}


module.exports = Emitter;