function Emitter(){
  this.events = {}

  this.on = function(eventType, callback){
    this.events[eventType]
    if (this.events[eventType]){
      this.events[eventType].push(callback)
    } else {
      this.events[eventType] = [callback]
    }
  }

  this.emit = function(eventType){
    if(this.events[eventType]){
      this.events[eventType].forEach(function(func){
        return func();
      })
    }
  }

  this.removeListener = function(eventType, callback){
    if (this.events[eventType]){
      var idx = this.events[eventType].indexOf(callback)
      this.events[eventType].splice(idx, 1)
    }
  }

  this.removeAllListeners = function(eventType){
    this.events[eventType] = null
  }
}

module.exports =  Emitter;