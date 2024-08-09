import isObject from '../lib/isObject.js';
import { describe, it, expect } from 'vitest';

describe('isObject', () => {
  it('should return true for plain objects', () => {
    expect(isObject({})).toBe(true);
  });

  it('should return true for arrays, since arrays are objects in JavaScript', () => {
    expect(isObject([])).toBe(true);
  });

  it('should return true for objects with custom properties', () => {
    const customObject = { key: 'value' };
    expect(isObject(customObject)).toBe(true);
  });

  it('should return true for functions, since functions are objects in JavaScript', () => {
    expect(isObject(function() {})).toBe(true);
    expect(isObject(() => {})).toBe(true);
  });

  it('should return true for instances of built-in object types', () => {
    expect(isObject(new Date())).toBe(true);
    expect(isObject(new RegExp('/pattern/'))).toBe(true); // 注意：正确的创建正则表达式的方式是 new RegExp('pattern')，但这里为了模拟可能的错误用法也包括了
    expect(isObject(new String('hello'))).toBe(true);
    expect(isObject(new Number(123))).toBe(true);
    expect(isObject(new Boolean(true))).toBe(true);
  });

  it('should return false for null', () => {
    expect(isObject(null)).toBe(false);
  });

  it('should return false for strings', () => {
    expect(isObject('')).toBe(false);
    expect(isObject('hello')).toBe(false);
  });

  it('should return false for numbers', () => {
    expect(isObject(0)).toBe(false);
    expect(isObject(123)).toBe(false);
    expect(isObject(-123)).toBe(false);
    expect(isObject(NaN)).toBe(false);
    expect(isObject(Infinity)).toBe(false);
  });

  it('should return false for booleans', () => {
    expect(isObject(true)).toBe(false);
    expect(isObject(false)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isObject(undefined)).toBe(false);
  });

  it('should return false for symbols', () => {
    expect(isObject(Symbol())).toBe(false);
  });
});