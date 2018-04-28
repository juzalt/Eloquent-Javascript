let array = [];

//this function grabs two numbers and returns the range of numbers between those numbers (including them).
function range(start, end){
  for (start; start <= end; start++){
    array.push(start);
  }
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

console.log(sum(range(1, 10)));
