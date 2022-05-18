// *** Equal Sides of an Array - 6 kyu
/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array [1,2,3,4,3,2,1] => 3
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ([1,2,3]) and the sum of the right side of the index ([3,2,1]) both equal 6.

You are given the array [1,100,50,-51,1,1] => 1
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ([1}) and the sum of the right side of the index ([50,-51,1,1]) both equal 1.

You are given the array [20,10,-80,10,10,15,35] => 0
At index 0 the left side is []
The right side is [10,-80,10,10,15,35]
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.
*/
function findEvenIndex(arr) {
  // accept array of integers 
  // loop through array 
  // get an initial sum value
  // [] == [10,-80,10,10,15,35].reduce((a,b) => a + b, 0)

  // ** first success attempt, with slice, reduce, and loop
  // let leftSide = [];
  // let index = 0;
  // if (leftSide == arr.slice(1).reduce((a,b) => a + b, 0)) { // check first index condition
  //   return 0;
  // }

  // for (let i = 1; i < arr.length; i++) { // loop over array
  //   let left = arr.slice(0, i + 1).reduce((a,b) => a + b, 0); // left sum
  //   let right = arr.slice(i).reduce((a,b) => a + b, 0); // right sum
  //   if (left == right) {
  //     index = i;
  //   }
  // }
  // return index;

  // more concise, similiar to above: 
  let left = 0;
  let right = arr.reduce((a,b) => a + b, 0);
  for (let i = 0; i < arr.length; i++) {
    right -= arr[i];
    if (left === right) return i;
    left += arr[i];
  }
  return -1;

  // most concise, using findIndex with slice and reduce
  return arr.findIndex((el, i, arr) => arr.slice(0, i).reduce((a,b) => a + b, 0) == arr.slice(i + 1).reduce((a,b) => a + b, 0));

}