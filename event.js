
var Emitter = function() {
  this._events ={};
  this.on = function (eventType, callback) {
    if (this._events[eventType]) {
      this._events[eventType].push(callback);
    } else {
      this._events[eventType] = [callback];
    }
    return this;
  };
  this.emit = function(eventType) {
    this._events[eventType].forEach( function(callback) {
      return callback();
    })
  };
  this.removeListener = function(eventType, callback) {
    var idx;
    this._events[eventType].forEach( function(callback_iter, index) {
      if (callback_iter === callback) {
        idx = index
      }
    })
    this._events[eventType].splice(idx, 1);
  };
  this.removeAllListeners = function(eventType) {
    delete this._events[eventType];
  }
}



module.exports = Emitter;
