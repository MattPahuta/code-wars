// *** How many consecutive numbers are needed? - k kyu
/*
Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

For example:
If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.
*/
function consecutive(arr) {

  // ** with ternary
  const length = arr.length; // 3
                    // 8 - 4 = 4 - 3 = 1 + 1 = 2 
  return length ? Math.max(...arr) - Math.min(...arr) - length + 1 : 0;


  // ** with Math.min/max and a for loop
  const testArr = [];

  let start = Math.min(...arr);
  let end = Math.max(...arr)

  for (let i = start; i <= end; i++) {
    testArr.push(i)
  }
  return testArr.length - arr.length;
}