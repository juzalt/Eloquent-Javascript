function isEven(a) {
  if (a % 2 == 0) {
    return true
  } else if (a % 2 != 0) {
    return false
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
