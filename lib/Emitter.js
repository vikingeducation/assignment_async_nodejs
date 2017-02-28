var Emitter = function() {

  this.listeners = {};

  this.on = function(eventType, callback) {
    if (!this.listeners.hasOwnProperty(eventType)) {
      this.listeners[eventType] = [callback];
    } else {
      this.listeners[eventType].push(callback);
    }
    return this;
  };
  this.emit = function(eventType) {
    if (!this.listeners.hasOwnProperty(eventType)) {
      return false;
    } else {
      for (var i = 0; i < this.listeners[eventType].length; i++) {
        this.listeners[eventType][i]();
      }
      return true;
    }
  };
  this.removeListener = function(eventType, callback) {
    if (this.listeners[eventType] && this.listeners[eventType].indexOf(callback) > -1) {
      this.listeners[eventType].splice(this.listeners[eventType].indexOf(callback), 1);
    }
    return this;
  };
  this.removeAllListeners = function(eventType) {
    delete this.listeners[eventType];
    return this;
  };
};

module.exports = Emitter;