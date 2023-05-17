// *** Even numbers in an array - 7 kyu
/*
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will not be empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/
function evenNumbers(array, number) {
  // ** use filter to get the even nums, then slice (number) of elements from the end of array
  return array.filter(num => num % 2 === 0).slice(-number);

  // ** using a for loop with push and splice array methods:
  // const evens = [];
  // for (let i = 0; i <= array.length; i++) {
  //   if (array[i] % 2 === 0) { // get the even numbers only
  //     evens.push(array[i]);
  //   }
  // }
  // console.log(evens)
  // // start at the length of evens -(number), delete (number)
  // return evens.splice(evens.length -number, number); // return spliced elements
}