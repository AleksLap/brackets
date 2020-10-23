module.exports = function check(str, bracketsConfig) {
  let strElements = str.split('');
  let result = false;
  let oppositeBraket = '';
  let count = 0;

  if (Math.floor(str.length) % 2 !== 0) return false;

  function getOppositeBracket(bra) {
    for (let i = 0; i < bracketsConfig.length; i++) {
      if (bra === bracketsConfig[i][1] && bra !== bra) {
        return false;
      } 
      if (bra === bracketsConfig[i][0]) {
        oppositeBraket = bracketsConfig[i][1];
      };
    }
  }


  for (count; count <= Math.floor(strElements.length / 2);) {
    getOppositeBracket(strElements[count]);
    if (strElements[count + 1] === oppositeBraket) {
      strElements.splice(count, 2);
      count = 0;
    } else {
      count++;
    }
  }

  result = (strElements.length === 0) ? true : false;
  return result;
}
