"use strict";

//create Emitter constructor
function Emitter(eventType, callback) {

	this.listeners = [];

	this.executeCallback = function(data) {
		if (data.length !== 0) {
			data.forEach(function(item) {
				return new Promise(function(resolve, reject) {
					if (item) {
						resolve(item.callback());
					} else {
						reject("No callback found!");
					}
				});
			});
		} else {
			throw new Error("Event not found!");
		}
	};

	this.on = function(eventType, callback) {
		this.listeners.push({
			"eventType": eventType,
			"callback": callback
		});
	}; //this.on

	this.emit = function(event) {

		let listeners = this.listeners;
		let matchArray = [];

		//create the promise to execute each matching callback asynchronously
		let executeCallback = function(data) {
			if (data.length !== 0) {
				return new Promise(function(resolve, reject) {
					if (data) {
						resolve(data.callback());
					} else {
						reject("No callback found!");
					}
				});
			} else {
				throw new Error("Event not found!");
			}
		};

		//cycle through each listener to look for a matching event
		listeners.forEach(function(item) {
			if (item.eventType === event) {
				matchArray.push(item);
			};
		});
		
		//execute each matching event's callback function
		if (matchArray.length === 0) {
			throw new Error("Event not found.");
		} else {
			matchArray.forEach(function(item) {
				executeCallback(item);
			});
			console.log("Success! Event(s) triggered.");
		}
		
	}; //this.emit

	this.removeListener = function(event, callFunc) {
		
		let eventString = event.toString() + callFunc.toString();

		this.listeners = this.listeners.filter(function(item) {
			let currentString = item.eventType.toString() + item.callback.toString();
			console.log(currentString);
			if (currentString !== eventString) {
					return item;
			}
		});
		console.log("Current listeners: " + this.listeners);
	}; //this.removelistener

	this.removeAllListeners = function(event) {
		this.listeners = this.listeners.filter(function(item) {
			if (item.eventType !== event) {
					return item;
			}
		});
		console.log("Current listeners: " + this.listeners);
	}; //this.removeAllListeners
}

module.exports = Emitter;














