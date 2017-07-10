

function Emitter() {
  if(!(this instanceof Emitter)) {
    return new Emitter();
  }

  this.events = {};


  this.on = function(eventType, callback){
    if (!(this.events[eventType])){
      this.events[eventType] = [];
    }
    this.events[eventType].push(callback);
  }

  this.emit = function(eventType){
    if(!(this.events[eventType])){
      console.log("No listeners to trigger for " + eventType);
    }
    else {
      var c = this.events[eventType];
      c.forEach(function(cb){
        cb();
      });
    }
  }

  this.removeListener = function(eventType, callback){
    var listeners = this.events[eventType];
    if(callback) {
      if(listeners) {
        for(i=0;i<listeners.length;i++) {
          l = this.events[eventType][i];
          if (l.toString() === callback.toString()) {
            delete this.events[eventType][i];
          }
        }
      }
      else {
        console.log("No listeners to remove for " + eventType);
      }
    }
    else {
      if (listeners) {
        delete this.events[eventType];
      }
      else {
        console.log("No listeners to remove for " + eventType);
      }
    }
  }


  this.removeAllListeners = function(eventType) {
    var listeners = this.events[eventType];
    if(listeners) {
      delete this.events[eventType];
    }
    else {
      console.log("No listeners to remove...");
    }
  }








}


module.exports = Emitter
