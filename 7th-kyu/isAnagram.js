// *** Anagram Detection - 7 kyu
/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples:
isAnagram("foefet", "toffee") => true
isAnagram("Buckethead", "DeathCubeK") => true
isAnagram("dumble", "bumble") => false

isAnagram("fpZEamiYjzWkIje", "IiapYjmfWEZekzp")

*/
function isAnagram(test, original) {
  // with split, sort, and join
  test = test.toLowerCase().split('').sort().join('')
  original = original.toLowerCase().split('').sort().join('')

  return test === original;

}