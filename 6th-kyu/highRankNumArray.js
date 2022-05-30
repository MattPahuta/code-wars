// *** Highest Rank Number in an Array - 6 kyu
/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

function highestRank(arr) {
  // accept an array of numbers
  // loop through array to find numbers that occur more than once
  // count the total number of each duplicate
  // return the duplicate number with the highst count occurrance within the array
  // ** with Set, map, filter, sort and a ternary
  // const uniqueNums = [...new Set(arr)];
  // const numCounts = uniqueNums.map(value => [value, arr.filter(num => num === value).length])
  // const highRankSort = numCounts.sort((a,b) => b[1] - a[1])
  // return highRankSort[0][1] > highRankSort[1][1] ? highRankSort[0][0] : Math.max(...arr);

  // a better way with sort and filter
  return arr.sort((a,b) => arr.filter(i => i === b).length - arr.filter(i => i === a).length)[0]

}