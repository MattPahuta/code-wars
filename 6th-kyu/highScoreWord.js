// *** Highest Scoring Word - 6 kyu
/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid

Examples:
highScoreWord('take me to semynak') => 'semynak'
highScoreWord('what time are we climbing up the volcano') => 'volcano'
highScoreWord('aaa b') => 'aaa'
*/
function highScoreWord(str) {
  // accept a string of words
  // split string into array of words
  // assign scores to each word based on letter position in alphabet
  // if tie, return first word in string

  // using split, map, reduce, charCodeAt, indexOf, Math.max
  // build score array - charCodeAt(index) - 96 equals proper value
  const newStrArr = str.split(' ')
  const newScoreArr = newStrArr.map(s => [...s].reduce((a,b) => a + b.charCodeAt(0) - 96, 0))
  return newStrArr[newScoreArr.indexOf(Math.max(...newScoreArr))];


  // *** using an object score key, split, map, indexOf, and Math.max (submitted)
  const aplhaKey = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26}
  const strArr = str.split(' ') // split into array of words

  const scoreArray = strArr.map(word => { // build array of scores corresponding to each word in strArr
    let score = 0;
    word.split('').map(letter => {
      score += aplhaKey[letter]; // get scores from alphKey object;
    })
    return score;
  })
  // get the index of the high score word (first word if tied)
  return strArr[scoreArray.indexOf(Math.max(...scoreArray))]
}