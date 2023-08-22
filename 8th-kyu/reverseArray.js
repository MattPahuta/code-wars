// *** Codecademy Intermediate JS Exercise *** //
/*
Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

*** Cannot use JS built-in reverse method
*/
function reverseArray(array) {
  // *** Using a while loop
  const reversedArray = [];
  let lastElIndex = array.length - 1;
  while (lastElIndex >= 0) {
    reversedArray.push(array[lastElIndex])
    lastElIndex--;
  }

  return reversedArray;
}

// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];