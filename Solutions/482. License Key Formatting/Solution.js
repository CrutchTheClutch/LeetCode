/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  let stack = [];
  let license = S.toUpperCase().replace(/-/g, '');
  let len = license.length;
  let count = 0;

  for (let i = len - 1; i >= 0; i--) {
    if (count == K) {
      stack.push('-');
      count = 0;
    }

    count++;
    stack.push(license[i]);
  }

  return stack.reverse().join('');
};
