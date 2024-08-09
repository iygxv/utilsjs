import isFunction from '../lib/isFunction.js';
import { describe, it, expect } from 'vitest';

describe('isFunction test', () => {
  it('should return true for functions', () => {
    // 匿名函数
    expect(isFunction(function() {})).toBe(true);

    // ES6 箭头函数
    expect(isFunction(() => {})).toBe(true);

    // 构造函数
    function Constructor() {}
    expect(isFunction(Constructor)).toBe(true);

    // 类的构造函数
    class MyClass {}
    expect(isFunction(MyClass)).toBe(true); // 注意：这里对类的构造函数进行测试
    // 如果你也想测试类的实例方法，可以这样做：
    expect(isFunction(MyClass.prototype.constructor)).toBe(true);
    // 但通常不会直接这样测试，因为这实际上是测试了构造函数的引用

    // 绑定后的函数
    const boundFunc = function() {}.bind(null);
    expect(isFunction(boundFunc)).toBe(true);
  });

  it('should return false for non-function values', () => {
    // 原始类型
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction(true)).toBe(false);
    expect(isFunction(false)).toBe(false);
    expect(isFunction(0)).toBe(false);
    expect(isFunction(1)).toBe(false);
    expect(isFunction('')).toBe(false);
    expect(isFunction('function')).toBe(false);

    // 对象
    expect(isFunction({})).toBe(false);

    // 数组
    expect(isFunction([])).toBe(false);

    // 特殊对象（如日期、正则表达式等）
    expect(isFunction(new Date())).toBe(false);
    expect(isFunction(/regex/)).toBe(false);

    // Symbol
    expect(isFunction(Symbol('sym'))).toBe(false);

    // 类（注意：这里测试的是类本身，不是它的构造函数或实例方法）
    class MyClass {}
    expect(isFunction(MyClass.prototype)).toBe(false); // 类的原型不是函数
    expect(isFunction(new MyClass())).toBe(false); // 类的实例也不是函数
  });
});