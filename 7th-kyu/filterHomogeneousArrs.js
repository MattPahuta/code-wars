// *** Homogeneous arrays - 7 kyu
/*
Given a two-dimensional array, return a new array which carries over only those arrays from the original, which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays inside the array will only contain characters and integers.

Example:
Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function should return [[1, 5, 4], ['b']].

Addendum:

- Please keep in mind that for this kata, we assume that empty arrays are not homogenous.
- The resultant arrays should be in the order they were originally in and should not have its values changed.
- No implicit type casting is allowed. A subarray [1, '2'] would be considered illegal and should be filtered out.

arr.every(callbackFunc)
*/
function filterHomogeneous(arrays) {

  // with filter, every, and typeof
  return arrays
    .filter(subArr => subArr.length > 0 && subArr.every(el => typeof el === typeof subArr[0]));

  // alternative, with explicit checks for strings/numbers
  // return arrays.filter(arr => {
  //   if (arr.length && arr.every(el => typeof el === 'number')) return arr
  //   if (arr.length && arr.every(el => typeof el === 'string')) return arr
  // })

}