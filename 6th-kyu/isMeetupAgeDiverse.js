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
  // accept an array of of objects
  // extract the ages from the objects 
  // setup a key - array/object? 
  // 13 - 19, 20 - 29, 30 - 39, 40 - 49, 50 - 59, 60 - 69, 70 - 79, 80 - 89, 90 - 99, >= 100
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
  

    // with for loop and chained conditionals, placeholder variables
    let teens = ''
    let twenties = ''
    let thirties = ''
    let fourties = ''
    let fifties = ''
    let sixties = ''
    let seventies = ''
    let eighties = ''
    let nineties = ''
    let hundies = ''
        
    
    for (let i = 0; i < list.length; i ++) {
      let age = list[i].age
      if (age >= 10 && age < 20) {
        teens += '1'
      }
      if (age >= 20 && age < 30) {
        twenties += '1'
      }
      if (age >= 30 && age < 40) {
        thirties += '1'
      }
      if (age >= 40 && age < 50) {
        fourties += '1'
      }
      if (age >= 50 && age < 60) {
        fifties += '1'
      }
      if (age >= 60 && age < 70) {
        sixties += '1'
      }
      if (age >= 70 && age < 80) {
        seventies += '1'
      }
      if (age >= 80 && age < 90) {
        eighties += '1'
      }
      if (age >= 90 && age < 100) {
        nineties += '1'
      }
      if (age > 100) {
      console.log('hitting hundy', age)
        hundies += '1'
      }
    }
    
    if (teens && twenties && thirties && fourties && fifties && sixties  && seventies && eighties && nineties && hundies) {
      return true
    } else {
      return false
    }


}