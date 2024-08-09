import getTag from "./internal/getTag.js"
/**
 * 判断值是否为纯粹的对象
 * @param {any} value  任意值
 * @returns {boolean} 返回是否是纯粹的对象
 */
const isPlainObject = (value) => getTag(value) === '[object Object]'

export default isPlainObject
