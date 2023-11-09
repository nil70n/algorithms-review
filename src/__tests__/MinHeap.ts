import MinHeap from "@code/MinHeap";

export function testMinHeap(heap: MinHeap<number>): void {
  expect(heap.length()).toEqual(0);
  expect(heap.peek()).toEqual(null);
  expect(heap.pop()).toEqual(null);
  
  heap.push(30);

  expect(heap.length()).toEqual(1);
  expect(heap.peek()).toEqual(30);

  heap.push(12);
  heap.push(12);
  heap.push(12);


  expect(heap.length()).toEqual(4);
  expect(heap.peek()).toEqual(12);
  expect(heap.pop()).toEqual(12);
  expect(heap.pop()).toEqual(12);
  expect(heap.pop()).toEqual(12);
  expect(heap.peek()).toEqual(30);
  expect(heap.pop()).toEqual(30);
  expect(heap.length()).toEqual(0);

  heap.push(1);
  heap.push(2);
  heap.push(3);
  heap.push(4);
  heap.push(5);

  expect(heap.pop()).toEqual(1);

  heap.push(0);

  expect(heap.peek()).toEqual(0);

  heap.push(-2);

  expect(heap.pop()).toEqual(-2);

  heap.push(1);

  expect(heap.peek()).toEqual(0);

  expect(heap.length()).toEqual(6);
}

test("Min Heap", function () {
  const heap = new MinHeap<number>();
  testMinHeap(heap);
});
