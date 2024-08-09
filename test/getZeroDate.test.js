import getZeroDate from '../lib/getZeroDate.js';
import { describe, it, expect } from 'vitest';

describe('getZeroDate function', () => {
  it('should return today\'s date with time set to 00:00:00 if toDay is 0', () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // 设置今天的时间为00:00:00
    const expectedDateString = `${today.getFullYear()}-${addZero(today.getMonth() + 1)}-${addZero(today.getDate())} 00:00:00`;
    const actualDateString = getZeroDate(0);
    expect(actualDateString).to.equal(expectedDateString);
  });

  it('should return the date one day after today with time set to 00:00:00 if toDay is 1', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0); // 设置明天的时间为00:00:00
    const expectedDateString = `${tomorrow.getFullYear()}-${addZero(tomorrow.getMonth() + 1)}-${addZero(tomorrow.getDate())} 00:00:00`;
    const actualDateString = getZeroDate(1);
    expect(actualDateString).to.equal(expectedDateString);
  });

  it('should return the date one day before today with time set to 00:00:00 if toDay is -1', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    yesterday.setHours(0, 0, 0, 0); // 设置昨天的时间为00:00:00
    const expectedDateString = `${yesterday.getFullYear()}-${addZero(yesterday.getMonth() + 1)}-${addZero(yesterday.getDate())} 00:00:00`;
    const actualDateString = getZeroDate(-1);
    expect(actualDateString).to.equal(expectedDateString);
  });

  it('should handle extreme values (large numbers)', function() {
    const result = getZeroDate(1000000);
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1000000);
    futureDate.setHours(0, 0, 0, 0);
    const expected = `${futureDate.getFullYear()}-${addZero(futureDate.getMonth() + 1)}-${addZero(futureDate.getDate())} 00:00:00`;
    expect(result).to.equal(expected);
  });

  it('should handle extreme values (large negative numbers)', function() {
    const result = getZeroDate(-1000000);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 1000000);
    pastDate.setHours(0, 0, 0, 0);
    const expected = `${pastDate.getFullYear()}-${addZero(pastDate.getMonth() + 1)}-${addZero(pastDate.getDate())} 00:00:00`;
    expect(result).to.equal(expected);
  });

  // 辅助函数，用于格式化月份和日期
  function addZero(num) {
    return num < 10 ? '0' + num : num;
  }
});