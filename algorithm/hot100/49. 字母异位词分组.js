// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
// 示例:
// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
   const map = {}
   for (let str of strs) {
     const arr = Array.from(str)
     arr.sort()
     const key = arr.toString()
     if (!map[key]) {
       map[key] = [str]
     } else {
       map[key].push(str)
     }
   }
   return Array.from(Object.values(map))
};