class ArrayList<T> {
  protected length: number;
  protected data: { [key: string]: T };

  constructor() {
    this.length = 0;
    this.data = {};
  }

  public get size(): number {
    return this.length;
  }

  public get(index: number): T {
    if (index >= this.length) throw new RangeError('Index out of bounds');
    return this.data[index];
  }

  public push(newItem: T): number {
    this.data[this.length] = newItem;
    this.length++;
    return this.length;
  }

  public pop(): T {
    if (this.length === 0) throw new RangeError('No elements left to pop');
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    return lastItem;
  }
}

export { ArrayList as default };
