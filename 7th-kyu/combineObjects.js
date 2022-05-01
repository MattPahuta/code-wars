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