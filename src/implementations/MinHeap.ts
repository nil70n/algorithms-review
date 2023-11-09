export default class MinHeap<T> {
  private _heap: T[] = [];

  constructor() { }

  private parentIndex(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  private leftChildIndex(idx: number): number {
    return idx * 2 + 1;
  }

  private rightChildIndex(idx: number): number {
    return idx * 2 + 2;
  }

  private heapify(
    idx: number, 
    targetIdx: number,
    instance: MinHeap<T>,
    callback: (idx: number, instance: MinHeap<T>) => void): void {

    if (idx === targetIdx) {
      return;
    }

    const value = instance._heap[idx];
    const targetValue = instance._heap[targetIdx];
    const hDown = targetIdx > idx && value > targetValue;
    const hUp = idx > targetIdx && targetValue > value;

    if (hDown || hUp) {
      instance._heap[idx] = targetValue;
      instance._heap[targetIdx] = value;
      callback(targetIdx, instance);
    }
  }

  private heapifyDown(idx: number, instance: MinHeap<T>): void {
    const lIdx = instance.leftChildIndex(idx);
    const rIdx = instance.rightChildIndex(idx);

    if (idx >= instance._heap.length || lIdx >= instance._heap.length) {
      return;
    }

    if (rIdx >= instance._heap.length) {
      instance.heapify(
        idx, 
        lIdx,
        instance,
        instance.heapifyDown);
    }

    instance.heapify(
      idx, 
      instance._heap[rIdx] > instance._heap[lIdx] ? lIdx : rIdx,
      instance,
      instance.heapifyDown);
  }

  private heapifyUp(idx: number, instance: MinHeap<T>): void {
    if (idx === 0) {
      return;
    }

    instance.heapify(
      idx, 
      instance.parentIndex(idx),
      instance,
      instance.heapifyUp);
  }

  length(): number {
    return this._heap.length;
  }

  peek(): T | null {
    return this._heap.length ? this._heap[0] : null;
  }

  pop(): T | null {
    const value = this._heap.shift();
    const result = value === undefined ? null : value;

    if (!this._heap.length) {
      return result;
    }

    const lastValue = this._heap.pop()!;

    this._heap.unshift(lastValue);
    this.heapifyDown(0, this);
    return result; 
  }

  push(value: T): void {
    this._heap.push(value);
    this.heapifyUp(this._heap.length - 1, this);
  }
}
