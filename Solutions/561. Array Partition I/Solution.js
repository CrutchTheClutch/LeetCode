/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  let sum = 0;
  const sorted = nums.sort((a, b) => a - b);

  sorted.forEach((num, i) => {
    if (i % 2 == 0) {
      sum += num;
    }
  });

  return sum;
};
