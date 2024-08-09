import isBoolean from '../lib/isBoolean.js';
import { describe, it, expect } from 'vitest';

describe('isBoolean test', () => {
 
  it('should return true for boolean true', () => {
    expect(isBoolean(true)).toBe(true);
  });

  it('should return true for boolean false', () => {
    expect(isBoolean(false)).toBe(true);
  });

  it('should return true for Boolean objects', () => {
    const boolObjectTrue = new Boolean(true);
    const boolObjectFalse = new Boolean(false);

    expect(isBoolean(boolObjectTrue)).toBe(true);
    expect(isBoolean(boolObjectFalse)).toBe(true);
  });

  it('should return false for non-boolean objects', () => {
    const nonBoolObject = {};

    expect(isBoolean(nonBoolObject)).toBe(false);
  });

  it('should return false for primitive values other than boolean', () => {
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean('')).toBe(false);
    expect(isBoolean('true')).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(NaN)).toBe(false);
    expect(isBoolean(Infinity)).toBe(false);
    expect(isBoolean(/abc/)).toBe(false);
    expect(isBoolean(Symbol('sym'))).toBe(false);
  });
});