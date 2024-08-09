import isNumber from "./isNumber.js"

/**
 *  根据 size 返回对应 size 的二维数组， 如果 array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块
 * @param {Array} array 数组
 * @param {number} [size=1] 区块大小
 * @returns {Array} 返回二维数组
 */
const chunk = (array, size = 1) => {
  if(!isNumber(size)) return array
  // 去除整数部分
  size = Math.trunc(size)
  const length = array == null ? 0 : array.length
  if (length === 0 || size < 1) return []
  let index = 0
  let resIndex = 0;
  // 向下取整
  const result = new Array(Math.ceil(length / size))
  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size))
  }
  return result;
}

export default chunk