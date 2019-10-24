/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
  let i = 1;
  let value;
  let goodCount = 0;
  const good = RegExp(/[2569]+/);
  const invalid = RegExp(/[347]+/);

  while (i <= N) {
    value = parseInt(i);
    if (good.test(value) && !invalid.test(value)) {
      goodCount++;
    }
    i++;
  }
  return goodCount;
};
