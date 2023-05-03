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
