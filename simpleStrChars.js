// *** Simple string characters - 7 kyu
/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

("*'&ABCDabcde12345") => [4,5,5,3]. 
("Codewars@codewars123.com") => [1,18,3,2]
("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft") => [7,13,4,10])
--the order is: uppercase letters, lowercase, numbers and special characters.


*/
function simpleStrChars(str) {
  // ** using regex with match 
  let upper = str.match(/[A-Z]/g)||[]
  let lower = str.match(/[a-z]/g)||[]
  let num = str.match(/[0-9]/g)||[]
  let spec = str.match(/[^A-Z0-9]/gi)||[]
  return [upper.length, lower.length, num.length, spec.length]

  // ** using a for loop, comparing each char
  // let result = [0, 0, 0, 0];
  // for (let i = 0; i < str.length; i += 1) {
  //   if (str[i].toLowerCase() > str[i]) {
  //     result[0] += 1;
  //   } else if (str[i].toUpperCase() < str[i]) {
  //     result[1] += 1;
  //   } else if (str[i] >= 0 && str[i] <= 9) {
  //     result[2] += 1;
  //   } else {
  //     result[3] += 1;
  //   }
  // }
  // return result;

}