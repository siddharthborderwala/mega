const firstRecurringCharacter = (list: Array<number>): number | undefined => {
  const set = new Set();

  for (const num of list) {
    if (num in set) return num;
    set.add(num);
  }
  return undefined;
};
