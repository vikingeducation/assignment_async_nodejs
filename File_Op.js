var fs = require('fs');
var lorem = './data/lorem.txt';
var test = './data/test.txt';
var fsp = require('./fsp');

fsp.readFile(lorem)
.then(function(data) {
  console.log(data);
})
.catch(function(err) {
  console.error(err);
});

fsp.writeFile(test, "Hello!")
.then(function(res) {
  console.log(res);
})
.catch(function(err) {
  console.error(err);
});

fsp.appendFile(test, "Hello again!")
.then(function(res) {
  console.log(res);
})
.catch(function(err) {
  console.error(err);
});
