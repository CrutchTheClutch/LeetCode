/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let depth = 0;
  let res = [];

  S.split('').map(e => {
    if (e === ')') depth--;
    if (depth > 0) res.push(e);
    if (e === '(') depth++;
  });

  return res.join('');
};
