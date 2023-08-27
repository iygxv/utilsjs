/**
 * 过滤json数据
 * @param {*} json 
 * @param {*} keys 
 * @returns 过滤后的json数据
 */
export const filterJson = (json, keys) => { 
  return Object.fromEntries(Object.entries(json).filter(row => keys.includes(row[0])))
}
