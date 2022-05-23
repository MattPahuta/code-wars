// *** Numbers to Letters - 7 kyu
/*
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// String.fromCharCode()

! = 27
? = 28
space = 29

All inputs will be valid.
Examples:
switcher(['24', '12', '23', '22', '4', '26', '9', '8']) => 'codewars'
switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']) => 'btswmdsbd kkw'
*/
function switcher(arr) {
  // accept array of nums
  // convert array to chars based on index 

  // ** with map, conditionals, String.fromCharCode, and parseInt
  // return arr.map(el => {
  //   if (el == 27) return "!"
  //   if (el == 28) return "?"
  //   if (el == 29) return " "
  //   return String.fromCharCode(97 + 26 - parseInt(el))
  // }).join('')


  // ** with map and join, using a key formated as a string
  const alphaKey = ' zyxwvutsrqponmlkjihgfedcba!? ';
  return arr.map(el => alphaKey[el]).join('');

  // with map, reverse, for...of loop, push, join
  arr = arr.map(Number)
  const key = [' ', '?', '!', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].reverse();

  let resultArr = [];
  for (let num of arr) {
    resultArr.push(key[num - 1])
  }
  return resultArr.join('')

}