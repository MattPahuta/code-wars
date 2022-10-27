// *** Code Wars Challenges - Fundamentals Only  *** //
// ************************************************* //
// ************************************************* //
// *** All challenges completed using JavaScript *** //
// ************************************************* //


// *** The Oldest Ages - 7 kyu 
/*
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]
*/
function twoOldestAges(ages) {
  // ** using slice, sandwhiched between two sorts
  // return ages.sort((a,b) => b - a).slice(0,2).sort((a,b) => a - b);
  // ** same as above, but just one sort with a slice:
  return ages.sort((a,b) => a - b).slice(-2); // two from the back results in proper order
}

// *** The highest profit wins! - 7 kyu
/*
Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
*/

function minMax(arr) {
  // ** simply use Math.min/max, spreading the arr as the argument, return the new array in place
  return [Math.min(...arr), Math.max(...arr)];

  // ** A solution with a for loop and conditionals
  // let max = arr[0], min = arr[0];
  // for (let i = 0; i < arr.length; i += 1) {
  //   if (arr[i] > max) max = arr[i];
  //   if (arr[i] < min) min = arr[i]; 
  // }
  // return [min,max];
}

// *** Remove First and Last Character Part Two - 8 kyu
/*
You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/
function firstAndLastRemoved(str) {
  // ** using split, pop, shift, and join plus a ternary
  // const strArr = str.split(',')
  // strArr.pop();
  // strArr.shift()
  // return strArr.length === 0 ? null : strArr.join(' ');

  // ** streamlined solution with split, slice, and join with short circuiting logic
  // * reminder: slice() returns a shallow copy of a portion of an array, here starting at position 1 and ending one before the end
  return str.split(",").slice(1,-1).join(" ") || null;
}

// *** N-th Power - 8 kyu
/*
You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:

array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9; 
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
*** NOTE: poor instructions - actually looking for array[n] to nth power

*/
function index(array, n) {
  // ** with simple ternary
  // check if n outside of array with isNaN method => 'undefined'
  // return isNaN(array[n]**n) ? -1 : array[n]**n;

  // ** using ternary with Math.pow
  return array.length > n ? Math.pow(array[n], n) : -1;

  // ** with simple or operator
  // return array[n] ** n || -1;
}


// *** To square(root) or not to square(root) - 8 kyu
/*
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.
*/
function squareOrSquareRoot(array) {
  // ** Using built in Math.sqrt() and isInteger 
  // ** with for of loop
  // const result = [];
  // for (let num of array) {
  //   if (Number.isInteger(Math.sqrt(num))) {
  //     result.push(Math.sqrt(num))
  //   } else {
  //     result.push(num * num)
  //   }
  // }
  // return result;

  // ** as above, but with map and ternary
  return array.map(num => {
    return Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num * num;
  })

}


// *** Calculate average - 8 kyu 
/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/
function findAverage(array) {
  // ** using reduce to add all nums and divide by array length
  // ternary statement to account for empty arrays passed in
  return array.length > 0 ? array.reduce((a,b) => a + b, 0) / array.length : 0;

  // ** using a for loop 
  // if (array.length === 0) {
  //   return 0;
  //   }
  // let  result = 0;
  // for (let i = 0; i < array.length; i++) {
  //   result +=array[i];
  // }
  // return result / array.length;
}


// *** Invert values - 8 kyu
/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/
function invert(array) {
  // *** simply using map to return new array with each num toggled
  // return array.map(num => -num);


  // *** using a for...of loop to push the toggled num value
  const result = [];
  for (let num of array) {
    result.push(-(num));
  }
  return result;

  // *** using map, Math.abs, and a ternary statement
  // return array.map(num => {
  //   return num === Math.abs(num) ? (-Math.abs(num)) : (Math.abs(num))
  // });

}


// *** SpeedCode #2 - Array Madness - 8kyu
/*
Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
*/
function arrayMadness(a, b) {
  // // ** using Math.pow with map and then reduce
  // aSquaresSums = a.map(num => Math.pow(num,2)).reduce((a,b) => a + b, 0);
  // bCubesSums = b.map(num => Math.pow(num, 3)).reduce((a,b) => a + b, 0);
  // // compare resulting sums with ternary
  // return aSquaresSums > bCubesSums ? true: false;

  // ** condensed with only reduce and the exponentiation operator (**)
  return a.reduce((pVal, cVal) => pVal + cVal**2, 0) > b.reduce((pVal, cVal) => pVal + cVal**3, 0);

}



// *** Multiple of index - 8 kyu 
/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
[68, -1, 1, -7, 10, 10] => [-1, 10]
[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
*/

function multipleOfIndex(array) {
  // ** use a for loop
  // const multiples = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] % i === 0) {
  //     multiples.push(array[i])
  //   }
  // }
  // console.log(multiples)
  // ** use the filter method
  return array.filter((num, index) => num % index === 0);

}

// *** Is there a vowel in there? - 8 kyu
/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array

Example: 
isVowel([97, 55, 33, 117, 105, 88, 111]) => ['a', 55, 33, 'u', 'i', 88, 'o']
*/
function isVowel(arr) {
  // take in an array of numbers
  // if a number === a charCode, change the number to a string of the vowel the charCode reprents 
  // use String.fromCharCode(code) to return the string version of vowel

  // const charCodes = [
  //   {vowel: 'a', charCode: 97},
  //   {vowel: 'e', charCode: 101},
  //   {vowel: 'i', charCode: 105},
  //   {vowel: 'o', charCode: 111},
  //   {vowel: 'u', charCode: 117},
  //   ]

  // ** Using a if/else with multiple conditions
  // const resultArr = [];
  // for (let num of arr) {
  //   if (String.fromCharCode(num) === 'a' || 
  //       String.fromCharCode(num) === 'e' ||
  //       String.fromCharCode(num) === 'i' ||
  //       String.fromCharCode(num) === 'o' ||
  //       String.fromCharCode(num) === 'u') {
  //         resultArr.push(String.fromCharCode(num))
  //       } else {
  //         resultArr.push(num)
  //       }
  // }
  // return resultArr;

  // *** Solve with map method and object to check codes against
  const codeMap = {
    97: 'a',
    101: 'e',
    105: 'i',
    111: 'o',
    117: 'u',
  }

  return arr.map(num => codeMap[num] ? codeMap[num] : num);
}


// *** Grasshopper - Array Mean - 8 kyu
/*
Find Mean
Find the mean (average) of a list of numbers in an array.
Information
To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.
For an example list of 1, 3, 5, 7

1. Add all of the numbers
  1+3+5+7 = 16
2. Divide by the number of values in the list. In this example there are 4 numbers in the list.
  16/4 = 4
3. The mean (or average) of this list is 4
*/
function findAverage(nums) {
  // ** using reduce and the nums array length
  return nums.reduce((pVal, cVal) => pVal + cVal, 0) / nums.length;

  // ** with a for of loop
  // let result = 0
  // for(let num of nums) {
  //   result += num
  // }
  // return result / nums.length
}

// *** Add Length - 8 kyu
/*
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.

*/
function addLength(str) {
  // const strArr = str.split(' ')
  // return strArr.map(str => {
  //   return `${str} ${str.length}`
  // })

  return str.split(' ').map(str => str + ' ' + str.length);

}


// *** Sum of differences in array - 8 kyu
/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

[18, 3, 23, 33, 2, 4, 22, 18, 23]

If the array is empty or the array has only one element the result should be 0 
*/
function sumOfDifferences(arr) {
  // using a for loop
  arr.sort((a,b) => b - a); // sort area in descending order using sort()
  let sum = 0; 
  for (let i = 0; i < arr.length -1; i++) { // loop through array, stoping one from the back
    sum += arr[i] - arr[i + 1]; // add current index val minus next index val to sum
  }
  return sum;

  // using Math.max and min wiht a ternary - no loop or sorting required
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

// *** Sum Mixed Array - 8 kyu
/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/
function sumMix(arr) {
  // apply Number function to each value with map, returning array of nums
  // use reduce to add all nums of the map-returned array
  return arr.map(Number).reduce((prevVal, currVal) => prevVal + currVal, 0);
}

// *** I love you, a little, a lot, passionately...not at all - 8 kyu
/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

  howMuchILoveYou(7) => "I love you"
  howMuchILoveYou(3) => "a lot"
  howMuchILoveYou(6) => "not at all"
*/
function howMuchILoveYou(numPetals) {
  const loveLevelArr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
  return loveLevelArr[(numPetals - 1) % 6];
}


// *** Count the Monkeys! - 8 kyu
/*
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]
*/

// *** Find numbers which are divisible by given number - 8 kyu
/*
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

*/
function divisibleBy(nums, divisor) {
  // use filter method to return new array with only nums evenly divisible by divisor
  return nums.filter(num => num % divisor === 0)
}

// *** Sort and Star - 8 kyu
/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array
*/

function twoSort(arrOfStrings) {
  // step-by-step
  const sortedArr = arrOfStrings.sort(); // sort based on ASCII values - sort() default behavior accomplishes this
  const str = sortedArr[0]; // get the first element 
  return str.split('').join('***'); // split string into array, join back together with '***'

  // a concise application of the above steps:
  // return arrOfStrings.sort()[0].split('').join('***');
}

// *** Filter out the geese - 8 kyu
/*
Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
*/
function gooseFilter(birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  // use filter and includes to return only birds not included in geese array
  return birds.filter(bird => !geese.includes(bird));

  // use filter with indexOf to accomplish same thing
  // return birds.filter(bird => geese.indexOf(bird) < 0 );

  // using a for loop to accomplish what filter method does in initial solution 
  // const result =[];
  // for (let i = 0; i < birds.length; i++) {
  //   if (!geese.includes(birds[i])) { // if birds[i] not included in geese
  //     result.push(birds[i]); // push birds[i] to result array
  //   }
  // }
  // return result;
}

// *** Well of Ideas - easy version - 8 kyu
/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/
function well(x) {
  let good = x.filter(idea => idea === 'good');
 
  return good.length > 2 ? 'I smell a series!'
    : good.length >= 1 ? 'Publish!' 
    : 'Fail!';
}

// *** Filling an array - 8 kyu
/*
We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value.
*/
const arr = (n = 0) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(i);
  }

  return result;
}


// *** A wolf in sheep's clothing - 8 kyu
/*
Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"
*/
function warnTheSheep(arr) {
  // if wolf is at the end of the array
  if (arr.at(-1) === 'wolf') return "Pls go away and stop eating my sheep";
  // otherwise, reverse the array to more easily count from bakc
  // find the wolf index to get the right sheep
  return `Oi! Sheep number ${arr.reverse().indexOf('wolf')}! You are about to be eaten by a wolf!`;

  // another version using a ternary:
  // const wolf = arr.reverse().indexOf('wolf');
  // return wolf === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${wolf}! You are about to be eaten by a wolf!`;
}

// *** Cat years, Dog years - 8 kyu
/*
I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only

Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that

Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

const humanYearsCatYearsDogYears = function(humanYears) {
  // Step-by-step
  if (humanYears === 1) return [1, 15, 15]; // handle 1 human year
  if (humanYears === 2) return [2, 24, 24]; // handle 2 human years
  // cat calculation ( >2 human years )
  const catYears = (4 * (humanYears - 2)) + 24;
  // dog calculation ( >2 human years )
  const dogYears = (5 * (humanYears - 2)) + 24;
  // return an array = [ humanYears, catYears, dogYears ]
  // return [humanYears, catYears, dogYears]

  // streamlined 
  return [ humanYears,
    ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears, // cat equation inline
    ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears, // dog equation inline
  ];

}

function monkeyCount(n) {
  const monkeyArr = []; // initialize an array to hold the monkeys!
  for (let i = 1; i <= n; i++) { // loop to populate monkey array, starting at 1
    monkeyArr.push(i); // push the values to the array
  }
  return monkeyArr; // return the array
}

// *** Count of positives / sum of negatives - 8 kyu
/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/
function countPositivesSumNegatives(input) {
  if (!input || input.length <= 0) return []; // check for falsey value or empty array
  let positiveCount = 0; // initialize variable to hold positive num count
  let negativeSum = 0; // initialize variable to hold negative num sum

  for (let val of input) { // loop through input array
    if (val > 0) { // check for positive nums
      positiveCount += 1; // increment positiveCount
    } else { // otherwiese, it's negative or zero
      negativeSum += val; // add the negative nums
    }
  }
  return [positiveCount, negativeSum]; // return the proper array
}


// *** JavaScript Array Filter - 7 kyu
/*
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/
function getEvenNumbers(numsArray) {
  return numsArray.filter(num => num % 2 === 0);
}

// *** Find the capitals - 7 kyu
/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/
function capitals(word) {
  // using a for loop
  const wordArr = word.split('');
  const resultArr = [];
  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] === wordArr[i].toUpperCase()) {
      resultArr.push(i);
    }
  }
  return resultArr;

  // return wordArr.map((el, index) => {
  //   if (el === el.toUpperCase()) {
  //     return index;
  //   } 
  // })
}


// *** Check the exam - 7 kyu
/*
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string.

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

if (arr1[i] === arr2[i]) {
  score += 4;
}
if (arr1[i] !== arr2[i]) {
  scroe -= 1;
}


*/

function checkExam(array1, array2) {
  let score = 0; // initialize a score variable w/0 as starting value.
  for (let i = 0; i < array1.length; i++) { // loop through array1
    if (array1[i] === array2[i]) { // check for correct
      score += 4;
    } else if (array2[i] === '') { // check for blank
      score += 0;
    } else { // score for incorrect
      score -= 1;
    }    
  }
  return score < 0 ? 0 : score; // return 0 for neg value, return score for 0/positive
}

// *** Counting Duplicates - 6 kyu
/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/
function duplicateCount(text) {
  // revised solution with filter, indexOf, lastIndexOf
  const textArr = text.toLowerCase().split('');
  return textArr.filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;

  // initial solution
  // const textArr = text.toLowerCase().split('');
  // let counter = {};
  // let resCount = 0;
  
  // for (let char in textArr) {
  //   counter[textArr[char]] = (counter[textArr[char]] + 1) || 1;
  // } for (let el in counter) {
  //     console.log(counter[el]);
  //     if (counter[el] > 1) resCount++;
  //   }
  // return resCount; 


  // using a regex
  // return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}


// *** altERnaTIng cAsE <=> ALTerNAtiNG CaSe - 8 kyu
/*
"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
*/
String.prototype.toAlternatingCase = function () {
  return this.split('')
    .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
    .join('');
}


// *** A step-by-step walk through for the above, streamlined challenge solution
// for...of loop instead of map and ternary
function altStrngCase(str) {
  // split str to array of chars to check each char
  const strArr = str.split('');
  // result array to hold result chars
  const resultArr = [];
  // loop through strArr
  for (let char of strArr) {
    if (char.toUpperCase() !== char) { // if the char is not uppercase, switch it
      resultArr.push(char.toUpperCase());
    } else { // else, switch it the other way
      resultArr.push(char.toLowerCase());
    }
  }
  return resultArr.join(''); // return the resulting array joined back into a string
}

// *** Is it even? - 8 kyu
/*
In this Kata we are passing a number (n) into a function.
Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats with decimal part non equal to zero are considered UNeven for this kata.
*/
function testEven(n) {
  return n % 2 === 0 ? true : false;
}

testEven(0); // => true
testEven(0.5); // => false
testEven(1); // => false
testEven(2); // => true

// *** Reverse words - 7 kyu
/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

  return str.split(' ').map(word => {
    return word.split('').reverse()
  }

*/
function reverseWords(str) {
  // split the str into an array of strings
  // map over the array of strings
  // split each letter into an array, reverse it, then join back into a string
  // join the array of reversed strings back into a single string
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

// *** What is between? - 8 kyu
/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/
function between(a,b) {
  // use a simple for loop to push values to an array
  const resultArr = [];
  for (let i = a; i <= b; i ++) {
    resultArr.push(i);
  }
  return resultArr;
}


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

// *** Thinkful - Logic Drills: Traffic light - 8 kyu
/*
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.
*/
function updateLight(current) {
  // using a switch statement
  switch (current) {
    case 'green':
      return 'yellow';
      break;
    case 'yellow':
      return 'red';
      break;
    case 'red':
      return 'green';
      break;
    default:
      throw 'Error: No lights that color!';
      break;
  }
  // with ternary
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
}

// *** If you can't sleep, just count sheep! - 8 kyu
/*
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/
function countSheep(num) {
  // using a simple for loop and string concatenation
  let sheepString = '';
  for (let i = 1; i <= num; i++) {
    sheepString += i + ' sheep...';
  }
  return sheepString;
}


// *** Grasshopper - Personalized Message - 8 kyu
/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/
function greet (name, owner) {
  // with if/else
  if (name.toLowerCase() === owner.toLowerCase()) {
    return 'Hello boss';
  } else {
    return 'Hello guest';
  }
  // with ternary
  return name.toLowerCase() === owner.toLowerCase() ? 'Hello boss' : 'Hello guest';
}

// *** Correct the mistakes of the character recognition software - 8 kyu
/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/
function correct(str) {
  // using a for loop with if/else
  // str = str.split('');
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] === '5') str[i] = 'S';
  //   else if (str[i] === "0") str[i] = 'O';
  //   else if (str[i] === "1") str[i] = 'I';
  // }
  // return str.join('');

  // using a corrections object to check against - good for future error-checking enhancements
  const corrections = {
    "5": "S",
    "0": "O",
    "1": "I",
  };

  return str.split("").map(char => {
    return corrections.hasOwnProperty(char) ? corrections[char] : char;
  }).join("");

}
// "L0ND0N" => "LONDON";
// "DUBL1N" => "DUBLIN";


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

