// *** Grasshopper - Grade book - 8 kyu
/*
  Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

  Numerical Score	Letter Grade
  90 <= score <= 100	'A'
  80 <= score < 90	'B'
  70 <= score < 80	'C'
  60 <= score < 70	'D'
  0 <= score < 60	'F'
  Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

function getGrade(s1, s2, s3) {
  const avgScore = ((s1 + s2 + s3) / 3).toFixed(2);
  if (avgScore >= 90) return 'A';
  else if (avgScore >= 80) return 'B';
  else if (avgScore >= 70) return 'C';
  else if (avgScore >= 60) return 'D';
  else return 'F';

  // with a switch statement
  // switch(true) {
  //   case (avgScore >= 90):
  //     return 'A';
  //   case (avgScore >= 80):
  //     return 'B';
  //   case (avgScore >= 70):
  //     return 'C';
  //   case (avgScore >= 60):
  //     return 'D'; 
  //   default:
  //     return 'F';   
  // }

}

console.log(getGrade(95,90,93)) // => 'A'
console.log(getGrade(84,79,85)) // => 'B'
console.log(getGrade(65,70,59)) // => 'D'