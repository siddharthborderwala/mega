import assertIndex from '../../util/assertIndex';
import { Node } from './Node';

export class LinkedList<T> {
  protected head: Node<T> | null;
  protected tail: Node<T> | null;
  protected length: number;

  /**
   * Constructor for LinkedList
   * @param value Value stored in head node, if not provided head is null
   */
  constructor(value?: T) {
    this.head = !!value ? new Node(value) : null;
    this.tail = this.head;
    this.length = this.head ? 1 : 0;
  }

  public get size(): number {
    return this.length;
  }

  /**
   * Converts LinkedList<T> to Array<T>
   * @returns {Array<T>} array converted from LinkedList
   */
  public toArray(): Array<T> {
    const array = new Array<T>();
    let node = this.head;
    while (node !== null) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  }

  /**
   * Converts LinkedList<T> to its string representation
   * @returns {string} string representation of LinkedList
   */
  public toString(): string {
    return `${this.toArray()}`.replace(RegExp(',', 'g'), ' -> ');
  }

  /**
   * Logs the LinkedList to the console
   */
  public log(): void {
    console.log(this.toString());
  }

  /**
   * @param index The index whose node is required
   * @returns {Node<T>} the node at required index
   */
  public at(index: number): Node<T> | null {
    assertIndex(
      index,
      this.length,
      `Index should be from 0 to ${this.length - 1}, but received ${index}`,
      (index, length) => !(index >= 0 && length >= index)
    );
    let node = this.head as Node<T>;
    for (let i = 0; i < index; i++) {
      node = node.next as Node<T>;
    }
    return node;
  }

  /**
   * Find index of a node with the required value
   * @param {T} value the value to find for
   */
  public findIndex(value: T): number {
    let node = this.head;
    let counter = 0;
    if (!node) throw new Error('Linked List is empty');
    while (node && node.value !== value) {
      node = node.next;
      counter++;
    }
    return node === null ? -1 : counter;
  }

  /**
   * Add new node at the end of LinkedList
   * @param value value to be appended
   * @returns {Node<T>} newly created node
   */
  public append(value: T): LinkedList<T> {
    const newNode: Node<T> = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else if (this.tail) {
      const secLast = this.tail;
      this.tail = newNode;
      secLast.next = this.tail;
    }
    this.length++;
    return this;
  }

  /**
   * Add new node at the beginning of the LinkedList
   * @param value value to be prepended
   * @returns {Node<T>} newly created node
   */
  public prepend(value: T): LinkedList<T> {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++;
    return this;
  }

  /**
   * @param index position for insertion - starts from 1 to the end o the linked list
   * @param value value to be inserted
   */
  public insert(index: number, value: T): LinkedList<T> {
    const node = this.at(index - 1);
    if (!node) this.append(value);
    else node.next = new Node(value, node.next);
    this.length++;

    return this;
  }

  /**
   * Remove a node with specific value
   * @param value The value of node to be removed
   */
  public remove(value: T): LinkedList<T> {
    const node: any = this.at(this.findIndex(value) - 1);
    if (!node) throw new Error('Node not found');
    const nodeToDelete = node.next;
    node.next = nodeToDelete && nodeToDelete.next;
    this.length--;
    return this;
  }

  public pop(index?: number): T {
    const len = this.length;
    if (len === 0) throw new Error('List is empty');
    let node = this.head;
    if (typeof index === 'undefined')
      for (let i = 0; i < len - 1; i++) node = node && node.next;
    else if (typeof index === 'number')
      for (let i = 0; i < index - 1; i++) node = node && node.next;

    const temp = node.next.next;
    const val: T = node.next.value;

    delete node.next;
    node.next = temp;
    return val;
  }

  /**
   * Reverse the linked list
   */
  public reverse(): LinkedList<T> {
    if (this.length <= 1) return this;
    let first = this.head as Node<T> | null;
    this.tail = this.head;
    let second = first?.next as Node<T> | null;
    while (second !== null) {
      const temp = second.next as Node<T>;
      second.next = first;
      first = second;
      second = temp;
    }
    if (this.head?.next) this.head.next = null;
    return this;
  }
}
