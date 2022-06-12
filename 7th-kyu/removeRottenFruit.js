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