import isArray from '../lib/isArray.js';
import { describe, it, expect } from 'vitest';

describe('isArray test', () => {
  it('should return true for arrays', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray(new Array())).toBe(true);
  });

  it('should return false for non-array values', () => {
    expect(isArray({})).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray(false)).toBe(false);
    expect(isArray(0)).toBe(false);
    expect(isArray(1)).toBe(false);
    expect(isArray('')).toBe(false);
    expect(isArray('array')).toBe(false);
    expect(isArray(/array/)).toBe(false);
    expect(isArray(Symbol('array'))).toBe(false);
    expect(isArray(function array() {})).toBe(false);
    expect(isArray(new Date())).toBe(false);
    expect(isArray(new Error())).toBe(false);
  });

  // 额外的测试用例，针对特殊情况（虽然这些可能不太常见）
  it('should return false for array-like objects', () => {
    // 类似数组的对象，但并不是真正的数组
    const arrayLike = {
      0: 'a',
      1: 'b',
      length: 2,
    };
    expect(isArray(arrayLike)).toBe(false);

    // HTMLCollection 和 NodeList 也不是真正的数组
    if (typeof document !== 'undefined') {
      expect(isArray(document.getElementsByTagName('div'))).toBe(false);
    }
  });
});
