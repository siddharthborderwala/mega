export default function efficientFib(n: number): number {
  let map = new Map<number, number>();

  function fib(n: number): number {
    if (n < 0) throw new Error();
    if (map.has(n)) return map.get(n) as number;
    const value = n <= 1 ? 1 : fib(n - 1) + fib(n - 2);
    map.set(n, value);
    return value;
  }

  return fib(n);
}

console.time('fib');
console.log(efficientFib(5));
console.timeEnd('fib');
