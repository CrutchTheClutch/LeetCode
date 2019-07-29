/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numNeeded;
    var numsMin = {};
    for (var i = 0; i < nums.length; i++) {
        numNeeded = target - nums[i];

        if (numsMin[numNeeded] >= 0) {
            return [numsMin[numNeeded], i];
        }

        numsMin[nums[i]] = i;
    }
};