function BracketMatcher(str) {
    let pAbre = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') pAbre++;
      if (str[i] === ')') pAbre--;
      if (pAbre < 0) return 0;
    }
  
    return pAbre ? 0 : 1;
}     
console.log(BracketMatcher("()"));