'use strict';

const _ = require("lodash");

let Emitter = function() {

  let eventListeners = [];

  this.on = function(eventType, callback) {
  	var event = _.find(eventListeners, ["event", eventType]);
    if(event) {
      event.listeners.push(callback);
    }
    else {
      eventListeners.push({
        "event": eventType,
        "listeners": [callback]
      });
    }
  };

  this.emit = function(eventType) {

  };

  this.removeListener = function(eventType, callback) {

  };

  this.removeAllListeners = function(eventType) {

  };

}

module.export = Emitter;