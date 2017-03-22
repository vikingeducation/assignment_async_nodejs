var _ = require('lodash');
var fs = require('fs');

var listeners = require('./listeners.json');


var Emitter = function(eventType, callback) {

  // writes very messily to json, is practically garbage
  // this.on = function(eventType, callback) {
  //   var event = JSON.stringify({eventType: eventType, callback: callback})
  //   fs.appendFile("./listeners.json", event, function(err) {
  //     if (err) throw err; 
  //   });
  // }
  this._events = {};

  this.on = function(event, callback) {
    if (this._events[event] === undefined) {
      this._events[event] = [Promise.resolve(callback)];
      return this;  
    } else {
      this._events[event].push(Promise.resolve(callback));
      return this;
    }
  };


  this.emit = function(eventType) {
    Promise.all(this._events[eventType])
      .then(function(callback) {
        _.forEach(callback, function(func) {
          func.call();
        });
    }).catch(function(err) {
      console.error(err);
    });
    return this;
  };

  this.removeAllListener = function(eventType, callback) {
    delete this._events[eventType];
  }
}

module.exports = Emitter;