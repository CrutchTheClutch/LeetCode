/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  let pairs = 0,
    i = 0;

  let map = new Map();

  while (i < dominoes.length) {
    [a, b] = dominoes[i];
    let key = a + ',' + b;

    if (a < b) {
      map.set(key, (map.get(key) || 0) + 1);
    } else {
      key = b + ',' + a;
      map.set(key, (map.get(key) || 0) + 1);
    }

    i++;
  }

  map.forEach((value, key, map) => {
    pairs += (value * (value + 1)) / 2 - value;
  });

  return pairs;
};
