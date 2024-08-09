/**
 * 过滤指定 key 的 json 数据
 * @param {Record<string, unknown>} json 
 * @param {Array<string>} keys 
 * @returns 过滤后的 json 数据
 * 
 */
const filterJson = (json, keys) => {
  // 检查 json 是否为对象
  if (json === null || typeof json !== 'object' || Array.isArray(json)) {
    throw new TypeError('Expected json to be a non-null object');
  }
  
  // 检查 keys 是否为数组
  if (!Array.isArray(keys)) {
    throw new TypeError('Expected keys to be an array');
  }
  
  // 过滤出 json 中键在 keys 数组中的属性
  return Object.fromEntries(Object.entries(json).filter(([key]) => keys.includes(key)));
};

export default filterJson