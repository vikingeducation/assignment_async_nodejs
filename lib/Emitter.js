function Emitter() {

  //Internally, the EventEmitter keeps track of an object
  //called this.events that maps event names to arrays of
  //event handlers.
  this.events = new Map(iterable);

  this.on = function(eventType, callback) {
    
  },

  this.emit = function(eventType) {

  },

  this.removeListener = function(eventType, callback) {

  },

  this.removeAllListeners = function(eventType) {
  };
}

module.exports = Emitter;
