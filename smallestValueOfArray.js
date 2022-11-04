// *** Smallest value of an array - 7 kyu
/*
Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0
*/
function min(arr, toReturn) {
  // 'value' | 'index'
  // ** using a ternary to check toReturn value, returing appropriate check
  return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));

  // a traditional if/else conditional version: 
  // if (toReturn === 'value') {
  //   return Math.min(...arr);
  // } else {
  //   return arr.indexOf(Math.min(...arr));
  // }

}