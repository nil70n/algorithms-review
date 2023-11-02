export default class DoubleLinkedList<T> {
  private _length: number = 0;
  private _head: ListNode<T> | undefined = undefined;
  private _tail: ListNode<T> | undefined = undefined;

  constructor() {}

  get length(): number {
    return this._length;
  }

  removeAt(index: number): T | undefined {
    const node = this.search(index);
    return this.remove_node(node);
  }

  remove(item: T): T | undefined {
    let curr: ListNode<T> | undefined = this._head;

    while (curr !== undefined && curr.value !== item) {
      curr = curr.next;
    }

    return this.remove_node(curr);
  }

  get(index: number): T | undefined {
    const node = this.search(index);

    return node?.value;
  }

  prepend(item: T): void {
    this.insertAt(item, 0);
  }

  append(item: T): void {
    this.insertAt(item, this._length);
  }

  insertAt(item: T, idx: number): void {
    const newNode = { value: item } as ListNode<T>;

    if (this._length === 0) {
      this._head = this._tail = newNode;
      ++this._length;
      return;
    }

    if (idx === this._length && this._tail) {
      this._tail.next = newNode;
      newNode.prev = this._tail;
      this._tail = newNode;
      ++this._length;
      return;
    }

    const node = this.search(idx);

    if (this._head === node) {
      this._head = newNode;
    }

    if (node?.prev) {
      node.prev.next = newNode;
      newNode.prev = node.prev;
    }

    if (node) {
      node.prev = newNode;
    }

    newNode.next = node;

    ++this._length;
  }

  private search(index: number): ListNode<T> | undefined {
    if (index < 0 || index >= this._length) {
      return undefined;
    }

    return index > this._length / 2
      ? this.reverse_search(index)
      : this.forward_search(index);
  }

  private forward_search(index: number): ListNode<T> | undefined {
    let curr = this._head;

    for (let i = 0; i <= index; ++i) {
      if (!curr || i === index) {
        return curr;
      }

      curr = curr.next;
    }
    return undefined;
  }

  private reverse_search(index: number): ListNode<T> | undefined {
    let curr = this._tail;
    for (let i = this._length - 1; i >= index; --i) {
      if (!curr || i === index) {
        return curr;
      }

      curr = curr.prev;
    }

    return undefined;
  }

  private remove_node(node: ListNode<T> | undefined): T | undefined {
    if (!node) {
      return undefined;
    }

    --this._length;

    if (this.length <= 0) {
      this._length = 0;
      this._head = this._tail = undefined;
    }

    if (this._head === node) {
      this._head = node.next;
    }

    if (this._tail === node) {
      this._tail = node.prev;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    if (node.prev) {
      node.prev.next = node.next;
    }

    return node?.value;
  }
}
