
/*
  cd Documents/Viking/Node/async
*/

const fs = require('fs');

fs.readFile('dummy.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('I read "' + data + '"');
});

fs.writeFile('dummy.txt', 'test', 'utf8', (err) => {
  if (err) throw err;
  console.log('file overwritten');
});

fs.appendFile('dummy.txt', 'example', 'utf8', (err) => {
  if (err) throw err;
  console.log('data appended');
});



























// spacing
