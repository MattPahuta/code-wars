// *** Largest Elements - 7 kyu
/*
Write a program that outputs the top n elements from a list.
- if n === 0, return an empty []
Example:
largest(2, [7,6,5,4,3,2,1])
// => [6,7]
*/
function largest(n, arr) {
  // with ternary, sort, and slice (submitted)
  // if n > 0, sort array and return array with last n elements
  // if n <= 0, return []
  return n ? arr.sort((a,b) => a - b).slice(-n) : [];

  // with sort and slice (slice starting val equal or larger than arr length results in [])
  // return arr.sort((a,b) => a - b).slice(arr.length -n);
}