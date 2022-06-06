// *** Sum of odd cubed numbers - 7 kyu
/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

[1, 2, 3, 4] => 28
[-3,-2,2,3] => 0
["a",12,9,"z",42] => undefined
*/
function cubeOdd(arr) {
  // get odd numbers from array
  // cube each num from resulting array
  // sum all cubed nums and return
  // return 'undefined' if non-integers are present in original arr
  // ** using every, tyepof, filter, map, Math.pow, and reduce (submitted)
  if (arr.every(el => typeof el === 'number')) { // check all arr elements are numbers
    return arr.filter(num => num % 2 !== 0) // filter out the odds
      .map(num => Math.pow(num, 3)) // cube each odd num
      .reduce((a,b) => a + b, 0); // sum the cubed nums with reduce
  }
  // returns undefined if arr.every test returns false
}