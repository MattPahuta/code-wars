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