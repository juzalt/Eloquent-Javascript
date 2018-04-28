//Expect this program to grab two numbers and return the range between those numbers and including those numbers.
function range(start, end){
  let array = [];
  for (start; start <= end; start++){
    array.push(start);
  }
  return array;
}

console.log(range(1, 10));
