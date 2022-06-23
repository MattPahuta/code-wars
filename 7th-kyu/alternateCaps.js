// *** Alternate capitalization - 7 kyu
/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
*/
function altCapitalize(str) {

  // somewhat streamlined version of below solution
  return [
    [...str].map((c,i) => i % 2 == 0 ? c.toUpperCase() : c).join(''),
    [...str].map((c,i) => i % 2 != 0 ? c.toUpperCase() : c).join('')
  ]

  // with map (submitted)
  const evenCaps = str.split('').map((char, i) => 
    i % 2 === 0 ? char.toUpperCase() : char
  ).join('');

  const oddCaps = str.split('').map((char, i) => 
    i % 2 !== 0 ? char.toUpperCase() : char
  ).join('');

  return [evenCaps, oddCaps]

  // with for loops, push, join, and ternary
  // let evenCaps = [];
  // let oddCaps = [];

  // for (let i = 0; i < str.length; i++) {
  //   (i % 2 === 0) ? evenCaps.push(str[i].toUpperCase()) : evenCaps.push(str[i])
  // }
  // for (let i = 0; i < str.length; i++) {
  //   (i % 2 !== 0) ? oddCaps.push(str[i].toUpperCase()) : oddCaps.push(str[i])
  // }

  // return [evenCaps.join(''), oddCaps.join('')]
}