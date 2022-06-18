// Complementary DNA - 7 kyu
/*
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/
function DNAStrand(dna) {
  // with for...of loop, conditionals, and join
  // let compArr = [];
  // for (let char of dna) {
  //   if (char === 'A') {
  //     compArr.push('T')
  //   } else if (char === 'T') {
  //     compArr.push('A')
  //   } else if (char === 'C') {
  //     compArr.push('G')
  //   } else if (char== 'G') {
  //     compArr.push('C')
  //   } else {
  //     compArr.push(char)
  //   }
  // }
  // return compArr.join('')

  // using a pairs object, split, map, and join
  const pairs = {'A':'T','T':'A','C':'G','G':'C'};
  return dna.split('').map(char => pairs[char]).join('');

}