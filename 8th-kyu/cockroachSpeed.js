// *** Beginner Series #4 Cockroach - 8 kyu
/*
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

*/
function cockroachSpeed(s) {
  // kph to cm per second 
  // 1 kilometer = 100000 cm 
  // 1.08 kph = 108,000 cm per hour 
  // 108,000 / 3600 = 30
  return Math.floor(s * 100000 / 3600);

  // more succintly 
  return Math.floor(s / 0.036);

}