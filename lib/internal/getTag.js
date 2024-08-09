const toString = Object.prototype.toString

/**
 * 获取值的类型
 * @param {any} value 任意值 
 * @returns {string} 返回值类型 =>  [object 类型]
 */
const getTag = (value) => {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}
export default getTag