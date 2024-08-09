import isWeakMap from '../lib/isWeakMap.js';
import { describe, it, expect } from 'vitest';

describe('isWeakMap test', () => {
  it('should return true for WeakMap objects', () => {
    const weakSet = new WeakMap();
    expect(isWeakMap(weakSet)).toBe(true);
  });

  it('should return false for non-WeakMap objects', () => {
    expect(isWeakMap({})).toBe(false);
    expect(isWeakMap([])).toBe(false);
    expect(isWeakMap(function() {})).toBe(false);
    expect(isWeakMap(null)).toBe(false);
    expect(isWeakMap(undefined)).toBe(false);
    expect(isWeakMap('')).toBe(false);
    expect(isWeakMap(0)).toBe(false);
    expect(isWeakMap(true)).toBe(false);
    expect(isWeakMap(Symbol())).toBe(false);
    expect(isWeakMap(new Set())).toBe(false); // 另一个集合类型，但不是 WeakMap
    expect(isWeakMap(new Map())).toBe(false); // 另一个集合类型，也不是 WeakMap
    expect(isWeakMap(new WeakSet())).toBe(false); // WeakSet，但也不是 WeakMap
    expect(isWeakMap(new String('hello'))).toBe(false); // 特殊对象
    expect(isWeakMap(new Number(123))).toBe(false); // 特殊对象
    expect(isWeakMap(new Boolean(true))).toBe(false); // 特殊对象
  });
});