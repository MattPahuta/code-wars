// *** All unique - 7 kyu
/*
Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
Example outputs:
hasUniqueChars("  nAa") => false (two spaces)
hasUniqueChars("abcdef") => true
hasUniqueChars("aA") => true (case sensitivity)
*/
function hasUniqueChars(str) {
  // ** change string to array of characters
  const strArr = str.split('')
  // create a new object of only unique characters using Set
  const uniqueChars = new Set(strArr)
  // compare size of uniqueChars with length of strArr
  uniqueChars.size === str.length;
  // succinctly:
  return new Set(str).size === str.length;

  // using split, every, and indexOf
  // return str.split('').every((el,i,arr) => {
  //   return arr.indexOf(el) === i;
  // })

  // using split, every, and lastIndexOf string method
  // return str.split('').every((el, i) => i === str.lastIndexOf(el));
}