/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  if (!J || !S) {
    return 0;
  }

  var count = 0;

  for (var i = 0; i < S.length; i++) {
    if (J.includes(S[i])) {
      count++;
    }
  }

  return count;
};
