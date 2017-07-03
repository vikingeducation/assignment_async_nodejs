'use strict';

function Emitter() {

  this.on = function(eventType, callback) {
    // register a listener for events of type 'eventType' to trigger 'callback'

  };

  this.emit = function(eventType) {
    // trigger callbacks for an event of type 'eventType'

  };

  this.removeListener = function(eventType, callback) {
    // remove the given 'callback' from an event of type 'eventType'

  };

  this.removeAllListeners = function(eventType) {
    // remove all callbacks from an event of type 'eventType'

  };

};

module.exports = Emitter;
