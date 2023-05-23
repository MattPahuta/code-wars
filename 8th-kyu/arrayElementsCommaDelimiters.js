// *** Printing Array elements with Comma delimiters - 8 kyu
/*
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"
*/
function printArray(array) {

  // simply use the join method (no separator defaults to ',')
  return array.join();

  // or, convert to a string 
  // return array.toString()
}