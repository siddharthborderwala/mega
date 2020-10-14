import { ArrayList } from './ArrayList';

describe('ArrayList', (): void => {
  it('get, set and size work correctly', (): void => {
    const list = new ArrayList();
    list.push(2);
    list.push('as');
    // [ 2, 'as']
    expect(list.size).toBe(2);
    expect(list.get(1)).toBe('as');
    list.set(1, 4);
    // [ 2, 4 ]
    expect(list.get(1)).toBe(4);
  });
});
