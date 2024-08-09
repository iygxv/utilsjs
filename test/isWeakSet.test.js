import isWeakSet from '../lib/isWeakSet.js';
import { describe, it, expect } from 'vitest';

describe('isWeakSet test', () => {
  it('should return true for WeakSet objects', () => {
    const weakSet = new WeakSet();
    expect(isWeakSet(weakSet)).toBe(true);
  });

  it('should return false for non-WeakSet objects', () => {
    expect(isWeakSet({})).toBe(false);
    expect(isWeakSet([])).toBe(false);
    expect(isWeakSet(function() {})).toBe(false);
    expect(isWeakSet(null)).toBe(false);
    expect(isWeakSet(undefined)).toBe(false);
    expect(isWeakSet('')).toBe(false);
    expect(isWeakSet(0)).toBe(false);
    expect(isWeakSet(true)).toBe(false);
    expect(isWeakSet(Symbol())).toBe(false);
    expect(isWeakSet(new Set())).toBe(false); // 另一个集合类型，但不是 WeakSet
    expect(isWeakSet(new Map())).toBe(false); // 另一个集合类型，也不是 WeakSet
    expect(isWeakSet(new WeakMap())).toBe(false); // 类似 WeakSet，但也不是 WeakSet
    expect(isWeakSet(new String('hello'))).toBe(false); // 特殊对象
    expect(isWeakSet(new Number(123))).toBe(false); // 特殊对象
    expect(isWeakSet(new Boolean(true))).toBe(false); // 特殊对象
  });
});