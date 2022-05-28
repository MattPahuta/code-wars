// *** Halving Sum - 7 kyu
/*
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
        n    n/2 n/4 n/8  n/16
*/
function halvingSum(n) {
  // with a while loop
  // let sum = 0;
  // while (n > 0) {
  //   sum += n;
  //   n = Math.floor(n / 2);
  // }
  // return sum;

  // with recursion
  if (n === 1) return n;
  return n + halvingSum(Math.floor(n / 2));

}