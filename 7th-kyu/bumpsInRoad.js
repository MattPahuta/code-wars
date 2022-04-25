// *** Bumps in the Road - 7 kyu
/*
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

bump("__nn_nnnn__n_n___n____nn__nnn") => 'Woohoo!'
bump("_nnnnnnn_n__n______nn__nn_nnn") => 'Car Dead'
bump("______n___n_") => "Woohoo!"
*/
function bump(x) {

  // with split, filter and a ternary (submitted)
  return x.split('').filter(road => road === 'n').length <= 15 ? 'Woohoo!' : 'Car Dead';


  // with a for...of loop and ternary
  const roadArr = x.split('')
  let bumpCount = 0;
  for (let road of roadArr) {
    if (road === 'n') {
      bumpCount += 1
    }
  }

  return bumpCount <= 15 ? 'Woohoo!' : 'Car Dead';
}