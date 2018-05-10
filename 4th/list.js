function arrayToList(array){
  var list = null;
  for (i = array.length - 1; i >= 0; i--){
    list = {
      value: array[i],
      rest: list
    };
  }
  return list;
}

//I'm going to keep on going with the other exercises and come back to this one when I have a better understanding of js.
function listToArray(list){
  var array = [];

  }
  return array;
}

console.log(listToArray({value: 10, rest: {value: 20, rest: null}}));

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
