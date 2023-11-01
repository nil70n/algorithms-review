import sum_array from "@code/SumArray";

test("Sum Array", function () {
  expect(sum_array([20, 44, 30, 12, 124, 155])).toBe(385);
  expect(sum_array([])).toBe(0);
});
