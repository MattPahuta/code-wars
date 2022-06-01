// *** max diff easy - 7 kyu
/*
You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

- lst contains integers, that means it may contain some negative numbers
- if lst is empty or contains a single element, return 0
- lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
*/

function maxDiff(list) {
  // ** Math.max and min with ternary (submitted)
  return list.length ? Math.max(...list) - Math.min(...list) : 0;

  // using a for loop with Math.min/max
  // if (list.length <= 1) {
  //   return 0;
  // }

  // let min = list[0];
  // let max = list[0];

  // for (let i = 1; i < list.length; i += 1) {
  //   const current = list[i];
  //   min = Math.min(min, current);
  //   max = Math.max(max, current);
  // }

  // return max - min;

}