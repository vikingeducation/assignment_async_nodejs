"use strict";
const _ = require("lodash");

const events = {};

const emitter = function() {
  //creates array of callback/s keyed to eventType
  this.on = function(eventType, callback) {
    if (events.hasOwnProperty(eventType)) {
      //adds to existing array
      events[eventType].push(callback);
    } else { //if no eventType exists
      events[eventType] = [callback];
    }
  };
  //calls all callbacks in eventType
  this.emit = function(eventType) {
    if (events.hasOwnProperty(eventType)) {
      let argsArray = events[eventType];
      _.forEach(argsArray, x => x.call());
    } else {
      return false;
    }
  };
  //removes the call back from eventType array
  this.removeListener = function(eventType, callback) {
    if (events.hasOwnProperty(eventType)) {
      let argsArray = events[eventType];//list of arguments in eventType.
      let position = argsArray.indexOf(callback);
      argsArray.splice(position, 1);
    } else {
      console.log("No such event.");
    }
  };
  //removes eventType form emmitter
  this.removeAllListeners = function (eventType) {
    if (events.hasOwnProperty(eventType)) {
      delete events[ eventType ];
    } else {
      console.log('No such event to remove.');
    }
    return events;
  }
};

module.exports = emitter;
