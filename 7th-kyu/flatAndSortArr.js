// *** Flatten and sort an array - 7 kyu
/*
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/
function flattenAndSort(array) {
  // with for loop and sort
  // const newArr = [];
  // for (let i = 0; i < array.length; i++) {
  //   newArr.push(...array[i]);
  // }
  // return newArr.sort((a,b) => a - b);

  // with concat and sort
  return [].concat(...array).sort((a,b) => a - b);

}