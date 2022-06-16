// *** Add property to every object in array - 7 kyu
/*
Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.
For example:

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

After adding the property the result should be:
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
    usersAnswer: null
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
    corAnswer: 0,
    usersAnswer: null
}];
*/

// as a function
function addProperty(array, key, value) {
  // array.forEach(item => item['usersAnswer'] = null)
  array.forEach(item => item[key] = value)
}

// ** stand-alone forEach method (submitted)
// questions.forEach(item => item['usersAnswer'] = null)

// with a for loop
// for (let i=0; i < questions.length; i++) {
//   questions[i].usersAnswer = null;
// }