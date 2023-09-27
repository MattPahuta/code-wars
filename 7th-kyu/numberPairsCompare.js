// *** Number Pairs - 7 kyu 
/*
In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.

Note: Both arrays have the same dimensions.

Example:

let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]
*/
let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
function getLargerNumbers(a, b) {
  // return a new array
  // compare each el of corresponding array, return larger integer 
  // const result = [];
  // a.forEach((num, i) => {
  //   num > b[i] ? result.push(num) : result.push(b[i])
  // })
  // return result;

  // using map() and ternary
  // return a.map((num, i) => {
  //   return num > b[i] ? num : b[i]
  // })

  // using map with Math.max
  return a.map((num, i) => Math.max(num, b[i]));
}