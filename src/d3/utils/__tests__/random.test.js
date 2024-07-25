import { randomInt, randomIntArray } from "../random";

test("randomInt produces a number within given bounds", () => {
  var min = 1;
  var max = 10;
  var r = randomInt(min, max);
  expect(r >= min).toBe(true);
  expect(r <= max).toBe(true);
});

test("randomIntArray produces an array of numbers within given bounds", () => {
  var min = 1;
  var max = 10;
  var length = 20;
  var arr = randomIntArray(min, max, length);
  expect(arr.every((x) => x >= min)).toBe(true);
  expect(arr.every((x) => x <= max)).toBe(true);
});
