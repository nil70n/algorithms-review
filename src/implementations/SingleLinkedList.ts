export default class SingleLinkedList<T> {
  private _head: ListNode<T> | undefined;

  constructor() {}

  get length(): number {
    if (this._head === undefined) {
      return 0;
    }

    let curr: ListNode<T> = this._head;
    let count = 1;

    while (curr.next) {
      curr = curr.next;
      ++count;
    }

    return count;
  }

  removeAt(index: number): T | undefined {
    let curr: ListNode<T> | undefined = this._head;
    let prev: ListNode<T> | undefined = undefined;

    for (let i = 0; i <= index; ++i) {
      if (curr === undefined) {
        return undefined;
      }

      if (i === index) {
        return this.remove_node(prev, curr);
      }

      prev = curr;
      curr = curr.next;
    }

    return undefined;
  }

  remove(item: T): T | undefined {
    let curr: ListNode<T> | undefined = this._head;
    let prev: ListNode<T> | undefined = undefined;

    while (curr !== undefined && curr.value !== item) {
      prev = curr;
      curr = curr.next;
    }

    return this.remove_node(prev, curr);
  }

  get(index: number): T | undefined {
    let curr = this._head;

    for (let i = 0; i <= index; ++i) {
      if (!curr) {
        return undefined;
      }

      if (i === index) {
        return curr.value;
      }
      curr = curr.next;
    }

    return undefined;
  }

  prepend(item: T): void {
    const node = { value: item, next: this._head } as ListNode<T>;

    this._head = node;
  }

  append(item: T): void {
    const node = { value: item } as ListNode<T>;
    let curr = this._head;

    if (!curr) {
      this._head = node;
      return;
    }

    while (curr!.next) {
      curr = curr!.next;
    }

    curr!.next = node;
  }

  insertAt(item: T, idx: number): void {
    const node = { value: item } as ListNode<T>;
    let curr = this._head;

    if (!this._head) {
      this._head = node;
      return;
    }

    if (idx === 0) {
      node.next = curr;
      this._head = node;
      return;
    }

    let prev = this._head;
    curr = this._head.next;

    for (let i = 1; i <= idx; ++i) {
      if (!curr) {
        prev.next = node;
        return;
      }

      if (i === idx) {
        prev.next = node;
        node.next = curr;
        return;
      }

      prev = curr;
      curr = curr.next;
    }
  }

  private remove_node(
    prev: ListNode<T> | undefined,
    node: ListNode<T> | undefined,
  ): T | undefined {
    if (node !== undefined) {
      if (this._head === node) {
        this._head = this._head.next;

        return node.value;
      }

      if (prev !== undefined) {
        prev.next = node.next;
      }
    }

    return node?.value;
  }
}
