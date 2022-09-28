// *** Code Wars Challenges - Fundamentals Only  *** //
// ************************************************* //
// ************************************************* //
// *** All challenges completed using JavaScript *** //
// ************************************************* //

// *** Shortest Word - 7 kyu
/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types
*/
function findShort(str) {
  // split string into array of words
  // map over array to transform into array of word lengths
  // sort resulting array from shortest to longest
  const sortedStrArr = str.split(' ').map(word => word.length).sort((a,b) => a - b);
  // return the first element of the sorted word lenght array
  return sortedStrArr[0];

  // Using a for loop with split
  // const strArr = str.split(' ');
  // let shortest = strArr[0].length;
  // for (let i = 1; i < strArr.length; i += 1) {
  //   if (strArr[i].length < shortest) {
  //     shortest = strArr[i].length;
  //   }
  // }
  // return shortest;

  // using Math.min, sread, split, and map
  return Math.min(...str.split(' ').map(word => word.length));

}


// *** Highest and Lowest - 7 kyu
/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
-All numbers are valid Int32, no need to validate them.
-There will always be at least one number in the input string.
-Output string must be two numbers separated by a single space, and highest number is first.
*/
function highAndLow(numbers) {
  numbers = numbers.split(' '); // split nums into array
  // template string with Math.max/min, spreading numbers array
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;

  // const numsArr = numbers.split(' ');
  // const minNum = String(Math.min(...numsArr));
  // const maxNum = String(Math.max(...numsArr));
  // return maxNum + ' ' + minNum;
}


// *** Fix string case - 7 kyu 
/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/
function fixStringCase(str) {
  // const lowerCase = [];
  // const upperCase = [];
  // for (let letter of str) {
  //   if (letter.toUpperCase() === letter) {
  //     upperCase.push(letter);
  //   } else {
  //     lowerCase.push(letter)
  //   }
  // }
  // return upperCase.length > lowerCase.length ? str.toUpperCase() : str.toLowerCase();

  // alternatively, using filter
  const upperLength = str.split('').filter(letter => letter === letter.toUpperCase()).length;
  const lowerLength = str.length - upperLength;
  return (upperLength > lowerLength) ? str.toUpperCase() : str.toLowerCase();
}


// *** Simple remove duplicates - 7 kyu
/*
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]
*/

function removeDups(arr) {
  // const result = [];
  // while (arr.length > 0) {
  //   const poppedNum = arr.pop();
  //   if (!result.includes(poppedNum)) {
  //     result.unshift(poppedNum)
  //   }
  // }
  // return result.reverse();

  // with filter
  return arr.filter((val, idx) => arr.lastIndexOf(val) === idx);
}


// *** Flatten and sort an array - 7 kyu
/*
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/
function flattenAndSort(array) {
  // with for loop and sort
  // const newArr = [];
  // for (let i = 0; i < array.length; i++) {
  //   newArr.push(...array[i]);
  // }
  // return newArr.sort((a,b) => a - b);

  // with concat and sort
  return [].concat(...array).sort((a,b) => a - b);

}

// *** Remove exclamation marks - 8 kyu
/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/
function RemoveExclamationMarks(str) {
  return str.split('!').join('');
  // or
  return str.split('').filter( (letter) => letter !== '!').join('');
}

// *** Oposites Attract - 8 kyu
/*
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/
function loveFunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2; // compare equality of flowers

  // return ((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 %2 !== 0 && flower2 % 2 === 0)) ? true : false;
}

// *** Sum of Minimums! - 7 kyu 
/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:
[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.
*/

function sumOfMinimums(arr) {

  // const minNums = []; // array to hold min values
  // for (let i = 0; i < arr.length; i += 1) { // loop through arr
  //   minNums.push(Math.min(...arr[i])) // push min val of each arr item (num array) to minNuns
  // }
  // return minNums.reduce((acc, cur) => acc + cur, 0); // use reduce to add all min values

  // alternate for loop solution
  // let total = 0;
  // for (let i = 0; i < arr.length; i += 1) {
  //   total += Math.min(...arr[i]);
  // }
  // return total; 

  // concise reduce method 
  return arr.reduce((pVal, cVal) => pVal + Math.min(...cVal), 0); // spreading the cVal in place
}

