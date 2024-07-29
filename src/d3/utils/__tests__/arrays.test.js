import { indexOfMax } from "../arrays";

test("indexOfMax returns the correct index in an array of ints", () => {
  var arr = [1, 2, 3, 2, 1];
  var i = indexOfMax(arr);
  expect(i === 2).toBe(true);
});

test("indexOfMax returns the first index of the max value", () => {
  var arr = [3, 2, 3, 2, 1];
  var i = indexOfMax(arr);
  expect(i === 0).toBe(true);
});
