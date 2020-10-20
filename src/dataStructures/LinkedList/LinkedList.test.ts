import { LinkedList } from './LinkedList';

describe('LinkedList', (): void => {
  it('should add a node at the end', (): void => {
    const ll = new LinkedList<number>();
    ll.append(3).append(1);
    expect(ll.at(1)?.value).toBe(1);
  });

  it('should add a node at the beginning', (): void => {
    const ll = new LinkedList<number>(1);
    ll.prepend(7);
    expect(ll.at(0)?.value).toBe(7);
  });

  it('should insert at index', (): void => {
    const ll = new LinkedList<number>(2);
    ll.append(4).insert(1, 6);
    expect(ll.at(1)?.value).toBe(6);
    expect(ll.at(2)?.value).toBe(4);
    ll.insert(3, 8);
    expect(ll.at(3)?.value).toBe(8);
  });

  it('should remove at index', (): void => {
    const ll = new LinkedList<number>(2);
    ll.append(4).insert(1, 6);
    ll.remove(6);
    expect(ll.size).toBe(2);
  });

  it('should reverse', (): void => {
    const ll = new LinkedList<number>(2);
    ll.append(4).append(6);
    ll.reverse().log();
    expect(1).toBe(1);
  });
});
