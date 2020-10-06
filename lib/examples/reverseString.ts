const reverseString = (originalString: string): string => {
  if (typeof originalString !== 'string') throw new Error('');
  if (originalString.length < 2) return originalString;
  return originalString.split('').reverse().join('');
};

console.log(reverseString('Hello there Mate!'));
