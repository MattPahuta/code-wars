// *** Transform to Prime - 6th kyu
/*
Task :
Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .

Notes
- List size is at least 2 .
- List's numbers will only positives (n > 0) .
- Repetition of numbers in the list could occur .
- The newer list's sum should equal the closest prime number .

Input >> Output Examples
minimumNumber([3,1,2]) ==> return (1)
Explanation:
Since , the sum of the list's elements equal to (6) , the minimum number to be inserted to transform the sum to prime number is (1) , which will make the sum of the List equal the closest prime number (7) .

minimumNumber([2,12,8,4,6]) ==> return (5)
Explanation:
Since , the sum of the list's elements equal to (32) , the minimum number to be inserted to transform the sum to prime number is (5) , which will make the sum of the List equal the closest prime number (37) .

minimumNumber([50,39,49,6,17,28]) ==> return (2)
Explanation:
Since , the sum of the list's elements equal to (189) , the minimum number to be inserted to transform the sum to prime number is (2) , which will make the sum of the List equal the closest prime number (191) .
*/
function minimumNumberToPrime(numbers) {
  // ** using reduce, a helper function, and while loop (submitted)
  // add all the numbers in the numbers array, assign to sum
  const sum = numbers.reduce((a,b) => a + b, 0);
  // set initial value of the num we'll use to get the difference to sum
  let addNum = sum;

  // check for prime helper function
  function isPrime(num) {
    if (num <= 1) return false; 
    if (num === 2) return true;
    for (let i= 2; i < num; i++) {
      if (num % i === 0) {
      return false;
      }
    }
    return true;
  }

  while (!isPrime(addNum)) { // run addNum while is returns false, 
    addNum += 1; // add 1 to addNum each time through
  }

  return addNum - sum; // return difference to get closest prime

  // similar, but streamlined solution:
  // let sum = numbers.reduce((a,b) => a + b)
  // for(let i = sum; ; i++) {
  //   if(prime(i)) return i - sum
  // }
  // function prime(a) {
  //   if(a < 2) return false
  //   if(a % 2 === 0) return a === 2
  //   for(let i = 3; i * i < a; i += 2) {
  //     if(a % i === 0) return false
  //   }
  //   return true
  // }
}
