/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let temp;
  let j = 0;
  let k = nums.length - 1;
  for (let i = 0; i <= k; i++) {
    if (nums[i] === 0) {
      temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    } else if (nums[i] === 2) {
      temp = nums[i];
      nums[i] = nums[k];
      nums[k] = temp;
      i--;
      k--;
    }
  }
};
