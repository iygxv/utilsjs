import pLimit from '../lib/pLimit.js';
import { describe, it, expect } from 'vitest';

describe('pLimit test', () => {
  it('should run tasks in parallel up to the concurrency limit', async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const maxConcurrency = 2;
    const limit = pLimit(maxConcurrency);

    const startTimes = [];
    const results = await Promise.all([
      limit(async () => {
        startTimes.push(Date.now());
        await delay(100);
        return 'done1';
      }),
      limit(async () => {
        startTimes.push(Date.now());
        await delay(50);
        return 'done2';
      }),
      limit(async () => {
        startTimes.push(Date.now());
        await delay(20);
        return 'done3';
      }),
    ]);

    expect(results).toEqual(['done1', 'done2', 'done3']);
    // Ensure that the first two tasks started within a short interval, but the third waited
    expect(startTimes[1] - startTimes[0]).toBeLessThan(10);
    expect(startTimes[2] - startTimes[1]).toBeGreaterThan(40);
  });

  it('should handle tasks with exceptions gracefully', async () => {
    const limit = pLimit(1);

    try {
      await limit(async () => {
        throw new Error('failed');
      });
    } catch (e) {
      expect(e.message).toBe('failed');
    }

    // Ensure the next task can still run
    const result = await limit(async () => 'success');
    expect(result).toBe('success');
  });

  it('should queue tasks when concurrency limit is reached', async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const maxConcurrency = 1;
    const limit = pLimit(maxConcurrency);

    const promises = [];
    for (let i = 0; i < 3; i++) {
      promises.push(limit(async () => {
        await delay(100);
        return `done${i + 1}`;
      }));
    }

    const results = await Promise.all(promises);
    expect(results).toEqual(['done1', 'done2', 'done3']);
  });

  it('should handle empty queue', async () => {
    const limit = pLimit(1);
    const result = await limit(async () => 'done');
    expect(result).toBe('done');
  });
});