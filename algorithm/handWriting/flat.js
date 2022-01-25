// flatten 递归
let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]
function flat(array) {
  return array.reduce((acc, cur) => {
    return Array.isArray(cur) ? [...acc, ...flat(cur)] : [...acc, cur]
  }, [])
}


// flatten 遍历
let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]
const flat = function (arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}

