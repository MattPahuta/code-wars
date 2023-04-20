// *** Merge two arrays (alternate order) - 7 kyu
/*
Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], ['a', 'b', 'c', 'd', 'e', 'f'] becomes [1, a, 2, b, 3, c, d, e, f]
Points:

The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
*/
function mergeArrays(a,b) {

  // using a while loop 
  const returnArr = [];
  let counter = 0;

  while(a[counter] || b[counter]) {
    if (a[counter]) {
      returnArr.push(a[counter]);
    }
    if (b[counter]) {
      returnArr.push(b[counter]);
    }
    counter++
  }
  return returnArr;

  // using a for loop, push, and filter to get rid of undefied vals
  const maxLength = [...a, ...b].length;
  let result = [];

  for (let i = 0; i < maxLength; i++) {
    result.push(a[i]);
    result.push(b[i]);
  }

  return result.filter(val => val !== undefined);


}