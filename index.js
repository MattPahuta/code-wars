// *** Welcome to my Code Wars Challenges record *** //
// *** All challenges completed using JavaScript *** //

// *** Testing 1-2-3 - 7kyu
/*
  Take an array and return a new array in the following format:

  [] --> []
  ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/
const number = function(array){
  return array.map((item, index) => {
    return (
      `${index + 1}: ${item}`
    )
  })
}

// *** Odd or Even? - 7kyu
/*
  Given a list of integers, detrmine whether the sum of its elements is odd or even
*/
function oddOrEven(array) {
 //enter code here
 let sum = 0;
 for(let num of array){
   sum+=num;
 }
 if(sum%2===0) return "even";
 else return "odd";
 // alternative solution:
 //  return array.reduce((a,b) => a + b, 0) % 2 ? 'odd' : 'even';
}




// *** Sum of two lowest positive integers - 7 kyu
/*
  Create a function that returns the sum of the two lowest positive numbers of an integers array
  No floats or non-positive integers will be passed.
*/

function sumTwoSmallestNumbers(numbers) {  
  // first sort the numbers array from low to high;
  const sortedNumbers = numbers.sort((a,b) => a - b);
  // then, simply return the sum of the first two array elements of the sorted array
  return sortedNumbers[0] + sortedNumbers[1];
}


