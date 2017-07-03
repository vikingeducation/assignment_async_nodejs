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

    let callbacks = this.events[eventType];

    if (callbacks !== undefined) {
      callbacks.forEach(function(callback) {
        callback();
      });
    }

  };

  // remove the given 'callback' from an event of type 'eventType'
  this.removeListener = function(eventType, callback) {

  };

  // remove all callbacks from an event of type 'eventType'
  this.removeAllListeners = function(eventType) {

  };

};

module.exports = Emitter;
