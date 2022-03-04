// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

var removeDuplicates = function (nums) {
    const n = nums.length;
    if (n === 0) {
        return 0;
    }
    let fast = 1, slow = 1;
    while (fast < n) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast];
            ++slow;
        }
        ++fast;
    }
    return slow;
};


// const unique = function (nums) {
//     if (nums.length === 0) {
//         return 0;
//     }
//     let fast = 1;
//     let slow = 1;
//     const n = nums.length;
//     while (fast < n) {
//         if (nums[fast] !== nums[fast - 1]) {
//             nums[slow] = nums[fast];
//             slow++;
//         }
//         fast++;
//     }
//     nums.length = slow;
//     for (let i = 0; i < nums.length; i++) {
//         console.log(nums[i]);
//     }
// }
// let n = [1, 3, 3, 4, 6, 6, 8, 9, 9, 10];
// unique(n);
