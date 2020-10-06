import assertIndex from '../util/assertIndex';

class ArrayList<T> {
  protected length: number;
  protected data: { [key: string]: T };

  constructor(...initialData: T[]) {
    this.length = 0;
    this.data = {};
    if (initialData && initialData.length !== 0)
      for (const elem of initialData) {
        this.push(elem);
      }
  }

  public get size(): number {
    return this.length;
  }

  public get(index: number): T {
    assertIndex(index, this.length);
    return this.data[index];
  }

  public set(index: number, newElement: T): void {
    assertIndex(index, this.length);
    this.shiftItemsToRight(index);
    this.data[index] = newElement;
  }

  public push(newItem: T): number {
    this.data[this.length] = newItem;
    this.length++;
    return this.length;
  }

  public pushFront(newItem: T): number {
    this.shiftItemsToRight(0);
    this.data[0] = newItem;
    this.length++;
    return this.length;
  }

  public pop(): T {
    assertIndex(
      0,
      this.length,
      'No elements left to pop',
      (index, length) => length !== 0
    );
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    return lastItem;
  }

  public popFront(): T {
    assertIndex(
      0,
      this.length,
      'No elements left to pop',
      (index, length) => length !== 0
    );
    const firstItem = this.data[0];
    this.shiftItemsToLeft(0);
    return firstItem;
  }

  public delete(index: number): T {
    assertIndex(index, this.length);

    const item = this.data[index];
    this.shiftItemsToLeft(index);
    this.length--;
    return item;
  }

  protected shiftItemsToLeft(index: number = 0): void {
    assertIndex(index, this.length);
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.pop();

    this.length--;
    return;
  }

  protected shiftItemsToRight(index: number = 0): void {
    assertIndex(index, this.length);
    if (index === 0) {
      this.data[1] = this.data[0];
    } else {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i + 1] = this.data[i];
      }
    }

    this.length++;
    return;
  }
}

export { ArrayList as default };
