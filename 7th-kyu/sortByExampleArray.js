// *** Sort by Example - 7 kyu
/*
Given an Array and an Example-Array to sort to, write a function that sorts the Array following the Example-Array.

Assume Example Array catalogs all elements possibly seen in the input Array. However, the input Array does not necessarily have to have all elements seen in the Example.

Examples:

Arr: [1,3,4,4,4,4,5]
Example Arr: [4,1,2,3,5]
Result: [4,4,4,4,1,3,5]

exampleSort([1,2,3,4,5],[2,3,4,1,5]) => [2,3,4,1,5];
*/

function exampleSort(arr, exampleArr) {
  // accept a target array and an example (pattern) array
  // sort the target array according to the pattern, return the newly sorted array

  // with the .sort and .indexOf methods
  return arr.sort((a,b) => {
    return exampleArr.indexOf(a) - exampleArr.indexOf(b)
  })

  // with nested for loops
  // let result = [];

  // for (let i = 0; i < exampleArr.length; i++) {
  //   for (let j = 0; j < arr.length; j++) {
  //     if (arr[j] === exampleArr[i]) {
  //       result.push(arr[j])
  //     }
  //   }
  // }
  // return result;
}