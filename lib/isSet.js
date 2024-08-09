import getTag from "./internal/getTag.js"
/**
 * 判断值是否为 Set 对象
 * @param {any} value  任意值
 * @returns {boolean} 返回是否是 Set 对象
 */
const isSet = (value) => getTag(value) === '[object Set]'

export default isSet
