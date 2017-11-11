class EventEmitter {
  
  constructor() {
    this.listeners = {};
  }

  existsListenerFor(eventType) {
    return this.listeners[eventType] !== undefined;
  }

  on(eventType, callback) {
    if (!this.existsListenerFor(eventType)) {
      this.listeners[eventType] = []
    }
    this.listeners[eventType].push(callback); 
  }

  emit(eventType) {
    if (!this.existsListenerFor(eventType)) {
      throw "Not an existing event";
    }
    for (let i = 0; i < this.listeners[eventType].length; i++) {
      this.listeners[eventType][i]();
    }
  }

  removeListener(eventType, callback) {
    if (!this.existsListenerFor(eventType)) {
      throw "Not an existing event";
    }
    this.listeners[eventType] = this.listeners[eventType].filter((el, idx) => {
      return el !== callback;
    });
  }
  
  removeAllListeners(eventType) {
    if (!this.existsListenerFor(eventType)) {
      throw "Not an existing event";
    }
    delete this.listeners[eventType]; 
  }

}

module.exports = EventEmitter;
