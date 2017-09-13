Function listener(eventType, callback) = {
  this.eventType = eventType,
  this.callbacks = this.callbacks.push(callback),
};

var emitter = {
  on: function(eventType, callback) {
    // If the listener object doesn't exist, create it
    if(!eventType) {
      eventType = new Listener();
    };
    // Push callback to array in listener object
    eventType.callbacks.push(callback);
  },
  emit: function(eventType) {
    // If event type matches the name of a listener, run all callbacks stored in this.callbacks
    if(eventType) {
      for(i = 0, i <= this.callbacks.length, i++) {
        var currentCallback = eventType.callbacks[i].pop();
        currentCallback();
      }
    }
  },
  removeListener: function(eventType, callback) {
    // Remove the listener
  },
  removeAllListener: function(eventType, callback) {
    // Remove all listeners
  }
};

module.exports = emitter;
