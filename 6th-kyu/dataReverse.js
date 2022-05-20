// *** Data Reverse - 6 kyu
/*
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1, 0,0,0,0,0,0,0,0, 0,0,0,0,1,1,1,1, 1,0,1,0,1,0,1,0]
*/
function dataReverse(data) {
  // accept an array of groups of 8 nums (octets), consisting of ones and zeros
  // split the array into equal octets 
  // return the octets in reverse order 

  // with unshift, slice, and spread
  const bytes = [];
  for (let i = 0; i < data.length; i += 8) { // iterate over data in 8 digit increments
    console.log(...data)
    console.log(...data.slice(i, i + 8))
    bytes.unshift(...data.slice(i, i + 8)); // slice off 8 digits for each iteration, populate bytes array
  }
  return bytes;

  // ** with while loop, push, splice, and flat method
  // const octetArr = [];
  // while (data.length > 0) {
  //   octetArr.push(data.splice(data.length - 8, 8))
  // }
  // return octetArr.flat()

  // streamlined while loop version
  // const result = [];
  // while (data.length) {
  //   result.push(...data.splice(-8));
  // }
  // return result;

}