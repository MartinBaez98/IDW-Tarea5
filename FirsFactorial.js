function FirstFactorial(num) {
    var factorial = 1;
    for (var i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }     
console.log(FirstFactorial(6));