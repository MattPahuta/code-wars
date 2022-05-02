// *** Duplicate Encoder - 6 kyu
/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
*/

function duplicateEncode(word) {
  // unique chars = "("
  // dup chars = ")"
  // using indexOf and lastIndexOf to check for uniqueness 
  return word.toLowerCase().split('').map((el, i, arr) => {
    return arr.indexOf(el) === arr.lastIndexOf(el) ? "(" : ")"
  }).join('')



  // using split, filter, indexOf, map and includes methods for primary logic
  const strArr = word.toLowerCase().split('')
  // get the duplicate characers:
  const arrOfDups = strArr.filter((char, i, arr) => { // compare index of nums with index first time it occurs
    return arr.indexOf(char) !== i; // if index does not match, means it's a dup
  }) 

  return strArr.map(el => !arrOfDups.includes(el) ? '(' : ')').join('')

}