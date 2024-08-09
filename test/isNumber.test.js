import isNumber from '../lib/isNumber.js';
import { describe, it, expect } from 'vitest';

// Jest 测试
describe('isNumber', () => {
  it('should return true for primitive numbers', () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber(123)).toBe(true);
    expect(isNumber(-123)).toBe(true);
    expect(isNumber(NaN)).toBe(true); // 注意：NaN 是 typeof 'number'
    expect(isNumber(Infinity)).toBe(true);
  });

  it('should return true for Number objects', () => {
    expect(isNumber(new Number(0))).toBe(true);
    expect(isNumber(new Number(123))).toBe(true);
    expect(isNumber(new Number(-123))).toBe(true);
    expect(isNumber(new Number(NaN))).toBe(true);
    expect(isNumber(new Number(Infinity))).toBe(true);
  });

  it('should return false for non-number primitives', () => {
    expect(isNumber('')).toBe(false);
    expect(isNumber('123')).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(false)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(Symbol())).toBe(false);
  });

  it('should return false for non-Number objects', () => {
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber(new Date())).toBe(false);
    expect(isNumber(/regex/)).toBe(false);
    expect(isNumber(function() {})).toBe(false);
  });
});