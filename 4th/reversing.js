originalArray = [1, 2, 3, 4, 5];

//this function creates a new array that is the reverse of originalArray
function reverseArray(argArray){
  newArray = [];
  for (let placeHolder of argArray){
    newArray.unshift(placeHolder);
  }
  return newArray;
}

console.log(reverseArray(originalArray));

//this one just reverses originalArray
function reverseArray(argArray){
  newArray = [];
  for (let placeHolder of argArray){
    newArray.unshift(placeHolder);
  }
  originalArray = newArray;
  return originalArray;
}

console.log(reverseArray(originalArray));
