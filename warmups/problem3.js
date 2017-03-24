// Problem 3:
function squaredNum (inputNum){
  if(isNaN(inputNum)){
    return Promise.reject("Invalid input");
  }
  else{
    return Promise.resolve(inputNum * inputNum);
  }
}

function outputNum(result){
  console.log(result);
}

function outputError(err){
  console.error(err);
}

var myArray = [1,2,3,4,5,6,7,8,9];

myArray = myArray.map(function(i){
  return squaredNum(i);
});

Promise.all(myArray).then(outputNum, outputError);

//squaredNum(5).then(outputNum, outputError);
//squaredNum("blabla").then(outputNum, outputError);
