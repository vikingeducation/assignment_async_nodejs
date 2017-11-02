'use strict';
const fs = require('fs');
const fsp = require('./fsp.js');
const Emitter = require('./emit.js');
let emitter = new Emitter();
const nativeEmitter = require('events');

var hello = new Promise((resolve, reject) => {
  setTimeout(resolve('Hello Promise!'), 1000);
});

hello.then(message => console.log(message)).catch(err => console.error(err));

let delay = milliseconds => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      if (milliseconds > 0) {
        resolve(milliseconds);
      } else {
        reject('Done');
      }
    }, milliseconds);
  });
};

let countDown = result => {
  if (result > 0) {
    console.log(result);
    return (result -= 100);
  } else {
    console.log('Done!');
  }
};

delay(1000)
  .then(countDown) //=> 1000
  .then(countDown) //=> 900
  .then(countDown) //=> 800
  .then(countDown) //=> 700
  .then(countDown) //=> 600
  .then(countDown) //=> 500
  .then(countDown) //=> 400
  .then(countDown) //=> 300
  .then(countDown) //=> 200
  .then(countDown) //=> 100
  .then(countDown); //=> Done!

let square = val => {
  return new Promise((resolve, reject) => {
    if (val !== undefined && typeof val === 'number') {
      resolve(Math.pow(val, 2));
    } else {
      reject('No bueno');
    }
  });
};

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numArray = numArray.map(square);

Promise.all(numArray).then(val => console.log(val));

let doBadThing = forRealz => {
  return new Promise((resolve, reject) => {
    if (forRealz) {
      reject('Booo');
    } else {
      resolve('Yay');
    }
  });
};

doBadThing('jefe').then(
  resolve => {
    console.log(resolve);
  },
  reject => {
    try {
      throw reject;
    } catch (err) {
      console.error(err);
    }
  }
);
doBadThing(21)
  .then(result => console.log('!!' + result))
  .catch(err => console.error(err));

fsp
  .readFile('./lorem.txt')
  .then(data => console.log(data))
  .catch(err => console.error(err));

fsp
  .writeFile('./lorem.txt', 'Hello!')
  .then(res => console.log(res))
  .catch(err => console.error(err));

fsp
  .appendFile('./lorem.txt', 'Hello Again!')
  .then(res => console.log(res))
  .catch(err => console.error(err));

let clocked = () => console.log('clocked');

emitter.on('clock', clocked);

emitter.on('clock', () => console.log('Its alive'));

emitter.emit('clock');

emitter.removeListener('clock', clocked);

emitter.emit('clock');

emitter.removeAllListeners('clock');

console.log(emitter);
