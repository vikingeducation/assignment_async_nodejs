var _ = require('lodash');
var fs = require('fs');

var listeners = require('./listeners.json');


var Emitter = function(eventType, callback) {

  // this.on = function(eventType, callback) {
  //   var event = JSON.stringify({eventType: eventType, callback: callback})
  //   fs.appendFile("./listeners.json", event, function(err) {
  //     if (err) throw err; 
  //   });
  // }
  this.events = {};

  this.on = function(event, callback) {
    this.events[event]=callback
  }


  this.emit = function(eventType) {

  this.events[eventType].call();

}

  // this.removeListener = function(eventType, callback) {
  //   _.each(listeners, function(value, key) {
  //     //iterate to find matching eventType AND callback values
  //   });
  // }

  // this.removeAllListeners = function(eventType) {
  //   //delete a matching object by eventType
  // }

}

module.exports = Emitter