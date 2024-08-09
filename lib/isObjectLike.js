
/**
 * 判断是否是类对象
 * @param {any} value 任意值
 * @returns {boolean} 返回是否是对象类
 */
const isObjectLike = (value) => {
  return typeof value === 'object' && value !== null;
}

export default isObjectLike