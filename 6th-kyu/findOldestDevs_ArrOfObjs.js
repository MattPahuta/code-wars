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