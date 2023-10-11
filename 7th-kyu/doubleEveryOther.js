// Double Every Other - 7 kyu
/*
Write a function that doubles every second integer in a list, starting from the left.

Example:
For input array/list :
[1,2,3,4]
the function should return :
[1,4,3,8]
*/
function doubleEveryOther(arr) {
  // using map with a ternary
  return arr.map((num, i) => {
    return i % 2 === 0 ? num : num * 2;
  });
}