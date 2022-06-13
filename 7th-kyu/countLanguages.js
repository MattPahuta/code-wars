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