/**
给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。
进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？
 */

var findMedianSortedArrays = function(nums1, nums2) {
  let i = 0, j = 0;
  let arr = [];
  while((i !== nums1.length) && (j !== nums2.length)) {
      if (nums1[i] <= nums2[j]) {
          arr.push(nums1[i]);
          i++;
      } else {
          arr.push(nums2[j]);
          j++;
      }
  }
  if (i === nums1.length) {
      arr.push(...nums2.slice(j));
  } else {
      arr.push(...nums1.slice(i));
  }
  if (arr.length % 2 === 0) {
      return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
  } else {
      return arr[Math.floor(arr.length / 2)];
  }
};
findMedianSortedArrays([1,3], [2])



var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0, j = 0;
    let arr = [];
    let left = [...nums1, Infinity]
    let right = [...nums2, Infinity]
    // 加入哨兵，简化边界条件的判断
    while(!(left[i] === Infinity && right[j] === Infinity)) {
        if (left[i] <= right[j]) {
            arr.push(left[i]);
            ++i;
        } else {
            arr.push(right[j]);
            ++j;
        }
    }
    if (i === nums1.length) {
        arr.push(...nums2.slice(j));
    } else {
        arr.push(...nums1.slice(i));
    }
    if (arr.length % 2 === 0) {
        return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
    } else {
        return arr[Math.floor(arr.length / 2)];
    }
  };
  findMedianSortedArrays([1,3], [2])