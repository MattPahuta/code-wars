// *** Count characters in your string - 6 kyu
/*

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

examples: 
countChars('aba') => {a: 2, b: 1}
*/
function countChars(str) {

  // with split and reduce
  return str.split('').reduce((counts, char) => {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {})


  // with split, forEach, and ternary
  let countsObj = {}
  str.split('').forEach((char) => {
    countsObj[char] ? countsObj[char] += 1 : countsObj[char] = 1
  });
  return countsObj;


  // with for...of loop and ternary
  const result = {}
  for (const char of str) {
    (!result[char]) ? result[char] = 1 : result[char] = result[char] + 1;
    }
  return result;

}