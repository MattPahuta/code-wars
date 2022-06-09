// *** Sort by Last Char - 7 kyu
/*
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

All inputs will be valid.

Examples:
sortByLastChar('man i need a taxi up to ubud') => ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']

sortByLastChar('what time are we climbing up the volcano') => ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']


*/
function sortByLastChar(str) {  
  // ** using split, sort, and charCodeAt (submitted)
  // split str into an array
  // sort array with charCodeAt, targetign last char of each string
  return str.split(' ').sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length -1));

  // using split, sort, and slice with localeCompare
  // return str.split(' ').sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)))
}