// *** String array duplicates - 6 kyu
/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:
dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.
*/
function dupStringsArr(arr) {
  // accept an array of strings
  // split each string into an array of letters 
  // loop over letters and remove consecutive duplicates (slice)
  // join letter array back to string 
  // return array of strings
  
  // with map, split, filter, and join
  return arr.map(word => word.split('').filter((letter, index) => letter !== word[index + 1]).join(''))

  // with map and filter
  return arr.map(x => {
    return x.split('').filter((char, i, arr) => {
      return char !== arr[i - 1];
    }).join('');
  })


  // using map and for loops
  const strArrays = arr.map(str => {
    return str.split('')
  })
  const newOuter= []
  for (let i = 0; i < strArrays.length; i++) {
    const newInner = []
    for (let j = 0; j < strArrays[i].length; j++) {
      if (strArrays[i][j] !== strArrays[i][j + 1]) {
        newInner.push(strArrays[i][j])
      }
    }
    newOuter.push(newInner)
  }

  return newOuter.map(arr => arr.join(''));


}