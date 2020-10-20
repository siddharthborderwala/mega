import { LinkedList } from '../LinkedList';

/**
 * @class Stack
 * Stack implementation with Array working behind the curtains
 */
export class Stack<T> {
  private dataArray: Array<T>;

  /**
   * Instantiates a stack
   * @param items {T[] | Array<T>} Initial items for the stack
   */
  constructor(...items: T[] | Array<T>) {
    if (items.length !== 0) this.dataArray = new Array<T>(...items);
    else this.dataArray = new Array<T>();
  }

  /**
   * @returns {number} the size of the stack
   */
  public get size(): number {
    return this.dataArray.length;
  }

  /**
   * Pushes a new element into the stack
   * @param {T} newElement
   * @returns {Stack<T>}
   */
  public push = (newElement: T): Stack<T> => {
    this.dataArray.push(newElement);
    return this;
  };

  /**
   * Removes the top element o the stack
   * @returns {T} The removed element
   */
  public pop = (): T => {
    if (this.dataArray.length === 0)
      throw new Error('Cannot pop, no elements left');
    return this.dataArray.pop() as T;
  };

  /**
   * @returns {T} The value of the top element in the stack
   */
  public peek = (): T => {
    const len = this.dataArray.length;
    if (len === 0) throw new Error('Cannot pop, no elements left');
    return this.dataArray[len - 1] as T;
  };
}

/**
 * @class LStack
 * Stack implementation with LinkedList working behind the curtains
 */
export class LStack<T> {
  private list: LinkedList<T>;

  /**
   * Instantiates a stack
   * @param items {T[] | Array<T>} Initial items for the stack
   */
  constructor(...items: T[] | Array<T>) {
    if (items.length !== 0) {
      this.list = new LinkedList<T>();
      for (const elem of items) this.list.append(elem);
    } else {
      this.list = new LinkedList<T>();
    }
  }

  /**
   * @returns {number} the size of the stack
   */
  public get size(): number {
    return this.list.size;
  }

  /**
   * Pushes a new element into the stack
   * @param {T} newElement
   * @returns {Stack<T>}
   */
  public push(newElement: T): this {
    this.list.append(newElement);
    return this;
  }

  /**
   * Removes the top element o the stack
   * @returns {T} The removed element
   */
  public pop(): T {
    if (this.list.size === 0) throw new Error('Stack is empty');
    return this.list.pop();
  }

  /**
   * @returns {T} The value of the top element in the stack
   */
  public peek(): T {
    return this.list.at(this.list.size).value;
  }
}
