// *** Check three and two - 7 kyu
/*
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/
function checkThreeAndTwo(arr) {
  // accept array of 5 string letters - a, b, c
  // get counts of each letter
  // return true if exactly 3x one letter, 2x another letter
  
  // with push, filter, and includes
  let result = [];
  result.push(arr.filter(char => char === 'a').length);
  result.push(arr.filter(char => char === 'b').length);
  result.push(arr.filter(char => char === 'c').length);
  return result.includes(2) && result.includes(3);
  
  // // ** with for...of, conditional logic, and counter variables
  // let aCount = 0;
  // let bCount = 0;
  // let cCount = 0;
  
  // for (let char of arr) {
  //   if (char === 'a') aCount++;
  //   if (char === 'b') bCount++;
  //   if (char === 'c') cCount++;
  // }
  
  // return (aCount === 0 || bCount === 0 || cCount === 0) && (aCount < 4 && bCount < 4 && cCount < 4)
  
  // similar to above, but with filter
  // let a = arr.filter(char => char === 'a').length;
  // let b = arr.filter(char => char === 'b').length;
  // let c = arr.filter(char => char === 'c').length;
  // return (a === 3 || b === 3 || c=== 3) && (a === 2 || b === 2 || c === 2);
  
  }
  