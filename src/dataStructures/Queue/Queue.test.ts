import { Queue } from './Queue';

describe('Queue', () => {
  it('should create a queue', (): void => {
    const queue = new Queue<number>();
    expect(queue).toBeDefined();
  });

  it('should enqueue an element at the end', (): void => {
    const queue = new Queue<number>();
    queue.enqueue(2).enqueue(5);
    expect(queue.at(0)).toBe(2);
    expect(queue.at(1)).toBe(5);
  });

  it('should dequeue an element', (): void => {
    const queue = new Queue<number>();
    queue.enqueue(2).enqueue(5).enqueue(3);
    expect(queue.at(0)).toBe(2);
    expect(queue.at(2)).toBe(3);
    queue.dequeue();
    expect(queue.at(0)).toBe(5);
    queue.dequeue();
    expect(queue.at(0)).toBe(3);
  });

  it('should peek', (): void => {
    const queue = new Queue<number>();
    queue.enqueue(2).enqueue(5).enqueue(3);
    expect(queue.peek()).toBe(2);
  });

  it('should get element at index', (): void => {
    const queue = new Queue<number>();
    queue.enqueue(2).enqueue(5).enqueue(3);
    expect(queue.at(0)).toBe(2);
    expect(queue.at(1)).toBe(5);
    expect(queue.at(2)).toBe(3);
  });
});
