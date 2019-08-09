/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
  let weights = {};
  for (let i = 0; i < S.length; i++) {
    weights[S[i]] = i;
  }
  T = T.split('').sort((a, b) => {
    return (weights[a] || -1) - (weights[b] || -1);
  });

  return T.join('');
};
