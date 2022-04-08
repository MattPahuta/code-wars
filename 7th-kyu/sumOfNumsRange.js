// *** Sum of Numbers - 7 kyu
/*
  Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

  Note: a and b are not ordered!

  Examples (a, b) --> output (explanation)
  (1, 0) --> 1 (1 + 0 = 1)
  (1, 2) --> 3 (1 + 2 = 3)
  (0, 1) --> 1 (0 + 1 = 1)
  (1, 1) --> 1 (1 since both are same)
  (-1, 0) --> -1 (-1 + 0 = -1)
  (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

function getSum(a, b) {
  const numsToSum = [];
  if (a === b) return a;
  else if (a > b) {
    for (let i = b; i <= a; i++) {
      numsToSum.push(i);
    }
  } else {
    for (let i = a; i <= b; i++) {
      numsToSum.push(i);
    }
  }

  console.log(numsToSum)
  return numsToSum.reduce((prevVal, currVal) => prevVal + currVal, 0);
}
