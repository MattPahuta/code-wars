// *** The Oldest Ages - 7 kyu 
/*
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]
*/
function twoOldestAges(ages) {
  // ** using slice, sandwhiched between two sorts
  // return ages.sort((a,b) => b - a).slice(0,2).sort((a,b) => a - b);
  
  // ** same as above, but just one sort with a slice:
  return ages.sort((a,b) => a - b).slice(-2); // two from the back results in proper order
}