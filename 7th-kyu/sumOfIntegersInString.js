// Sum of integers in string - 7 kyu
/*
Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.
*/

function sumOfIntegersInString(str) {
  
  // without using a regex - with forEach or for loop, includes, parseInt
  const numbers = '1234567890';
  let res = '';
  let sum = 0;

  str.split('').forEach(char => {
    if (numbers.includes(char)) {
      res += char;
    } else {
      if (res !== '') {
        sum += parseInt(res);
        res = '';
      }
    }
  })

  return sum;

  for (let i = 0; i <= str.length; i++) {
    if (numbers.includes(str[i])) {
      res += str[i]
    } else {
      if (res !== '') {
        sum += parseInt(res)
        res = ''
      }
    }
  }
  return sum

  // with a regex, map, Number, filter, Boolean, and reduce
  // const splitStr = str.split(/([^0-9])/g);
  // return splitStr.map(Number).filter(Boolean).reduce((a,b) => a + b, 0);

}