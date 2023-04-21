// *** Find the Difference in Age between Oldest and Youngest - 8 kyu
/*
At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

Example returns:
differenceInAges([82, 15, 6, 38, 35]) => [6, 82, 76]
differenceInAges([57, 99, 14, 32]) => [14, 99, 85]

*/
function differenceInAges(ages) {
  // get the oldest (highest) 
  const oldest = Math.max(...ages);
  // get the youngest (lowest)
  const youngest = Math.min(...ages);
  // calc difference 
  const diff = oldest - youngest;
  // return array
  return [youngest, oldest, diff];
}
