const tolocalestring = (num) => {
  const size = 3
  let numStr = String(num)
  let index = numStr.length - 3
  let res = ''
  while(index + size > 0) {
    const curStr = numStr.substring(index, index + size)
    const pre = res === '' ?  res : (',' + res)
    res = curStr + pre
    index -= size
  }
  return res
}
const res = tolocalestring(123456789191)
console.log(res);

// 正则表达式
str.replace(/\B(?=(\d{3})+(?!\d))/g, ',')