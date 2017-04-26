function Emitter() {
  this.listeners = [];

  this.on = function(eventType, callback) {
    this.listeners.push({ [eventType]: callback });

    return this;
  }

  this.emit = function(eventType, ...args) {
    const listeners = this.listeners.filter((listener) => listener[eventType])

    if(listeners.length === 0) {
      return false;
    } else {
      listeners.forEach((listener) => listener[eventType](...args));

      return true;
    }
  }

  this.removeListener = function(eventType, callback) {
    const index =
      this.listeners.map(listener => listener[eventType]).indexOf(callback);

    if(index >= 0) {
      this.listeners.splice(index, 1);
    }

    return this;
  }

  this.removeAllListeners = function(eventType) {
    this.listeners = this.listeners.filter(listener => !listener[eventType])

    return this;
  }
}

module.exports = Emitter;
