import isFunction from "./isFunction.js"
import isObject from "./isObject.js"
/**
 * 判断值是否为 Promise
 * @param {any} value  任意值
 * @returns {boolean} 返回是否是 Promise
 */
const isPromise = (value) => {
  return (
    (isObject(value) || isFunction(value)) &&
    isFunction((value).then) &&
    isFunction((value).catch)
  )
}

export default isPromise
