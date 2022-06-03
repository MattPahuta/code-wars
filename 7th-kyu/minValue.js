// *** Form the Minimum - 7 kyu 
/*
Task
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:
- Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

Input >> Output Examples:
minValue ([1, 3, 1])  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue([5, 7, 5, 9, 7])  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue([1, 9, 3, 1, 7, 4, 6, 6, 7]) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications
*/
function minValue(values) {
  // ** using Set to get unique nums, ...new to convert to array
  // sorted, joined, and wrapped in Number to return a number
  // return Number([...new Set(values)].sort((a,b) => a - b).join(''));
 
  // similar, but with Array.from and parseInt
  let uniqueArr = Array.from(new Set(values));
  return parseInt(uniqueArr.sort().join(''));

  // using filter with sort, indexOf, join, and Number
  // const numbers = values
  //   .filter((num, i, arr) => arr.indexOf(num) === i)
  //   .sort()
  //   .join('');

  // return Number(numbers);
}