//if both arguments are the same value or are objects with the same properties, then this function will return true
function deepEqual(first, second){
  //if both return object and are not null
  if (typeof first == typeof second && first != null && second != null) {
    //deep comparison
    if (first == second) {
      return true;
    } else {
      return false;
      //direct comparison
    } if (first === second) {
      return true;
    } else {return false;}
  }
}

let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
