// *** Alphabet war - airstrike - letters massacre - 6 kyu
/*
Task
Write a function that accepts a fight string which consists of only small letters and * which represents a bomb drop place. Return who wins the fight after bombs are exploded. When the left side wins return Left side wins!, and when the right side wins return Right side wins!. In other cases, return Let's fight again!.

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
The * bombs kill the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );

alphabetWarAirstrike("s*zz");           //=> Right side wins!
alphabetWarAirstrike("*zd*qm*wp*bs*"); //=> Let's fight again!
alphabetWarAirstrike("zzzz*s*");       //=> Right side wins!
alphabetWarAirstrike("www*www****z");  //=> Left side wins!
*/

function alphabetWarAirstrike(str) {
  // const strArr = str.split('');

  // const resultArr = [];

  // for (let i = 0; i < strArr.length; i++) {
  //   if (strArr[i - 1] !== "*" && strArr[i + 1] !== "*") {
  //     resultArr.push(strArr[i])
  //   }
  // }
  
  // const fightToScore = resultArr.join('');

  // with split and filter
  const fight = str.split('').filter((letter, i, arr) => {
    if (arr[i - 1] !== "*" & arr[i + 1] !== "*") {
      return letter;
    }
  })

  // helper function to handle scoring the fight
  function scoreFight(arr) {
    let leftScore = 0;
    let rightScore = 0;

    for (let char of arr) {
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
  }

  return scoreFight(fight);

}