// *** Welcome to my Code Wars Challenges record *** //
// *** All challenges completed using JavaScript *** //


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

