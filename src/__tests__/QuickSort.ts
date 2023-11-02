import quick_sort from "@code/QuickSort";

test("Quick sort", function () {
  expect(quick_sort([20, 88, 94, 12, 33, 45, 54])).toEqual([
    12, 20, 33, 45, 54, 88, 94,
  ]);

  expect(quick_sort([0])).toEqual([0]);

  expect(quick_sort([])).toEqual([]);
});
