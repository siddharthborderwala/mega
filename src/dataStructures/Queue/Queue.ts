import assertIndex from '../../util/assertIndex';
import { LinkedList } from './../LinkedList';

/**
 * @class Queue
 * Queue implementation with Array working behind the curtains
 */
export class Queue<T> {
  private dataList: LinkedList<T>;

  /**
   * Instantiates a stack
   * @param items {T[] | Array<T>} Initial items for the stack
   */
  constructor() {
    this.dataList = new LinkedList<T>();
  }

  /**
   * @returns {number} the size of the stack
   */
  public get size(): number {
    return this.dataList.size;
  }

  /**
   * Insert a new node at the end of the queue
   * @param value {T}
   */
  public enqueue(value: T): Queue<T> {
    this.dataList.append(value);
    return this;
  }

  /**
   * Remove the element at the front of the queue
   * @param value {T}
   */
  public dequeue(): Queue<T> {
    if (this.dataList.size === 0) throw new Error('Queue is empty');
    this.dataList.pop(0);
    return this;
  }

  /**
   * Get the element at the beginning of the queue
   */
  public peek(): T {
    if (this.dataList.size === 0) throw new Error('Queue is empty');
    return this.dataList.at(0).value;
  }

  /**
   * Get the element at particular index
   * @param index {T}
   */
  public at(index: number): T {
    assertIndex(index, this.dataList.size);
    return this.dataList.at(index).value;
  }
}
