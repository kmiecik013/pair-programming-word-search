const wordSearch = (matrix, word) => { 
    
if (matrix.length === 0) return false;
const horizontal = matrix.map(ls => ls.join(''));
const vertical = [];
for (l of horizontal) {
    if (l.includes(word)) 
    return true;
}
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[0].length; j++) {
    if (!vertical[j]) vertical[j] = matrix[i][j];
    else vertical[j] = vertical[j] + matrix[i][j]
  }
}
//console.log(vertical)
for (let ele of vertical) {
  if (ele.includes(word)) 
return true;
}
return false;
}

wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'UOE')



module.exports = wordSearch


