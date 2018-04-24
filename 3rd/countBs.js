function countBs(string){
  let amountBs = 0;
  for (loopCount = 0; loopCount < string.length; loopCount++){
    if (string[loopCount] == "B"){
      amountBs++;
    }
  }
  return amountBs;
}

console.log(countBs("BBC"));
