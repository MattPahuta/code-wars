// *** Array.diff - 6 kyu
/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2], [1]) ==> [2]
arrayDiff([1,2,3], [1,2]) ==> [3]
If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3], [2]) ==> [1,3]

*/
function arrayDiff(a,b) {
  // ** using filter with includes (submitted)
  return a.filter(el => !b.includes(el));
  // similar, but with indexOf instead of includes
  // return a.filter(el => b.indexOf(el) === -1);

  // with a nested for loop and splice
  // if (b.length === 0 || a.length === 0) return a;
  // for(let i = 0; i < a.length; i++){
  //   for(let j = 0; j < b.length; j++){
  //     if(a[i] === b[j]){
  //       a.splice(i,1);
  //       i--;
  //     }
  //   }
  // }
  // return a;

}