// *** Sorted? yes? no? how? - 7 kyu
/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/
function isSortedAndHow(array) {
  // // ** preserve original array, make ascending/descending copies, stringify to compare
  // const sourceArr = JSON.stringify(array);
  // const ascendingArr = JSON.stringify([...array].sort((a,b) => a - b));
  // const descendingArr = JSON.stringify([...array].sort((a,b) => b - a));
  // // uses a ternary for comparison/return
  // return sourceArr === ascendingArr ? 'yes, ascending' 
  //       : sourceArr === descendingArr ? 'yes, descending'
  //       : 'no'

  // ** using join instead, also with ternary to make comparison/return value
  const strArr = array.join``;
  return strArr === array.sort((a, b) => a - b).join`` ? 'yes, ascending' :
          strArr === array.sort((a, b) => b - a).join`` ? 'yes, descending' : 'no';
}