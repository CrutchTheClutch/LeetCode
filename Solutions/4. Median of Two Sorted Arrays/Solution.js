/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let length = nums1.length + nums2.length;
  let allNums = new Array(length);

  let i = 0,
    j = 0,
    k = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      allNums[k++] = nums1[i++];
    } else {
      allNums[k++] = nums2[j++];
    }
  }

  while (i < nums1.length) {
    allNums[k++] = nums1[i++];
  }

  while (j < nums2.length) {
    allNums[k++] = nums2[j++];
  }

  if (length % 2 === 0) {
    return (allNums[length / 2] + allNums[length / 2 - 1]) / 2;
  } else {
    return allNums[Math.floor(length / 2)];
  }
};
