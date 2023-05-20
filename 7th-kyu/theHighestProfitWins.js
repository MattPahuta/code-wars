// *** The highest profit wins! - 7 kyu
/*
Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
*/

function minMax(arr) {
  // ** simply use Math.min/max, spreading the arr as the argument, return the new array in place
  // return [Math.min(...arr), Math.max(...arr)];

  // ** A solution with a for loop and conditionals
  let max = arr[0], min = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i]; 
  }
  return [min,max];
}