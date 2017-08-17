const _ = require('lodash');

const emitter = function() {

  var eventListeners = [];

  this.on = function(eventType, callback) {
    var event = _.find(eventListeners, ['event', eventType]);
    if(event) {
      event.listeners.push(callback);
    }
    else {
      eventListeners.push({
        'event': eventType,
        'listeners': [callback]
      });
    }
  };

  this.emit = function(eventType, args) {
    var event = _.find(eventListeners, ['event', eventType]);
    if(event) {
      _.forEach(event.listeners, (callback) => {
        _.attempt(callback, args);
      });
    }
  };

  this.removeListener = function(eventType, callback) {
    var event = _.find(eventListeners, ['event', eventType]);
    if(event) {
      _.forEach(event.listeners, (listener) => {
        if(_.isEqual(listener, callback)) {
          const index = event.listeners.indexOf(listener);

          if (index !== -1) {
            event.listeners.splice(index, 1);
          }
          return false;  // break forEach
        }
      });
    }
  };

  this.removeAllListeners = function(eventType) {
    var event = _.find(eventListeners, ['event', eventType]);
    if(event) {
      event.listeners.length = 0;  // clear array
    }
  };
};

module.exports = emitter;