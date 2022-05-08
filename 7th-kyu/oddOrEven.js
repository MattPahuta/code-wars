// *** Odd or Even? - 7kyu
/*
  Given a list of integers, detrmine whether the sum of its elements is odd or even
*/
function oddOrEven(array) {
  //enter code here

  // using reduce with ternary:
   return array.reduce((a,b) => a + b, 0) % 2 ? 'odd' : 'even';

  // with a for...of loop
  // let sum = 0;
  // for (let num of array){
  //   sum += num;
  // }
  // if(sum % 2 === 0) return "even";
  // else return "odd";
 }