/**
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
  if (numRows === 1) {
    return s
  }
  const res = []
  let curRow = 0
  let goingDown = false
  for (let i = 0; i < s.length; i++) {
    if (!res[curRow]) {
      res[curRow] = [s[i]]
    } else {
      res[curRow].push(s[i])
    }
    if (curRow === numRows - 1 || curRow === 0) {
      goingDown = !goingDown
    }
    curRow += goingDown ? 1 : -1
  }
  let str = ''
  res.forEach((item) => {
    str += item.join('')
  })
  return str
};