// *** Factorial - 7 kyu
/*
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).
*/
function factorial(n) {
  // ** Using if/else conditional with a recusive function call
  // if (n < 0 || n > 12) {
  //   throw new RangeError("The argument must be between 0 and 12")
  // } else if (n === 0) {
  //     return 1;
  // } else {
  //     return n * factorial(n-1);
  //   }

    // ** using a ternary and recursive call (submitted)
    return n <= 1 ? 1 : n * factorial(n - 1);

    // with a while loop
    // let result = 1;
    // while (n > 0) {
    //   result *= n;
    //   n--;
    // }
    // return result;
  
    // with a for loop:
    // let sum = 1;
    // for (let i = 1; i <= n; i++) {
    //   sum *= 1;
    // }
    // return sum;

  // ** using a ternary with the recursive call
  if (n < 0 || n > 12) {
    throw new RangeError("The argument must be between 0 and 12");
  }
  return n <= 1 ? 1 : n * factorial(n - 1)

  // ** using a While loop
  // let result = n;
  // if (n === 0 || n === 1) 
  //   return 1; 
  // while (n > 1) { 
  //   n--;
  //   result *= n;
  // }
  // return result;

}