// *** Sort odd and even numbers in different order - 6 kyu 
/*
You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.

Note that zero is an even number. If you have an empty array, you need to return it.

For example:

[5, 3, 2, 8, 1, 4]  -->  [1, 3, 8, 4, 5, 2]

odd numbers ascending:   [1, 3,       5   ]
even numbers descending: [      8, 4,    2]

Examples:
sortArray([2, 22, 37, 11, 4, 1, 5, 0]) => [22, 4, 1, 5, 2, 11, 37, 0]
*/
function sortArray2(array) {
  // take an array of odd and even nums
  // sort odds in ascending order
  // sort evens in descending order 
  // maintain index placement of odd/even indexes 
  const odds = array.filter(num => num % 2 !== 0).sort((a,b) => a - b);
  const evens = array.filter(num => num % 2 === 0).sort((a,b) => b - a);
  return array.map((num) => num % 2 ? odds.shift() : evens.shift()) // does num % 2 resolve to > 0 ?
}