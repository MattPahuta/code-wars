// *** Code Wars Challenges - Fundamentals Only  *** //
// ************************************************* //
// ************************************************* //
// *** All challenges completed using JavaScript *** //
// ************************************************* //


// *** The Supermarket Queue - 6 kyu
/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12

queueTime([2,2,3,3,4,4], 2) => 9

Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified above.

P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool
*/

function queueTime(customers, n) {

  const tills = new Array(n).fill(0);
  for (let time of customers) {
    let idx = tills.indexOf(Math.min(...tills));
    tills[idx] += time;
  }
  return Math.max(...tills);


  // same as above but with forEach instead  of for...of
  // let tills = Array(n).fill(0);
  
  // customers.forEach((customer) => {
  //   let nextTill = tills.indexOf(Math.min(...tills))
  //   tills[nextTill] += customer;
  // });

  // return Math.max(...tills);

}




// *** Array combinations - 6 kyu
/*
In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.
*/
function uniqueArrays(arr) {
  // accept array of arrays
  // map over parent array to eliminate dups within sub-arrays
  // reduce parent array by sub-array length to get total combinations

  // concise version of below code
  return arr.map((arr) => [...new Set(arr)].length)
    .reduce((product, value) => product * value);


  const noDupsLengths = arr.map(subArr => [...new Set(subArr)])
    .map(arr => arr.length);

  return noDupsLengths.reduce((product, value) => product * value);

}


// *** Codecademy Challenge *** //
function encrypt(plainText, shiftNum) {

  const plainTextArray = plainText.toUpperCase().split('');

  const encryptArray = plainTextArray.map(char => {
    let charCode = char.charCodeAt(0);
    if (charCode <= 90 && charCode >= 65) {
      charCode += shiftNum;
      if (charCode > 90) {
        charCode -= 26;
      }
      return charCode
    } else {
      return charCode
    }
  }) // results in array of updated codes

  return encryptArray.map(code => String.fromCharCode(code)).join(''); // => upperCase encrypted string

}

function decrypt(encryptString, shiftNum) {
  const encryptStringArray = encryptString.toLowerCase().split('');

  const decryptArray = encryptStringArray.map(char => {
    let charCode = char.charCodeAt(0);
    if (charCode <= 122 && charCode >= 97) {
      charCode -= shiftNum;
      if (charCode < 97) {
        charCode += 26;
      }
      return charCode
    }
    return charCode;
  })

  return decryptArray.map(code => String.fromCharCode(code)).join(''); // return decrypted string;
}
 


// *** zipWith - 6 kyu
/*
Task
zipWith ( or zip_with ) takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
The function value is one new array.

If the arrays are of unequal length, the output will only be as long as the shorter one.
(Values of the longer array are simply not used.)

Inputs should not be modified.

Examples
zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both forms are valid
zipWith( (a,b) => a+b, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both are functions
*/

function zipWith(fn, arr1, arr2) {
  // get the shorter array
  // run map on shorter array


  // with slice and map
  // use slice to make arr lengths equal (if needed)
  return arr1.slice(0, arr2.length).map((el, i) => {
    return fn(el, arr2[i]);
  })
  

  // similar, but with ternary instead of slice
  let shorter = arr2.length > arr1.length ? arr1 : arr2;
  return shorter.map((el, i) => fn(arr1[i], arr2[i]));

  // with Math.min, a for loop, and push
  const resultArr = [];
  const shortestLength = Math.min(arr1.length, arr2.length);

  for (let i = 0; i < shortestLength; i++) {
    resultArr.push(fn(arr1[i], arr2[i]))
  }

  return resultArr;

}


// *** Codecademy Intermediate JS challenge - groceries()
/*
Write a function groceries() that takes an array of object literals of grocery items. 

The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. 

Make sure spaces (' ') are inserted where they are appropriate.

Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'

groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'

groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'
*/
function groceries(arrayOfObjects) {
  const groceryItems = arrayOfObjects.map(obj => obj.item);
  let listString = ''
  if (groceryItems.length === 1) return listString += groceryItems[0];
  if (groceryItems.length === 2) return groceryItems.join(' and ');

  console.log(groceryItems)
  const firstItems = groceryItems.slice(0, groceryItems.length -1).join(', ')
  const lastItem =  groceryItems.slice(groceryItems.length -1).join(' and ')

  return firstItems + ' and ' + lastItem;

}

// *** Codecademy Intermediate JS challenge - subLength()
/*
Write a function subLength() that takes 2 parameters, a string and a single character. 

The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. 

If there are less than 2 or more than 2 occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0
*/

function subLength(string, char) {
  // if char occurs in string < 2 or > 2 - return 0;
  // get first occurrence index and second occurrence index
  // use .slice(first occurrence index, second occurrence index + 1)
  // return length of sliced string
  const charIndices = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) charIndices.push(i);
  }
  
  if (charIndices.length < 2 || charIndices.length > 2) {
    return 0;
    console.log('trip wire')
  }

  return string.slice(charIndices[0], charIndices[1] + 1).length
}



// *** Codecademy Intermediate JS challenge - howOld()
/*

Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:

If the year is in the future, you should return a string in the following format:
'You will be [calculated age] in the year [year passed in]'
 
If the year is before they were born, you should return a string in the following format:
'The year [year passed in] was [calculated number of years] years before you were born'
 
If the year is in the past but not before the person was born, you should return a string in the following format:
'You were [calculated age] in the year [year passed in]'
*/
function howOld(age, year) {
  const currentDate = new Date(); 
  const currentYear = currentDate.getFullYear();
  const yearDifference = year - currentYear;
  const newAge = age + yearDifference;
  const birthYear = currentYear - age;

  if (newAge > age) { // good
    return `You will be ${newAge} in the year ${year}`;
  } else if (newAge < 0) {
    return `The year ${year} was ${birthYear - year} years before you were born`;
  } else {
    return `You were ${newAge} in the year ${year}`;
  }

  /*
  If the newAge is less than 0, this means the year provided was before the person was born. 

  If the newAge is greater than their current age, this means the year passed in is in the future. 

  Otherwise, we know the year provided was in the past but not before they were born.
  */
}

// *** Alphabet war - airstrike - letters massacre - 6 kyu
/*
Task
Write a function that accepts a fight string which consists of only small letters and * which represents a bomb drop place. Return who wins the fight after bombs are exploded. When the left side wins return Left side wins!, and when the right side wins return Right side wins!. In other cases, return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3 
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3 
 d - 2
 z - 1
The other letters don't have power and are only victims.
The * bombs kill the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );

alphabetWarAirstrike("s*zz");           //=> Right side wins!
alphabetWarAirstrike("*zd*qm*wp*bs*"); //=> Let's fight again!
alphabetWarAirstrike("zzzz*s*");       //=> Right side wins!
alphabetWarAirstrike("www*www****z");  //=> Left side wins!
*/

function alphabetWarAirstrike(str) {
  // const strArr = str.split('');

  // const resultArr = [];

  // for (let i = 0; i < strArr.length; i++) {
  //   if (strArr[i - 1] !== "*" && strArr[i + 1] !== "*") {
  //     resultArr.push(strArr[i])
  //   }
  // }
  
  // const fightToScore = resultArr.join('');

  // with split and filter
  const fight = str.split('').filter((letter, i, arr) => {
    if (arr[i - 1] !== "*" & arr[i + 1] !== "*") {
      return letter;
    }
  })

  // helper function to handle scoring the fight
  function scoreFight(arr) {
    let leftScore = 0;
    let rightScore = 0;

    for (let char of arr) {
      switch (char) {
        case 'w': leftScore += 4; break;
        case 'p': leftScore += 3; break;
        case 'b': leftScore += 2; break;
        case 's': leftScore += 1; break;
        case 'm': rightScore += 4; break;
        case 'q': rightScore += 3; break;
        case 'd': rightScore += 2; break;
        case 'z': rightScore += 1; break;
      }
    }

    return leftScore > rightScore ? "Left side wins!" 
      : rightScore > leftScore 
      ? "Right side wins!" 
      : "Let's fight again!";
  }

  return scoreFight(fight);

}


// *** Pair of Gloves - 6 kyu
/*
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/
function numberOfPairs(gloves) {

  // with Set, for...of, filter, Math.floor
  const uniques = new Set(gloves);
  let amount = 0;
  for (let unique of uniques) {
    const count = Math.floor(gloves.filter((pair) => pair === unique).length / 2);
    amount += count;
  }
  return amount;

  // with for...of loop, hasOwnProperty, object
  let pairs = 0;
  const counts = {};

  for (let color of gloves) {
    if (!counts.hasOwnProperty(color)) {
      counts[color] = 0;
    }
    if (++counts[color] === 2) {
      counts[color] -= 2;
      pairs++;
    }

  }
  return pairs;



  // with a object to hold pairs, forEach, Object.values, and reduce
  let pairObj = {};

  gloves.forEach(glove => {
    pairObj[glove] = pairObj[glove] ? pairObj[glove] + 1 : 1;
  });

  return Object.values(pairObj).reduce((acc, curr) => {
    acc += Math.floor(curr / 2)
    return acc;
  }, 0);


}






// *** Mexican Wave - 6 kyu
/*

Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

Rules
 1.  The input string will always be lower case but maybe empty.
 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/
function wave(str) {

  // with spread, map, slice, toUppercase, and filter
  return [...str].map((el, i) => {
    // for each el in the str array, slice beginning of str up to i
      // concat with the el toUpperCase and str sliced from current index + 1
    return str.slice(0,i) + el.toUpperCase() + str.slice(i + 1)
  }).filter(x => x !== str)


  // with a for loop, split, toUpperCase, push, and join
  const waveArr = []; // array to hold result

  for (let i = 0; i < str.length; i++) {
    let strArr = str.split(''); // split str into array, assign to variable
    if (strArr[i] !== ' ') { // check for empty char in strArr
      strArr[i] = strArr[i].toUpperCase(); // change the current index of strArr to uppdercase
      waveArr.push(strArr.join('')) // push the joined, updated strArr to the waveArr
    }
  }
  return waveArr;


}



// *** Coding Meetup #9 - Is the meetup age diverse? - 6 kyu
/*
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];
your function should return true as there is at least one developer from each age group.
Notes:
The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer up to 199.
*/

function isAgeDiverse(list) {
  // with map and some
  const ageReps = list.map(dev => dev.age)
    if (
      ageReps.some(dev =>(dev >= 13 && dev < 20)) &&
      ageReps.some(dev =>(dev >= 20 && dev < 30)) &&
      ageReps.some(dev =>(dev >= 30 && dev < 40)) &&
      ageReps.some(dev =>(dev >= 40 && dev < 50)) &&
      ageReps.some(dev =>(dev >= 50 && dev < 60)) &&
      ageReps.some(dev =>(dev >= 60 && dev < 70)) &&
      ageReps.some(dev =>(dev >= 70 && dev < 80)) &&
      ageReps.some(dev =>(dev >= 80 && dev < 90)) &&
      ageReps.some(dev =>(dev >= 90 && dev < 100)) &&
      ageReps.some(dev =>(dev >= 100)) 
    ) {
      return true;
    } else {
      return false;
    }

}


// *** Find min and max - 7 kyu
/*
Implement a function that returns the minimal and the maximal value of a list (in this order).
*/
function getMinMax(arr) {
  // use Math.min/max with spread operator
  return [Math.min(...arr), Math.max(...arr)];

  // with a sorted array
  const sortedArr = arr.sort((a,b) => a - b);
  return [sortedArr[0], sortedArr[sortedArr.length - 1]];
}


// *** Evens times last - 7th kyu
/*
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.
*/
function evenLast(numbers) {
  //with filter, reduce, short circuting
  return numbers.filter((num, i) => i % 2 === 0).reduce((a,b) => a + b, 0) * numbers[numbers.length - 1] || 0;

  // with forEach
  if (numbers.length < 1) return 0;
  let evensSum = 0;
  numbers.forEach((num, i) => {
    if (i % 2 === 0) evensSum += num;
  })
  return evensSum * numbers[numbers.length - 1]

}


// *** Between Extremes - 7th kyu 
/*
Given an array of numbers, return the difference between the largest and smallest values.

For example:

[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.
*/
function betweenExtremes(numbers) {
  // with Math.max/min and spread
  return Math.max(...numbers) - Math.min(...numbers);
}


// *** Array Array Array - 7th kyu
/*
You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
*/
function explode(x) {
  const valOne = x[0];
  const valTwo = x[1];
  const resultArray = [];
  let score = 0;

  // if both elements are numbers
  if (typeof valOne === 'number' && typeof valTwo === 'number') {
    score = valOne + valTwo;
  // if only one array element is a number?
  } else if (typeof valOne === 'number') {
    score = valOne;
  } else if (typeof valTwo === 'number') {
    score = valTwo;
  } else {
    return 'Void!';
  }

  for (let i = 0; i < score; i++) {
    resultArray.push(x)
  }


  return resultArray;

}



// *** Coding Meetup #7 - Find the most senior developer - 6 kyu
/*
You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

For example, given the following input array:

var list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];
your function should return the following array:

[
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]
Notes:

The input array will always be valid and formatted as in the example above and will never be empty.
*/

function findSenior(list) {
  
  // with Math.max, map, and filter
  const maxAge = Math.max(...list.map(dev => dev.age)); // i.e. 49
  return list.filter(dev => dev.age === maxAge);

  // more concise of above solution
  return list.filter(dev => dev.age === Math.max(...list.map(dev => dev.age)));

  // *** with sort and filter
  // accept a list of dev objects 
  // sort dev array from oldest to youngest, get first element
  const oldestDev = list.sort((a, b) => b.age - a.age)[0]
  // filter original list for any devs the same age as oldest
  return list.filter(dev => dev.age === oldestDev.age);

  // with forEach and filter
  let maxAge2 = 0;
  list.forEach(({age}) => { // destructure age from object
    if (age > maxAge2) {
      maxAge2 = age;
    }
  });
  return list.filter(dev => dev.age === maxAge2)

}



// *** Coding Meetup #8 - Will all continents be represeted? - 6 kyu
/*
You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
false otherwise.
For example, given the following input array:

const devsList = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];
your function should return true as there is at least one developer from the required 5 geographic zones.

Notes:

The input array and continent names will always be valid and formatted as in the list above for example 'Africa' will always start with upper-case 'A'.
*/
function allContinents(list) {
  // with new Set, map, and size
  return new Set(list.map(dev => dev.continent)).size === 5; // check there are 5 unique elements 

  const allZones = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  // with every and some
  return allZones.every(x => list.some(y => x === y.continent));

  // with map and a checker function (every, includes)
  const devZones = list.map(dev => {
    return dev.continent;
  })

  const checker = (arr, target) => target.every(v => arr.includes(v));
  return checker(devZones, allZones); 
}



// *** Coding Meetup #16 - Ask for missing details - 6 kyu
/*
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
write a function that

adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value in JavaScript, with the default value in COBOL). The value of the question property should be the following string:
Hi, could you please provide your <property name>.

and returns only the developers with missing details:
[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  question: 'Hi, could you please provide your language.' }
]
Notes:

At most only one of the values will be null / empty.
Preserve the order of the original list.
Return an empty array [] if there is no developer with missing details.
The input array will always be valid and formatted as in the example above.
*/
const devList = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

function askForMissingDetails(list) {
  // iterate over list of dev objects
  // filter devs who have a null value property
  // add a question property to dev object
  // let missingProp;

  // with filter and for...in
  return list.filter(dev => {
    for (const key in dev) {
      if (dev[key] === null) {
        console.log('key: ', key)
        dev.question = `Hi, could you please provide your ${key}.`
        return dev;
      }
    }
  });

  // with filter, Object.keys, and some
  return list.filter(dev => {
    return Object.keys(dev).some(key => dev[key] === null && (dev.question = `Hi, could you please provide your ${key}.`))
  })


  // with for...of, for...in loops
  const resultDevs = [];
  for (const dev of list) {
    for (const property in dev) {
      if (dev[property] === null) {
        // missingProp = property;
        const request = `Hi, could you please provide your ${property}.`
        // console.log('missingProp: ', property)
        dev.question = request;
        resultDevs.push(dev)
      }
    }
  }
  // return array of devs with missing details
  return resultDevs;


}

// *** Sum a list but ignore any duplicates - 7 kyu
/*
Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.

More examples: 
sumNoDuplicates([1, 1, 2, 3]) => 5
sumNoDuplicates([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]) => 21
sumNoDuplicates([1, 9, 9, 5, 7, 7, 6, 1, 5, 6]) => 0 
*/
function sumNoDuplicates(numList) {
  // take in an array of numbers
  // find numbers that are duplicated within the array
  // remove the numbers that are duplicated 
  // sum the remaining nums in the array

  const resultNums = numList.filter(num => {
    // if the first index of the num === the last index, it's unique in the array
    return numList.indexOf(num) === numList.lastIndexOf(num)
  })
  // use reduce method to sum the unqiue nums array 
  return resultNums.reduce((a,b) => a + b, 0);

  // can shorten to this
  // return numList.filter(num => numList.indexOf(num) === numList.lastIndexOf(num))
  //   .reduce((a,b) => a + b, 0);


  // also, can use this to get unique nums. I find above method clearer to understand
  const uniqueNums = numList.filter((num, idx) => {
    return numList.indexOf(num) === idx && numList.lastIndexOf(num) === idx;
  })

  // with a for loop and includes 
  const noDups = [];
  const dups = [];

  for (let i = 0; i < numList.length; i++) {
    if (!noDups.includes(numList[i])) {
      noDups.push(numList[i]);
    } else {
      dups.push(numList[i]);
    }
  }

  return noDups.filter(num => !dups.includes(num)).reduce((a,b) => a + b, 0)

}


// *** Count characters in your string - 6 kyu
/*

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

examples: 
countChars('aba') => {a: 2, b: 1}
*/
function countChars(str) {

  // with split and reduce
  return str.split('').reduce((counts, char) => {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {})


  // with split, forEach, and ternary
  let countsObj = {}
  str.split('').forEach((char) => {
    countsObj[char] ? countsObj[char] += 1 : countsObj[char] = 1
  });
  return countsObj;


  // with for...of loop and ternary
  const result = {}
  for (const char of str) {
    (!result[char]) ? result[char] = 1 : result[char] = result[char] + 1;
    }
  return result;

}


// *** Who likes it? - 6 kyu
/*
Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.
*/
function likes(names) {

  // with a switch statement
  switch(names.length) {
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }

  // ** simply with conditionals and template strings
  if (names.length === 0) {
    return 'no one likes this';
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }

}


// *** Duplicate Encoder - 6 kyu
/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
*/

function duplicateEncode(word) {
  // unique chars = "("
  // dup chars = ")"
  // using indexOf and lastIndexOf to check for uniqueness 
  return word.toLowerCase().split('').map((el, i, arr) => {
    return arr.indexOf(el) === arr.lastIndexOf(el) ? "(" : ")"
  }).join('')



  // using split, filter, indexOf, map and includes methods for primary logic
  const strArr = word.toLowerCase().split('')
  // get the duplicate characers:
  const arrOfDups = strArr.filter((char, i, arr) => { // compare index of nums with index first time it occurs
    return arr.indexOf(char) !== i; // if index does not match, means it's a dup
  }) 

  return strArr.map(el => !arrOfDups.includes(el) ? '(' : ')').join('')

}



// *** Combine Objects - 7 kyu
/*
Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
The combine function should be a good citizen, so should not mutate the input objects.
*/

function combineObjects(...args) {
  // with rest parameter, for of, for...in, and ternary
  const comboObj = {};

  for (let i = 0; i < args.length; i++) {
    for (let key in args[i]) {
      comboObj[key] = comboObj[key] ? comboObj[key] + args[i][key] : args[i][key]
    }
  }
  return comboObj;


  // ** with ...rest parameter, spread, for of and for...in loops
  // const objectsArr = [...args]
  // let resultObject = {}

  // for (let i = 0; i < objectsArr.length; i++) {
  //   for (const property in objectsArr[i]) {
  //     if (!resultObject[property]) {
  //       resultObject[property] = objectsArr[i][property];
  //     } else {
  //       resultObject[property] += objectsArr[i][property];
  //     }
  //   }
  // }
  // return resultObject;
}


// *** Equal Sides of an Array - 6 kyu
/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:
Let's say you are given the array [1,2,3,4,3,2,1] => 3
You are given the array [1,100,50,-51,1,1] => 1
You are given the array [20,10,-80,10,10,15,35] => 0

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.
*/
function findEvenIndex(arr) {
  // accept array of integers 
  // loop through array 
  // get an initial sum value
  // [] == [10,-80,10,10,15,35].reduce((a,b) => a + b, 0)

  // ** first success attempt, with slice, reduce, and loop
  // let leftSide = [];
  // let index = 0;
  // if (leftSide == arr.slice(1).reduce((a,b) => a + b, 0)) { // check first index condition
  //   return 0;
  // }

  // for (let i = 1; i < arr.length; i++) { // loop over array
  //   let left = arr.slice(0, i + 1).reduce((a,b) => a + b, 0); // left sum
  //   let right = arr.slice(i).reduce((a,b) => a + b, 0); // right sum
  //   if (left == right) {
  //     index = i;
  //   }
  // }
  // return index;

  // more concise, similiar to above: 
  let left = 0;
  let right = arr.reduce((a,b) => a + b, 0);
  for (let i = 0; i < arr.length; i++) {
    right -= arr[i];
    if (left === right) return i;
    left += arr[i];
  }
  return -1;

  // most concise, using findIndex with slice and reduce
  return arr.findIndex((el, i, arr) => arr.slice(0, i).reduce((a,b) => a + b, 0) == arr.slice(i + 1).reduce((a,b) => a + b, 0));

}


// *** Data Reverse - 6 kyu
/*
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1, 0,0,0,0,0,0,0,0, 0,0,0,0,1,1,1,1, 1,0,1,0,1,0,1,0]
*/
function dataReverse(data) {
  // accept an array of groups of 8 nums (octets), consisting of ones and zeros
  // split the array into equal octets 
  // return the octets in reverse order 

  // with unshift, slice, and spread
  const bytes = [];
  for (let i = 0; i < data.length; i += 8) { // iterate over data in 8 digit increments
    bytes.unshift(...data.slice(i, i + 8)); // slice off 8 digits for each iteration, populate bytes array
  }
  return bytes;

  // ** with while loop, push, splice, and flat method
  // const octetArr = [];
  // while (data.length > 0) {
  //   octetArr.push(data.splice(data.length - 8, 8))
  // }
  // return octetArr.flat()

  // streamlined while loop version
  // const result = [];
  // while (data.length) {
  //   result.push(...data.splice(-8));
  // }
  // return result;
}




// *** Bingo (or not) - 7 kyu
/*
For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

Examples:
bingo([1,2,3,4,5,6,7,8,9,10]) => "LOSE"
bingo([21,13,2,7,5,14,7,15,9,10]) => "WIN"
*/
function bingo(arr) {
  // accept an array of numbers
  // convert each num to corresponding uppercase letter
  // check if resulting letters include all of 'BINGO' => return 'WIN' or else return 'LOSE'
  // ** using supplied alpha order codes:
  return [2,7,9,14,15].every(el => arr.includes(el)) ? 'WIN' : 'LOSE';

  // ** with a boolean, forEach, and indexOf
  // let bingo = true;
  // [2,7,9,14,15].forEach(el => {
  //   if (arr.indexOf(el) === -1) bingo = false;
  // })
  // return bingo ? 'WIN' : 'LOSE';


  // ** with exlicit testing arrays, using map, fromCharCode, apply, split, every, includes...
  const bingoArr = ['B', 'I', 'N', 'G', 'O'];
  // convert array num to appropriate char code
  // 1 = 'A' (65) (num + 64 = char code)
  // 2 = 'B' (66)
  // 3 = 'C' (67)
  const charCodes = arr.map(num => {
    return num + 64;
  })
  // convert charCodes to string chars
  const charsArr = String.fromCharCode.apply(null, charCodes).split('')
  // check if stringChars array includes all elements from bingoArr
  return bingoArr.every(el => charsArr.includes(el)) ? 'WIN' : 'LOSE'



}


// *** Highest Scoring Word - 6 kyu
/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid

Examples:
highScoreWord('take me to semynak') => 'semynak'
highScoreWord('what time are we climbing up the volcano') => 'volcano'
highScoreWord('aaa b') => 'aaa'
*/
function highScoreWord(str) {
  // accept a string of words
  // split string into array of words
  // assign scores to each word based on letter position in alphabet
  // if tie, return first word in string

  // using split, map, reduce, charCodeAt, indexOf, Math.max
  // build score array - charCodeAt(index) - 96 equals proper value
  const newStrArr = str.split(' ')
  const newScoreArr = newStrArr.map(s => [...s].reduce((a,b) => a + b.charCodeAt(0) - 96, 0))
  return newStrArr[newScoreArr.indexOf(Math.max(...newScoreArr))];


  // *** using an object score key, split, map, indexOf, and Math.max (submitted)
  const aplhaKey = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26}
  const strArr = str.split(' ') // split into array of words

  const scoreArray = strArr.map(word => { // build array of scores corresponding to each word in strArr
    let score = 0;
    word.split('').map(letter => {
      score += aplhaKey[letter]; // get scores from alphKey object;
    })
    return score;
  })
  // get the index of the high score word (first word if tied)
  return strArr[scoreArray.indexOf(Math.max(...scoreArray))]
}



// *** Last Survivor  - 7 kyu
/*
You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.

Example:

let str = "zbk", arr = [0, 1]
    str = "bk", arr = [1]
    str = "b", arr = []
    return 'b'
Notes
The given string will never be empty.
The length of the array is always one less than the length of the string.
All numbers are valid.
There can be duplicate letters and numbers.
*/
function lastSurvivor(letters, coords) {
  // split the letters into an array of letters

  // with map
  const arr = [...letters];
  coords.map((el, i) => arr.splice(el,1));
  return arr[0];


  // with a for loop, split, splice, and join (submitted)
  // letterArr = letters.split('');
  // for (let i = 0; i < coords.length; i++) {
  //   letterArr.splice(coords[i],1)
  // }
  // return letterArr.join('')

  // simliar to for loop solution, but with for...of
  const strArr = [...letters];
  for (const i of coords) strArr.splice(i,1);
  return strArr[0];

}



// *** String array duplicates - 6 kyu
/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:
dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.
*/
function dupStringsArr(arr) {
  // accept an array of strings
  // split each string into an array of letters 
  // loop over letters and remove consecutive duplicates (slice)
  // join letter array back to string 
  // return array of strings
  
  // with map, split, filter, and join
  return arr.map(word => word.split('').filter((letter, index) => letter !== word[index + 1]).join(''))

  // with map and filter
  return arr.map(x => {
    return x.split('').filter((char, i, arr) => {
      return char !== arr[i - 1];
    }).join('');
  })


  // using map and for loops
  const strArrays = arr.map(str => {
    return str.split('')
  })
  const newOuter= []
  for (let i = 0; i < strArrays.length; i++) {
    const newInner = []
    for (let j = 0; j < strArrays[i].length; j++) {
      if (strArrays[i][j] !== strArrays[i][j + 1]) {
        newInner.push(strArrays[i][j])
      }
    }
    newOuter.push(newInner)
  }

  return newOuter.map(arr => arr.join(''));


}



// *** Reverse every other word in the string - 6 kyu
/*
Reverse every other word in a given string, then return the string. 

Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. 

Punctuation marks should be treated as if they are a part of the word in this kata.

Examples: 
("Reverse this string, please!") => "Reverse siht string, !esaelp"
("I really don't like reversing strings!") => "I yllaer don't ekil reversing !sgnirts"
*/
function reverseEveryOther(str) {
  // accept a string of words
  // ensure no whitespace from beginning or end of str
  // reverse every other word, beginning with second word
  // return new string 

  const arr = str.trim().split(' ');
  for (let i = 1; i < arr.length; i += 2) {
    arr[i] = arr[i].split('').reverse().join('');
  }
  return arr.join(' ');


  // with map, split, trim, reverse, join
  return str.trim().split(' ').map((word, idx) => {
    return (idx % 2 === 0) ? word : word.split('').reverse().join('');
  }).join(' ')

  // with a for loop, trim, split, reverse, join, push
  const strArr = str.trim().split(' ');
  const newArr = [];
  for (let i =0; i < strArr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(strArr[i])
    } else {
      newArr.push(strArr[i].split('').reverse().join(''))
    }
  }
  return newArr.join(' ')
}


// *** Find the missing element between two arrays - 7 kyu
/*
Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8

The first array will always have at least one element.
*/
function findMissing(arr1, arr2) {
  // accept two arrays
  // second array is dup of first with 1 element missing
  // return the missing element from arr 2
  // ** using sort and a for loop
  arr1 = arr1.sort((a,b) => a - b);
  arr2 = arr2.sort((a,b) => a - b);
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return arr1[i];
    }
  }

  // with reduce - comparing the difference in sum between the two arrays
  return arr1.reduce((pre, val) => pre + val) - arr2.reduce((pre, val) => pre + val, 0);
  
}







// *** Return the Missing Element - 7 kyu
/*
Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

Examples:
[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
*/

function getMissingElement(arr) {
  // accept an array containing integers from 0 to 9 inclusive
  // determine which number is missing from the sequence
  // return the missing number
  // ** Using find and indexOf methods (submitted)
  // const template = [0,1,2,3,4,5,6,7,8,9];
  // return template.find(num => arr.indexOf(num) === -1);

  // using a for loop and indexOf
  for (let i = 0; i < 10; i++) {
    if (arr.indexOf(i) === -1) return i;
  }

  // using filter and indexOf
  return [0,1,2,3,4,5,6,7,8,9].filter(num => {
    return arr.indexOf(num) === -1;
  })[0];
}


// *** Highest Rank Number in an Array - 6 kyu
/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

function highestRank(arr) {
  // accept an array of numbers
  // loop through array to find numbers that occur more than once
  // count the total number of each duplicate
  // return the duplicate number with the highst count occurrance within the array
  // ** with Set, map, filter, sort and a ternary
  // const uniqueNums = [...new Set(arr)];
  // const numCounts = uniqueNums.map(value => [value, arr.filter(num => num === value).length])
  // const highRankSort = numCounts.sort((a,b) => b[1] - a[1])
  // return highRankSort[0][1] > highRankSort[1][1] ? highRankSort[0][0] : Math.max(...arr);

  // a better way with sort and filter
  return arr.sort((a,b) => arr.filter(i => i === b).length - arr.filter(i => i === a).length)[0]

}


// *** Find the Duplicated Number in consecutive unsorted list - 7 kyu
/*
You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

The array is unsorted.

An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

You should return the duplicate value as a single integer.
*/
function findDup(arr) {
  // using filter and indexOf (submitted)
  return arr.filter((num, i, arr) => { // compare index of nums with index first time it occurs
    return arr.indexOf(num) !== i; // if index does not match, means it's a dup
  })[0] // return the single dup (can be expanded to return array with multiple dups)


  // with sort method and a for loop
  // arr.sort() // must sort arr first
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === arr[i + 1]) {
  //     return arr[i];
  //   }
  // }

  // with find, indexOf, and lastIndexOf
  // return arr.find(num => arr.indexOf(num) !== arr.lastIndexOf(num));
}



// *** Lottery Ticket - 6 kyu
/*
Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:
[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. 
* Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.
*/
function lottoTicket(ticket, win) {
  let miniWins = 0;

  // ** with forEach, includes, String, and fromCharCode (submitted)
  ticket.forEach(game => {
    if (game[0].includes(String.fromCharCode(game[1]))) {
      miniWins++;
    }
  });
  return (miniWins >= win) ? 'Winner!' : 'Loser!';


  // with nested for loops and charCodeAt method 
  for (let i = 0; i < ticket.length; i++) {
    for (let j = 0; j < ticket.length; j++) {
      console.log(ticket[i][0][j].charCodeAt())
      if (ticket[i][0][j].charCodeAt() === ticket[i][1]) {
        miniWins += 1;
        break;
      }
    }
  }

  return miniWins >= win ? 'Winner!' : 'Loser!';

}



// *** Take a Ten Minute Walk - 6 kyu
/*
Receive an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']);

You always walk a single block for each letter (direction)
It takes you one minute to traverse one city block
You must return to the starting point

isValidWalk(['n','s','n','s','n','s','n','s','n','s']) 'should return true');

isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']) 'should return false');

isValidWalk(['w']) 'should return false');

isValidWalk(['n','n','n','s','n','s','n','s','n','s']) 'should return false');


*/
function isValidWalk(walk) {
  // with for...of loop, conditionals, and ternary (submitted)
  // if (walk.length !== 10) return false;
  // let northSouth = 0;
  // let eastWest = 0;
  // // for every single block we walk, increment and decrement by 1
  // for (let dir of walk) {
  //   if (dir === 'n') northSouth += 1;
  //   if (dir === 's') northSouth -= 1; 
  //   if (dir === 'e') eastWest += 1;
  //   if (dir === 'w') eastWest -= 1;
  // }
  // return northSouth === 0 && eastWest === 0 ? true : false; 

  // with filter and ternary
  const north = walk.filter(dir => dir === 'n').length
  const south = walk.filter(dir => dir === 's').length
  const east = walk.filter(dir => dir === 'e').length
  const west = walk.filter(dir => dir === 'w').length

  return walk.length === 10 && north === south && east === west;

}


// *** Is every value in the array an array? - 7 kyu
/*
Is every value in the array an array?

This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

Examples:

[[1],[2]] => true
['1','2'] => false
[{1:1},{2:2}] => false

*/
function arrCheck(arr) {

  // with for...of loop and isArray method
  // for (let item of arr) {
  //   if (!Array.isArray(item)){
  //     return false;
  //   }
  // }
  // return true;

  // simplified with every method
  return arr.every(Array.isArray)

}



// *** Halving Sum - 7 kyu
/*
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
        n    n/2 n/4 n/8  n/16
*/
function halvingSum(n) {
  // with a while loop
  // let sum = 0;
  // while (n > 0) {
  //   sum += n;
  //   n = Math.floor(n / 2);
  // }
  // return sum;

  // with recursion
  if (n === 1) return n;
  return n + halvingSum(Math.floor(n / 2));

}


// *** Currying functions: multiply all elements in an array - 7 kyu
/*
To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:

multiplyAll([1, 2, 3]) (2) = [2, 4, 6];
You must not mutate the original array.
*/

function multiplyAll(arr) {
  // take in an array of integers 
  return (int) => arr.map(num => num * int);
}



// *** Switcheroo - 7 kyu
/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/
function switcheroo(str) {
  // accept string consisting of 'a', 'b', 'c'
  // switch positions of 'a' and 'b', leave instances of 'c' alone
  // ** using split, map, and join with a ternary (submitted)
  return str.split('').map(letter => {
    return letter === 'a' ? 'b' : letter === 'b' ? 'a' : 'c'
  }).join('')
}


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



// *** Sort the Gift Code - 7 kyu
/*
  Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

Examples (Input -- => Output):
"abcdef"                      -- => "abcdef"
"pqksuvy"                     -- => "kpqsuvy"
"zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"

*/
function sortGiftCode(code) {
  // ** with split,sort,join (submitted)
  return code.split('').sort().join('')
}



// *** Bumps in the Road - 7 kyu
/*
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

bump("__nn_nnnn__n_n___n____nn__nnn") => 'Woohoo!'
bump("_nnnnnnn_n__n______nn__nn_nnn") => 'Car Dead'
bump("______n___n_") => "Woohoo!"
*/
function bump(x) {

  // with split, filter and a ternary (submitted)
  return x.split('').filter(road => road === 'n').length <= 15 ? 'Woohoo!' : 'Car Dead';


  // with a for...of loop and ternary
  const roadArr = x.split('')
  let bumpCount = 0;
  for (let road of roadArr) {
    if (road === 'n') {
      bumpCount += 1
    }
  }

  return bumpCount <= 15 ? 'Woohoo!' : 'Car Dead';
}



// *** Find the vowels -  7 kyu
/*
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]

NOTES
- Vowels in this context refers to: a e i o u y (including upper case)
- This is indexed from [1..n] (not zero indexed!)
*/
function vowelIndices(word) {

  // ** with split, forEach, and indexOf (submitted after refactor)
  const vowels = 'aeiouy';
  const strArr = word.toLowerCase().split('');
  let result = [];
  strArr.forEach((letter, index) => {
    if (vowels.indexOf(letter) !== -1) { // check if the letter is within vowels
      result.push(index + 1);
    }
  });
  return result;


  // a long, drawn out mess on little sleep...
  // const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  // const wordArr = word.toLowerCase().split('');
  // const result = [];
  // const booArr = wordArr.map(letter => {
  //   return vowels.includes(letter)
  // })
  // for (let i = 0; i < booArr.length; i++) {
  //   if (booArr[i] === true) {
  //     result.push(i + 1)
  //   }
  // }
  // return result;

}


// *** Sort odd and even numbers in different order - 6 kyu 
/*
You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.

Note that zero is an even number. If you have an empty array, you need to return it.

For example:

[5, 3, 2, 8, 1, 4]  -->  [1, 3, 8, 4, 5, 2]

odd numbers ascending:   [1, 3,       5   ]
even numbers descending: [      8, 4,    2]

Examples:
sortArray([2, 22, 37, 11, 4, 1, 5, 0]) => [22, 4, 1, 5, 2, 11, 37, 0]
*/
function sortArray2(array) {
  // take an array of odd and even nums
  // sort odds in ascending order
  // sort evens in descending order 
  // maintain index placement of odd/even indexes 
  const odds = array.filter(num => num % 2 !== 0).sort((a,b) => a - b);
  const evens = array.filter(num => num % 2 === 0).sort((a,b) => b - a);
  return array.map((num) => num % 2 ? odds.shift() : evens.shift()) // does num % 2 resolve to > 0 ?
}

// *** Sort the odd - 6 kyu
/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/
function sortArray(array) {
  // take in an array of integers 
  // sort the odd numbers in ascending order array.sort((a,b) => a - b)
  // leave the even numbers in original positions (index) of array

  // get the odds and sort them, save to their own array: 
  const odds = array.filter(num => num % 2 !== 0).sort((a,b) => a - b);
  // // build a placeholder array
  const placeholderArr = array.map(num => {
    return num % 2 !== 0 ? 'odd' : num
  })
  // replace placeholders with sorted odds
  return placeholderArr.map(el => {
    return el === 'odd' ? odds.shift() : el;
  })

  // with map and shift on one line (replacing placeholderArr and subsequent map)
  // return array.map((num) => num % 2 ? odds.shift() : num); 

}


// *** Factorial - 7 kyu
/* Write a factorial function */
function factorial(n) {
  // ** using a ternary and recursive call (submitted)
  return n <= 1 ? 1 : n * factorial(n - 1);

  // with a while loop
  // let result = 1;
  // while (n > 0) {
  //   result *= n;
  //   n--;
  // }
  // return result;

  // with a for loop:
  // let sum = 1;
  // for (let i = 1; i <= n; i++) {
  //   sum *= 1;
  // }
  // return sum;
}

// *** Name Array Capping - 7 kyu
/*
Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

example

capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
*/
function capMe(names) {
  // with map and slice
  // return names.map(name => {
  //   return name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase()
  // })
  // with map, charAt, and substring
  return names.map(name => {
    return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
  })
}


// *** Alternate capitalization - 7 kyu
/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
*/
function altCapitalize(str) {

  // somewhat streamlined version of below solution
  return [
    [...str].map((c,i) => i % 2 == 0 ? c.toUpperCase() : c).join(''),
    [...str].map((c,i) => i % 2 != 0 ? c.toUpperCase() : c).join('')
  ]

  // with map (submitted)
  const evenCaps = str.split('').map((char, i) => 
    i % 2 === 0 ? char.toUpperCase() : char
  ).join('');

  const oddCaps = str.split('').map((char, i) => 
    i % 2 !== 0 ? char.toUpperCase() : char
  ).join('');

  return [evenCaps, oddCaps]

  // with for loops, push, join, and ternary
  // let evenCaps = [];
  // let oddCaps = [];

  // for (let i = 0; i < str.length; i++) {
  //   (i % 2 === 0) ? evenCaps.push(str[i].toUpperCase()) : evenCaps.push(str[i])
  // }
  // for (let i = 0; i < str.length; i++) {
  //   (i % 2 !== 0) ? oddCaps.push(str[i].toUpperCase()) : oddCaps.push(str[i])
  // }

  // return [evenCaps.join(''), oddCaps.join('')]
}

// *** Round up to the next multiple of 5 - 7 kyu
/*
Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:
input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).
You can assume that all inputs are valid integers.
*/
function roundToNext5(n) {
  // ** using Math.ceil (submitted)
  // return Math.ceil(n/5) * 5

  // using a while loop
  // while (n % 5 !== 0) {
  //   n++;
  // }
  // return n;

  // using an conditional and recursive call
  if ( n % 5 === 0) {
    return n;
  }
  return roundToNext5(n + 1); // if n % 5 produces a remainder, keep incrementing n by 1


}



// *** Sorting the Odd way! - 7 kyu
/*
Given an array of numbers, sort them in such a manner that all the odd numbers in the array are sorted in ascending order and the even numbers are sorted in descending order after the last odd number. 
Example:
[1,2,3,4,5,6,7,8,9] => [1,3,5,7,9,8,6,4,2]. 
More Tests:
sortItOut([ 11,22,33,44,55,55,90.4,4,78 ]) => [ 11,33,55,55,90.4,78,44,22,4 ]
sortItOut([ 68,25,99,50,10,67,2,5,8,34,67 ]) => [ 5,25,67,67,99,68,50,34,10,8,2 ]
sortItOut([ 1.1, 2.2, 3.3, 4.4, 5.5, 6.6 ]) => [ 1.1, 3.3, 5.5, 6.6, 4.4, 2.2 ]
- If the array contains decimals, round them down while checking for odd/even. 
- The output must have the original numbers!
*/
function sortItOut(array) {
  // ** using filter, Math.floor, sort, and spread (submitted)
  const odds = array.filter(num => Math.floor(num) % 2 !== 0).sort((a,b) => a - b);
  const evens = array.filter(num => Math.floor(num) % 2 === 0).sort((a,b) => b - a);
  return [...odds, ...evens];

  // slightly more concise with concat:
  // return array.filter(num => Math.floor(num) % 2 !== 0).sort((a,b) => a - b)
  // .concat(array.filter(num => Math.floor(num) % 2 === 0).sort((a,b) => b - a))

  // run checks with for...of loops
  // const oddNums = [];
  // for (let num of array) {
  //   if (Math.floor(num) % 2 !== 0) {
  //     oddNums.push(num)
  //   }
  // }

  // const evenNums = [];
  // for (let num of array) {
  //   if (Math.floor(num) % 2 === 0) {
  //     evenNums.push(num)
  //   }
  // }

}


// *** Coding Meetup #6 - Can they all code in the same language? - kyu
/*
You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return either:

true if all developers in the list code in the same language; or
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];
your function should return true.

Notes:
- The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted will upper-case 'J' and 'S'
- The input array will always be valid and formatted as in the example above.
*/
function isSameLanguage(list) {
  // PREP
  // take in an array of dev objects, each with a language property
  // return true if all language properties equal the same thing
  // pseudocode:
  // loop through the list of developers, checking if each language property is the same thing
  // ** using every array method to return true/false (submitted)
  return list.every(dev => dev.language === list[0].language);

  // using Set with map to build an array with no language duplicates
  // a length of 1 means there's only a single language present
  // return [...new Set(list.map(dev => dev.language)) ].length === 1

  // using a for loop to make the comparison 
  // for (let i = 0; i < list.length; i += 1) {
  //   if (list[0].language !== list[i].language) {
  //     return false;
  //   } 
  // }
  // return true;
}


// *** Coding Meetup #5 - Count of languages - 7 kyu
/*
You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
your function should return the following object (associative array in PHP, table in COBOL):
{ C: 2, JavaScript: 1, Ruby: 1 }
Notes:
- The order of the languages in the object does not matter.
- The count value should be a valid number.
- The input array will always be valid and formatted as in the example above.
*/

function countLanguages(list) {
  // ** with for loop
  // let counts = {};
  // for (let i = 0; i < list.length; i++) {
  //   counts[list[i].language] = 1 + (counts[list[i].language] || 0)
  // }
  // forEach version
  // list.forEach(dev => counts[dev.language] = (counts[dev.language] || 0) + 1);
  // return counts;

  // with map and reduce
  // const arr = list.map(dev => dev['language']);
  // return arr.reduce((prev, curr) => {
  //   prev[curr] = prev[curr] + 1 || 1
  //   return prev
  // }, {})

  // with reduce, hasOwnProperty, and ternary
  return list.reduce((langs, dev) => {
    langs.hasOwnProperty(dev.language) ? langs[dev.language] += 1 : langs[dev.language] = 1;
    return langs;
  }, {});

}


// *** Help the fruit guy - 7 kyu
/*
Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

Example:
removeRotten(["apple","rottenBanana","apple"]) => ["apple","banana","apple"]
removeRotten(["apple","banana","apple", "orange"])
Notes
- If the array is null/nil/None or empty you should return empty array ([]).
- The rotten fruit name will be in this camelcase (rottenFruit).
- The returned array should be in lowercase.
*/
function removeRotten(bagOfFruits) {
  // ** with forEach, String.prototype.includes, push, slice, and toLowerCase (submitted solution)
  // if (bagOfFruits === null || bagOfFruits === undefined) return [];
  // const freshFruit = [];
  // bagOfFruits.forEach((fruit) => {
  //   if (fruit.includes('rotten')) {
  //     freshFruit.push(fruit.slice(6).toLowerCase());
  //   } else {
  //     freshFruit.push(fruit)
  //   }

  // })
  // return freshFruit;

  // with map and replace and a ternary
  // return bagOfFruits ? bagOfFruits.map(fruit => fruit.replace('rotten', '').toLowerCase()) : [];

  // longer version of above solution
  if (!bagOfFruits) { return []; };

  return bagOfFruits.map(fruit => {
    return fruit.replace('rotten', '').toLowerCase();
  });

}

// *** Simple consecutive pairs - 7 kyu
/*
In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore.
*/
function pairs(arr) {
  // ** with a for loop, push and slice to create pairs of nums (submitted)
  // filter to build new array of pairs matching criteria, returning length
  // const pairArr = [];
  // for (let i = 0; i < arr.length; i += 2) {
  //   pairArr.push(arr.slice(i, i + 2))
  // }
  // return pairArr.filter(pair => {
  //   return pair[0] - pair[1] === 1 || pair[1] - pair[0] === 1;
  // }).length;
  

  // with for loop and Math.abs
  let count = 0;
  for (let i = 0; i < arr.length; i += 2) { // increment by 2
    if (Math.abs(arr[i] - arr[i + 1]) === 1) { // compare current arr[i] - arr[i + 1] difference w/Math.abs
      count += 1; // increment count
    }
  }
  return count;
}




// *** Sort by Last Char - 7 kyu
/*
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

All inputs will be valid.

Examples:
sortByLastChar('man i need a taxi up to ubud') => ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']

sortByLastChar('what time are we climbing up the volcano') => ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']


*/
function sortByLastChar(str) {  
  // ** using split, sort, and charCodeAt (submitted)
  // split str into an array
  // sort array with charCodeAt, targetign last char of each string
  return str.split(' ').sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length -1));

  // using split, sort, and slice with localeCompare
  // return str.split(' ').sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)))
}

// *** Minimum Steps - 7 kyu
/*
Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

Notes:
- List size is at least 3.
- All numbers will be positive.
- Numbers could occur more than once , (Duplications may exist).
- Threshold K will always be reachable.

Input >> Output Examples
minimumSteps([1, 10, 12, 9, 2, 3], 6)  ==>  return (2)
minimumSteps([8 , 9, 4, 2], 23)  ==> return (3)
minimumSteps([19,98,69,28,75,45,17,98,67], 464)  ==>  return (8)
*/
function minimumSteps(numbers, value) {
  // ** with sort and a for...of loop (submitted)
  let stepCount = 0; // track steps
  let sum = 0; // track sum
  numbers = numbers.sort((a,b) => a - b); // sort the array
  for (num of numbers) { // loop over numbers
    if (num + sum >= value) { // check if current num + sum >= value
      break;
    }
    sum += num; // add each num to the sum
    stepCount += 1; // increment the stepCount
  }
  return stepCount;

  // with sort and filter
  // return numbers.sort((a,b) => a - b).filter((num) => (value = value - num) > 0).length;

}

// *** Array.diff - 6 kyu
/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2], [1]) ==> [2]
arrayDiff([1,2,3], [1,2]) ==> [3]
If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3], [2]) ==> [1,3]

*/
function arrayDiff(a,b) {
  // ** using filter with includes (submitted)
  return a.filter(el => !b.includes(el));
  // similar, but with indexOf instead of includes
  // return a.filter(el => b.indexOf(el) === -1);

  // with a nested for loop and splice
  // if (b.length === 0 || a.length === 0) return a;
  // for(let i = 0; i < a.length; i++){
  //   for(let j = 0; j < b.length; j++){
  //     if(a[i] === b[j]){
  //       a.splice(i,1);
  //       i--;
  //     }
  //   }
  // }
  // return a;

}

// *** Transform to Prime - 6 kyu
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
mumNumber([2,12,8,4,6]) ==> return (5)
minimumNumber([50,39,49,6,17,28]) ==> return (2)
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

}

// *** Sum of odd cubed numbers - 7 kyu
/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

[1, 2, 3, 4] => 28
[-3,-2,2,3] => 0
["a",12,9,"z",42] => undefined
*/
function cubeOdd(arr) {
  // get odd numbers from array
  // cube each num from resulting array
  // sum all cubed nums and return
  // return 'undefined' if non-integers are present in original arr
  // ** using every, tyepof, filter, map, Math.pow, and reduce (submitted)
  if (arr.every(el => typeof el === 'number')) { // check all arr elements are numbers
    return arr.filter(num => num % 2 !== 0) // filter out the odds
      .map(num => Math.pow(num, 3)) // cube each odd num
      .reduce((a,b) => a + b, 0); // sum the cubed nums with reduce
  }
  // returns undefined if arr.every test returns false
}


// arr.every(el => {
//   typeof el !== 'number';
// })

// *** Nth Smallest Element - 7 kyu
/*

Given an array/list of integers, find the Nth smallest element in the array.

Notes
- Array/list size is at least 3.
- Array/list's numbers could be a mixture of positives , negatives and zeros.
- Repetition in array/list's numbers could occur, so don't remove duplications.

Input >> Output Examples
arr=[3,1,2]            n=2    ==> return 2 
arr=[15,20,7,10,4,3]   n=3    ==> return 7 
arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
arr=[2,1,3,3,1,2],     n=3    ==> return 2 
*/
function nthSmallest(arr, pos) {
  // ** sort area from low to high, return element at (pos - 1) for nth smallest number
  return sortedArr = arr.sort((a,b) => a - b)[pos -1];
}


// *** Balanced Number (numbers series #1) - 7 kyu
/*
A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)

The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.

The task
Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.

Examples
7 ==> return "Balanced"
295591 ==> return "Not Balanced"
959 ==> return "Balanced"
27102983 ==> return "Not Balanced"
*/
function balancedNum(number) {
  // ** using a while loop with String, parseInt, charAt, and ternary (submitted)
  let strNum = String(number);
  let sumleft = 0; 
  let sumright = 0; 
  
  while (strNum.length > 2) { // accounts for 1 and 2 digit numbers
      sumleft += parseInt(strNum.charAt(0)); // start at beginning
      sumright += parseInt(strNum.charAt(strNum.length-1)); // start at end
      
      strNum = strNum.slice(1, strNum.length -1);
      console.log(strNum)
  };
  return sumleft === sumright ? "Balanced" : "Not Balanced";

  // Using reduce with a helper function
  // let str = String(number); // make number a string
  // let length = (str.length - (str.length % 2 ? -1 : -2)) / 2; // construct new length
  // let sum = digits => [...digits].reduce((a, b) => a + +b, 0); // sum function
  // // pass in resulting digits into sum func, compare
  // return sum(str.slice(0, length)) === sum(str.slice(-length)) 
  // ? 'Balanced' 
  // : 'Not Balanced';
}



// *** Form the Minimum - 7 kyu 
/*
Task
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:
- Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

Input >> Output Examples:
minValue ([1, 3, 1])  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue([5, 7, 5, 9, 7])  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue([1, 9, 3, 1, 7, 4, 6, 6, 7]) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications
*/
function minValue(values) {
  // ** using Set to get unique nums, ...new to convert to array
  // sorted, joined, and wrapped in Number to return a number
  // return Number([...new Set(values)].sort((a,b) => a - b).join(''));
 
  // similar, but with Array.from and parseInt
  let uniqueArr = Array.from(new Set(values));
  return parseInt(uniqueArr.sort().join(''));

  // using filter with sort, indexOf, join, and Number
  // const numbers = values
  //   .filter((num, i, arr) => arr.indexOf(num) === i)
  //   .sort()
  //   .join('');

  // return Number(numbers);
}

// *** Maximum Gap (Array series #4) - 7 kyu
/*
Task
Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

Notes
- Array/list size is at least 3 .
- Array/list's numbers Will be mixture of positives and negatives also zeros_
- Repetition of numbers in the array/list could occur.
- The Maximum Gap is computed Regardless the sign.

Input >> Output Examples
maxGap([13,10,5,2,9]) ==> return (4)
Explanation:
The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .

maxGap([-3,-27,-4,-2]) ==> return (23)
Explanation:
The Maximum Gap after sorting the array is 23 , The difference between  |-4- (-27) | = 23 .
Note : Regardless the sign of negativity .

maxGap([-7,-42,-809,-14,-12]) ==> return (767)  
Explanation:
The Maximum Gap after sorting the array is 767 , The difference between  | -809- (-42) | = 767 .
Note : Regardless the sign of negativity .

maxGap([-54,37,0,64,640,0,-15]) //return (576)
Explanation:
The Maximum Gap after sorting the array is 576 , The difference between  | 64 - 640 | = 576 .
Note : Regardless the sign of negativity .
*/

function maxGap(numbers) {

  // ** using sort with a for loop (submitted solution)
  const sortedNums = numbers.sort((a,b) => a - b); // sort numbers in ascending order
  let maxGap = sortedNums[1] - sortedNums[0]; // set initial maxGap value

  for (let i = 1; i < sortedNums.length; i++) { // loop through sorted nums, starting at pos 1
    if (sortedNums[i + 1] - sortedNums[i] > maxGap) { // test for potential greater maxGap
      maxGap = sortedNums[i + 1] - sortedNums[i]; // set new maxGap
    }
  }

  return maxGap; // return maxGap

  // ** using sort with reduce
  // return numbers
  // .sort((a, b) => a - b)
  // .reduce((max, num, i) => {
  //   let gap = numbers[i + 1] - num
  //   if (max < gap) {
  //     max = gap
  //   }
  //   return max
  // }, 0);
}

// *** Tidy Number - 7 kyu
/*
Definition
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not .

Notes
- Number passed is always Positive .
- Return the result as a Boolean

Input >> Output Examples
tidyNumber (12) ==> return (true)
Explanation:
The number's digits [ 1 , 2 ] are in non-Decreasing Order (i.e) 1 <= 2 .

tidyNumber (32) ==> return (false)
Explanation:
The Number's Digits [ 3, 2] are not in non-Decreasing Order (i.e) 3 > 2 .

tidyNumber (1024) ==> return (false)
Explanation:
The Number's Digits [1 , 0, 2, 4] are not in non-Decreasing Order as 0 <= 1 .

tidyNumber (13579) ==> return (true)
Explanation:
The number's digits [1 , 3, 5, 7, 9] are in non-Decreasing Order .

tidyNumber (2335) ==> return (true)
Explanation:
The number's digits [2 , 3, 3, 5] are in non-Decreasing Order , Note 3 <= 3
*/
function tidyNumber(n) {

  // ** using String, split, map, sort, and every (submitted)
  // make the number an array of digits
  const numArr = String(n).split('').map(Number);
  // make the number an array of digits, sorted low to high
  const sortedNumArr = String(n).split('').map(Number).sort((a,b) => a - b);
  // use every method to compare nums within each array
  return numArr.every((num, index) => num === sortedNumArr[index]); // returns true/false

  // A more concise method, similar to above
  // make n a string, split to array, sort, join back to string
  // compare to n using loose equality check
  return String(n).split('').sort().join('') == n;

  // using a for loop to compare values
  // let s = n.toString();
  // for (let i = 0; i < s.length-1; i++) {
  //   if (s[i] > s[i+1]) return false;
  // }
  // return true;
}



// *** Spacify - 7 kyu
/*
Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"
*/
function spacify(str) {
  // simply use split to make the str an array, then join array back together with a space:
  return str.split('').join(' ');

  // can also use the spread operator to create the array:
  // return [...str].join(' ');

  // can also go this route, using a for loop with a ternary to build the new string
  // let result = ''
  // for (let i = 0; i < str.length; i++) {
  //   result = result + str[i] + (i === (str.length - 1) ? '' : ' ')
  // }
  // return result
}



// *** Array Leaders (Array series #3) - 7 kyu 
/*
Definition
An element is leader if it is greater than The Sum all the elements to its right side.

Task
Given an array/list [] of integers , Find all the LEADERS in the array.

Notes
- Array/list size is at least 3 .
- Array/list's numbers Will be mixture of positives , negatives and zeros
- Repetition of numbers in the array/list could occur.
- Returned Array/list should store the leading numbers in the same order in the original array/list .

Input >> Output Examples
arrayLeaders ([1, 2, 3, 4, 0]) ==> return [4]
Explanation:
4 is greater than the sum all the elements to its right side

Note : The last element 0 is equal to right sum of its elements (abstract zero).

arrayLeaders ([16, 17, 4, 3, 5, 2]) ==> return [17, 5, 2]
Explanation:
17 is greater than the sum all the elements to its right side

5 is greater than the sum all the elements to its right side

Note : The last element 2 is greater than the sum of its right elements (abstract zero).

arrayLeaders ([5, 2, -1]) ==> return [5, 2]
Explanation:
5 is greater than the sum all the elements to its right side

2 is greater than the sum all the elements to its right side

Note : The last element -1 is less than the sum of its right elements (abstract zero).

arrayLeaders ([0, -1, -29, 3, 2]) ==> return [0, -1, 3, 2]
Explanation:
0 is greater than the sum all the elements to its right side

-1 is greater than the sum all the elements to its right side

3 is greater than the sum all the elements to its right side

Note : The last element 2 is greater than the sum of its right elements (abstract zero).
*/
function arrayLeaders(numbers) {
  // loop through numbers
  // test if the current num (i) is greater than the sum of all nums to the right
  // add num (i) to result array([]) if passes the test
  // Using map, slice, reduce, and push w/ternary
  // let result = [];
  // numbers.map((num, idx) => num > numbers.slice(idx + 1).reduce((a,b) => a + b, 0) ? result.push(num) : num);
  // return result;

  // ** with a nested for loop (most clearly illustrates what's happening for each iteration)
  let result = [];

  for (let i = 0; i < numbers.length; i++) { // loop through array
    let rightSideSum = 0; // initialize sum variable for all nums to the right 
    for (let j = i + 1; j < numbers.length; j++) { // within each outer loop, loop through nums, starting one position to the right of outer loop
      rightSideSum += numbers[j]; // add those nums to set the current sum
    }

    if (numbers[i] > rightSideSum) { // test if current num is greater than remaining nums sum
      result.push(numbers[i]); // add current num to result if passes test
    }
  }
  // return result;

  // with filter, slice, and reduce
  // nest the slice and reduce methods within the filter method's test
  // returns elements that pass the filter's test
  return numbers.filter((num, idx) => numbers.slice(idx + 1).reduce((a,b) => a + b, 0) < num);

}




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

// Complementary DNA - 7 kyu
/*
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/
function DNAStrand(dna) {
  // with for...of loop, conditionals, and join
  // let compArr = [];
  // for (let char of dna) {
  //   if (char === 'A') {
  //     compArr.push('T')
  //   } else if (char === 'T') {
  //     compArr.push('A')
  //   } else if (char === 'C') {
  //     compArr.push('G')
  //   } else if (char== 'G') {
  //     compArr.push('C')
  //   } else {
  //     compArr.push(char)
  //   }
  // }
  // return compArr.join('')

  // using a pairs object, split, map, and join
  const pairs = {'A':'T','T':'A','C':'G','G':'C'};
  return dna.split('').map(char => pairs[char]).join('');

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

// const list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];

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


// *** Make a function that does arithmetic - 7 kyu
/*
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
*/

function arithmetic(a, b, operator) {
  // ** with a chained ternary (submitted)
  return operator === 'add' ? a + b 
    : operator === 'subtract' ? a - b 
    : operator === 'multiply' ? a * b 
    : a / b;

  // with a switch statement
  // switch(operator) {
  //   case 'add':
  //     return a + b;
  //   case 'subtract':
  //     return a - b;
  //   case 'multiply':
  //     return a * b;
  //   case 'divide':
  //     return a / b;
  // }

  // returing an object:
  // return {
  //   'add'     : a + b,
  //   'subtract': a - b,
  //   'multiply': a * b,
  //   'divide'  : a / b
  // }[operator]
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