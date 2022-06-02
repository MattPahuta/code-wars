// *** Tidy Number - 7 kyu
/*
Definition
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not .

Notes
- Number passed is always Positive .
- Return the result as a Boolean

Input >> Output Examples
tidyNumber (12) ==> return (true)
Explanation:
The number's digits [ 1 , 2 ] are in non-Decreasing Order (i.e) 1 <= 2 .

tidyNumber (32) ==> return (false)
Explanation:
The Number's Digits [ 3, 2] are not in non-Decreasing Order (i.e) 3 > 2 .

tidyNumber (1024) ==> return (false)
Explanation:
The Number's Digits [1 , 0, 2, 4] are not in non-Decreasing Order as 0 <= 1 .

tidyNumber (13579) ==> return (true)
Explanation:
The number's digits [1 , 3, 5, 7, 9] are in non-Decreasing Order .

tidyNumber (2335) ==> return (true)
Explanation:
The number's digits [2 , 3, 3, 5] are in non-Decreasing Order , Note 3 <= 3
*/
function tidyNumber(n) {

  // ** using String, split, map, sort, and every (submitted)
  // make the number an array of digits
  const numArr = String(n).split('').map(Number);
  // make the number an array of digits, sorted low to high
  const sortedNumArr = String(n).split('').map(Number).sort((a,b) => a - b);
  // use every method to compare nums within each array
  return numArr.every((num, index) => num === sortedNumArr[index]); // returns true/false

  // A more concise method, similar to above
  // make n a string, split to array, sort, join back to string
  // compare to n using loose equality check
  return String(n).split('').sort().join('') == n;

  // using a for loop to compare values
  // let s = n.toString();
  // for (let i = 0; i < s.length-1; i++) {
  //   if (s[i] > s[i+1]) return false;
  // }
  // return true;
}