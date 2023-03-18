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
const devsList = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];

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
