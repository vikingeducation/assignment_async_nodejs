function Emitter() {

  var eventList = {};
  // 1. Store all events in an object, with an event being prop
  // and it's corresponding value being the callback?
  // 2. 'on' enters the information in the object
  // 3. 'emit' looks through the object and uses it!
  this.on = function(event, callback) {
    if (eventList.hasOwnProperty(event)) {
      eventList[event].push(callback);
    } else {
      eventList[event] = [callback];
    }
  };

  this.emit = function(event) {
    eventList[event].forEach(function(fnElement) {
      fnElement();
    });
  };

  // Iterates through event list. Checks named functions, then checks
  // anonymous functions by comparing them as strings.
  this.removeListener = function(event, callback) {
    eventList[event].forEach(function(savedCallback) {
      if (savedCallback === callback) {
        var index = eventList[event].indexOf(savedCallback);
        eventList[event].splice(index, 1);
      } else if (savedCallback.toString() === callback.toString()) {
        var index = eventList[event].indexOf(savedCallback);
        eventList[event].splice(index, 1);
      }
    });
  };

  this.removeAllListeners = function(event) {
    if (eventList.hasOwnProperty(event)) {
      eventList[event] = [];
    }
  }
}

module.exports = Emitter;