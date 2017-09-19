'use strict';

function Emitter() {
	this.events = {};
}

//on method creates way to register event listeners
//listener stores function code
Emitter.prototype.on = function(type, listener) {
	//listeners will be contained in an array data structure, that sits in the event object, simply as a property
	this.events[type] = this.events[type] || [];
	this.events[type].push(listener);
}

//emitter method to trigger event happened
//listener stores function code
Emitter.prototype.emit = function(type) {
	if (this.events[type]) {
		this.events[type].forEach(function(listener) {
			listener();
		});
	}
}

Emitter.prototype.removeListener = function(type) {
	if (this.events[type]) {
		//clear the values of this type (event) only
		delete this.events[type];
	}
}

//note: my spec of removeAllListeners slightly different than node.js' version
Emitter.prototype.removeAllListeners = function() {
	var o = Object.keys(this.events); // stores all listener types in an array
	var ol = o.length; // stores listener count
	console.log('Before: Total num of listeners registered = ' + ol);
	console.log('Before: Listeners registered are: ');
	console.log(o); // print all listener types

	// clear all values in all listeners
	var oo = this.events;
	o.forEach(function(element, index) {
		delete oo[element];
	});

	o = Object.keys(this.events); // requery
	ol = o.length; // requery
	console.log('After: Total num of listeners registered = ' + ol);
	console.log('After: Listeners registered are: ');
	console.log(o); // print all listener types
}

module.exports = Emitter;