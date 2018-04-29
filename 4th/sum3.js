let array = [];

//this function grabs two numbers and hopping through them as indicated by "step", returns all the numbers landed upon.
//If step is set to nothing, then step == 1.
function range(start, end, step = 1){
  if (step > 0){
    for (start; start <= end; start += step){
      array.push(start);
    }
  } else if (step < 0) {
    for (start; start >= end; start += step){
      array.push(start);
    }}
    return array;
}

//this function sums all the numbers in the array
function sum(array){
  let finalSum = 0;
  for (let number of array){
    finalSum += number;
  }
  return finalSum;
}

console.log(sum(range(9, 2, -5)));
//-->13
