function EventEmitter() {
  this.listeners = [];
}

EventEmitter.prototype.on = function(eventType, callback) {
  this.listeners.unshift([eventType, callback]);
};

EventEmitter.prototype.emit = function(eventType) {
  // find all listeners with the eventType
  var events = this.listeners.filter(function(listener) {
     return listener[0] === eventType;
  });

  //invoke each event
  for (var i = events.length - 1; i >= 0; i--) {
    events[i][1].call();
  }
};

EventEmitter.prototype.removeListener = function(eventType, callback) {
  this.listeners = this.listeners.filter(function(listener) {
    return !(listener[0] === eventType && listener[1] === callback);
  });
};

EventEmitter.prototype.removeAllListeners = function(eventType) {
  this.listeners = this.listeners.filter(function(listener) {
    return listener[0] !== eventType;
  });
};

EventEmitter.prototype.listenerCount = function(eventType) {
  this.listeners = this.listeners.filter(function(listener) {
    return listener[0] === eventType;
  });

  return this.listeners.length;
};

module.exports = EventEmitter;
