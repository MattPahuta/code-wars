// *** Most Digits - 7 kyu
/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

function findLongest(array) {
  // with for loop, toString, parseInt
  let num = '0';
  for(let i=0; i<array.length; i++) {
    let string = array[i].toString();
    if(string.length > num.length) {
      num = string;
    }
  }
  return parseInt(num);
  
  // with map, String, Number, sort, and ternary
  const strArr = array.map(num => String(num)); // change digits to strings
  return Number(strArr.sort((a,b) => b.length - a.length)[0]) // sort based on length, return first el as Number

  // with reduce and ternary
  return array.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a))

}