/**
 * 判断值是否为对象
 * @param {any} value  任意值
 * @returns {boolean} 返回是否是对象
 */
const isObject = (value) => value !== null && (typeof value === 'object' || typeof value === 'function')

export default isObject
