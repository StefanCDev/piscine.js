




// Initialize function to test if a number is even
function multiply(a, b) {
    let result = 0;
    for (let i = 0; i < Math.abs(b); i++) {
      result += Math.abs(a);
    }
    return (a < 0 && b < 0) || (a > 0 && b > 0) ? result : -result;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return NaN;
    }
    let count = 0;
    let absA = Math.abs(a);
    let absB = Math.abs(b);
    while (absA >= absB) {
      absA -= absB;
      count++;
    }
    return (a < 0 && b < 0) || (a > 0 && b > 0) ? count : -count;
  }
  
  function modulo(a, b) {
    if (b === 0) {
      return NaN;
    }
    let absA = Math.abs(a);
    let absB = Math.abs(b);
    while (absA >= absB) {
      absA -= absB;
    }
    return a < 0 ? -absA : absA;
  }
  

  // just a shorter way to do this would be this 
// const multiply = (a, b) => ((a < 0) !== (b < 0) ? -1 : 1) * Array(Math.abs(b)).fill(Math.abs(a)).reduce((acc, val) => acc + val, 0);

// const divide = (a, b) => b === 0 ? NaN : ((a < 0) !== (b < 0) ? -1 : 1) * Array(Math.abs(a)).fill(Math.abs(b)).reduce((acc, val) => (acc >= val ? acc - val : acc), 0);

// const modulo = (a, b) => b === 0 ? NaN : ((a < 0) && (b > 0) || (a > 0) && (b < 0) ? -1 : 1) * (Math.abs(a) % Math.abs(b));
