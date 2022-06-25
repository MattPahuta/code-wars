// *** Sort the odd - 6 kyu
/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/
function sortArray(array) {
  // take in an array of integers 
  // sort the odd numbers in ascending order array.sort((a,b) => a - b)
  // leave the even numbers in original positions (index) of array

  // get the odds and sort them, save to their own array: 
  const odds = array.filter(num => num % 2 !== 0).sort((a,b) => a - b);
  // // build a placeholder array
  // const placeholderArr = array.map(num => {
  //   return num % 2 !== 0 ? 'odd' : num
  // })
  // // replace placeholders with sorted odds
  // return placeholderArr.map(el => {
  //   return el === 'odd' ? odds.shift() : el;
  // })

  // with map and shift on one line (replacing placeholderArr and subsequent map)
  return array.map((num) => num % 2 ? odds.shift() : num); 

}