// *** Array element parity - 7 kyu
/*
In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:

[1, -1, 2, -2, 3] => 3
3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4
-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3
(the only-positive or only-negative integer may appear more than once)
*/
function integerArrParity(arr) {
  // ** first, remove any duplicates from the arr - here, spreading the arr with Set
  // use reduce to add all integers in the noDups array
  // note: the negative/positive pairs cancel eachother out, resulting in the unique integer
  return [...new Set(arr)].reduce((a,b) => a + b, 0)

  // using find and includes
  // return arr.find(val => !arr.includes(-val));
}