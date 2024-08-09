import chunk from '../lib/chunk.js';
import { describe, test, expect } from 'vitest';

describe('chunk test', () => {
  
  test('should return an empty array if the input array is empty', () => {
    expect(chunk([])).toEqual([]);
  });

  test('should return an array of arrays when input array is not empty', () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [[1, 2], [3, 4], [5]];
    expect(chunk(input, 2)).toEqual(expected);
  });

  test('should return the original array if size is not a number', () => {
    const input = [1, 2, 3, 4, 5];
    expect(chunk(input, '2')).toEqual(input);
  });

  test('should handle size less than 1 by returning an empty array', () => {
    const input = [1, 2, 3, 4, 5];
    expect(chunk(input, 0)).toEqual([]);
  });

  test('should handle null or undefined input by returning an empty array', () => {
    expect(chunk(null, 2)).toEqual([]);
    expect(chunk(undefined, 2)).toEqual([]);
  });

  test('should truncate size to integer', () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [[1, 2], [3, 4], [5]];
    expect(chunk(input, 2.5)).toEqual(expected);
  });

  test('should handle negative size by returning an empty array', () => {
    const input = [1, 2, 3, 4, 5];
    expect(chunk(input, -1)).toEqual([]);
  });

  test('should handle very large arrays', () => {
    const input = Array.from({ length: 1000 }, (_, i) => i + 1);
    const expected = [];
    for (let i = 0; i < input.length; i += 100) {
      expected.push(input.slice(i, i + 100));
    }
    expect(chunk(input, 100)).toEqual(expected);
  });
});