import getTag from "./internal/getTag.js"
/**
 * 判断值是否为 Map 对象
 * @param {any} value  任意值
 * @returns {boolean} 返回是否是 Map 对象
 */
const isMap = (value) => getTag(value) === '[object Map]'

export default isMap
