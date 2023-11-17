// *** Spin around, touch the ground - 7 kyu
/*
Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

Worked Example
["right", "right", "right", "right", "left", "right"] ➞ 1
# You spun right 4 times (90 * 4 = 360)
# You spun left once (360 - 90 = 270)
# But you spun right once more to make a full rotation (270 + 90 = 360)

Examples
["left", "right", "left", "right"] ➞ 0
["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2
["left", "left", "left", "left"] ➞ 1
Notes
Return a positive number.
All tests will only include the words "right" and "left".
*/
function spinAround(turns) {

  // similar to below:
  let spin = 0;
  for (let dir of turns) {
    dir === 'left' ? spin += -1 : 1
  }
  return Math.floor(Math.abs(spin) / 4)


  // with forEach, Math.abs and Math.floor
  let degreeCounter = 0;
  turns.forEach(direction => direction === 'right' ? degreeCounter += 90 : degreeCounter -= 90)

  if (degreeCounter < 0 ) {
    degreeCounter = Math.abs(degreeCounter)
  }

  return Math.floor(degreeCounter / 360);
}