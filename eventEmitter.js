var emitter = function() {
  var events = {};

  this.on = function(eventName, listener) {
    if (events[eventName] == undefined) {
      events[eventName] = [listener];
    } else {
      events[eventName].push(listener);
    }
    return this;
  };

  this.emit = function(eventName, ...rest) {
    if (events[eventName] == undefined) {
      return false;
    } else if (rest.length == 0) {
      for (var listeners in events[eventName]) {
        events[eventName][listeners]();
      }
      return true;
    } else {
      for (var listeners in events[eventName]) {
        events[eventName][listeners](rest);
      }
      return true;
    }
  };

  this.removeListener = function(eventName, listener) {
    if (events[eventName] != undefined) {
      var index = events[eventName].indexOf(listener);
      if (index != -1) {
        events[eventName].splice(index, 1);
      }
    }
    return this;
  };

  this.removeAllListeners = function(eventName) {
    events[eventName] = undefined;
    return this;
  };
};

module.exports = emitter;
