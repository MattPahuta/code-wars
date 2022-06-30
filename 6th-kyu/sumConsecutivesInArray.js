// *** Sum consecutives - 6 kyu
/*
You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

Extra credit if you solve it in one line. You can assume there is never an empty list/array and there will always be an integer.

Same meaning: 
1 == 1
1 != -1

#Examples:

[1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

"""So as you can see sum of consecutives 1 is 1 
sum of 3 consecutives 4 is 12 
sum of 0... and sum of 2 
consecutives 3 is 6 ..."""

[1,1,7,7,3] # should return [2,14,3]
[-5,-5,7,7,12,0] # should return [-10,14,12,0]
*/
function sumConsecutives(arr) {
  // accept an array of integers, sum all nums that are the same && consecutive in the array
  // push each consecutive sum into an array, return it
  // ** using a for loop with conditional statement (submitted solution) 
  const result = []; // array to return
  let counter = 1; // set initial counter val to 1

  for (let i = 0; i < arr.length; i++) { // iterate through array
    if (arr[i] === arr[i + 1]){ // check if current arr item === next arr ite
      counter ++; // if so, increment the counter
    } else { // if not equal, push current arr item * counter value
      result.push(arr[i] * counter)
      counter = 1; // reset counter to 1 for next series of iterations
    }
  }

  return result // return the result array

  // using reduce with a conditional 
  // return arr.reduce(function(prev, curr, i, arr) {
  //   if (curr != arr[i - 1]) {
  //     prev.push(curr); 
  //   } else { 
  //     prev[prev.length - 1] += curr; 
  //   }
  //   return prev;
  // }, []);
}