let emitter = function() {
  //I'm not even sure I need this.....
  //or if this is within the 'events' module
  this.evnts = {};

  //attach an event listener with
  this.on = (eventType, callback) => {
    if (eventType) {
      if (!Array.isArray(this.evnts[eventType])) {
        this.evnts[eventType] = [];
      }
    }
    this.evnts[eventType].push(callback);
  };
  //attach subsequent listeners with emitter.on

  //Emit an event with
  this.emit = eventType => this.evnts[eventType].forEach(val => val.call());
  //This should result in all listeners attached
  //to that event being invoked

  //Remove a listener
  this.removeListener = (eventType, callback) => {
    this.evnts[eventType].forEach(val => {
      if (val === callback) {
        this.evnts[eventType].splice(val, 1);
        console.log('Listener deleted');
      }
    });
  };

  //Remove all listeners on an event
  this.removeAllListeners = eventType => {
    delete this.evnts[eventType];
    console.log('All listeners deleted');
  };
};

module.exports = emitter;
