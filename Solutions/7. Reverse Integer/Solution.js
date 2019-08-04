/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let negative = x < 0;
  let res = 0;
  x = Math.abs(x);
  while (x > 0) {
    res = res * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  if (res > 2147483647 || res < -2147483647) return 0;

  return negative ? -res : res;
};
