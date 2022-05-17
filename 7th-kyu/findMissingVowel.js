// *** Absent Vowel - 7 kyu
/*
Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
*/
function absentVowel(str) {
  // accept a str of words
  // loop over str and determine which vowel is missing
  // ** with for...of loop, includes, and indexOf (submitted)
  const vowels = 'aeiouy';
  for (let vowel of vowels) {
    if (!str.toLowerCase().includes(vowel)) {
      return vowels.indexOf(vowel)
    }
  }

  // ** more concise, with findIndex and includes
  // return ['a', 'e', 'i', 'o', 'u'].findIndex(letter => !str.includes(letter));

  // ** with split and way too many loops....
  // const vowels = 'aeiouy'.split('');
  // const strVowels = [];
  // const strArr = str.toLowerCase().split('');

  // for (let i = 0; i < strArr.length; i++) {
  //   for (let j = 0; j < vowels.length; j++) {
  //     if (strArr[i] === vowels[j]) {
  //       strVowels.push(vowels[j])
  //     }
  //   }
  // }
  // for (let i = 0; i < vowels.length; i++) {
  //   if (strVowels.indexOf(vowels[i]) === -1) {
  //     return i
  //   }
  // }

}