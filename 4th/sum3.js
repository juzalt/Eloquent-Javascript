let array = [];

//this function grabs two numbers and hopping through them as indicated by "step", returns all the numbers landed upon.
function range(start, end, step){
if (step > 0){
  for (start; start <= end; start += step){
    array.push(start);
  }

} else if (step < 0) {

  for (start; start >= end; start += step){
    array.push(start);
  }
  return array;
}}

console.log(range(5, 2, -1));

//this function sums all the numbers in the array
function sum(array){
  let finalSum = 0;
  for (let number of array){
    finalSum += number;
  }
  return finalSum;
}

console.log(sum(range(1, 10)));
