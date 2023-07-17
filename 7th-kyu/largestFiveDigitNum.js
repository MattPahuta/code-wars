// *** Largest 5 digit number in a series - 7kyu
/*
In the following 6 digit number:

283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

Adapted from ProjectEuler.net
*/
function largestFiveDigitNumber(digits) {
  // using for loop, substr method, Number
  let bigFive = 0; // initial value to test against

  for (let i = 0; i < digits.length; i++) { // loop over digits string
    let fiveDigits = digits.substr(i, 5); // get five digits each loop
    if (Number(fiveDigits) > bigFive) { // convert to number, test against bigFive
      bigFive = Number(fiveDigits) // set the new high number
    }
  }

  return bigFive;


}