import filterJson from '../lib/filterJson.js';
import {
  describe,
  test,
  expect
} from 'vitest';


describe('filterJson test', () =>{
  test('filterJson should return an object containing only specified keys', () => {
    const json = {
      name: 'John',
      age: 30,
      city: 'New York'
    };
    const keys = ['name', 'city'];
    const result = filterJson(json, keys);

    expect(result).toEqual({
      name: 'John',
      city: 'New York'
    });
  });

  test('filterJson should handle empty keys array', () => {
    const json = {
      name: 'John',
      age: 30,
      city: 'New York'
    };
    const keys = [];
    const result = filterJson(json, keys);

    expect(result).toEqual({});
  });

  test('filterJson should handle non-existent keys', () => {
    const json = {
      name: 'John',
      age: 30,
      city: 'New York'
    };
    const keys = ['job', 'hobby'];
    const result = filterJson(json, keys);

    expect(result).toEqual({});
  });

  test('filterJson should handle null or undefined json', () => {
    const keys = ['name', 'age'];

    expect(() => filterJson(null, keys)).toThrow();
    expect(() => filterJson(undefined, keys)).toThrow();
  });

  test('filterJson should handle non-array keys', () => {
    const json = {
      name: 'John',
      age: 30,
      city: 'New York'
    };
    const keys = 'name';

    expect(() => filterJson(json, keys)).toThrow();
  });

  test('filterJson should handle nested objects correctly (it should not filter nested keys)', () => {
    const json = {
      name: 'John',
      age: 30,
      address: {
        city: 'New York',
        zip: '10001'
      }
    };
    const keys = ['name', 'city'];
    const result = filterJson(json, keys);

    expect(result).toEqual({
      name: 'John'
    });
    expect(result.address).toBeUndefined();
  });
})