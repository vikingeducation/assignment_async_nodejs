function Emitter() {

  this.listeners = {};

  this.on = function(eventType, callback){
    if (this.listeners[eventType] === undefined){
      this.listeners[eventType] = [callback];
    } else {
      this.listeners[eventType].push(callback)
    };
  };

  this.emit = function(eventType){
    this.listeners[eventType].forEach(function(func){
      func();
    });
  };

  this.removeListener = function(eventType, callback) {
    var index = this.listeners[eventType].indexOf(callback);
    this.listeners[eventType].splice(index, 1);
  }

  this.removeAllListeners = function(eventType){
    delete this.listeners[eventType];
  }


}


module.exports = Emitter;
