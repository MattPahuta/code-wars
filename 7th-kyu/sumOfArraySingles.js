// *** Sum of array singles - 7 kyu
/*
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.
*/
function sumArraySingles(arr) {
  // get unique elements from array
  // return sum of unique nums

  // with filter, indexOf, lastIndexOf, and reduce
  return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num))
    .reduce((a,b) => a + b, 0);
}