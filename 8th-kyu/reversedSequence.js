// *** Reversed sequence - 8th kyu
/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/
function reverseSeq(n) {
  // with Array, fill, and map
  return Array(n).fill(0).map((num, i) => n - i);

  // with a for loop and push
  const array = [];
  for (let i = n; i > 0; i--) {
    array.push(i)
  }
  return array;

  // with a for loop and unshift
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.unshift(i);
  }
  return result;
}