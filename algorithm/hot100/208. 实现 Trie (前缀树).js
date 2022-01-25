/**
 * Initialize your data structure here.
 */
 var Trie = function() {
   this.children = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.children
  for (let ch of word) {
    if (!node[ch]) {
      node[ch] = {}
    }
    node = node[ch]
  }
  node.isEnd = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  const node = this.startsWith(word)
  return node !== undefined && node.isEnd === true
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.children
  for (const ch of prefix) {
    if (!node[ch]) {
      return false
    }
    node = node[ch]
  }
  return node
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */


//  {
//   'a': {
//       'p': {
//           'p': {
//               'l': {
//                   'e': {
//                       'isEnd': 1
//                     }
//                 }
//             }
//         }
//     }
// }

// 链接：https://leetcode-cn.com/problems/implement-trie-prefix-tree/solution/208-shi-xian-trie-qian-zhui-shu-by-xing-8ufh8/