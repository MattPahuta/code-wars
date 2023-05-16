// *** Divide and Conquer - 7 kyu
/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

Correction for poor instructions (based on test case results): Total of string integers should be subtracted from number integers

Return as a number.
Examples:
[9, 3, '7', '3'] => 2
(12 - '10' = 2)
['5', '0', 9, 3, 2, 1, '9', 6, 7] => 14
(28 - '14' = 14)
*/
function divCon(x) {
  // ** With filter, typeof, map, and reduce
  // total string integers, convert to a number total
  // total the number integers 
  // subtract string total from num total
  // return value as number
  // const stringSum = x.filter(num => typeof num === 'string').map(Number).reduce((a,b) => a + b, 0);
  // const numSum = x.filter(num => typeof num === 'number').reduce((a,b) => a + b, 0);
  // return numSum - stringSum;

  // ** Streamlined with reduce, typeof, Number, and ternary
  return x.reduce((acc, cur) => typeof cur === 'number' ? acc + cur : acc - Number(cur), 0);


}
