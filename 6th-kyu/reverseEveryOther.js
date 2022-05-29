// *** Reverse every other word in the string - 6 kyu
/*
Reverse every other word in a given string, then return the string. 

Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. 

Punctuation marks should be treated as if they are a part of the word in this kata.

Examples: 
("Reverse this string, please!") => "Reverse siht string, !esaelp"
("I really don't like reversing strings!") => "I yllaer don't ekil reversing !sgnirts"
*/
function reverseEveryOther(str) {
  // accept a string of words
  // ensure no whitespace from beginning or end of str
  // reverse every other word, beginning with second word
  // return new string 


  // with map, split, trim, reverse, join (submitted)
  return str.trim().split(' ').map((word, idx) => {
    return (idx % 2 === 0) ? word : word.split('').reverse().join('');
  }).join(' ')

  // with for loop
  const arr = str.trim().split(' ');
  for (let i = 1; i < arr.length; i += 2) {
    arr[i] = arr[i].split('').reverse().join('');
  }
  return arr.join(' ');

  // more drawn out version of for loop...
  const strArr = str.trim().split(' ');
  const newArr = [];
  for (let i =0; i < strArr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(strArr[i])
    } else {
      newArr.push(strArr[i].split('').reverse().join(''))
    }
  }
  return newArr.join(' ')
}