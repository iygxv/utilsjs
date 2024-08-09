import isObjectLike from '../lib/isObjectLike.js';
import { describe, it, expect } from 'vitest';

describe('isObjectLike', () => {
  it('should return true for plain objects', () => {
    expect(isObjectLike({})).toBe(true);
  });

  it('should return true for arrays, since arrays are objects in JavaScript', () => {
    expect(isObjectLike([])).toBe(true);
  });

  it('should return false for the Function constructor itself', () => {
    expect(isObjectLike(Function)).toBe(false); // Function 构造函数本身不是 'object' 类型（根据 typeof）
  });

  it('should return false for function instances', () => {
    expect(isObjectLike(function() {})).toBe(false); // 匿名函数实例
    expect(isObjectLike(() => {})).toBe(false);      // 箭头函数实例
    expect(isObjectLike(Math.sin)).toBe(false);      // 内置函数实例
  });
});
