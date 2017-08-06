var Emitter = function() {

	this.listeners = {};

};

Emitter.prototype = {

	constructor: Emitter,

	on: function(eventType, callback) {

		if (typeof eventType !== 'string') {
			throw "invalid eventType";
		}

		if (typeof callback !== 'function') {
			throw "invalid callback";
		}

		if (!this.listeners[eventType]) {
			this.listeners[eventType] = [];
		}

		this.listeners[eventType].push(callback);
	},

	emit: function(eventType) {

		if (typeof eventType !== 'string') {
			throw "invalid eventType";
		}

		if (this.listeners[eventType]) {
			this.listeners[eventType].forEach( function(callback) {
				callback();
			});
		}
	},

	removeListener: function(eventType, callback) {

		if (typeof eventType !== 'string') {
			throw "invalid eventType";
		}

		if (typeof callback !== 'function') {
			throw "invalid callback";
		}

		if (!this.listeners[eventType]) {
			throw "invalid eventType";
		}

		do {
			var index = this.listeners[eventType].indexOf(callback);

			if (index !== -1) {
				this.listeners[eventType].splice(index, 1);
			}
		} while (index !== -1);

	},

	removeAllListeners: function(eventType) {

		if (typeof eventType !== 'string') {
			throw "invalid eventType";
		}

		if (this.listeners[eventType]) {

			if (!Array.isArray(this.listeners[eventType])) {
				throw "invalid eventType";
			}

			this.listeners[eventType] = [];
		}
	}

};

module.exports = Emitter;
