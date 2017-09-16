var emitter = {
  events: {},

  on: function(eventType, callback) {
    // If event type does not exist, create a new [eventType] array in events object
    if (!this.events[eventType]) {
      this.events[eventType] = [];
    }

    this.events[eventType].push(callback);
  },
  emit: function(eventType) {
    var event = this.events[eventType];
    if (event) {
      event.forEach(function(callback) {
        callback.call();
      });
    }
  },

  removeListener: function(eventType) {
    var event = this.events[eventType];
    event.shift();
  },

  removeAllListeners: function() {
    this.events = {};
  }
};

module.exports = emitter;
