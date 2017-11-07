function EventEmitter() {
  this.events = {};
}

EventEmitter.prototype.on = function(eventType, callback) {
  this.events[eventType] = this.events[eventType] || [];
  this.events[eventType].push(callback);
};

EventEmitter.prototype.emit = function(eventType) {
  if(this.events[eventType].length > 0){
      this.events[eventType].forEach(function(callback) {
      callback();
    });
    return true;
  }else{
    console.log("Listener of type " +eventType+ " has been removed");
    return false;
  }
};

EventEmitter.prototype.removeEventListener = function(eventType, callback = function(){}){
  var index = this.events[eventType].indexOf(eventType);
  this.events[eventType].splice(index, 1);
};

EventEmitter.prototype.removeAllListeners = function(eventType = ""){
  if (eventType === ""){
    this.events[eventType] = [];
  }else{
    this.events[eventType] = this.events[eventType].filter(function(event_type){
      event_type !== eventType;
    });
  }
};


module.exports = EventEmitter;
