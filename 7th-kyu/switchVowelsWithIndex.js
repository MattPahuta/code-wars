// *** The old switcheroo - 7 kyu
/*
Write a function

vowel2index(str)
that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
E.g:

vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''

Your function should be case insensitive to the vowels.
*/
function vowel2index(str) {
  const vowels = ['a','e','i','o','u'];

  const strArr = str.split('')
  // const resultArr = [];
  // with map, includes, join
  return strArr.map((el, i) => {
    return vowels.includes(el.toLowerCase()) ? i + 1 : el;
  }).join('')

  // longer, with forEach, includes, join, push
  strArr.forEach((el, i) => {
    if (vowels.includes(el.toLowerCase())) {
      resultArr.push(i + 1)
    } else {
      resultArr.push(el)
    }
  })
  return resultArr.join('')


}