import { HashTable } from './HashTable';

describe('HashTable', () => {
  it('should get and set successfully', (): void => {
    const table = new HashTable(2);
    let str = ['si', 'dd', 'ha', 'rt'];
    table.set('0', str[0]);
    table.set('1', str[1]);
    table.set('2', str[2]);
    table.set('3', str[3]);

    expect(table.get('0')).toBe(str[0]);
    expect(table.get('1')).toBe(str[1]);
    expect(table.get('2')).toBe(str[2]);
    expect(table.get('3')).toBe(str[3]);
  });

  it('should give keys', (): void => {
    const table = new HashTable(2);
    let str = ['si', 'dd', 'ha', 'rt'];
    table.set('0', str[0]);
    table.set('1', str[1]);
    table.set('2', str[2]);
    table.set('3', str[3]);

    expect(table.keys()).toStrictEqual(['0', '1', '2', '3']);
  });
});
