// *** Drone Fly-By - 7 kyu
/*
You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

Examples:
  flyBy('xxxxxx', '====T') => 'ooooox');
  flyBy('xxxxxxxxx', '==T') => 'oooxxxxxx'); 
  flyBy('xxxxxxxxxxxxxxx', '=========T') => 'ooooooooooxxxxx'); 

  flyBy("xxxxxxxxxxxxxxx", "===============T") => 'ooooooooooooooo'
*/
function flyBy(lamps, drone) {
  // change drone.length number of lamps('x') to 'o'

  // with split, map, and join
  return lamps.split('').map((el, i) => i < drone.length ? 'o' : el).join('');

  // with spread, fill, and join
  return [...lamps].fill('o', 0, drone.length).join('')

  // with repeat and replace
  if (drone.length > lamps.length) return 'o'.repeat(lamps.length);
  return lamps.replace('x'.repeat(drone.length), 'o'.repeat(drone.length));


  // with replaceAll, split, for of loop, join
  if (drone.length >= lamps.length) {
    return lamps.replaceAll('x', 'o')
  }
  const lampArr = lamps.split('');
  for (let i = 0; i < drone.length; i++) {
    lampArr[i] = 'o';
  }
  return lampArr.join('')
}