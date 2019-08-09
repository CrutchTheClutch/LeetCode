/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  let squares = [];
  let i = 0;

  while (i < A.length) {
    squares.push(Math.pow(A[i], 2));
    i++;
  }

  return squares.sort((a, b) => a - b);
};
