import isSet from '../lib/isSet.js';
import { describe, it, expect } from 'vitest';

describe('isSet', () => {
  it('should return true for Set objects', () => {
    expect(isSet(new Set())).toBe(true);
    expect(isSet(new Set([1, 2, 3]))).toBe(true);
  });

  it('should return false for non-Set objects', () => {
    expect(isSet({})).toBe(false);
    expect(isSet([])).toBe(false);
    expect(isSet(function() {})).toBe(false);
    expect(isSet(null)).toBe(false);
    expect(isSet(undefined)).toBe(false);
    expect(isSet('')).toBe(false);
    expect(isSet(0)).toBe(false);
    expect(isSet(true)).toBe(false);
    expect(isSet(Symbol())).toBe(false);
    expect(isSet(new Map())).toBe(false); // 另一个集合类型，但不是 Set
    expect(isSet(new WeakSet())).toBe(false); // 另一个集合类型，但不是 Set
  });

  // 如果 getTag 函数对于特殊对象（如字符串对象、数字对象等）有特定的行为，
  // 你也可以添加额外的测试用例来验证这些行为。
  // 但通常，这些对象不应该被识别为 Set 对象。
  it('should return false for special objects', () => {
    expect(isSet(new String('hello'))).toBe(false);
    expect(isSet(new Number(123))).toBe(false);
    expect(isSet(new Boolean(true))).toBe(false);
  });
});
