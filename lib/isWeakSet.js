import getTag from "./internal/getTag.js"
import isObjectLike from "./isObjectLike.js"

/**
 * 判断值是否为 WeakSet
 * @param {any} value  任意值
 * @returns {boolean} 返回是否是 WeakSet
 */
const isWeakSet = (value) => {
  return isObjectLike(value) && getTag(value) === '[object WeakSet]';
}

export default isWeakSet