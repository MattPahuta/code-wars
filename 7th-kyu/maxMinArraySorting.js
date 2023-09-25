// *** Max-min arrays - 7 kyu
/*
In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.
*/
function maxMinArrays(arr) {

  // with sort, push, pop, shift, and a while loop
  let result = [];
  let counter = arr.length;

  const sortedArr = arr.sort((a,b) => a - b);

  while (counter > 0) {
    result.push(sortedArr.pop())
    counter -= 1;
    if (sortedArr.length > 0) {
      result.push(sortedArr.shift())
      counter -= 1;
    }

  }

  return result;
  
}