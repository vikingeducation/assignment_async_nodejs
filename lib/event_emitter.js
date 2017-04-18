function Emitter() {

  var eventList = {};
  // 1. Store all events in an object, with an event being prop
  // and it's corresponding value being the callback?
  // 2. 'on' enters the information in the object
  // 3. 'emit' looks through the object and uses it!
  this.on = function(event, callback) {
    eventList[event] = callback;
  };

  this.emit = function(event) {
    eventList.event();
  };

  this.removeListener = function(event, callback) {};
}

module.exports = Emitter;