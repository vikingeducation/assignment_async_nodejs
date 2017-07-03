'use strict';

function Emitter() {

  // store for events and their listeners
  this.events = {}


  // register a listener for events of type 'eventType' to trigger 'callback'
  this.on = function(eventType, callback) {
    // add our event if necessary
    if (this.events[eventType] === undefined) {
      this.events[eventType] = [];
    }

    // register listener callback
    this.events[eventType].push(callback)

  };

  // trigger callbacks for an event of type 'eventType'
  this.emit = function(eventType) {

    // if we have callbacks for this 'eventType'
    let callbacks = this.events[eventType];
    if (callbacks !== undefined) {

      // call them all!
      callbacks.forEach(function(callback) {
        callback();
      });
    }

  };

  // remove the given 'callback' from an event of type 'eventType'
  this.removeListener = function(eventType, callback) {

    // if we have a listener for this 'eventType'
    let callbacks = this.events[eventType]
    if (callbacks !== undefined) {

      // if this listener calls 'callback'
      let callbackIndex = callbacks.indexOf(callback);
      if (callbackIndex >= 0) {

        // remove one
        callbacks.splice(callbackIndex, 1);
      }

    }

  };

  // remove all callbacks from an event of type 'eventType'
  this.removeAllListeners = function(eventType) {

    // No, mister Bond, I expect you to die!
    delete this.events[eventType];

  };

};

module.exports = Emitter;
