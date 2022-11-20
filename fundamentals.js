// *** Code Wars Challenges - Fundamentals Only  *** //
// ************************************************* //
// ************************************************* //
// *** All challenges completed using JavaScript *** //
// ************************************************* //

// *** Coding Meetup #4 - Find first Python dev - 7 kyu
/*
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

Your task is to return one of the following strings:

< firstName here >, < country here > of the first Python developer who has signed up; or
There will be no Python developers if no Python developer has signed up.
For example, given the following input array:

var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];
your function should return Victoria, Puerto Rico.

Notes:
The input array will always be valid and formatted as in the example above.
*/
var pythonList = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

function getFirstPython(list) {
  // ** using some and filter (submitted)
  // if (!list.some(dev => dev.language === 'Python')) { // check if there's no Python devs
  //   return 'There will be no Python developers';
  // } 
  // const pythonDevs = list.filter(dev => dev.language === 'Python')[0]; // get first dev
  // return `${pythonDevs.firstName}, ${pythonDevs.country}`;

  // cleaner, using find:
  // find gets the first element in the array that passes the test
  const dev = list.find(el => el.language === 'Python');
  return dev ? `${dev.firstName}, ${dev.country}` : 'There will be no Python developers';

  // with a simple for loop
  // for (let i = 0; i < list.length; i++) {
  //   if (list[i].language === 'Python') {
  //     return list[i].firstName + ', ' + list[i].country;
  //   }
  // }
  // return 'There will be no Python developers';

}


// *** Coding Meetup #3 - Ruby coming? - 7 kyu
/*
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if at least one Ruby developer has signed up; or
false if there will be no Ruby developers.
For example, given the following input array:

var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];
your function should return true.

Notes:

The input array will always be valid and formatted as in the example above.
*/
function isRubyComing(list) {
  // ** using some method
  return list.some(dev => dev.language === 'Ruby');

  // with for... of loop, count variable, conditional, and ternary
  // let rubyCount = 0;
  // for (const dev of list) {
  //   if (dev.language === 'Ruby') {
  //     rubyCount += 1;
  //   }
  // }
  // return rubyCount ? true : false;
}


// *** max diff easy - 7 kyu
/*
You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

- lst contains integers, that means it may contain some negative numbers
- if lst is empty or contains a single element, return 0
- lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
*/

function maxDiff(list) {
  // ** Math.max and min with ternary (submitted)
  return list.length ? Math.max(...list) - Math.min(...list) : 0;

  // using a for loop with Math.min/max
  // if (list.length <= 1) {
  //   return 0;
  // }

  // let min = list[0];
  // let max = list[0];

  // for (let i = 1; i < list.length; i += 1) {
  //   const current = list[i];
  //   min = Math.min(min, current);
  //   max = Math.max(max, current);
  // }

  // return max - min;

}


// *** Coding Meetup #1 - Count JS devs coming from Europe - 7 kyu
/*
You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

Your task is to return the number of JavaScript developers coming from Europe.

For example, given the following list:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];
your function should return number 1.

If, there are no JavaScript developers from Europe then your function should return 0.

Notes:
- The format of the strings will always be Europe and JavaScript.
- All data will always be valid and uniform as in the example above.
*/

const list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

function countDevelopers(list) {
  // check for language = 'JavaScript' && continent = 'Europe'
  // with for loop and conditional
  // let count = 0;
  // for (let dev of list) {
  //   if(dev.language === 'JavaScript' && dev.continent === 'Europe') {
  //     count += 1;
  //   }
  // }
  // return count;
  // ** with filter (submitted)
  return list.filter(dev => {
    return dev.language === 'JavaScript' && dev.continent === 'Europe'
  }).length;

}



// *** Lost numbers in number sequence - 7 kyu
/*
An ordered sequence of numbers from 1 to N is given. One number might have been deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

Examples:
findDeletedNumber([1,2,3,4,5], [3,4,1,5]) => 2
findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]) => 5
findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]) => 0
*/
function findDeletedNumber(arr, mixArr) {
  // ** with filter, includes, and ternary checking for truthy/falsy (submitted)
  // let lostNum = arr.filter(x => !mixArr.includes(x))[0]
  // return !lostNum ? 0 : lostNum;

  // using filter, indexOf and or operator:
  return arr.filter(num => mixArr.indexOf(num) === -1)[0] || 0;

  // using reduce to copare the sum of each array value:
  // let arrSum = arr.reduce((a,b) => a + b, 0);
  // let mixArrSum = mixArr.reduce((a,b) => a + b, 0);
  // return arrSum - mixArrSum;

}

// *** Parts of a list - 7 kyu
/*

(partlist(["I", "wish", "I", "hadn't", "come"]) =>

  [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])

(partlist(["cdIw", "tzIy", "xDu", "rThG"]) =>  [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]])
(partlist(["vJQ", "anj", "mQDq", "sOZ"]) => [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]])

*/
function partlist(arr) {
  // ** with map, slice, join
  // return arr.map((el, idx) => [arr.slice(0, idx).join(' '), arr.slice(idx).join(' ')]).slice(1);

  // with a for loop, push, slice and join
  const resultArr = [];
  for (let i = 1; i < arr.length; i += 1) {
    const newArr = [];
    newArr.push(arr.slice(0, i).join(' '));
    newArr.push(arr.slice(i).join(' '));
    resultArr.push(newArr);
  }
  return resultArr;
}




// *** Substring fun - 7 kyu
/*
Complete the function that takes an array of words.

You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

For example:

["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
  n=0     n=1     n=2
Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.

*/
function nthChar(words) {
  // ** with a simple for loop
  let result = '';
  for (let i = 0; i < words.length; i++) {
    result += words[i][i]
  }
  // return result;

  // ** with map and join (submitted solutio)
  return words.map((word, index) => word[index]).join('');

}


// *** Odd-Even String Sort - 7 kyu
/*
Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces
input: 'CodeWars'
output 'CdWr oeas'

S[0] = 'C'
S[1] = 'o'
S[2] = 'd'
S[3] = 'e'
S[4] = 'W'
S[5] = 'a'
S[6] = 'r'
S[7] = 's'
Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
odd ones are 1, 3, 5, 7, so the second group is 'oeas'
And the final string to return is 'Cdwr oeas'
*/
function sortMyString(s) {
  // ** with a for loop, placeholder variables, and ternary
  let evenIndexed = '';
  let oddIndexed = '';
  for (let i = 0; i < s.length; i++) {
    i % 2 === 0 ? evenIndexed += s[i] : oddIndexed += s[i]
  }
  // return evenIndexed.concat(' ', oddIndexed);

  // ** With split, filter, and join
  let even = s.split('').filter((char, idx) => idx % 2 === 0).join('');
  let odd = s.split('').filter((char, idx) => idx % 2 !== 0).join('');
  return even + ' ' + odd;

}

// *** Coding Meetup #2 - Greet deveolopers - 7 kyu
/*
You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an array where each object will have a new property 'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >?

For example, given the following input array:

var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

your function should return the following array:
[
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
];
Notes:

The order of the properties in the objects does not matter (except in COBOL).
The input array will always be valid and formatted as in the example above.
*/
function greetDevelopers(list) {
  // ** using a for...of loop to add the appropriate greeting property to each dev object
//   for (const dev of list) {
//     dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`;
//   }
//  return list;

 // same as above, but using forEach instead
//  list.forEach(dev => {
//   dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`;
//  })
//  return list;

  // with map and spread
  return list.map(dev => {
    return ({...dev, greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`})
  });


}



// *** Coding Meetup #11 - Find the average age - 7 kyu
/*
You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];
write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

Notes:
- The input array will always be valid and formatted as in the example above.
- Age is represented by a number which can be any positive integer.
*/
function getAverageAge(list) {
  // ** with a for...in loop and Math.round
  // accept an array of objects
  // get the 'age' property value of each object
  // sum the ages and divide by total of objects (list.length) 
  // return the average age
  // let ageSum = 0;
  // for (const obj in list) {
  //   ageSum += list[obj].age;
  // }

  // return Math.round(ageSum / list.length);

  // ** Using reduce with Math.round

  return Math.round(list.reduce((sum, dev) => sum + dev.age, 0) / list.length);

}


// *** Product Array (Array series #5) - 7 kyu
/*
Task
Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

Notes
- Array/list size is at least 2 .
- Array/list's numbers Will be only Positives
- Repetition of numbers in the array/list could occur.

Input >> Output Examples
productArray([12,20]) ==>  return [20,12]
Explanation:
- The first element in prod [] array 20 is the product of all array's elements except the first element

The second element 12 is the product of all array's elements except the second element .

productArray([1,5,2]) ==> return [10,2,5]
Explanation:
- The first element 10 is the product of all array's elements except the first element 1
- The second element 2 is the product of all array's elements except the second element 5
- The Third element 5 is the product of all array's elements except the Third element 2.

productArray([10,3,5,6,2]) return ==> [180,600,360,300,900]
Explanation:
- The first element 180 is the product of all array's elements except the first element 10
- The second element 600 is the product of all array's elements except the second element 3
- The Third element 360 is the product of all array's elements except the third element 5
- The Fourth element 300 is the product of all array's elements except the fourth element 6
- Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2
*/
function productArray(numbers) {
  // ** map to retun new array
  // for each num, use reduce to multiply all numbers in array
  // then divide result (from reduce) by the current num
  return numbers.map(num => numbers.reduce((preVal, curVal) => preVal * curVal) / num)
}


// *** The Office IV - Find a Meeting Room - kyu
/*
Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

'X' --> busy
'O' --> empty
If all rooms are busy, return "None available!"

['X', 'O', 'X'] => 1
['O','X','X','X','X'] => 0
['X','X','X','X','X'] => 'None available!');
*/
function meeting(x) {
  // ** with indexOf and ternary
  return x.indexOf('O') >= 0 ? x.indexOf('O') : 'None available!';
}



// *** The Office II - Boredom Score - 7 kyu
/*
Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'

{ tim: 'accounts', jim: 'accounts',
  randy: 'pissing about', sandy: 'finance', andy: 'change',
  katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
  john: 'retail', mr: 'pissing about' } => 'party time!'

{ tim: 'IS', jim: 'finance',
  randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
  katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
  alex: 'regulation', john: 'accounts', mr: 'canteen' } => 'i can handle this'
*/

function boredom(staff) {
  // ** Using Object.values with a switch statement and for of loop
  // const departArr = Object.values(staff)
  // let boredomScore = 0;

  // function updateScore(department) {
  //   switch (department) {
  //     case 'accounts':
  //       boredomScore += 1;
  //       break;
  //     case 'finance':
  //       boredomScore += 2;
  //       break;
  //     case 'canteen':
  //       boredomScore += 10;
  //       break;
  //     case 'regulation':
  //       boredomScore += 3;
  //       break;
  //     case 'trading':
  //     case 'change':
  //       boredomScore += 6;
  //       break;
  //     case 'IS':
  //       boredomScore += 8;
  //       break;
  //     case 'retail':
  //       boredomScore += 5;
  //       break;
  //     case 'cleaning':
  //       boredomScore += 4;
  //       break;
  //     case 'pissing about':
  //       boredomScore += 25;
  //       break;
  //     default:
  //       console.log('Unknown department')
  //       break;
  //   }
  // }

  // for (let dept of departArr) {
  //   updateScore(dept)
  // }

  // if (boredomScore >= 100) {
  //   return 'party time!!';
  // } else if (boredomScore > 80) {
  //   return 'i can handle this';
  // } else {
  //   return 'kill me now';
  // }

  // ** using object to assign scores, Object.keys, map, and reduce w/ternary
  const teams = { 
    'accounts'      : 1,
    'finance'       : 2,
    'canteen'       : 10, 
    'regulation'    : 3, 
    'trading'       : 6, 
    'change'        : 6,
    'IS'            : 8,
    'retail'        : 5,
    'cleaning'      : 4,
    'pissing about' : 25 }

  score = Object.keys(staff)
      .map(key => teams[staff[key]])
      .reduce((a,b) => a + b, 0);
      
  return score <= 80 ? 'kill me now' : (score > 100 ? 'party time!!' : 'i can handle this');    

}


// *** Simple string characters - 7 kyu
/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

("*'&ABCDabcde12345") => [4,5,5,3]. 
("Codewars@codewars123.com") => [1,18,3,2]
("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft") => [7,13,4,10])
--the order is: uppercase letters, lowercase, numbers and special characters.

function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}

console.log(containsSpecialChars('hello!')); // 👉️ true
console.log(containsSpecialChars('abc')); // 👉️ false
console.log(containsSpecialChars('one two')); // 👉️ false




*/
function simpleStrChars(str) {
  // const strArr = str.split('');
  // const specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;
  // const specCharArr = [];
  // for (let i = 0; i < specialChars.length; i += 1) {
  //   specCharArr.push(specialChars[i])
  // }
  // const numChars = ['0','1','2','3','4','5','6','7','8','9'];
  // const lowerChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // const upperChars = lowerChars.map(char => char.toUpperCase())
  // const resultSpecChars = strArr.filter(char => specCharArr.includes(char))
  // const resultNumChars = strArr.filter(char => numChars.includes(char));
  // const resultLowerChars = strArr.filter(char => lowerChars.includes(char));
  // const resultUpperChars = strArr.filter(char => upperChars.includes(char));

  // return [resultUpperChars.length, resultLowerChars.length, resultNumChars.length, resultSpecChars.length];

  // ** using regex with match 
  let upper = str.match(/[A-Z]/g)||[]
  let lower = str.match(/[a-z]/g)||[]
  let num = str.match(/[0-9]/g)||[]
  let spec = str.match(/[^A-Z0-9]/gi)||[]
  return [upper.length, lower.length, num.length, spec.length]

  // ** using a for loop, comparing each char
  // let result = [0, 0, 0, 0];
  // for (let i = 0; i < str.length; i += 1) {
  //   if (str[i].toLowerCase() > str[i]) {
  //     result[0] += 1;
  //   } else if (str[i].toUpperCase() < str[i]) {
  //     result[1] += 1;
  //   } else if (str[i] >= 0 && str[i] <= 9) {
  //     result[2] += 1;
  //   } else {
  //     result[3] += 1;
  //   }
  // }
  // return result;

}


// *** Product of Maximums of Array - 7 kyu
/*
Task
Given an array/list [] of integers , Find the product of the k maximal numbers.

Notes
- Array/list size is at least 3 .
- Array/list's numbers Will be mixture of positives , negatives and zeros
- Repetition of numbers in the array/list could occur.

Input >> Output Examples
maxProduct ([4, 3, 5], 2) ==>  return (20)
Explanation:
Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .

maxProduct ([8, 10 , 9, 7], 3) ==>  return (720)
Explanation:
Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is  8 * 9 * 10 = 720 .

maxProduct ([10, 8, 3, 2, 1, 4, 10], 5) ==> return (9600)
Explanation:
Since the size (k) equal 5 , then the subsequence of size 5 whose gives product of maxima is  10 * 10 * 8 * 4 * 3 = 9600 .

maxProduct ([-4, -27, -15, -6, -1], 2) ==> return (4)
Explanation:
Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is  -4 * -1 = 4 .
maxProduct ([10, 3, -1, -27] , 3)  return (-30)

*/
function maxProduct(numArr, size) {
  // ** sort array from high to low, slice the highest 'size' elements, use reduce to multiply nums
  return numArr.sort((a,b) => b - a).slice(0,size).reduce((acc, n) => acc * n);

  // using sort with a for loop
//   numArr = numArr.sort((a,b) => b - a);
//   let product = 1;
//   for (let i = 0; i < size; i++) {
//     product *= numArr[i]
//   }
//   return product;
}


// *** Array element parity - 7 kyu
/*
In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:

[1, -1, 2, -2, 3] => 3
3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4
-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3
(the only-positive or only-negative integer may appear more than once)
*/
function integerArrParity(arr) {
  // ** first, remove any duplicates from the arr - here, spreading the arr with Set
  // use reduce to add all integers in the noDups array
  // note: the negative/positive pairs cancel eachother out, resulting in the unique integer
  return [...new Set(arr)].reduce((a,b) => a + b, 0)

  // using find and includes
  // return arr.find(val => !arr.includes(-val));
}



// *** String Merge - 7 kyu
/*
Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

Examples
("hello", "world", "l")       ==>  "held"
("coding", "anywhere", "n")   ==>  "codi n ywhere"
("jason", "samson", "s")      ==>  "jasamson"
("wonderful", "people", "e")  ==>  "wondeople"
*/
function stringMerge(str1, str2, ltr) { 
  // ** get index of ltr in str1, str2 using indexOf, save as variables
  // const str1Target = str1.indexOf(ltr);
  // const str2Target = str2.indexOf(ltr);
  // // slice to get the beginning and end of str1/str2, add ltr inbetween
  // return str1.slice(0, str1Target) + ltr + str2.slice(str2Target + 1);

  // ** streamlined - slice w/indexOf inline, no need to add ltr:
  return str1.slice(0, str1.indexOf(ltr)) + str2.slice(str2.indexOf(ltr));
}


// *** All unique - 7 kyu
/*
Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
Example outputs:
hasUniqueChars("  nAa") => false (two spaces)
hasUniqueChars("abcdef") => true
hasUniqueChars("aA") => true (case sensitivity)
*/
function hasUniqueChars(str) {
  // ** change string to array of characters
  const strArr = str.split('')
  // create a new object of only unique characters using Set
  const uniqueChars = new Set(strArr)
  // compare size of uniqueChars with length of strArr
  uniqueChars.size === str.length;
  // succinctly:
  return new Set(str).size === str.length;

  // using split, every, and indexOf
  // return str.split('').every((el,i,arr) => {
  //   return arr.indexOf(el) === i;
  // })

  // using split, every, and lastIndexOf string method
  // return str.split('').every((el, i) => i === str.lastIndexOf(el));
}


// *** Multiply Word in String - 7 kyu
/*
You are to write a function that takes a string as its first parameter. This string will be a string of words.

You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

Example
modifyMultiply ("This is a string",3,5) => 'string-string-string-string-string'
*/
function modifyMultiply(str, loc, num) {
  // ** Using split, for loop, push, and join
  // const result = [];
  // // split string into an array, slice into a single element array
  // const strTarget= str.split(' ')[loc];
  // // join string with ('-') 'num' of times
  // for (let i = 0; i < num; i++) {
  //   result.push(strTarget)
  // }
  // return result.join('-');

  // ** use string methods split and slice with repeat
  // return (str.split(' ')[loc] + '-').repeat(num).slice(0, -1);

  // ** using Array constructor with fill, split, and join
  return Array(num).fill(str.split(' ')[loc]).join('-');
}


// *** Divide and Conquer - 7 kyu
/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

Correction for poor instructions (based on test case results): Total of string integers should be subtracted from number integers

Return as a number.
Examples:
[9, 3, '7', '3'] => 2
(12 - '10' = 2)
['5', '0', 9, 3, 2, 1, '9', 6, 7] => 14
(28 - '14' = 14)
*/
function divCon(x) {
  // ** With filter, typeof, map, and reduce
  // total string integers, convert to a number total
  const stringSum = x.filter(num => typeof num === 'string').map(Number).reduce((a,b) => a + b, 0);
  // total the number integers 
  const numSum = x.filter(num => typeof num === 'number').reduce((a,b) => a + b, 0);
  // subtract string total from num total
  // return value as number
  // return numSum - stringSum;

  // ** Streamlined with reduce, typeof, Number, and ternary
  return x.reduce((acc, cur) => typeof cur === 'number' ? acc + cur : acc - Number(cur), 0);


}


// *** Convert an array of strings to array of numbers - 7 kyu
/*
Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.
*/
function toNumberArray(stringArr) {
  // ** use map to iterate over stringArr, running Number on each element, returning a new array:
  return stringArr.map(Number);

  // using a for loop with unary (+) operator to convert the strings to numbers:
  // let result = [];
  // for (let i = 0; i < stringArr.length; i++) {
  //   result.push(+stringArr[i]);
  // }
  // return result;
}


// *** Maximum Triplet Sum (array series #7) - 7 kyu
/*
Task
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

Notes :
- Array/list size is at least 3 .
- Array/list numbers could be a mixture of positives , negatives and zeros .
- Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

Input >> Output Examples:
1- maxTriSum ([3,2,6,8,2,3]) ==> return (17)
Explanation:
As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

Note : duplications are not included when summing , (i.e) the numbers added only once .

2- maxTriSum ([2,1,8,0,6,4,8,6,2,4]) ==> return (18)
Explanation:
As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,

Note : duplications are not included when summing , (i.e) the numbers added only once .

3- maxTriSum ([-7,12,-7,29,-5,0,-7,0,0,29]) ==> return (41)
Explanation:
As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,

Note : duplications are not included when summing , (i.e) the numbers added only once .

*/
function maxTriSum(numbers) {
  // ** remove duplicates from array with filter
  // return numbers.filter((num, idx) => numbers.lastIndexOf(num) === idx)
  //   .sort((a,b) => b - a) // sort from high to low vals
  //   .slice(0,3) // get the first three elements 
  //   .reduce((currVal, prevVal) => currVal + prevVal, 0); // add the array elements w/reduce

  // *** using spread operator with Set to get an arrray of unique values
  // sorting unique array from high to low
  // destructuring to get first three elements
  // const [a, b, c, ...remaining] = [...new Set([...numbers])].sort((a,b) => b - a);
  // return a + b + c; // return sum

  // ** using spread operator with Set to get an arrray of unique values
  // following with sort, slice, and reduce similar to first solution
  return [...new Set(numbers)].sort((a,b) => b - a).slice(0, 3).reduce((a,b) => a + b, 0);

}


// *** Get key/value pairs as arrays - 7 kyu
/*
Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

Example:
keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]

Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?
*/
function keysAndValues(data) {
  // keys = Object.keys(data) => array of keys
  // values = Object.values(data) => array of values
  return [Object.keys(data), Object.values(data)];

  // Using a for in loop with hasOwnProperty
  // const keys = [];
  // const vals = [];
  // for (key in data) {
  //   if (data.hasOwnProperty(key)) {
  //     keys.push(key);
  //     vals.push(data[key])
  //   }
  // }
  // return [keys, vals];
}


// *** Smallest value of an array - 7 kyu
/*
Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0
*/
function min(arr, toReturn) {
  // 'value' | 'index'
  // ** using a ternary to check toReturn value, returing appropriate check
  return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));

  // a traditional if/else conditional version: 
  // if (toReturn === 'value') {
  //   return Math.min(...arr);
  // } else {
  //   return arr.indexOf(Math.min(...arr));
  // }

}


// *** Minimize Sum of Array (Array Series #1) - 7 kyu
/*
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size

Input >> Output Examples
minSum([5,4,2,3]) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22

minSum([12,6,10,26,3,24]) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342

minSum([9,2,8,7,5,4,0,6]) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74

*/
function minSum(arr) {
  // get max and min number in array, multiply the two nums 
  // get the next max and min number in array, multiply the two nums
  // ...and so on - add all the products together and return sum

  // ** Sort the array into descending order (max to min)
  const sortedArr = arr.sort((a,b) => b - a);
  let sum = 0; // initilize a sum variable
  // use a while loop to sum products of shifted/popped elements
  while (sortedArr.length) {
    sum += sortedArr.shift() * sortedArr.pop(); // shift/pop elements from ends of array
  }
  return sum;

  // ** Using reduce
  // return arr.sort((a,b) => a - b).reduce((prevVal, currVal) => prevVal + currVal * arr.pop(), 0)
}


// *** Flatten - 7 kyu
/*
Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
*/
function flatten(array) {
  // return array.flat()

  // ** using reduce with concat (my solution)
  return array.reduce((prevVal, currVal) => prevVal.concat(currVal), []);

  // ** using the spread operator with concat:
  // return [].concat(...array);

  // ** with nested for loop and instanceof Array
  // const res = [];
  // for(let i = 0; i < array.length; i++) {
  //   const el = array[i];
  //   if(el instanceof Array) {
  //     for(let j = 0; j < el.length; j++) {
  //       res.push(el[j]);
  //     }
  //   } else {
  //     res.push(el);
  //   }
  // }
  // return res;
}

// *** Maximum Product - 7 kyu
/*
Task:
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes:
Array/list size is at least 2.
Array/list numbers could be a mixmature of positives, negatives also zeroes .

Input >> Output Examples:
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.

adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
Explanation:
Max product obtained from multiplying 5 * 10  =  50 .

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
Explanation:
The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.
*/
function adjacentElementsProduct(array) {
  // ** using a for loop
  // let maxProduct = array[0] * array[1]; // set initial max product value

  // for (let i = 1; i < array.length; i++) { // loop through array, staring at position 1
  //   if (array[i] * array[i + 1] > maxProduct) { // test next adjacent num products
  //     maxProduct = array[i] * array[i + 1] // set a new maxProduct value
  //   }
  // }
  // return maxProduct; // return the maxProduct

  // ** using a for loop with Math.max
  const productsArray = []
  for(i = 0; i < array.length -1; i++){
    productsArray.push(array[i] * array[i +1]); // build an array of adjacent element products
  }  
  return Math.max(...productsArray) // spread productsArrary into Math.max, return max
}


// *** Even numbers in an array - 7 kyu
/*
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will not be empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/
function evenNumbers(array, number) {
  // ** use filter to get the even nums, then slice (number) of elements from the end of array
  return array.filter(num => num % 2 === 0).slice(-number);

  // ** using a for loop with push and splice array methods:
  // const evens = [];
  // for (let i = 0; i <= array.length; i++) {
  //   if (array[i] % 2 === 0) { // get the even numbers only
  //     evens.push(array[i]);
  //   }
  // }
  // console.log(evens)
  // // start at the length of evens -(number), delete (number)
  // return evens.splice(evens.length -number, number); // return spliced elements
}

// *** Sorted? yes? no? how? - 7 kyu
/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/
function isSortedAndHow(array) {
  // // ** preserve original array, make ascending/descending copies, stringify to compare
  // const sourceArr = JSON.stringify(array);
  // const ascendingArr = JSON.stringify([...array].sort((a,b) => a - b));
  // const descendingArr = JSON.stringify([...array].sort((a,b) => b - a));
  // // uses a ternary for comparison/return
  // return sourceArr === ascendingArr ? 'yes, ascending' 
  //       : sourceArr === descendingArr ? 'yes, descending'
  //       : 'no'

  // ** using join instead, also with ternary to make comparison/return value
  const strArr = array.join``;
  return strArr === array.sort((a, b) => a - b).join`` ? 'yes, ascending' :
          strArr === array.sort((a, b) => b - a).join`` ? 'yes, descending' : 'no';
}
 

// *** Fizz Buzz - 7 kyu
/*
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]
*/
function fizzbuzz(n) {
  // ** A traditional for loop w/conditional solution: 
  const result = [];
  for (let i = 1; i <= n; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }
  return result;

  // ** similar, but with a while loop and ternary:
  // let i = 1
  // let arr = [];
  // while(i <= n) {
  //   let fizz = (i % 3 == 0);
  //   let buzz = (i % 5 == 0);
  //   if (fizz || buzz) {
  //     arr.push((fizz ? "Fizz" : "") + (buzz ? "Buzz" : ""));
  //   }
  //   else {
  //     arr.push(i);
  //   }
  //   i++;
  // }
  // return arr;

}

// *** Row Weights - 7 kyu 
/*
Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Given an array of positive integers (the weights of the people), return a new array of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.

Input >> Output Examples

rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.
*/
function rowWeights(array) {
  // ** using filter and reduce
  // const team1 = array.filter((num, index) => {
  //   return index % 2 === 0;
  // }).reduce((a,b) => a + b, 0)
  // const team2 = array.filter((num, index) => {
  //   return index % 2 !== 0;
  // }).reduce((a,b) => a + b, 0)
  // return [team1, team2];

  // ** same code as above, streamlined for length 
  const team1 = array.filter((num, i) => i % 2 === 0).reduce((a,b) => a + b, 0);
  const team2 = array.filter((num, i) => i % 2 !== 0).reduce((a,b) => a + b, 0);
  return [team1, team2];

  // ** using forEach with a conditional:
  // let team1 = 0;
  // let team2 = 0;
  // array.forEach(function(num,index) {
  //   if (index % 2 == 0){
  //     team1 += num;
  //   } else{
  //     team2 += num;
  //   }
  // });
  // return [team1, team2];
}

// *** Factorial - 7 kyu
/*
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).
*/
function factorial(n) {
  // ** Using if/else conditional with a recusive function call
  // if (n < 0 || n > 12) {
  //   throw new RangeError("The argument must be between 0 and 12")
  // } else if (n === 0) {
  //     return 1;
  // } else {
  //     return n * factorial(n-1);
  //   }

  // ** using a ternary with the recursive call
  if (n < 0 || n > 12) {
    throw new RangeError("The argument must be between 0 and 12");
  }
  return n <= 1 ? 1 : n * factorial(n - 1)

  // ** using a While loop
  // let result = n;
  // if (n === 0 || n === 1) 
  //   return 1; 
  // while (n > 1) { 
  //   n--;
  //   result *= n;
  // }
  // return result;

}

// *** No oddities here - 7 kyu
/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/
function noOdds(values) {
  // ** simple use case for the filter method, returning array with odd number vals filtered out
  return values.filter(val => val % 2 === 0);

  // ** or, using a good 'ol for loop
  // const noOddsArr = [];
  // for (let i = 0; i < values.length; i++) {
  //   if (values[i] % 2 === 0) {
  //     noOddsArr.push(values[i])
  //   }
  // }
  // return noOddsArr;
}

// *** Don't give me five! - 7 kyu
/*
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!
*/
function dontGiveMeFive(start, end) {
  // ** my solution:
  // build the array within a range, populating with a for loop
  const numArr = []
  for (let i = start; i <= end; i++) {
    numArr.push(i)
  }
  // use map w/toString and filter w/includes to filter out vals with 5's, return the length
  return numArr.map(num => num.toString()).filter(val => !val.includes('5')).length;

// keep it within a for loop:
//  const result = [];
//  for (let i = start; i <= end; i++) {
//   if (!i.toString().includes('5')) {
//     result.push(i);
//   }
//  }
//  return result.length;
}

// *** Generate range of integers - 8 kyu
/*
Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

Task
Implement a function named

generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
generateRange(1, 10, 3) // should return array of [1,4,7,10]
Note
min < max
step > 0
the range does not HAVE to include max (depending on the step)
*/
function generateRange(min, max, step) {
  // ** using a for loop to push proper values
  let result = []; 
  for (let i = min; i <= max; i+= step) {
    result.push(i)
  }
  return result;

  // ** using a ternary with recursion:
  // return min > max ? [] : [min, ...generateRange(min + step, max, step)];
}


// *** Get Nth Even Number - 8 kyu
/*
Return the Nth Even Number

Example(Input --> Output)

1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466
The input will not be 0.
*/
function nthEven(n) {
  // ** multiply n by 2, minus 1
  return (n * 2) - 2;

}

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

// *** Sort array by string length - 7 kyu
/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/
function sortByLength(array) {
  // ** use sort to sort array elements by length
  return array.sort((a,b) => a.length - b.length);
}