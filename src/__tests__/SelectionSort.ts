import selection_sort from "@code/SelectionSort";

test("Selection Sort", function () {
  expect(
    selection_sort ([20,18,50,11,125,4]))
    .toEqual([4,11,18,20,50,125]);
});
