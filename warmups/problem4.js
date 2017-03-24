// Problem 4:
function doBadThing(forRealz){
  if(forRealz){
    return Promise.reject("Nope");
  }
  else{
    return Promise.resolve("Yay!");
  }
}

function resolved(result){
  console.log(result);
}

function rejected(err){
  console.error(err);
}

function resolved2(result){
  console.log(result);
  throw "Intentional error thrown";
}

console.log("CASE 1: USING THEN only");
doBadThing(true).then(resolved, rejected);
doBadThing(false).then(resolved, rejected);

console.log("CASE 2: USING THEN and CATCH");
doBadThing(true).then(resolved).catch(rejected);
doBadThing(false).then(resolved).catch(rejected);

console.log("CASE 3: USING THEN with throw in resolve, and CATCH");
doBadThing(true).then(resolved2).catch(rejected);
doBadThing(false).then(resolved2).catch(rejected);

// Observation: Correct output in Case 1. Incorrect output in Case 2 and 3.
