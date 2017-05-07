var myEmitter = function() {
  this.listeners = {},

  //attach an event listener
  this.on = function(eventType, callback) {
    //if key doesn't already exist
    if (this.listeners[eventType]) {
      //key does exist, append to array
      this.listeners[eventType].push(callback);

    } else {
      //key doesn't exist, so create it
      this.listeners[eventType] = [callback];
    }
  },

  //emit an event
  this.emit = function(eventType) {
    this.listeners[eventType].forEach(function(callback) {
      callback();
    });
  },

  //remove a listener
  this.removeListener = function(eventType, callback) {
    var index = this.listeners[eventType].indexOf(callback);
    this.listeners[eventType].splice(index, 1);
  },

  //remove all listeners
  this.removeAllListeners = function(eventType) {
    this.listeners[eventType] = [];
  }
}

module.exports = myEmitter;
