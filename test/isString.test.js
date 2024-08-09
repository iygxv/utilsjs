import isString from '../lib/isString.js';
import { describe, it, expect } from 'vitest';

describe('isString', () => {
  it('should return true for a string literal', () => {
    expect(isString('hello')).toBe(true);
  });

  it('should return true for an empty string', () => {
    expect(isString('')).toBe(true);
  });

  it('should return false for a number', () => {
    expect(isString(123)).toBe(false);
  });

  it('should return false for a boolean', () => {
    expect(isString(true)).toBe(false);
    expect(isString(false)).toBe(false);
  });

  it('should return false for null', () => {
    expect(isString(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isString(undefined)).toBe(false);
  });

  it('should return false for an object', () => {
    expect(isString({})).toBe(false);
  });

  it('should return false for an array', () => {
    expect(isString([])).toBe(false);
  });

  it('should return false for a function', () => {
    expect(isString(function() {})).toBe(false);
    expect(isString(() => {})).toBe(false);
  });

  it('should return false for a symbol', () => {
    expect(isString(Symbol())).toBe(false);
  });

  it('should return false for a string object', () => {
    // 注意：这里虽然是 String 对象，但 typeof 会返回 "object"
    expect(isString(new String('hello'))).toBe(false);
    // 如果你希望这个函数也能处理 String 对象，你需要修改函数实现
    // 例如：Object.prototype.toString.call(value) === '[object String]'
  });
});