// Custom event listener class.
function Emitter() {}

// Object to keep track of listeners.
Emitter.prototype.listeners = {};

// Method which handles adding a custom listener.
Emitter.prototype.on = function(eventType, callback) {
  // Make sure we have valid arguments.
  if (!eventType || !callback)
    throw new Error("Invalid or unsupplied arguments.");

  // Check our listeners object to see if we already have
  // listeners, if not, we need to initialize the index.
  if (!this.listeners.hasOwnProperty(eventType)) {
    // No listeners have been added yet, create the index.
    this.listeners[eventType] = [];
  }

  // Add the callback.
  this.listeners[eventType].push(callback);
}

// Method which handles removing a custom listener.
Emitter.prototype.off = function(eventType, callback) {
  // Make sure we have valid arguments.
  if (!this.isValidEvent(eventType))
    return;

  // We have the index, now we need to remove the callback supplied.
  let eventListeners = this.listeners[eventType];

  // Attempt to remove the callback.
  eventListeners.splice(eventListeners.findIndex(el => el === callback), 1);
}

// Method which handles removing all listeners for an event type.
Emitter.prototype.offAll = function(eventType) {
  // Make sure we have valid arguments.
  if (!this.isValidEvent(eventType))
    return;

  // Remove all listeners.
  this.listeners[eventType] = [];
}

// Method which handles firing a custom listener.
Emitter.prototype.emit = function(eventType) {
  // Make sure we have valid arguments.
  if (!this.isValidEvent(eventType))
    return;

  // Loop through and invoke all callbacks for
  // supplied event.
  let eventListeners = this.listeners[eventType];
  eventListeners.forEach(cb => {
    // Invoke the callback.
    cb();
  });
}


Emitter.prototype.isValidEvent = function(eventType) {
  return eventType && this.listeners.hasOwnProperty(eventType);
}

module.exports = Emitter;
