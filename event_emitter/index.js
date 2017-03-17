_ = require('lodash');

function EventEmmitter(){
	this.listeners = {};
	this.on = function(ev, func){
		if (this.listeners[ev]) {
			this.listeners[ev].push(func);
		} else {
			this.listeners[ev] = [func];
		}
	};
	this.emit = function(eventType){
		if (this.listeners[eventType]) {
			this.listeners[eventType].forEach(function(func){
				func();
			});
		}
	};
	this.removeListener = function(ev, func){
		_.remove(this.listeners[ev], function(e){
			return e == func;
		});
	};
	this.removeAllListeners = function(ev){
		delete this.listeners[ev];
	};
};


module.exports = EventEmmitter;