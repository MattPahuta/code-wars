// *** Sorting the Odd way! - 7 kyu
/*
Given an array of numbers, sort them in such a manner that all the odd numbers in the array are sorted in ascending order and the even numbers are sorted in descending order after the last odd number. 
Example:
[1,2,3,4,5,6,7,8,9] => [1,3,5,7,9,8,6,4,2]. 
More Tests:
sortItOut([ 11,22,33,44,55,55,90.4,4,78 ]) => [ 11,33,55,55,90.4,78,44,22,4 ]
sortItOut([ 68,25,99,50,10,67,2,5,8,34,67 ]) => [ 5,25,67,67,99,68,50,34,10,8,2 ]
sortItOut([ 1.1, 2.2, 3.3, 4.4, 5.5, 6.6 ]) => [ 1.1, 3.3, 5.5, 6.6, 4.4, 2.2 ]
- If the array contains decimals, round them down while checking for odd/even. 
- The output must have the original numbers!
*/
function sortItOut(array) {
  // ** using filter, Math.floor, sort, and spread (submitted)
  const odds = array.filter(num => Math.floor(num) % 2 !== 0).sort((a,b) => a - b);
  const evens = array.filter(num => Math.floor(num) % 2 === 0).sort((a,b) => b - a);
  return [...odds, ...evens];

  // slightly more concise with concat:
  // return array.filter(num => Math.floor(num) % 2 !== 0).sort((a,b) => a - b)
  // .concat(array.filter(num => Math.floor(num) % 2 === 0).sort((a,b) => b - a))

  // run checks with for...of loops
  // const oddNums = [];
  // for (let num of array) {
  //   if (Math.floor(num) % 2 !== 0) {
  //     oddNums.push(num)
  //   }
  // }

  // const evenNums = [];
  // for (let num of array) {
  //   if (Math.floor(num) % 2 === 0) {
  //     evenNums.push(num)
  //   }
  // }

}