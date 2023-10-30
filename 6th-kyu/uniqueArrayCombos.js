// *** Array combinations - 6 kyu
/*
In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.
*/
function uniqueArrays(arr) {
  // accept array of arrays
  // map over parent array to eliminate dups within sub-arrays
  // reduce parent array by sub-array length to get total combinations

  // concise version of below code
  return arr.map((arr) => [...new Set(arr)].length)
    .reduce((product, value) => product * value);


  const noDupsLengths = arr.map(subArr => [...new Set(subArr)])
    .map(arr => arr.length);

  return noDupsLengths.reduce((product, value) => product * value);

}