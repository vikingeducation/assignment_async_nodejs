_ = require('lodash');

function EventEmmitter(){
	this.listeners = [];
	this.on = function(ev, func){
		this.listeners.push({
			eventName: ev,
			listener: func
		});
	};
	this.emit = function(eventType){
		for (var i = 0; i < this.listeners.length; i++) {
			if (this.listeners[i].eventName == eventType) {
				this.listeners[i].listener();
			}
		}
	};
	this.removeListener = function(ev, func){
		_.remove(this.listeners, function(e){
			return (e.eventName == ev && e.listener == func);
		});
	};
	this.removeAllListeners = function(ev){
		_.remove(this.listeners, function(e){
			return e.eventName == ev;
		});
	};
};


module.exports = EventEmmitter;