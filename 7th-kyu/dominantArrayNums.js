// *** Dominant array elements - 7 kyu 
/*
An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

dominantArrEls([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
dominantArrEls([5,4,3,2,1]) = [5,4,3,2,1]

Notice that the last element is always included. All numbers will be greater than 0.
*/

function dominantArrEls(arr) {
  // loop over array
  // for each array number, check if that number is > remaining numbers in array 
  // if so, add to result arrray
  // last number in array will always be in result 

  // using a for loop, Math.max, spread, slice, and push
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // check if current num is greater than rest
    // slice to get remaining elements in array, spread into Math.max function
    if (arr[i] > Math.max(...arr.slice(i + 1, arr.length))) {
      result.push(arr[i]);
    }
  }
  return result;

  // using filter, slice, and every
  return arr.filter((num, i, arr) => {
    // use slice to get the rest of the array each iteration
    return arr.slice(i + 1).every(nextNum => num > nextNum) // use every to check if current num > rest of nums
  })
}