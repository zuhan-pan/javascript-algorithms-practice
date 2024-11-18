function radixSort(arr) {
  const largestDigits = mostDigits(arr);
  for (let i = 0; i < largestDigits; i++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let num of arr) {
      const digit = getDigit(num, i);
      buckets[digit].push(num);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

function getDigit(num, place) {
  let strNum = num.toString();
  if (place <= strNum.length && place > 0) return +strNum[place - 1];
  else return 0;
}

function mostDigits(arr) {
  return arr.reduce((acc, el) => Math.max(acc, el.toString().length), 0);
}

console.log(
  radixSort([
    534, 5345, 35, 6, 7, 32, 7, 234, 6, 23, 2, 7, 685, 658, 5, 45345, 534,
  ])
);
