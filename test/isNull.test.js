import isNull from '../lib/isNull.js';
import { describe, it, expect } from 'vitest';

describe('isNull', () => {
  it('should return true when value is null', () => {
    expect(isNull(null)).toBe(true);
  });

  it('should return false when value is undefined', () => {
    expect(isNull(undefined)).toBe(false);
  });

  it('should return false when value is a number', () => {
    expect(isNull(0)).toBe(false);
    expect(isNull(1)).toBe(false);
    expect(isNull(-1)).toBe(false);
    expect(isNull(NaN)).toBe(false);
    expect(isNull(Infinity)).toBe(false);
  });

  it('should return false when value is a string', () => {
    expect(isNull('')).toBe(false);
    expect(isNull('null')).toBe(false);
    expect(isNull('some string')).toBe(false);
  });

  it('should return false when value is a boolean', () => {
    expect(isNull(true)).toBe(false);
    expect(isNull(false)).toBe(false);
  });

  it('should return false when value is an object', () => {
    expect(isNull({})).toBe(false);
    expect(isNull([])).toBe(false);
    expect(isNull(new Object())).toBe(false);
    expect(isNull(new Date())).toBe(false);
    // ... 其他对象类型
  });

  it('should return false when value is a function', () => {
    expect(isNull(function() {})).toBe(false);
    expect(isNull(() => {})).toBe(false);
  });

  it('should return false when value is a symbol', () => {
    expect(isNull(Symbol())).toBe(false);
  });

  // 可以根据需要添加更多测试用例，但以上已经涵盖了大部分情况
});