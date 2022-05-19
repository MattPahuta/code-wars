// *** Last Survivor  - 7 kyu
/*
You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.

Example:

let str = "zbk", arr = [0, 1]
    str = "bk", arr = [1]
    str = "b", arr = []
    return 'b'
Notes
The given string will never be empty.
The length of the array is always one less than the length of the string.
All numbers are valid.
There can be duplicate letters and numbers.
*/
function lastSurvivor(letters, coords) {
  // split the letters into an array of letters

  // with map
  const arr = [...letters];
  coords.map((el, i) => arr.splice(el,1));
  return arr[0];


  // with a for loop, split, splice, and join (submitted)
  // letterArr = letters.split('');
  // for (let i = 0; i < coords.length; i++) {
  //   letterArr.splice(coords[i],1)
  // }
  // return letterArr.join('')

  // simliar to for loop solution, but with for...of
  const strArr = [...letters];
  for (const i of coords) strArr.splice(i,1);
  return strArr[0];

}
