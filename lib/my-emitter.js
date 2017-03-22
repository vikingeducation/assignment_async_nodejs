var _ = require('lodash');
var fs = require('fs');

var listeners = require('./listeners.json');


var Emitter = function(eventType, callback) {

  //writes very messily to json, is practically garbage
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
      // console.log(this._events[event])
      console.log(this._events)
      return this;  
    } else {
      this._events[event].push(Promise.resolve(callback));
    }
  }


  this.emit = function(eventType) {

    Promise.all(this._events[eventType])
      .then(function(callback) {
        console.log(callback + "inside the promise")
        _.forEach(callback, function(func) {
          func.call();
        });
    }).catch(function(err) {
      console.error(err);
    });
    return this;
  }


  // this.removeAllListeners = function(eventType) {
  //   //delete a matching object by eventType
  // }

  this.removeAllListener = function(eventType, callback) {

    var e = this._events
    for (var key in e) {
      if (e.hasOwnProperty(key)) {
        if (eventType == key && e[key] == callback)
        delete e[key]
        console.log(e[key] + "has been deleted")
      };
    };
    return this;
  }

}

module.exports = Emitter