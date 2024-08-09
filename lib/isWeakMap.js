import getTag from "./internal/getTag.js"
import isObjectLike from "./isObjectLike.js"

/**
 * 判断值是否为 WeakMap
 * @param {any} value  任意值
 * @returns {boolean} 返回是否是 WeakMap
 */
const isWeakMap = (value) => {
  return isObjectLike(value) && getTag(value) === '[object WeakMap]';
}

export default isWeakMap