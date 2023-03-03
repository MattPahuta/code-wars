// *** Double Sort - 7 kyu
/*
Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

Note that numbers written as strings are strings and must be sorted with the other strings.

Examples:
dbSort([6, 2, 3, 4, 5]) => [2, 3, 4, 5, 6])
dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]) => [0,2,2,"Apple","Banana","Mango","Orange"])
*/
function dbSort(arr) {

  // iterate over array and check for type
  const nums = arr.filter(el => typeof el === 'number').sort((a,b) => a - b);
  const strings = arr.filter(el => typeof el === 'string').sort();
  return [...nums, ...strings];
  // or
  return nums.concat(strings);
  
  }