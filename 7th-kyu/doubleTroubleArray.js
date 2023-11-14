// *** Double Trouble - 7 kyu
/*
Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.

Example:
x = [1, 2, 3, 4, 5]
t = 3

1+2 = t, so remove 2. No other pairs = t, so rest of array remains:
[1, 3, 4, 5]

Work through the array from left to right.

Return the resulting array.
*/

function trouble(arr, t) {
  // with slice, for...of loop, push
  const result = [arr[0]]; // start result array with first el of arr

  for (let num of arr.slice(1)) { // start looping from second el of arr
    if (result[result.length - 1] + num !== t) { // use result.at(-1)?
      result.push(num)
    }
  }
  return result;

  // with reduce
  return arr.reduce((preVal, currVal) => currVal + preVal.at(-1) !== t ? [...preVal, currVal] : preVal, []);

  // with for loop and splice
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] + arr[i + 1] === t) {
      arr.splice(i + 1, 1);
      i--;
    }
    console.log('i: ', i)
  }
  return arr;

}