// *** Factorial - 7 kyu
/* Write a factorial function */
function factorial(n) {
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
}