var Emitter = require('./emitter.js');
var events = require('events');

var myEmitter = new events.EventEmitter();

console.log(myEmitter);

// var emitter = new Emitter();

// emitter.on('myEvent', function(){
// 	console.log(emitter.name);
// });
