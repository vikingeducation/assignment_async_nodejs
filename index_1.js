 "use strict";

const p = new Promise.resolve("Hello Promise!");

let p1 = function () {
  p.then((msg) => setTimeout(() => console.log(msg), 1000));
};
p1();
