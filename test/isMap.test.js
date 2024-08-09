import isMap from '../lib/isMap.js';
import { describe, it, expect } from 'vitest';

describe('isMap test', () => {

  it('should return true for Map objects', () => {
    const map = new Map();
    expect(isMap(map)).toBe(true);
  });

  it('should return false for non-Map objects', () => {
    const nonMapObject = {};
    expect(isMap(nonMapObject)).toBe(false);

    // 也可以测试其他类型的值
    expect(isMap([])).toBe(false);
    expect(isMap('')).toBe(false);

    // 假设 getTag 对非对象值返回 undefined
    expect(isMap(null)).toBe(false);
    expect(isMap(undefined)).toBe(false);
    expect(isMap(true)).toBe(false);
    expect(isMap(false)).toBe(false);
    expect(isMap(0)).toBe(false);
    expect(isMap(1)).toBe(false);
  });

  // 可以添加更多边界情况的测试
  it('should return false for Map-like objects', () => {
    // 假设有一个类似 Map 的对象，但它不是真正的 Map
    const mapLike = {
      set: () => {},
      get: () => {},
      has: () => {},
      delete: () => {},
      clear: () => {},
      size: 0,
      [Symbol.iterator]: () => {},
      // 注意：这个对象没有 [[Class]] 属性为 '[object Map]'
    };

    // 由于我们无法直接模拟内部 [[Class]] 属性，
    // 这里我们假设 getTag 对非标准对象返回的是其他值

    expect(isMap(mapLike)).toBe(false);
  });
});
