import isPromise from '../lib/isPromise.js';
import { describe, it, expect } from 'vitest';

describe('isPromise test', () => {
  it('should return true for a valid Promise', () => {
    const promise = new Promise((resolve, reject) => {});
    expect(isPromise(promise)).toBe(true);
  });

  it('should return true for an object with then and catch', () => {
    const fakePromise = {
      then: function() {},
      catch: function() {}
    };
    expect(isPromise(fakePromise)).toBe(true);
  });

  it('should return false for an object with only then method', () => {
    const objWithOnlyThen = {
      then: function() {}
    };
    expect(isPromise(objWithOnlyThen)).toBe(false);
  });

  it('should return false for an object with only catch method', () => {
    const objWithOnlyCatch = {
      catch: function() {}
    };
    expect(isPromise(objWithOnlyCatch)).toBe(false);
  });

  it('should return false for a regular object', () => {
    const regularObject = {};
    expect(isPromise(regularObject)).toBe(false);
  });

  it('should return false for a regular function', () => {
    const regularFunction = function() {};
    expect(isPromise(regularFunction)).toBe(false);
  });

  it('should return false for null', () => {
    expect(isPromise(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isPromise(undefined)).toBe(false);
  });

  it('should return false for a string', () => {
    expect(isPromise('Hello World')).toBe(false);
  });

  it('should return false for a number', () => {
    expect(isPromise(123)).toBe(false);
  });

  it('should return false for a boolean', () => {
    expect(isPromise(true)).toBe(false);
  });
});