/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let res;
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    res = Math.floor((l + r) / 2);
    if (nums[res] === target) return res;
    else if (nums[res] < target) l = res + 1;
    else r = res - 1;
  }

  return l;
};
