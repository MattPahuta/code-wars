// *** Convert an array of strings to array of numbers - 7 kyu
/*
Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.
*/
function toNumberArray(stringArr) {
  // ** use map to iterate over stringArr, running Number on each element, returning a new array:
  return stringArr.map(Number);

  // using a for loop with unary (+) operator to convert the strings to numbers:
  // let result = [];
  // for (let i = 0; i < stringArr.length; i++) {
  //   result.push(+stringArr[i]);
  // }
  // return result;
}