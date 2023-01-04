// *** Counting Duplicates - 6 kyu
/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/
function duplicateCount(text) {
  // revised solution with filter, indexOf, lastIndexOf
  const textArr = text.toLowerCase().split('');
  return textArr.filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;

  // initial solution
  // const textArr = text.toLowerCase().split('');
  // let counter = {};
  // let resCount = 0;
  
  // for (let char in textArr) {
  //   counter[textArr[char]] = (counter[textArr[char]] + 1) || 1;
  // } for (let el in counter) {
  //     console.log(counter[el]);
  //     if (counter[el] > 1) resCount++;
  //   }
  // return resCount; 


  // using a regex
  // return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}