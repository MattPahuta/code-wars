// *** Find the Duplicated Number in consecutive unsorted list - 7 kyu
/*
You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

The array is unsorted.

An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

You should return the duplicate value as a single integer.
*/
function findDup(arr) {
  // using filter and indexOf (submitted)
  return arr.filter((num, i, arr) => { // compare index of nums with index first time it occurs
    return arr.indexOf(num) !== i; // if index does not match, means it's a dup
  })[0] // return the single dup (can be expanded to return array with multiple dups)


  // with sort method and a for loop
  // arr.sort() // must sort arr first
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === arr[i + 1]) {
  //     return arr[i];
  //   }
  // }

  // with find, indexOf, and lastIndexOf
  // return arr.find(num => arr.indexOf(num) !== arr.lastIndexOf(num));
}