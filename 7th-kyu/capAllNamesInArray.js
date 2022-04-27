// *** Name Array Capping - 7 kyu
/*
Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

example

capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
*/
function capMe(names) {
  // with map and slice
  // return names.map(name => {
  //   return name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase()
  // })
  // with map, charAt, and substring
  return names.map(name => {
    return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
  })
}