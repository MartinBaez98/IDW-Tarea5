function BracketCombinations(num) { 
    let factorial = (n) => {
      let k = 1;
      for(var i = n; i >= 1; i--){
        k *= i;
      }
      return k;
    }
    const result = (factorial(2 * num)) / ((factorial(num + 1)) * (factorial(num)));
    return result; 
  }

  console.log(BracketCombinations(6));