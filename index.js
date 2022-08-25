// *** Welcome to my Code Wars Challenges record *** //
// *** All challenges completed using JavaScript *** //

// *** Credit Card Mask - 7 kyu 
/*
  Write a function, maskify, which changes all but the last four characters into a "#"
  Example:  ""
*/
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, '#');
}

// *** doubleChar - 8 kyu
/*

*/

// *** Ones and Zeros - 7 kyu
/*

*/

// *** Mumbling - 7 kyu
/*

*/


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