// Get the Middle Character - 7kyu
/*
  You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

  #Examples:

  Kata.getMiddle("test") should return "es"
  Kata.getMiddle("testing") should return "t"
  Kata.getMiddle("middle") should return "dd"
  Kata.getMiddle("A") should return "A"
*/

function getMiddle(str) {
  // let postion;
  // let length; 
  // if (str.length % 2 === 1) { // if the string has an even length;
  //   postion = str.length / 2;
  //   length = 1;
  // } else { // if the string has an even length;
  //   postion = str.length / 2 - 1;
  //   length = 2;
  // }
  // return str.substring(postion, postion + length)

  // A more concise, moden method
  return s.substring(Math.ceil(s.length / 2) - 1, Math.floor(s.length /2 ) + 1)
}