function Emitter() {
  this.listeners = new Object();

  this.on = (eventType, callback) => {
    if (this.listeners[eventType] === undefined) {
      this.listeners[eventType] = [];
    }
    this.listeners[eventType].push(callback)
  }

  this.emit = eventType => {
    this.listeners[eventType].forEach(listener => {
      listener.call(this);
    })
  }

  this.removeListener = (eventType, callback) => {
    let index = this.listeners[eventType].indexOf(callback)
    this.listeners[eventType].splice(index, 1);
  }

  this.removeAllListeners = eventType => {
    this.listeners[eventType] = [];
  }

}

module.exports = Emitter

