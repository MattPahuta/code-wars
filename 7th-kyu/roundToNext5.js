// *** Round up to the next multiple of 5 - 7 kyu
/*
Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:
input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).
You can assume that all inputs are valid integers.
*/
function roundToNext5(n) {
  // ** using Math.ceil (submitted)
  // return Math.ceil(n/5) * 5

  // using a while loop
  // while (n % 5 !== 0) {
  //   n++;
  // }
  // return n;

  // using an conditional and recursive call
  if ( n % 5 === 0) {
    return n;
  }
  return roundToNext5(n + 1); // if n % 5 produces a remainder, keep incrementing n by 1


}
