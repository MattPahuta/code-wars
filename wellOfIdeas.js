// *** Well of Ideas - easy version - 8 kyu
/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/
function well(x) {
  let good = x.filter(idea => idea === 'good'); // first, use filter to get the 'good's 
  // use a ternary with a conditional chain to test the good array's length
  // return the appropriate message based on the length
  return good.length > 2 ? 'I smell a series!'
    : good.length >= 1 ? 'Publish!' 
    : 'Fail!';

  // Accomplish with a switch statement and filter:
  // **this might be slightly more readable
  // switch (x.filter(i => i === 'good').length) {
  //   case 0:
  //     return 'Fail!'
  //   case 1:
  //   case 2:
  //     return 'Publish!'
  //   default:
  //     return 'I smell a series!'
  // }
}
