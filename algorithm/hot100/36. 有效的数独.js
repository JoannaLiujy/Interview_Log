// 请你判断一个 9x9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。
// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
// 数独部分空格内已填入了数字，空白格用 '.' 表示。

/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
   let set = new Set()
   for (let i = 0; i < 9; i++) {
     for (let j = 0; j < 9; j++) {
       const number = board[i][j]
       if (number === '.') {
         continue
       }
       const colStr = `${number}c${i}`
       const rowStr= `${number}r${j}`
       const sectionStr = `${number}s(${Math.floor(i/3)},${Math.floor(j/3)})`
       if (set.has(colStr) || set.has(rowStr) || set.has(sectionStr)) {
         return false
       }
       set.add(colStr)
       set.add(rowStr)
       set.add(sectionStr)
     }
   }
   return true
};

// 解题思路
// 遍历整个数组。
// 因数独游戏特性可知，该数字需要满足：

// 在该行仅出现一次 --> colStr = ${number}c${i};
// 在该列仅出现一次 --> rowStr = ${number}r${j};
// 在该 3*3 区块仅出现一次 --> sectionStr = ${number}s(${Math.floor(i/3)},${Math.floor(j/3)});
// 创建 set 用于保存上述未出现的字符串，如果重复出现则为无效数独。

// 作者：riclee-2
// 链接：https://leetcode-cn.com/problems/valid-sudoku/solution/zi-fu-chuan-biao-zhi-xing-lie-qu-kuai-by-lbbp/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。