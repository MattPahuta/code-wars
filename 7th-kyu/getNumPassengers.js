// *** Number of People in the Bus - 7 kyu
/*
  Accept a two-dimensional array (busStops), i.e. [ [10, 0], [4, 2], [7, 5] ]
  first el of nested array = passengers getting on
  second el of nested array = people getting off bus (at bus stop)
  return number of people remaining on bus
*/
const numberOfPassenger = (busStops) => { 
  let totalPassengers = 0;
  for (let i = 0; i < busStops.length; i++) {
    totalPassengers += busStops[i][0];
    totalPassengers -= busStops[i][1];
  }
  return totalPassengers;

  // using reduce
  // return busStops.reduce((rem, [on, off]) => rem + on - off, 0);
}