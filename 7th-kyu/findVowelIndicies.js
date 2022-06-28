// *** Find the vowels -  7 kyu
/*
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]

NOTES
- Vowels in this context refers to: a e i o u y (including upper case)
- This is indexed from [1..n] (not zero indexed!)
*/
function vowelIndices(word) {

  // ** with split, forEach, and indexOf (submitted after refactor)
  const vowels = 'aeiouy';
  const strArr = word.toLowerCase().split('');
  let result = [];
  strArr.forEach((letter, index) => {
    if (vowels.indexOf(letter) !== -1) { // check if the letter is within vowels
      result.push(index + 1);
    }
  });
  return result;


  // a long, drawn out mess on little sleep...
  // const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  // const wordArr = word.toLowerCase().split('');
  // const result = [];
  // const booArr = wordArr.map(letter => {
  //   return vowels.includes(letter)
  // })
  // for (let i = 0; i < booArr.length; i++) {
  //   if (booArr[i] === true) {
  //     result.push(i + 1)
  //   }
  // }
  // return result;

}