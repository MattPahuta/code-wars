// *** Flatten - 7 kyu
/*
Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
*/
function flatten(array) {
  // return array.flat()

  // ** using reduce with concat (my solution)
  return array.reduce((prevVal, currVal) => prevVal.concat(currVal), []);

  // ** using the spread operator with concat:
  // return [].concat(...array);

  // ** with nested for loop and instanceof Array
  // const res = [];
  // for(let i = 0; i < array.length; i++) {
  //   const el = array[i];
  //   if(el instanceof Array) {
  //     for(let j = 0; j < el.length; j++) {
  //       res.push(el[j]);
  //     }
  //   } else {
  //     res.push(el);
  //   }
  // }
  // return res;
}
