var warmups = require('./lib/warmups')
var fsp = require('./lib/fsp')
var Emitter = require('./lib/emitter')
var emitter = new Emitter();




// FSP Examples
fsp.readFile('./files/data.txt')
  .then(function(data){
    console.log(data)
  })
  .catch(function(err){
    console.log('Error! ' + err);
  })

fsp.writeFile('./files/new.txt', 'Hello!')
  .then(function(result){
    fsp.readFile('./files/new.txt')
    .then(function(r){
      console.log(r)
    })
  })
  .catch(function(e){
    console.error(e)
  })

fsp.appendFile('./files/data.txt', '\nSweet new text\n')
  .then(function(result){
    fsp.readFile(result)
    .then(function(r){
      console.log(r)
    })
  })
  .catch(function(e){
    console.error(e)
  })

// Emitter examples
var func1 = function(){
  console.log('this is function 1!')
}
var func2 = function(){
  console.log('this is function 2!')
}
var func3 = function(){
  console.log('this is function 3!')
}
var func4 = function(){
  console.log('this is function 4!')
}
var func5 = function(){
  console.log('this is function 5!')
}

emitter.on('click', func1);
emitter.on('click', func2);
emitter.on('click', func3);
emitter.on('click', func4);

emitter.on('shout', func1);
emitter.on('shout', func3);
emitter.on('shout', func4);
emitter.on('shout', func5);

emitter.emit('click')
emitter.removeListener('click', func3);
console.log('-----------------------------')
emitter.emit('click')

console.log ('--- remove all --- ')
emitter.removeAllListeners('click')
emitter.emit('click')