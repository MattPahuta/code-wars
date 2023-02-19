// *** Reverse words - 7 kyu
/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/
function reverseWords(str) {
  // split the str into an array of strings
  // map over the array of strings
  // split each letter into an array, reverse it, then join back into a string
  // join the array of reversed strings back into a single string

  // with a for loop and conditional
  let reversedWord = '';
  let reversedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') { // if str[i] isn't a space
      reversedWord = str[i] + reversedWord;
    } else {
      reversedStr += reversedWord + ' '; // build the string of reversed words
      reversedWord = ''; // reset reversedWord to empty string
    }
  }
  return reversedStr + reversedWord; // return the reversed str with the last reversed word

  // with split, map, reverse, and join (twice)
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}
