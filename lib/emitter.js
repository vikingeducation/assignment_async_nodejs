function MyEmitter() {

  this._events = {};

  this.on = function(event, callback) {
    var events = this._events;
    if (events[event]) {
      events[event].push(callback);
    } else {
      events[event] = [callback];
    };
    return this;
  };

  this.emit = function(event) {
    var events = this._events;
    if (events[event]) {
      events[event].forEach( function(callback) {
        callback();
      });
    }
  };

  this.removeListener = function(event, callback) {
    var events = this._events;
    if (events[event]) {
      var indexOfCallback = events[event].indexOf(callback);
      events[event].splice(indexOfCallback, 1);
    }
    return this;
  };

  this.removeAllListeners = function() {
    this._events = {};
    return this;
  };
};

module.exports = MyEmitter;
