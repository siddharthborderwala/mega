export class HashTable {
  protected data: Array<Array<any>>;

  constructor(size: number) {
    this.data = new Array<Array<any>>(size);
  }

  private _hash = (key: string): number => {
    return key
      .split('')
      .reduce(
        (acc, val, index) =>
          (acc + val.charCodeAt(0) * index) % this.data.length,
        0
      );
  };

  get = (key: string): any => {
    const address = this._hash(key);
    const bucket = this.data[address];
    if (bucket)
      for (const element of bucket) {
        if (element[0] === key) return element[1];
      }
    return undefined;
  };

  set = (key: string, value: any): void => {
    const address = this._hash(key);
    if (!this.data[address]) this.data[address] = [];
    this.data[address].push([key, value]);
  };

  keys = (): Array<string> => {
    if (!this.data.length) return [];
    const keys = Array<string>();
    // use forEach as it skips the empty buckets
    this.data.forEach((bucket) => {
      keys.push(...bucket.map((elem) => elem[0]));
    });
    return keys;
  };
}
