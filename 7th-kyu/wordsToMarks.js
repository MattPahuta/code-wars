// *** Love vs Friendship - 7 kyu
/*
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54
and f + r + i + e + n + d + s + h + i + p = 108


Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.
*/
function wordsToMarks(str) {


  // with split, reduce, and charCodeAt
  // return str.split('').reduce((acc, char) => {
  //   return acc + char.charCodeAt() - 96
  // }, 0)


  // with an key string, for...of loop, and indexOf
  const alphaKey = 'abcdefghijklmnopqrstuvwxyz';
  let sum = 0;

  for (let char of str) {
    sum += alphaKey.indexOf(char) + 1;
  }

  return sum;

}