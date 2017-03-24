var Emitter = require('./lib/my_emitter');
var fs = require('fs');
//var Emitter = require('events').EventEmitter;
var emitter = new Emitter();
var path = './dummy_text.txt';
// Listener 1
var confirmFileNameListener = function(file_name){
  console.log("Invoking confirmFileNameListener - File to read is :", file_name);
}
// Listener 2
var readFileListener = function (file_name) {
  // if (!file_name) {
  //   file_name = path;
  // }
  console.log("Invoking readFileListener - Started Reading file....nn",file_name);
  fs.readFile(file_name, 'utf8', function (err,data) {
    if (err) {
      emitter.emit('error','trying to read file');
    }
    else{
        console.log("Done Reading file....nn");
        emitter.emit('print_content',data);
    }
  });
}
// Listener 3
var printFileListener = function(data){
    console.log("Invoking printFileListener - Printing content of file....nn");
    console.log(data);
    emitter.emit('done');
}
//Listener 4
var errorListener = function(type){
    console.log("Invoking errorListener - Faced error while "+type);
}
//Listener 5
confirmListener = function(){
    console.log("Invoking confirmListener - Ok its done !");
}

// Attach an event listener with emitter.on(eventType, callback)
emitter.on('start_read', confirmFileNameListener);
emitter.on('start_read', readFileListener);
// Attach subsequent listeners with emitter.on
emitter.on('print_content', printFileListener);
// Attach subsequent listeners with emitter.on
emitter.on('error', errorListener);
// Attach subsequent listeners with emitter.on
emitter.on('done', confirmListener);

// Emit an event with emitter.emit(eventType)
// This should result in all listeners attached to that event being invoked
// emitter.on('start_read', 'dummy1');
// emitter.on('start_read', 'dummy2');
// emitter.on('start_read', 'dummy3');
// emitter.on('start_read', 'dummy4');
// emitter.on('start_read', 'dummy5');
// emitter.on('start_read', 'dummy6');
// emitter.removeListener('start_read', 'dummy6');
// emitter.removeAllListeners('start_read');
emitter.emit('start_read',path);
// emitter.emit('print_content', 'test data');
// emitter.emit('error', 'dummy error');

// Remove a listener with emitter.removeListener(eventType, callback)
//emitter.removeListener('start_read',confirmFileNameListener); //this will remove the listener for print_content event.

// Remove all listeners on an event with emitter.removeAllListeners(eventType)
emitter.removeAllListeners('start_read');
//All the listener waiting for this event will be removed
