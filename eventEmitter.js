
function Emitter() {
  this.domain = null;
  this._events = {};
  this._eventsCount = 0;
  this._maxListeners  = undefined;

  this.on = function(eventType, callback) {
    if (this._events[eventType] === undefined) {
      this._events[eventType] = [callback];
      this._eventsCount++;
    } else {
      this._events[eventType].push(callback);
    }
  };

  this.emit = function(eventType) {
    for (var i = 0; i < this._events[eventType].length; i++) {
      this._events[eventType][i]();
    }
  };

  this.removeListener = function(eventType, callback) {
    for (var key in this._events) {
      if (key === eventType) {
        for (var i = 0; i < this._events[key].length; i++) {
          if (this._events[key][i] === callback) {
            this._events[key].splice(i, 1);
          }
        }
      }
    }
  };
  this.removeAllListeners = function(eventType) {
    this.events[eventType] = undefined;
  };
}

module.exports = Emitter;