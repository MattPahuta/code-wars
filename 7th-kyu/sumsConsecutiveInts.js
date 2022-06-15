// *** Sums of consecutive integers - 7 kyu
/*
The sum of x consecutive integers is y. What is the consecutive integer at position n? Given x, y, and n, solve for the integer. Assume the starting position is 0.

For example, if the sum of 4 consecutive integers is 14, what is the consecutive integer at position 3?

We find that the consecutive integers are [2, 3, 4, 5], so the integer at position 3 is 5.

// Javascript
position(4, 14, 3) => 5
*/

function position(x, y, n) {
  // find the 'x' number of consecutive integers that total 'y'
  // create an array of the 'x' number of integers
  // return the integer at position 'n'
  return Math.ceil(y/x) - Math.floor(x / 2) + n;

  return y / x - (x - 1) / 2 + n;

}