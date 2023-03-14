// *** Sum the Strings - 8 kyu
/*
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
*/
function sumStr(a,b) {
  // with String and Number
  return String(Number(a) + Number(b));

  // with String and unary operator
  // return String(+a + +b);

  // with String and parseInt
  if (a === '') a = 0;
  if (b === '') b = 0;
  return String(parseInt(a) + parseInt(b));
}