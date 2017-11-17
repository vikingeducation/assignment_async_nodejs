/*
Attach an event listener with emitter.on(eventType, callback)
Attach subsequent listeners with emitter.on
Emit an event with emitter.emit(eventType)
This should result in all listeners attached to that event being invoked
Remove a listener with emitter.removeListener(eventType, callback)
Remove all listeners on an event with emitter.removeAllListeners(eventType)
*/
let myFuncs = {
	 Emitter: function(){

		this.storage = {},
		this.on = function(eventType, callback){

			if(!this.storage[eventType]) {this.storage[eventType] = []}
			this.storage[eventType].push(callback)
			//console.log(this.storage)	
			return this
		},

		this.emit = function(eventType){
			this.storage[eventType].forEach(function(item){
				item()
			})
			//console.log(this.storage)	
			return this
		},

		this.removeListener = function(eventType, callback){
			this.storage[eventType].forEach(function(item, index){
				if(item === callback){
					//this.storage[eventType].splice(index, 1)
				}
			})
			//console.log(this.storage)	
			return this
		},

		this.removeAllListeners = function(eventType){
			this.storage[eventType].forEach(function(item, index){
				this.storage[eventType].splice(0, this.storage[eventType].length - 1)
			})
			console.log(this.storage)	
			return this
		}
		return this
	}
}



module.exports = myFuncs
