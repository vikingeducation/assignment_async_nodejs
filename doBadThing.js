doBadThing = (forRealz) => {
  return new Promise((resolve, reject) => {
    if (!forRealz) {
      resolve("Yay!");
    }
    reject("You will not do bad thing");
  });
};

// experiment throwing an error in the resolve handler

doBadThing(false)
  .then((result) => {
    console.log("--------- Experiment 1 --------");
    throw "error";
    console.log(result);
  })
  .catch((err) => {
    console.log("--------- Experiment 1 --------");
    console.log(err);
  })

// now throw error in the resolve handler, using a reject handler, and delay by 
// enough time not to confuse with first experiment
setTimeout(() => {

  return doBadThing(false)
    .then((result) => {
      console.log("--------- Experiment 2 --------");
      throw "error";
      console.log(result);
    },
    (err) => {
      console.log("--------- Experiment 2 --------");
      console.log(err);
    });

}, 2000);






