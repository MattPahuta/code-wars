// *** Return a string's even characters - 7 kyu
/*
Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"
*/
function evenChars(string) {
  // check for valid string
  if (string.length < 2 || string.length > 100) return 'invalid string';
  // with spread and filter
  return [...string].filter((char, i) => i % 2); // does i % 2 evaluate to true? (0 or 1)

  // with split, filter - long version
  return string.split('').filter((char, i) => {
    return i % 2 !== 0;
  })
}