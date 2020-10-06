const mergeSortedArrays = (
  arrayOne: Array<number>,
  arrayTwo: Array<number>
): Array<number> => {
  return arrayOne.concat(arrayTwo).sort((a, b) => a - b);
};

for (let j = 0; j < 500; j++) {
  const a1 = [];
  const a2 = [];
  for (let index = 0; index < j; index++) {
    a1.push(2 * index + 1);
    a2.push(index * 2);
  }

  console.time(`j = ${j}`);
  mergeSortedArrays(a1, a2);
  console.timeEnd(`j = ${j}`);
}
