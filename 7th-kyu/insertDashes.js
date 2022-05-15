// *** Insert Dashes - 7 kyu
/*
Write a function insertDash(num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/
function insertDash(num) {
  // accept a num, split into an array
  // iterate over num array, if num is odd (num % 2 !== 0) append a dash
  // join num array and return

  // with a regexp and replace
  // return num.toString().replace(/[13579](?=[13579])/g, "$&-");

  // ** with String, split, join, and for loop (submitted)
  num = String(num).split('')

  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 > 0 && num[i + 1] % 2 > 0) {
      num[i] = num[i] + '-'
    }
  }

  return num.join('')
}