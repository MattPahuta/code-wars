// *** Square Every Digit
// *** 7 kyu
/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

function squareDigits(num) {
  // ** submitted solution
  // use String to make the num a string, split into array of digits
  // use map to square each digit, join back to one number
  // wrap it all in Number to turn string num to number
  return Number(String(num).split('').map(num => num * num).join(''));

  // ** slightly more readable version of above
  // const squaredDigitArray = String(num).split('').map(Number).map(digit => {
  //   return digit * digit;
  // })
  // return Number(squaredDigitArray.join(''));

 
}