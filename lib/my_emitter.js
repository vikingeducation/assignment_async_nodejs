function Emitter() {

  this.events = {};

  this.on = function(eventType, callback) {
    if (!(this.events[eventType])){
      this.events[eventType] = [];
    }
    this.events[eventType].push(callback);
  }

  this.emit = function(eventType) {
    this.events[eventType].forEach(function(event) {
      event();
    });
  }

  this.removeListener = function(eventType, callback) {
    var index = this.events[eventType].indexOf(callback);
    if (index > -1) {
      this.events[eventType].splice(index, 1);
    }
  }

  this.removeAllListeners = function(eventType) {
    this.events[eventType] = [];
  }

}

module.exports = Emitter;
