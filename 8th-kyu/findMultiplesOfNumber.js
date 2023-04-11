// *** Find Multiples of a Number - 8 kyu
/*
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

more examples: 
findMultiples(5, 25) => [5, 10, 15, 20, 25]
findMultiples(4, 27) => [4, 8, 12, 16, 20, 24]
findMultiples(5, 7) => [5]
*/
function findMultiples(num, limit) {


  // with for loop
  let multiples = [];
  for (let i = num; i <= limit; i += num) {
    multiples.push(i)
  }
  return multiples;

  // with for loop (altenate)
  let result = [];
  for (let i = num; i <= limit; i += num) {
    result.push(i)
  }
  return result;


  // with a while loop and tracking variables
  const resultArr = [];
  let counter = 1;
  let resultNum = 0;

  // while the num is less than or equal to the limit, push num * counter to result
  while (resultNum + num <= limit) {
    resultNum = num * counter;
    resultArr.push(resultNum);
    counter++;
  }

  return resultArr;

}