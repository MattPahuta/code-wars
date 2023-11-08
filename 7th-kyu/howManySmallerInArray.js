// *** How many are smaller than me? - 7 kyu

/*
Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]
*/
function smaller(nums) {

  // *** with map, slice, and filter
  return nums.map((num, i) => {
    return nums.slice(i).filter(numToCheck => num > numToCheck).length;
  })


  // *** with for loops
  let result = [];
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    counter = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        counter += 1;
        
      }
    }
    result.push(counter)
  }

  return result;
}