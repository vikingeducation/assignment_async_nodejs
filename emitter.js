function Emitter() {

  // Object to store events
  this._events = {};

  // Attach event listener
  this.on = ( eventName, listener ) => {
    // If this eventType array exists 
    if( this._events[eventName] ) {
      // Push the callback into array
      this._events[eventName].push( listener );
    } else {
      // Initialize empty array
      this._events[eventName] = [];
      // Push the callback into array
      this._events[eventName].push( listener );
    }
  };

  // Emit events
  this.emit = ( eventName, args) => {
    let hasListeners = false;

    // Iterate through events
    for( const prop in this._events ){
      // Compare eventName to property
      if( prop === eventName ) {
        // Listener found
        hasListeners = true;
        // Trigger callbacks
        this._events[eventName].forEach( listener => listener(args)); 
      };
    };

    // Return result
    return hasListeners;
  };

  // Remove listeners
  this.removeListener = (eventName, listener) => {
    // Iterate through array of listeners 
    // and filter out listener
    let filtered = this._events[eventName].filter( cb => cb !== listener );
    // Assign filtered values as new array
    this._events[eventName] = filtered;

  };
  
  // Remove all listeners
  this.removeAllListeners = eventName => {
    // Delete property
    delete this._events[eventName];
  };

  
};

module.exports = Emitter;
