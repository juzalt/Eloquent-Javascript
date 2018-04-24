function countChar(string, char){
  let amountChar = 0;
  for (loopCount = 0; loopCount < string.length; loopCount++){
    if (string[loopCount] == char){
      amountChar++;
    }
  }
  return amountChar;
}

console.log(countChar("kakkerlak", "k"));
// → 4
