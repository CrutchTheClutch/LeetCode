/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var twoSumLessThanK = function(A, K) {
  if (A.length < 2) return -1;

  A = A.filter(e => e < K).sort((a, b) => a - b);

  let i = 0;
  let j = A.length - 1;
  let res = -1;

  while (i < j) {
    if (A[i] + A[j] < K) {
      res = Math.max(res, A[i] + A[j]);
      i++;
    } else {
      j--;
    }
  }

  return res;
};
