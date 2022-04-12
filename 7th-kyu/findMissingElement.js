// *** Find the missing element between two arrays - 7 kyu
/*
Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8

The first array will always have at least one element.
*/
function findMissing(arr1, arr2) {
  // accept two arrays
  // second array is dup of first with 1 element missing
  // return the missing element from arr 2
  // ** using sort and a for loop
  arr1 = arr1.sort((a,b) => a - b);
  arr2 = arr2.sort((a,b) => a - b);
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return arr1[i];
    }
  }

  // with reduce - comparing the difference in sum between the two arrays
  return arr1.reduce((pre, val) => pre + val) - arr2.reduce((pre, val) => pre + val, 0);

  
}