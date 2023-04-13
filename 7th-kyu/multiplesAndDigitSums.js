// *** Multiples and Digit Sums - 7 kyu
/*
In this exercise, you will create a function that takes an integer, i. With it you must do the following:
- Find all of its multiples up to and including 100,
- Then take the digit sum of each multiple (eg. 45 -> 4 + 5 = 9),
- And finally, get the total sum of each new digit sum.

Note: If the digit sum of a number is more than 9 (eg. 99 -> 9 + 9 = 18) then you do NOT have to break it down further until it reaches one digit.

Example (if n is 25):

Multiples of 25 up to 100 --> [25, 50, 75, 100]
Digit sum of each multiple --> [7, 5, 12, 1]

Sum of each new digit sum --> 25
*/

function multiplesAndSums7kyu(n) {
  let multiples = [];
  // ** with for loop, join, split, and reduce
  // get multiples up to and including 100 
  for (let i = n; i <= 100; i += n) {
    multiples.push(i)
  }
  return multiples.join('').split('').reduce((acc, curr) => +acc + +curr);

  // ** with for loop, map, reduce
  // sum up digits for each multiple
  return multiples.map(num => {
    return String(num).split('')
      .map(Number)
      .reduce((a,b) => a + b)
  // total the sum of each new digit
  }).reduce((a,b) => a + b)

}
