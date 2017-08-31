var Emitter = function() {
  this.listeners = {};

  this.on = function(eventType, callback) {
    if (this.listeners[eventType] === undefined) {
      this.listeners[eventType] = [];
    };
    this.listeners[eventType].push(callback);
  };

  this.emit = function(eventType) {
    var callbacks = this.events[eventType];
    if (callbacks !== undefined) {
      callbacks.forEach(function(callback) {
        callback();
      });
    };
  };

  this.removeListener = function(eventType, callback) {
    var i = this.listeners[eventType].indexOf(callback);
    if (i !== -1) {
      this.listeners[eventType].splice(i, 1);
    };
  };

  this.removeAllListeners = function(eventType) {
    delete this.listeners[eventType];
  };
};

module.exports = Emitter;
