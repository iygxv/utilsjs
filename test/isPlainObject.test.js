import isPlainObject from '../lib/isPlainObject.js';
import { describe, it, expect } from 'vitest';

describe('isPlainObject test', () => {
  it('should return true for plain objects', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ key: 'value' })).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true); // 空原型对象，也是纯粹的对象
    expect(isPlainObject(new Object())).toBe(true);
  });

  it('should return false for non-plain objects', () => {
    expect(isPlainObject([])).toBe(false); // 数组不是纯粹的对象
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
    expect(isPlainObject('string')).toBe(false);
    expect(isPlainObject(123)).toBe(false);
    expect(isPlainObject(true)).toBe(false);
    expect(isPlainObject(Symbol())).toBe(false);
    expect(isPlainObject(function() {})).toBe(false);
    expect(isPlainObject(/regex/)).toBe(false);
    expect(isPlainObject(new Date())).toBe(false);
    expect(isPlainObject(new Error())).toBe(false);
    expect(isPlainObject(new Map())).toBe(false);
    expect(isPlainObject(new Set())).toBe(false);
    expect(isPlainObject(new WeakMap())).toBe(false);
    expect(isPlainObject(new WeakSet())).toBe(false);
  });
});