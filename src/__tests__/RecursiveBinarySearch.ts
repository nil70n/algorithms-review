import recursive_binary_search from "@code/RecursiveBinarySearch";

test("Binary Search", function () {
  expect(
    recursive_binary_search ([1,3,5,8,10,11,15,22,38,40,44], 40))
    .toEqual(true);

  expect(
    recursive_binary_search ([1,3,5,8,10,11,15,22,38,40,44], 1))
    .toEqual(true);

  expect(
    recursive_binary_search ([1,3,5,8,10,11,15,22,38,40,44], 0))
    .toEqual(false);

  expect(
    recursive_binary_search ([1,3,5,8,10,11,15,22,38,40,44], 2))
    .toEqual(false);
});
