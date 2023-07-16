// *** Alphabet War - 7 kyu
/*
Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
*/
function alphabetWar(fight) {

  // with a switch statement
  let leftScore = 0;
  let rightScore = 0;

  for (let char of fight) {
    switch (char) {
      case 'w': leftScore += 4; break;
      case 'p': leftScore += 3; break;
      case 'b': leftScore += 2; break;
      case 's': leftScore += 1; break;
      case 'm': rightScore += 4; break;
      case 'q': rightScore += 3; break;
      case 'd': rightScore += 2; break;
      case 'z': rightScore += 1; break;
    }
  }

  return leftScore > rightScore ? "Left side wins!" 
    : rightScore > leftScore 
    ? "Right side wins!" 
    : "Let's fight again!";

  
  // with for...of loop, includes, indexOf
  const leftSide = 'sbpw';
  const rightSide = 'zdqm';
  let leftPower = 0;
  let rightPower = 0;

  for (let char of fight) {
    if (leftSide.includes(char)) {
      leftPower += leftSide.indexOf(char) + 1;
    } 
    if (rightSide.includes(char)) {
      rightPower += rightSide.indexOf(char) + 1;
    }
  }

  return leftPower > rightPower ? 'Left side wins!' 
    : rightPower > leftPower ? 'Right side wins!' 
    : `Let's fight again!`

}