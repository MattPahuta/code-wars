// *** Find all non-consecutive numbers
/*
Your task is to find all the elements of an array that are non consecutive.

A number is non consecutive if it is not exactly one larger than the previous element in the array. The first element gets a pass and is never considered non consecutive.

Create a function named allNonConsecutive

E.g., if we have an array [1,2,3,4,6,7,8,15,16] then 6 and 15 are non-consecutive.

You should return the results as an array of objects with two values i: <the index of the non-consecutive number> and n: <the non-consecutive number>.

E.g., for the above array the result should be:

[
  {i: 4, n:6},
  {i: 7, n:15}
]
If the whole array is consecutive or has one element then return an empty array.

The array elements will all be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive and/or negetive and the gap could be larger than one.
*/
function allNonConsecutive(arr) {
  // loop through array of numbers (sorted in ascending order)
  // find all nums that are !== to previous num - 1 (excluding first num)
  // save the nums with indexes 
  // create objects with index and num vals => {i: 4, n: 6}
  // return array of the objects
  let result = [];
  // with forEach
  arr.forEach((val, index) => {
    if (val !== arr[index - 1] + 1 && index) {
      result.push({i: index, n: val})
    }
  });
  return result;

  // with for loop and push
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== (arr[i] - 1)) {
      result.push({'i': i, 'n': arr[i]})
    }
  }
  return result;

}