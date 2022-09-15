// *** Welcome to my Code Wars Challenges record *** //
// ************************************************* //
// *** All challenges completed using JavaScript *** //
// ************************************************* //




// *** Sort array by string length - 7 kyu
/*
  Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

  For example:
  ["Telescopes", "Glasses", "Eyes", "Monocles"] => ["Eyes", "Glasses", "Monocles", "Telescopes"]

  All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/

function sortByLength(array) {
  // Ascending order => a.length - b.length
  // Descending order => b.length - a.length
  return array.sort((a,b) => a.length - b.length);
}

// *** Find the middle element - 7 kyu
/*
  As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

  The input to the function will be an array of three distinct numbers.

  Examples:
  gimme([2, 3, 1]) => 0
  2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
  gimme([5, 10, 14]) => 1
  10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

*/
function gimme(triplet) {
  // find the high num value - remove from array
  let highNum = Math.max(...triplet);
  // find the low num value - remove from array
  let lowNum = Math.min(...triplet);
  // return remaining num
  for (let i = 0; i < triplet.length; i++) {
    if (triplet[i] !== highNum && triplet[i] !== lowNum) {
      return i;
    }
  }

  // more concise solution with indexOf and sort
  // return triplet.indexOf(triplet.concat().sort(function(a, b) { return a - b })[1])
  
}


// *** Find the stray number - 7 kyu 
/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

function stray(numbers) {
  // using find, indexOf, lastIndexOf
  return numbers.find(number => numbers.indexOf(number) === numbers.lastIndexOf(number));

  // using sort()
  // const arr = numbers.sort();
  // if (arr[0] !== arr[1]) {
  //   return arr[0];
  // }
  // return arr[arr.length -1];
}



// *** Friend or Foe? - 7 kyu
/*
  Make a program that filters a list of strings and returns a list with only your friends name in it.

  If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

  Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

  i.e.

  friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
  Note: keep the original order of the names in the output.
*/

function friend(friends) {
  // use the filter method to return a new array with only names of 4 chars (str.length === 4)
  return friends.filter(name => name.length === 4);
}


// *** Stanton measure - 7 kyu
/*
  The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

  Write a function which takes an integer array and returns its Stanton measure.

  Examples
  The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

  The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.
*/
function stantonMeasure(arr) {
  const count = arr.filter(num => num === 1).length; // length of array of 1's
  const stanton = arr.filter(num => num === count).length; // length of array of numOnes value
  return stanton; // return stanton value

  // *** more concise implementation w/recursive function: 
  // const count = num => arr.filter(x => x === num).length;
  // return count(count(1));
}

// *** Beginner Series #1 School Paperwork - 8 kyu
/*
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0
*/
function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}


// *** Number of People in the Bus - 7 kyu
/*
  Accept a two-dimensional array (busStops), i.e. [ [10, 0], [4, 2], [7, 5] ]
  first el of nested array = passengers getting on
  second el of nested array = people getting off bus (at bus stop)
  return number of people remaining on bus
*/
const numberOfPassenger = (busStops) => { 
  let totalPassengers = 0;
  for (let i = 0; i < busStops.length; i++) {
    totalPassengers += busStops[i][0];
    totalPassengers -= busStops[i][1];
  }
  return totalPassengers;

  // using reduce
  // return busStops.reduce((rem, [on, off]) => rem + on - off, 0);
}


// *** Century from Year - 8 kyu
/*
Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/

function century(year) {
  // let result = 0;
  // for (let i = year; year > 0; year -= 100) {
  //   result += 1;
  // }
  // return result;

  // using Math.ceil method
  return Math.ceil(year/100); // rounding up to the nearest century (100)
}


// *** Get Planet Name by ID - 8 kyu
/* *** Debugging
  Function was not returning correct values
*/

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break; // cases were missing break keyword
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
  }
  return name;
}

// *** Convert a string to an array - 8 kyu
/*
Write a function to split a string and convert it into an array of words.

  Examples (Input ==> Output):
  "Robin Singh" ==> ["Robin", "Singh"]

  "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

function stringToArray(str) {
  // simply use the split() method to split each word, returning an array
  return str.split(' ');
}

// *** Array plus array - 8 kyu
// get the sum of all elements in two arrays - all elements are integers
function arrayPlusArray(arr1, arr2) {
  // use spread to combine elements into one array, reduce method to addd up all the elements
  return [...arr1, ...arr2].reduce((a,b) => a + b, 0);
}

arrayPlusArray([5,5,5], [3, 3, 3]); // => 24


// *** Get the mean of an array - 8 kyu
/*
  It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

  Return the average of the given array rounded down to its nearest integer.

  The array will never be empty.
*/

function getAverage(marks) {
  let sum = 0;
  for (let grade of marks) {
    sum += grade;
  }
  return Math.floor(sum / marks.length);

  // using reduce method
  // return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);

}

// *** Binary Addition - 7 kyu
/*
  Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

  The binary number returned should be a string.

  Examples:(Input1, Input2 --> Output (explanation)))
  1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
  5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

function addBinary(a,b) {
  const sum = a + b; // add the two nums, 5 + 9 => 14
  // convert sum to binary, 14 => 1110 
  // return binary num as a string
  return sum.toString(2);

  // more concise:
  // return (a + b).toString(2);
}

// *** Reduce but Grow - 8 kyu
/*
  Given a non-empty array of integers, return the result of multiplying the values together in order. 
  Example:
  [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

function grow(arr) {
  // using reduce
  return arr.reduce((prevVal, currVal) => prevVal * currVal, 1);

  // using a for loop
  // let product = 1;
  // for (let num of arr) {
  //   product *= num;
  // }
  // return product;
}

// *** Sum of Numbers - 7 kyu
/*
  Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

  Note: a and b are not ordered!

  Examples (a, b) --> output (explanation)
  (1, 0) --> 1 (1 + 0 = 1)
  (1, 2) --> 3 (1 + 2 = 3)
  (0, 1) --> 1 (0 + 1 = 1)
  (1, 1) --> 1 (1 since both are same)
  (-1, 0) --> -1 (-1 + 0 = -1)
  (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

function getSum(a, b) {
  const numsToSum = [];
  if (a === b) return a;
  else if (a > b) {
    for (let i = b; i <= a; i++) {
      numsToSum.push(i);
    }
  } else {
    for (let i = a; i <= b; i++) {
      numsToSum.push(i);
    }
  }

  console.log(numsToSum)
  return numsToSum.reduce((prevVal, currVal) => prevVal + currVal, 0);
}

// *** Grasshopper - Grade book - 8 kyu
/*
  Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

  Numerical Score	Letter Grade
  90 <= score <= 100	'A'
  80 <= score < 90	'B'
  70 <= score < 80	'C'
  60 <= score < 70	'D'
  0 <= score < 60	'F'
  Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

function getGrade(s1, s2, s3) {
  const avgScore = ((s1 + s2 + s3) / 3).toFixed(2);
  if (avgScore >= 90) return 'A';
  else if (avgScore >= 80) return 'B';
  else if (avgScore >= 70) return 'C';
  else if (avgScore >= 60) return 'D';
  else return 'F';

  // with a switch statement
  // switch(true) {
  //   case (avgScore >= 90):
  //     return 'A';
  //   case (avgScore >= 80):
  //     return 'B';
  //   case (avgScore >= 70):
  //     return 'C';
  //   case (avgScore >= 60):
  //     return 'D'; 
  //   default:
  //     return 'F';   
  // }

}

console.log(getGrade(95,90,93)) // => 'A'
console.log(getGrade(84,79,85)) // => 'B'
console.log(getGrade(65,70,59)) // => 'D'

// *** Count by X - 8 kyu
/*
  Create a function with two arguments that will return an array of the first n multiples of x.
  Assume both the given number and the number of times to count will be positive numbers greater than 0.
  Return the results as an array or list ( depending on language ).

  Examples
  countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
  countBy(2,5) === [2,4,6,8,10]
*/
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) { // i is your counter, counting up to and including 'n'
    z.push(x*i) // for each iteration, push the value of x * 1
  }
  return z;
}

// *** Sentence Smash - 8 kyu
/*
  Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
  You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 
  Be careful, there shouldn't be a space at the beginning or the end of the sentence!

  Example:
  ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

function smash(words) {
  return words.join(' ').trim(); // use join to concatenate the words from the array, use trim to ensure no extra space, beginning or end
}

// *** Credit Card Mask - 7 kyu 
/*
  Write a function, maskify, which changes all but the last four characters into a "#"
  Example:  ""
*/
function maskify(cc) {
  // const ccArr = cc.split(''); // change string into array
  // if (ccArr.length <= 4) return cc; // account for short cc
  // const lastFourEls = ccArr.slice(ccArr.length -4); // get last four elements of array
  // return ccArr.slice(0, ccArr.length - 4).map(el => { // get all but last four elements, map over array
  //   return el = "#"; // update elements to "#"
  // }).concat(lastFourEls).join(""); // concat with last four elements, join back to a string

  // alternative solution, using padStart() string method
  return cc.slice(-4).padStart(cc.length,'#')
}

console.log(maskify("4556364607935616")) // => "############5616"

// *** Double Char - 8 kyu
/*
  Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

  Examples (Input -> Output):
  * "String"      -> "SSttrriinngg"
  * "Hello World" -> "HHeelllloo  WWoorrlldd"
  * "1234!_ "     -> "11223344!!__  
*/

function doubleChar(str) {
  // Initial solution
  // let doubledStr = "";
  // for (let char of str) {
  //   doubledStr += char + char;
  // }
  // return doubledStr;

  // more modern solution:
  return str.split('').map(char => char + char).join('');
}

// console.log(doubleChar("String" ))
// console.log(doubleChar("Hello World"))
// console.log(doubleChar("1234!_ "))

// *** Ones and Zeros - 7 kyu
/* 
 Given an array of ones and zeroes, convert the equivalent binary value to an integer.
 Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
*/

function binaryArrayToNumber(arr) {
  return parseInt(Number(arr.join("")), 2); // convert arr to string, wrap with Number to ensure proper type, use parseInt w/radix argument to convert to base 2
}

// *** Mumbling - 7 kyu
/*
  Examples:
  accum("abcd") -> "A-Bb-Ccc-Dddd"
  accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  accum("cwAt") -> "C-Ww-Aaa-Tttt"

  first letter of every sequence is always capitalized
  subsequent letters always lowercase
  display each char (index + 1) num times

*/

function accum(s) {
  // const result = []; // initialize an empty array
  // const lowerStr = s.toLowerCase(); // change str to lowercase

  // for (let i = 0; i < lowerStr.length; i++) { // loop through lowerStr
  //   let str = lowerStr[i].toUpperCase(); // make new str w/each first char upperCase
  //   for (let j = 0; j < i; j++) { // loop through each char up to index number
  //     str += lowerStr[i]; // concat same char, lowercased, to str
  //   }
  //   result.push(str) // push each str as element of result array
  // }

  // return result.join("-");

  // using split, map, repeat, join
  return s.split('').map((char, index) => (char.toUpperCase() + char.toLowerCase().repeat(index))).join('-');

  // same as above, but with spread
  // return [...s].map((char, index) => (char.toUpperCase() + char.toLowerCase().repeat(index))).join("-")
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));


// *** Uppercase a string of words - 7 kyu
function upperCaseAString(str) {
  const strArr = str.split(' '); // split the string into an array of individual words
  return strArr.map(word => { // use map to create a new array
    return word[0].toUpperCase() + word.substring(1); // populate array with each first word capitalized, substring to append rest of word
  }).join(" "); // join the array of capitalized words back into a string
}


// *** Square(n) Sum - 8 kyu
/*
  Complete the squareSum function so that it squares each number passed into it and then sums the results together
  Example: [1,2,2] => 9
*/
function squareSum(nums) {
  return nums.reduce((sum, num) => sum + (num * num), 0);
  // or, using forEach
  // let sum = 0;
  // nums.forEach(num => {
  //   sum += num * num;
  // })
  // return sum;
}


// *** Vowel Count - 7 kyu
// Return the number of vowels in a given string
function getCount(str) {
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of str) {
    for (let vowel of vowels) {
      if (char === vowel) {
        vowelsCount += 1;
      }
    }
  }
  return vowelsCount;
}


// *** Two to One - 7 kyu
/*
 Take 2 strings which each include only letters from a to z, return a new sorted string, the longest possible, containing distinct letters, each taken only once, coming from string one and two.

 Note: This is a poorly and unclear worded challenge description. 
*/
function longest(s1,s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}


// *** Shortest Word - 7 kyu *** //
/* 
  Givin a string of words, return the length of the shortest word(s)
  String will never be empty, no need to account for different data types
*/

function findShort(str) {
  // my initial solution:
  // split str to array, transform to lengths with map, sort lengths with sort
  const sortedStrArr = str.split(' ').map(word => word.length).sort((a,b) => a -b);
  return sortedStrArr[0]; // return first element of sorted array

  // a more concise implementation using Math.min and spread operator:
  // return Math.min(...str.split(' ').map (str => str.length));
}

// *** Exes and Ohs - 7 kyu *** //
/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/
function XO(str) {
  // *** long form solution for step-by-step understanding:
  str = str.toLowerCase(); // make the string lowercase
  const strArr = str.split('') // split the string into an array
  const xArr = strArr.filter(char => { // filter the 'x' chars, assign as xArr
    return char === 'x';
  });
  const oArr = strArr.filter(char => { // filte the 'o' chars, assign as oArr
    return char === 'o';
  })
  return xArr.length === oArr.length ? true : false; // compare array lengths


  // *** A more consise implementation of above:
  // str = str.toLowerCase().split('');
  // return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

// *** Isograms - 7 kyu *** //
/*
  Implement a function that determines whether a string that contains only letters is an isogram.
  Isogram is a word that has no repeating letters, consecutive of non-consecutive.
  Assume empty string is an isogram.
*/

function isIsogram(str) {
  str = str.toLowerCase ();
  for (let i=0; i < str.length ; i++) {
    for (let j= i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
}

// *Examples:
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// *** Find the unique number - 6 kyu *** //
/*
  There is an array with some numbers. All numbers are equal except for one. Try to find it!

  findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
  findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
*/
function findUniq(arr) {
  return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num))

  // an alternative solution using sort() and pop() with a ternary
  // arr.sort((a,b) => a - b);
  // return arr[0] == arr[1] ? arr.pop() : arr[0]
}


// **** List Filtering - 7kyu *** //
/*
  In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

  Examples:
  filter_list([1,2,'a','b']) == [1,2]
  filter_list([1,'a','b',0,15]) == [1,0,15]
  filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/
function filter_list(arr) {
  // Return a new array with the strings filtered out
  return arr.filter((item) => typeof item === 'number')
}

// Get the Middle Character - 7kyu
/*
  You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

  #Examples:

  Kata.getMiddle("test") should return "es"
  Kata.getMiddle("testing") should return "t"
  Kata.getMiddle("middle") should return "dd"
  Kata.getMiddle("A") should return "A"
*/

function getMiddle(str) {
  // let postion;
  // let length; 
  // if (str.length % 2 === 1) { // if the string has an even length;
  //   postion = str.length / 2;
  //   length = 1;
  // } else { // if the string has an even length;
  //   postion = str.length / 2 - 1;
  //   length = 2;
  // }
  // return str.substring(postion, postion + length)

  // A more concise, moden method
  return s.substring(Math.ceil(s.length / 2) - 1, Math.floor(s.length /2 ) + 1)
}

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

// *** MakeUpperCase - 8kyu
// Write a function which converts the input string to uppercase.

const makeUpperCase = str => str.toUpperCase();

// *** Convert a Boolean to a String - 8 kyu
function booleanToString(b) {
  return b.toString();

  // alternatively 
  // return b ? 'true' : 'false';
}

// *** Rock Paper Scissors - 8 kyu 
const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!'; // account for same throw

  if (p1 === 'rock' && p2 === 'scissors' ||
      p1 === 'paper' && p2 === 'rock' ||
      p1 === 'scissors' && p2 === 'paper') {
        return 'Player 1 won!';
      } else {
        return 'Player 2 won!';
      }
}