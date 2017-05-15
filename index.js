const FSP = require('./lib/fsp');

FSP.readFile('package.json', 'utf8')
  .then(console.log).catch(console.log);
FSP.writeFile('data/test.txt', 'This is a test', 'utf8')
  .then(doAppend).catch(console.log);

function doAppend(result) {
  console.log(result);
  FSP.appendFile('data/test.txt', 'This is also a test', 'utf8')
    .then(console.log).catch(console.log);
}
