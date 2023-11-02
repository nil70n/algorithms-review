import { createHash } from "node:crypto";
import { serialize } from "v8";

export default class HashMap<T> {
  private _map: Map<string, T> = new Map<string, T>();

  get length(): number {
    return this._map.size;
  }

  removeAt(index: number): T | undefined {
    const item = this.getByIndex(index);

    if (item) {
      this._map.delete(item[0]);
    }

    return this.getItemValue(item);
  }

  remove(item: T): T | undefined {
    const key = this.getHashKey(item);
    let value: T | undefined = undefined;

    if (this._map.has(key)) {
      value = this._map.get(key);
      this._map.delete(key);
    }

    return value;
  }

  get(index: number): T | undefined {
    const item = this.getByIndex(index);
    return this.getItemValue(item);
  }

  prepend(item: T): void {
    this.insertAt(item, 0);
  }

  append(item: T): void {
    const key = this.getHashKey(item);

    this.deleteIfAny(key);
    this._map.set(key, item);
  }

  insertAt(item: T, idx: number): void {
    const key = this.getHashKey(item);

    this.deleteIfAny(key);
    this.insertAtIndex(idx, key, item);
  }

  private insertAtIndex(index: number, key: string, item: T): void {
    const arr = Array.from(this._map);

    arr.splice(index, 0, [key, item]);
    this._map = new Map(arr);
  }

  private deleteIfAny(key: string): void {
    if (this._map.has(key)) {
      this._map.delete(key);
    }
  }

  private getItemValue(item: [string, T] | undefined): T | undefined {
    return item ? item[1] : undefined;
  }

  private getHashKey(item: T): string {
    const hash = createHash("sha256");

    hash.update(serialize(item));
    return hash.digest("hex");
  }

  private getByIndex(index: number): [string, T] | undefined {
    if (index < 0 || index >= this._map.size) {
      return undefined;
    }

    return Array.from(this._map)[index];
  }
}
