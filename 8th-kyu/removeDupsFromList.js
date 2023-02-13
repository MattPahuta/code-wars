// *** Remove duplicates from list
/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
*/
function distinct(arr) {

  // with for loop, includes, and push
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) { // if result doesn't already has the element
      result.push(arr[i]);
    }
  }
  return result;

  // with Array.from() method, new and Set
  return Array.from(new Set(arr));

  // with spread and Set
  return [...new Set(arr)];
}