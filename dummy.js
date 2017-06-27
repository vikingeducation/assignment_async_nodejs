const fs = require("fs");
/*
fs.readFile('./data/lorem.txt', "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
*/
fs.writeFile('./data/secretmessage.txt', "Here is a list of the people I've MURDERED in INNOCENT BLOOD:", (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

fs.appendFile('./data/secretmessage.txt', 'N/A', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});