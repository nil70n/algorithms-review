import quick_sort from "@code/QuickSort";

test("Quick sort", function() {
  expect(quick_sort([20, 88, 94, 12, 33, 45, 54])).toEqual([
    12, 20, 33, 45, 54, 88, 94,
  ]);

  expect(
    quick_sort([
      1, 3, 3, 4, 5, 6, 7, 7, 7, 8, 9, 10, 10, 10, 10, 11, 11, 12, 15, 19, 25,
      25, 98, 98, 99, 99, 99,
    ]),
  ).toEqual([
    1, 3, 3, 4, 5, 6, 7, 7, 7, 8, 9, 10, 10, 10, 10, 11, 11, 12, 15, 19, 25, 25,
    98, 98, 99, 99, 99,
  ]);

  expect(quick_sort([0])).toEqual([0]);

  expect(quick_sort([])).toEqual([]);
});
