// *** Sum even numbers - 7 kyu
/*
Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.

The input is a sequence of numbers: integers and/or floats.

Examples
[4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
[]                               -->  0
*/
function sumEvenNumbers(nums) {
  // with filter and reduce
  return nums
    .filter(num => num % 2 === 0)
    .reduce((acc, currVal) => acc + currVal, 0)

  // and older method using a for loop with a ternay
  // let sum = 0;
  // for (let i = 0; i < nums.length; i += 1) {
  //   nums[i] % 2 === 0 ? sum += nums[i] : 0;
  // }
  // return sum;

}