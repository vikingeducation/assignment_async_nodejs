"use strict";

const fs = require("fs");

fs.open("./data/lorem.txt", 'r', (err, fd) => {
  if (err) {
    throw err;
  } else {
    return fs.readFile(fd);
  }
});
