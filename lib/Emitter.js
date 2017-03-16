var _ = require('lodash');

function Emitter() {
  this.eventArr = [],
  this.callbackArr = [],

  this.on = function(eventType, callback) {
    this.eventArr.push(eventType);
    this.callbackArr.push(callback);
  },

  this.emit = function(eventType) {

    for (var i = 0; i < this.eventArr.length; i++) {
      if (eventType === this.eventArr[i]) {
        this.callbackArr[i]();
      }
    };

  },

  this.removeListener = function(eventType, callback) {
    for (var i = 0; i < this.eventArr.length; i++) {
      if (eventType === this.eventArr[i] && callback === this.callbackArr[i]) {
        delete this.callbackArr[i];
        delete this.eventArr[i];
      }
    };
  },

  this.removeAllListeners = function(eventType) {
    for (var i = 0; i < this.eventArr.length; i++) {
      if (eventType === this.eventArr[i]) {
        delete this.callbackArr[i];
        delete this.eventArr[i];
      }
    };
  }
};

module.exports = Emitter;
