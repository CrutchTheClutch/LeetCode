/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  let len1 = num1.length;
  let len2 = num2.length;
  let pos1 = 0;
  let pos2 = 0;
  let carry = 0;
  let sum = 0;
  let result = Array(len1 + len2).fill(0);

  if (num1[0] == 0 || num2[0] == 0) {
    return '0';
  }

  for (let i = len1 - 1; i >= 0; i--) {
    pos2 = 0;
    carry = 0;
    for (let j = len2 - 1; j >= 0; j--) {
      sum = num1[i] * num2[j] + carry + result[pos1 + pos2];
      carry = Math.floor(sum / 10);
      result[pos1 + pos2] = sum % 10;
      pos2++;
    }
    if (carry > 0) {
      result[pos1 + pos2] += carry;
    }
    pos1++;
  }

  return result
    .reverse()
    .join('')
    .replace(/^0+/, '');
};
