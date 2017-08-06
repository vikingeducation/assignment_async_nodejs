var Emitter = require('events');

var emitter = new Emitter();

function f1() {
	console.log("Function f1");
}

function f2() {
	console.log("Function f2");
}

function f3() {
	console.log("Function f3");
}

function f4() {
	console.log("Function f4");
}

function f5() {
	console.log("Function f5");
}

function f6() {
	console.log("Function f6");
}

emitter.on('click', f1);
emitter.on('click', f2);
emitter.on('click', f3);
emitter.on('click', f4);

emitter.on('doubleClick', f3);
emitter.on('doubleClick', f4);
emitter.on('doubleClick', f5);
emitter.on('doubleClick', f6);

//console.log(emitter.listeners['click']);
//console.log(emitter.listeners['doubleClick']);

emitter.emit('click');
emitter.emit('doubleClick');

emitter.removeListener('click', f2);
//console.log(emitter.listeners['click']);
emitter.emit('click');
emitter.removeAllListeners('click');
//console.log(emitter.listeners['click']);
emitter.emit('click');

emitter.removeListener('doubleClick', f6);
//console.log(emitter.listeners['doubleClick']);
emitter.emit('doubleClick');
emitter.removeAllListeners('doubleClick');
//console.log(emitter.listeners['doubleClick']);
emitter.emit('doubleClick');
