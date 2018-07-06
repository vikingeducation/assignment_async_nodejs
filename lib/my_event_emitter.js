

function MyEventEmitter() {
  this._events = {};
}


MyEventEmitter.prototype.emit = function(eventType) {
  if (!this._events[eventType]) {
    return;
  }

  for (var i = 0; i < this._events[eventType].length; i++) {
    var callback = this._events[eventType][i];
    callback.call(this);
  }
};


MyEventEmitter.prototype.on = function(eventType, callback) {
  this._events[eventType] = this._events[eventType] || [];
  this._events[eventType].push(callback);
};


MyEventEmitter.prototype.addListener = MyEventEmitter.prototype.on;


MyEventEmitter.prototype.removeListener = function(eventType, callback) {
  if (this._events[eventType] && callback) {
    for (var i = 0; i < this._events[eventType].length; i++) {
      if (callback === this._events[eventType][i]) {
        this._events[eventType].splice(i, 1);
      }
    }
  }
};


MyEventEmitter.prototype.removeAllListeners = function(eventType) {
  this._events[eventType] = this._events[eventType] || [];
  this._events[eventType].splice(0);
  delete this._events[eventType];
};




module.exports = MyEventEmitter;









