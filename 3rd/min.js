function min(a, b) {
  if (a > b) {
    return b;
  } else if (a < b) {
    return a;
  }
}

console.log(min(1, 0));
console.log(min(0, -1));
