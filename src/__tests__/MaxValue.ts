import max_value from "@code/MaxValue";

test("Max Value", function () {
  expect(max_value([3, 5, 0, 9, 11, 8, 92, 88, 60], null)).toEqual(92);
  expect(max_value([], null)).toEqual(-1);
});
