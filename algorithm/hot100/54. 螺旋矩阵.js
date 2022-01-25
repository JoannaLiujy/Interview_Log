// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

var spiralOrder = function (matrix) {
  if (matrix.length === 0) return []
  const res = []
  let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1
  while (top < bottom && left < right) {
    for (let i = left; i < right; i++) res.push(matrix[top][i])   // 上层
    for (let i = top; i < bottom; i++) res.push(matrix[i][right]) // 右层
    for (let i = right; i > left; i--) res.push(matrix[bottom][i])// 下层
    for (let i = bottom; i > top; i--) res.push(matrix[i][left])  // 左层
    right--
    top++
    bottom--
    left++  // 四个边界同时收缩，进入内层
  }
  if (top === bottom) // 剩下一行，从左到右依次添加
    for (let i = left; i <= right; i++) res.push(matrix[top][i])
  else if (left === right) // 剩下一列，从上到下依次添加
    for (let i = top; i <= bottom; i++) res.push(matrix[i][left])
  return res
};

// 如果一条边从头遍历到底，则下一条边遍历的起点随之变化

// 选择不遍历到底，可以减小横向、竖向遍历之间的影响

// 一轮迭代结束时，4条边的两端同时收窄 1

// 一轮迭代所做的事情很清晰：遍历一个“圈”，遍历的范围收缩为内圈

// 一层层向里处理，按顺时针依次遍历：上、右、下、左。

// 不再形成“环”了，就会剩下一行或一列，然后单独判断

// 四个边界
// 上边界 top : 0
// 下边界 bottom : matrix.length - 1
// 左边界 left : 0
// 右边界 right : matrix[0].length - 1
// 矩阵不一定是方阵
// top < bottom && left < right 是循环的条件
// 无法构成“环”了，就退出循环，退出时可能是这 3 种情况之一：
// top == bottom && left < right —— 剩一行
// top < bottom && left == right —— 剩一列
// top == bottom && left == right —— 剩一项（也是一行/列）
// 处理剩下的单行或单列
// 因为是按顺时针推入结果数组的，所以
// 剩下的一行，从左至右 依次推入结果数组
// 剩下的一列，从上至下 依次推入结果数组

// 作者：xiao_ben_zhu
// 链接：https://leetcode-cn.com/problems/spiral-matrix/solution/shou-hui-tu-jie-liang-chong-bian-li-de-ce-lue-kan-/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。