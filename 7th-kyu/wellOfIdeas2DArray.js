// *** Well of Ideas - Harder Version - 7 kyu
/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

The sub arrays may not be the same length.

The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.

Examples: 
wellOfIdeas([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']]) => 'Fail!'
wellOfIdeas([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']]) => 'Publish!'
wellOfIdeas([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]) => 'I smell a series!'

*/

function wellOfIdeas(arr) {
  // accept an array of arrays containg words
  // convert all words to lowercase()
  // loop through and get count of 'good' ideas

  // *** with nested forEach 
  let count = 0;
  arr.forEach(arr => {
    arr.forEach(el => {
      if (el.toLowerCase() === 'good') {
        count += 1;
      }
    });
  });
  console.log('Count is: ', count)
  if (count === 0) return 'Fail!';

  return count > 2 ? 'I smell a series!' : 'Publish!';



}