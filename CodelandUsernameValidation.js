function CodelandUsernameValidation(str) {   
    const validE = /^[A-Za-z]\w+[A-Za-z0-9]$/;
    const validT = (str) => str.length >= 4 && str.length <= 25;
    return validE.test(str) && validT(str);
  }

console.log(CodelandUsernameValidation("bersercker98"));