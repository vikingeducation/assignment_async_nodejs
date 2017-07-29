class Emitter {
	constructor(){
		this.events = {};
	}

	on(type, callback){
		if(!this.check_listener_exists(type)){
				this.events[type] = [callback];
			}	
		else{
				this.events[type].push(callback)
			}
	}

	check_listener_exists(type){
		for(var i in this.events){
			if(this.events[type]){
				return true
			}
		}
		return false;
	}

	emit(type){
		for(var e in this.events[type]){
			var callback = this.events[type][e];
			callback()
		}
	}

	removeAllListeners(type){
		delete this.events[type]
	}

}

module.exports = Emitter; 