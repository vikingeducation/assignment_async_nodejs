function Emitter() {
  this.listeners = new Object();
  }

module.exports = Emitter

Emitter.prototype.on = (eventType, callback) => {
  if (this.listeners[eventType] === undefined) {
    this.listeners[eventType] = [];
  }
  this.listeners[eventType].push(callback)
}

Emitter.prototype.emit = eventType => {
  this.listeners[eventType].forEach(listener => {
    listener.call(this);
  })
}

Emitter.prototype.removeListener = (eventType, callback) => {
  let index = this.listeners[eventType].indexOf(callback)
  this.listeners[eventType].splice(index, 1);
}

Emitter.prototype.removeAllListeners = eventType => {
  this.listeners[eventType] = [];
}


