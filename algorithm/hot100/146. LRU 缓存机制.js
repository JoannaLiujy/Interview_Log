/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  let value = this.map.get(key)
  if(value === undefined){
      return -1;
  }
  this.map.delete(key);
  this.map.set(key, value);
  return value;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if(this.map.has(key)){
      this.map.delete(key);
  }
  this.map.set(key,value);
  if(this.map.size > this.capacity){
      let keyIterator = this.map.keys();
      this.map.delete(keyIterator.next().value);
  }
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/

// 链接：https://leetcode-cn.com/problems/lru-cache/solution/js-mapjie-fa-by-cranky-roentgen-flal/