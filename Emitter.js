function copyEmitter() {

  this._events = {};

  this.on = function(event, callback) {
    var events = this._events;
    if (events[event]) {
      events[event].push(callback);
    } else {
      events[event]= [callback];
    };
return this;
  };


  this.emit= function(event) {
    var events = this._events;
    if (events[event]) {
      events[event].forEach(function(item) {
        item();
      });
    };
  };

this.removeListener = function(event, callback) {
  var events = this._events;
  if(events[event]) {
    var todelete = events[event].indexOf(callback);
    events[event].splice(todelete, 1);
  }
  return this;
};

this.removeAllListeners = function(event) {
  var events = this._events;
  if(events[event]) {
    delete(events[event]);
  }
}

}




module.exports = copyEmitter;
