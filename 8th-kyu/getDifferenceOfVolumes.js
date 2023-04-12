// *** Difference of Volumes of Cuboids - 8 kyu
/*
In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.

Examples:
findDifference([3, 2, 5], [1, 4, 4]) => 14
findDifference([11, 2, 5], [1, 10, 8]) => 30
*/
function findDifference(a, b) {

  // one liner verion:
  return Math.abs(a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b));

  // with reduce and Math.abs (long form for clarity)
  cuboidA = a.reduce((a, b) => a * b); 
  cuboidB = b.reduce((a, b) => a * b);

  return Math.abs(cuboidA - cuboidB)

}