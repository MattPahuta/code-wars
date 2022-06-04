// *** Maximum Gap (Array series #4) - 7 kyu
/*
Task
Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

Notes
- Array/list size is at least 3 .
- Array/list's numbers Will be mixture of positives and negatives also zeros_
- Repetition of numbers in the array/list could occur.
- The Maximum Gap is computed Regardless the sign.

Input >> Output Examples
maxGap([13,10,5,2,9]) ==> return (4)
Explanation:
The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .

maxGap([-3,-27,-4,-2]) ==> return (23)
Explanation:
The Maximum Gap after sorting the array is 23 , The difference between  |-4- (-27) | = 23 .
Note : Regardless the sign of negativity .

maxGap([-7,-42,-809,-14,-12]) ==> return (767)  
Explanation:
The Maximum Gap after sorting the array is 767 , The difference between  | -809- (-42) | = 767 .
Note : Regardless the sign of negativity .

maxGap([-54,37,0,64,640,0,-15]) //return (576)
Explanation:
The Maximum Gap after sorting the array is 576 , The difference between  | 64 - 640 | = 576 .
Note : Regardless the sign of negativity .
*/

function maxGap(numbers) {

  // ** using sort with a for loop (submitted solution)
  const sortedNums = numbers.sort((a,b) => a - b); // sort numbers in ascending order
  let maxGap = sortedNums[1] - sortedNums[0]; // set initial maxGap value

  for (let i = 1; i < sortedNums.length; i++) { // loop through sorted nums, starting at pos 1
    if (sortedNums[i + 1] - sortedNums[i] > maxGap) { // test for potential greater maxGap
      maxGap = sortedNums[i + 1] - sortedNums[i]; // set new maxGap
    }
  }

  return maxGap; // return maxGap

  // ** using sort with reduce
  // return numbers
  // .sort((a, b) => a - b)
  // .reduce((max, num, i) => {
  //   let gap = numbers[i + 1] - num
  //   if (max < gap) {
  //     max = gap
  //   }
  //   return max
  // }, 0);
}