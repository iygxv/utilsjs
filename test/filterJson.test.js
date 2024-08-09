import filterJson from '../lib/filterJson.js';
import {
  describe,
  it,
  expect
} from 'vitest';


describe('filterJson test', () =>{
  it('filterJson should return an object containing only specified keys', () => {
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

  it('filterJson should handle empty keys array', () => {
    const json = {
      name: 'John',
      age: 30,
      city: 'New York'
    };
    const keys = [];
    const result = filterJson(json, keys);

    expect(result).toEqual({});
  });

  it('filterJson should handle non-existent keys', () => {
    const json = {
      name: 'John',
      age: 30,
      city: 'New York'
    };
    const keys = ['job', 'hobby'];
    const result = filterJson(json, keys);

    expect(result).toEqual({});
  });

  it('filterJson should handle null or undefined json', () => {
    const keys = ['name', 'age'];

    expect(() => filterJson(null, keys)).toThrow();
    expect(() => filterJson(undefined, keys)).toThrow();
  });

  it('filterJson should handle non-array keys', () => {
    const json = {
      name: 'John',
      age: 30,
      city: 'New York'
    };
    const keys = 'name';

    expect(() => filterJson(json, keys)).toThrow();
  });

  it('filterJson should handle nested objects correctly (it should not filter nested keys)', () => {
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