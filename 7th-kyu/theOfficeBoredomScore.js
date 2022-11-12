// *** The Office II - Boredom Score - 7 kyu
/*
Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'

{ tim: 'accounts', jim: 'accounts',
  randy: 'pissing about', sandy: 'finance', andy: 'change',
  katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
  john: 'retail', mr: 'pissing about' } => 'party time!'

{ tim: 'IS', jim: 'finance',
  randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
  katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
  alex: 'regulation', john: 'accounts', mr: 'canteen' } => 'i can handle this'
*/

function boredom(staff) {
  // ** Using Object.values with a switch statement and for of loop
  // const departArr = Object.values(staff)
  // let boredomScore = 0;

  // function updateScore(department) {
  //   switch (department) {
  //     case 'accounts':
  //       boredomScore += 1;
  //       break;
  //     case 'finance':
  //       boredomScore += 2;
  //       break;
  //     case 'canteen':
  //       boredomScore += 10;
  //       break;
  //     case 'regulation':
  //       boredomScore += 3;
  //       break;
  //     case 'trading':
  //     case 'change':
  //       boredomScore += 6;
  //       break;
  //     case 'IS':
  //       boredomScore += 8;
  //       break;
  //     case 'retail':
  //       boredomScore += 5;
  //       break;
  //     case 'cleaning':
  //       boredomScore += 4;
  //       break;
  //     case 'pissing about':
  //       boredomScore += 25;
  //       break;
  //     default:
  //       console.log('Unknown department')
  //       break;
  //   }
  // }

  // for (let dept of departArr) {
  //   updateScore(dept)
  // }

  // if (boredomScore >= 100) {
  //   return 'party time!!';
  // } else if (boredomScore > 80) {
  //   return 'i can handle this';
  // } else {
  //   return 'kill me now';
  // }

  // ** using object to assign scores, Object.keys, map, and reduce w/ternary
  const teams = { 
    'accounts'      : 1,
    'finance'       : 2,
    'canteen'       : 10, 
    'regulation'    : 3, 
    'trading'       : 6, 
    'change'        : 6,
    'IS'            : 8,
    'retail'        : 5,
    'cleaning'      : 4,
    'pissing about' : 25 }

  score = Object.keys(staff)
      .map(key => teams[staff[key]])
      .reduce((a,b) => a + b, 0);
      
  return score <= 80 ? 'kill me now' : (score > 100 ? 'party time!!' : 'i can handle this');    

}