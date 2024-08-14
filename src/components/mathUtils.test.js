// src/utils/mathUtils.test.js
import { add } from './mathUtils';


test('adds two numbers correctly', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(-1, -1)).toBe(-2);
  expect(add(0, 0)).toBe(0);
});
