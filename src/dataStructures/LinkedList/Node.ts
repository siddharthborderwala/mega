export class Node<T> {
  public value: T;
  public next: Node<T> | null;

  /**
   * Constructor for Node
   * @param value The value to be stored in the node
   * @param next Address/Reference to the next node
   */
  constructor(value: T, next: Node<T> | null = null) {
    this.value = value;
    this.next = next;
  }

  /**
   * @returns {string} string representation of Node
   */
  public toString(): string {
    return `Node {\n  value: ${this.value}\n  next: ${this.next?.value}\n}`;
  }

  public log(): void {
    console.log(this.toString());
  }
}
