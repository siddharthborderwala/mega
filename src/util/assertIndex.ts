export default function assertIndex(
  index: number,
  length: number,
  err?: string,
  predicate?: (index: number, length: number) => boolean
): never | void {
  if (!err) err = 'Index out of bounds';
  if (predicate && predicate(index, length)) throw new RangeError(err);
  if (index >= length) throw new RangeError(err);
}
