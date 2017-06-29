
// first we make our constructor - it needs to contain a property that will hold the various events.
// each event is specified by an event name and has a list of specific events that are under that name.
// as such, we will use an object to hold these events. 
// 
// the keys will be the event names, while the value will be an array that holds each specified event callback
function Emitter() {
	// _ is used to show that this particular property is private
	this._events = {};
}

// emit method
// we will add it via prototype
Emitter.prototype.emit = function(eventType) {
	// check if event put in arguments actually exists within our event obj, if not - nothing to emit
	if (!this._events[eventType]) {
		return;
	}

	// otherwise, loop through that particular eventType's array of events
	for (let i = 0; i < this._events[eventType].length; i++) {
		// select every single callback listed in the array of this eventType
		let callback = this._events[eventType][i];

		// use the call method to join each event callback with our Emitter object and call the function
		callback.call(this);
	}
}

// on / addListener
Emitter.prototype.on = function(eventType, callback) {
	// check if eventType already exists - if it does, select that particular array of events
	// if it does not exist, then set that particular eventType to a new empty array.
	this._events[eventType] = this._events[eventType] || [];

	// push the desired event callback into it's corresponding eventType array
	// (basically add the event
	this._events[eventType].push(callback);
}

Emitter.prototype.addListener = Emitter.prototype.on;

// remove listener
Emitter.prototype.removeListener = function(eventType, callback) {
	// first check if even type exists, and that there is a callback argument supplied
	if (this._events[eventType] && callback) {
		// loop through particular arr and find the desired callback to be removed
		for (let i = 0; i < this._events[eventType].length; i++) {
			if (callback === this._events[eventType][i]) {
				this._events[eventType].splice(i, 1);
			}
		}
	}
};

// remove all listeners
Emitter.prototype.removeAllListeners = function(eventType) {
	this._events[eventType] = this._events[eventType] || [];
	this._events[eventType].splice(0);
	delete this._events[eventType];
}

module.exports = Emitter;








