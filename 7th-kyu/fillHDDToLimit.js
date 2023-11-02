// *** Computer problem series #1 - fill the HDD - 7 kyu
/*
Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

Zero size files can always be saved even HD full.

Input:
Array of file sizes (0 <= s <= 100)
Capacity of the HD (0 <= c <= 500)

Output:
Number of files that can be fully saved in the HD.

Examples:
saveFiles([4,4,4,3,3], 12) -> 3
# 4+4+4 <= 12, but 4+4+4+3 > 12

saveFiles([4,4,4,3,3], 11) -> 2
# 4+4 <= 11, but 4+4+4 > 11

saveFiles([12, 0, 0, 1], 12) -> 3
# 12+0+0 <= 12, but 12+0+0+1 > 12

*/
function saveFiles(sizes, hd) {
  // accept an array of sizes (integers) and a number representing a capacity 
  // determine how many files can fit on the drive, going in order of array index
  // return the total number

  // *** with reduce
  // let result = 0;
  // sizes.reduce((total, currSize) => {
  //   if ((total += currSize) <= hd) result += 1;
  //   return total;
  // }, 0)

  // return result;


  // *** with a for...of loop
  let total = 0;
  let count = 0;

  for (let file of sizes) {
    if ((total + file) <= hd) {
      total += file;
      count += 1;
    } else {
      return count;
    }
  }
  return count;

}