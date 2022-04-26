// *** Switcheroo - 7 kyu
/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/
function switcheroo(str) {
  // accept string consisting of 'a', 'b', 'c'
  // switch positions of 'a' and 'b', leave instances of 'c' alone
  // ** using split, map, and join with a ternary (submitted)
  return str.split('').map(letter => {
    return letter === 'a' ? 'b' : letter === 'b' ? 'a' : 'c'
  }).join('')
}