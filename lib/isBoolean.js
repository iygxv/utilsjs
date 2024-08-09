import getTag from "./internal/getTag.js"
import isObjectLike from "./isObjectLike.js"

/**
 * 判断值是否为布尔值
 * @param {any} value  任意值
 * @returns {boolean} 返回是否是布尔值
 */
const isBoolean = (value) =>{
  return (
      value === true ||
      value === false ||
      (isObjectLike(value) && getTag(value) === '[object Boolean]')
  );
}

export default isBoolean