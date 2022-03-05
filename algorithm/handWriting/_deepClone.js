/** 简单版 */
function deepClone(obj) {
  let copy = Array.isArray(obj) ? [] : {}
  Object.keys(obj).forEach((key) => {
    copy[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
  })
  return copy
}
function deepClone(obj) {
  //过滤特殊情况
  if (obj === null) return null;
  if (typeof obj !== "Object") return obj;
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }
  let newObj = obj instanceof Array ? [] : {}
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      newObj[i] = deepClone(obj[i])
    }
  }
  return newObj;
}
let obj2 = deepClone(obj)


const deepClone = (target, hash = new weakMap) => {
  if (typeof target !== 'object' || target === null) return target;
  if (hash.has(target)) return hash.get(target);
  let cloneTarget = Array.isArray(target) ? [] : {};
  hash.set(target, cloneTarget);
  const symKeys = Object.getOwnPropertySymbols(target);
  if (symKeys.length) {
    symKeys.forEach((symkey) => {
      if (typeof target[symkey] === 'object' && target[symkey] !== null) {
        cloneTarget[symkey] = deepClone(target[symkey], hash);
      } else {
        cloneTarget[symkey] = target[symkey];
      }
    })
  }
  for (let i in target) {
    if (Object.hasOwnProperty.call(target, i)) {
      cloneTarget[i] = typeof target[i] === 'object' && target[i] !== null ? deepClone(target[i], hash) : target[i];
    }
  }
  return cloneTarget;
}