// *** String Scramble - 7 kyu

/*
Given a string and an array of index numbers, return the characters of the string rearranged to be in the order specified by the accompanying array.

Example:
scramble('abcd', [0,3,1,2]) => 'acdb'

The string that you will be returning back will have: 'a' at index 0, 'b' at index 3, 'c' at index 1, 'd' at index 2, because the order of those characters maps to their corresponding numbers in the index array.

In other words, put the first character in the string at the index described by the first element of the array

You can assume that you will be given a string and array of equal length and both containing valid characters (A-Z, a-z, or 0-9).
*/

function scramble(str, arr) {
  // take in a string and an array of numbers
  // assign the string char to the corresponding array index 
  // rearrange the string based on the assigned array index
  // return rearranged string
  // arr = [0,3,1,2]

  // with forEach and join
  let output = [];
  arr.forEach((charIndex, i) => output[charIndex] = str[i])
  return output.join('')


  // longer (clearer?) solution with map, sort, and a for...of loop
  let result = '';
  const sortedKey = [...str].map((char, index) => ({char, position: arr[index]}))
  .sort((a,b) => a.position - b.position);

  for (let obj of sortedKey) {
    result += obj.char;
  }

  return result;


}