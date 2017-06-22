"use strict";


var doBadThings = function(forRealz){
  return new Promise(function(resolve, reject) {
    if (!forRealz) {
      resolve("Yay!");
    } else {
      reject('error')
    }
  });
};
doBadThings(true)
  .then(result => console.log(result)
  ,(err) => console.error(err)
  )
  .catch((err) => {
    console.log('here');
    console.error("catch: ", err)

  });

doBadThings(false)
  .then(result => console.log(result)
  ,(err) => console.error(err)
  )
  .catch((err) => {
    console.log('here');
    console.error("catch: ", err)

  });
