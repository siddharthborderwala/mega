/**
 * O(n^2)
 */
function areMutuallyExclusive(
  arrayOne: Array<any>,
  arrayTwo: Array<any>
): boolean {
  for (const elementOne of arrayOne)
    for (const elementTwo of arrayTwo)
      if (elementOne === elementTwo) return false;

  return true;
}

/**
 * O(n)
 */
function areMutuallyExclusiveEfficient(
  arrayOne: Array<any>,
  arrayTwo: Array<any>
): boolean {
  const objFromArray: { [key: string]: boolean } = {};
  for (const element of arrayOne)
    if (objFromArray[element.toString()] === undefined)
      objFromArray[element.toString()] = true;

  for (const element of arrayTwo)
    if (objFromArray[element.toString()] !== true) return false;

  return true;
}

/**
 * O(n) - probably
 */
function areMutuallyExclusiveConcise(
  arrayOne: Array<any>,
  arrayTwo: Array<any>
): boolean {
  return arrayOne.some((item) => arrayTwo.includes(item));
}

console.time();
console.log(areMutuallyExclusive([1, 2, 3], [4, 5, 3]));
console.timeEnd();

console.time();
console.log(areMutuallyExclusiveEfficient([1, 2, 3], [4, 5, 3]));
console.timeEnd();

console.time();
console.log(areMutuallyExclusiveConcise([1, 2, 3], [4, 5, 3]));
console.timeEnd();
