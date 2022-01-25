// 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
// 每行中的整数从左到右按升序排列。
// 每行的第一个整数大于前一行的最后一个整数。

// 两次二分查找
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
  const rowIndex = binarySearchFirstColumn(matrix, target)
  if (rowIndex < 0) {
      return false
  }
  return binarySearchRow(matrix[rowIndex], target)
};
const binarySearchFirstColumn = (matrix, target) => {
let low = 0
let high = matrix.length - 1
while(low <= high) {
    const mid = parseInt((low + high) / 2)
    const midLeft = matrix[mid][0]
    const midRight = matrix[mid][matrix[mid].length - 1]
    if (target >= midLeft && target <= midRight) {
      return mid
    } else if (target > midRight) {
      low = mid + 1
    } else {
      high = mid -1
    }
}
return -1
}
const binarySearchRow = (arr, target) => {
let low = 0
let high = arr.length - 1
while(low <= high) { // 要有等于
  const mid = parseInt((low + high) / 2)
  const num = arr[mid]
  if (num === target) {
    return true
  } else if (target > num) {
    low = mid + 1 // 注意
  } else {
    high = mid - 1 // 注意
  }
}
return false
}


// 一次二分查找

var searchMatrix = function(matrix, target) {
  const m = matrix.length, n = matrix[0].length;
  let low = 0, high = m * n - 1;
  while (low <= high) {
      const mid = Math.floor((high - low) / 2) + low;
      const x = matrix[Math.floor(mid / n)][mid % n];
      if (x < target) {
          low = mid + 1;
      } else if (x > target) {
          high = mid - 1;
      } else {
          return true;
      }
  }
  return false;
};

// 链接：https://leetcode-cn.com/problems/search-a-2d-matrix/solution/sou-suo-er-wei-ju-zhen-by-leetcode-solut-vxui/