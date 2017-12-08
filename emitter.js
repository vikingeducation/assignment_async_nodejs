var Emitter = function() {
  this.events = {};

  this.on = function(eventType, callback) {
    //add event listener (callback function) to event
    if (this.events[eventType] == undefined) {
      this.events[eventType] = [];
      this.events[eventType].push(callback);
    } else {
      this.events[eventType].push(callback);
    }
    //return reference to Emitter so calls can be chained
    return this;
  };

  this.emit = function(eventType) {
    //invoke all event listeners attached to an event
    if (this.events[eventType] == undefined) {
      return false;
    } else {
      let len = this.events[eventType].length;
      let arr = this.events[eventType];
      for (let i = 0; i < len; i++) {
        arr[i]();
      }
      return true;
    }
  };

  this.removeListener = function(eventType, callback) {
    //Remove a listener
    if (this.events[eventType] !== undefined) {
      let arr = this.events[eventType];
      if (arr.indexOf(callback) !== -1) {
        arr.splice(arr.indexOf(callback), 1);
      }
    }
    return this;
  };

  this.removeAllListeners = function(eventType) {
    //Remove all listeners on an event
    this.events[eventType] = undefined;
    return this;
  };
};

module.exports = Emitter;
