// *** Transportation on vacation - 8 kyu
/*
You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
*/
function rentalCarCost(d) {

  // concise with chained ternary
  return d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));

  const dailyCost = 40;
  let total = dailyCost * d;
  if (d >= 7) {
    total = total - 50;
    return total;
  } else if (d >= 3) {
    total = total - 20;
    return total;
  } else {
    return total;
  }

}