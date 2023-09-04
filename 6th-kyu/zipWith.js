// *** zipWith - 6 kyu
/*
Task
zipWith ( or zip_with ) takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
The function value is one new array.

If the arrays are of unequal length, the output will only be as long as the shorter one.
(Values of the longer array are simply not used.)

Inputs should not be modified.

Examples
zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both forms are valid
zipWith( (a,b) => a+b, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both are functions
*/

function zipWith(fn, arr1, arr2) {
  // get the shorter array
  // run map on shorter array


  // with slice and map
  // use slice to make arr lengths equal (if needed)
  return arr1.slice(0, arr2.length).map((el, i) => {
    return fn(el, arr2[i]);
  })
  

  // similar, but with ternary instead of slice
  let shorter = arr2.length > arr1.length ? arr1 : arr2;
  return shorter.map((el, i) => fn(arr1[i], arr2[i]));

  // with Math.min, a for loop, and push
  const resultArr = [];
  const shortestLength = Math.min(arr1.length, arr2.length);

  for (let i = 0; i < shortestLength; i++) {
    resultArr.push(fn(arr1[i], arr2[i]))
  }

  return resultArr;

}