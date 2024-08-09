import getTag from "./internal/getTag.js"
import isObjectLike from "./isObjectLike.js"

/**
 * 判断值是否为数值
 * @param {any} value  任意值
 * @returns {boolean} 返回是否是数值
 */
const isNumber = (value) => {
  return  typeof value === 'number' || (isObjectLike(value) && getTag(value) === '[object Number]')
}

export default isNumber
