
//I need to come back to this
emitter = {

  this.events = {};

  this.on: function(eventType, callback){
    if (!(this.events[eventType])){
      this.events[eventType] = [];
    }
    this.events[eventType].push(callback)
  }


};// emitter}

module.exports.emitter
