
// *** Take a Ten Minute Walk - 6 kyu
/*
Receive an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']);

You always walk a single block for each letter (direction)
It takes you one minute to traverse one city block
You must return to the starting point

isValidWalk(['n','s','n','s','n','s','n','s','n','s']) 'should return true');

isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']) 'should return false');

isValidWalk(['w']) 'should return false');

isValidWalk(['n','n','n','s','n','s','n','s','n','s']) 'should return false');


*/
function isValidWalk(walk) {
  // with for...of loop, conditionals, and ternary (submitted)
  // if (walk.length !== 10) return false;
  // let northSouth = 0;
  // let eastWest = 0;
  // // for every single block we walk, increment and decrement by 1
  // for (let dir of walk) {
  //   if (dir === 'n') northSouth += 1;
  //   if (dir === 's') northSouth -= 1; 
  //   if (dir === 'e') eastWest += 1;
  //   if (dir === 'w') eastWest -= 1;
  // }
  // return northSouth === 0 && eastWest === 0 ? true : false; 

  // with filter and ternary
  const north = walk.filter(dir => dir === 'n').length
  const south = walk.filter(dir => dir === 's').length
  const east = walk.filter(dir => dir === 'e').length
  const west = walk.filter(dir => dir === 'w').length

  return walk.length === 10 && north === south && east === west;

}