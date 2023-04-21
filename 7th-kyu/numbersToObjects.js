// *** Numbers to Objects - 7 kyu
/*
You will be given an array of numbers.

For each number in the array you will need to create an object.

The object key will be the number, as a string. The value will be the corresponding character code, as a string.

Return an array of the resulting objects.

All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.

Example: 
numObj([118,117,120]) => [{'118':'v'}, {'117':'u'}, {'120':'x'}]

*/
function numObj(arr) {
  // accept an array of numbers
  // create object for each number
  // object key = number as string, value char code as string
  // String(num)
  // String.fromCharCode(num)
  // return array of objects 


  // *** with map and String.fromCharCode
  return arr.map(num => {
    return { [num]: String.fromCharCode(num) };
  });


  // *** with a for...or loop, String, and fromCharCode methods
  const result = []; 

  for (let num of arr) {
    let obj = {};
    obj[String(num)] = String.fromCharCode(num);
    result.push(obj)
  }
  return result;

}