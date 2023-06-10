// *** MinMaxMin - Bounded Nums - 7 kyu
/*
Given an unsorted array of integers, find the smallest number in the array, the largest number in the array, and the smallest number between the two array bounds that is not in the array.

For instance, given the array [-1, 4, 5, -23, 24], the smallest number is -23, the largest number is 24, and the smallest number between the array bounds is -22. You may assume the input is well-formed.

You solution should return an array [smallest, minimumAbsent, largest]

The smallest integer should be the integer from the array with the lowest value.

The largest integer should be the integer from the array with the highest value.

The minimumAbsent is the smallest number between the largest and the smallest number that is not in the array.

minMinMax([-1, 4, 5, -23, 24]); //[-23, -22, 24]
minMinMax([1, 3, -3, -2, 8, -1]); //[-3, 0, 8]
minMinMax([2, -4, 8, -5, 9, 7]); //[-5, -3,9]
*/

function minMinMax(array) {

  // a more streamlined version of the below working (with while loop) code:
  let absentMin = Math.min(...array);
  while (array.includes(absentMin)) {
    absentMin += 1;
  }
  return [Math.min(...array), absentMin, Math.max(...array)];



  // with Math.min/max, for loop, and includes
  const min = Math.min(...array);
  const max = Math.max(...array);
  let minAbsent = min + 1; // or, min + 1?

  // loop through array or count up from min to max
  // if number is greater than min && !array.includes(num)
  // set minAsent 

  for (let i = minAbsent; i < max; i++) {
    if (!array.includes(i)) {
      minAbsent = i;
      break;
    }
  }

  return [min, minAbsent, max];
}