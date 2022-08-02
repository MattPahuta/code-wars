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