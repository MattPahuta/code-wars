// *** Century from Year - 8 kyu
/*
Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

*/

function getCentury(year) {
  // using Math.ceil:
  return Math.ceil(year/100);

  // with a for loop:
  let century = 0;
  for (let i = year; year > 0; year -= 100) {
    century += 1;
  }
  return century;
}